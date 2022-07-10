import { ethers } from "ethers";
import { contractAddress } from "../abi/address";
import { appLogger } from "../utils/method";
import masterchefABI from "../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";

export const claimAll = async (appTag: string) => {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const masterchef = new ethers.Contract(
        contractAddress.masterchefAddress,
        masterchefABI.abi,
        signer
      );
      const claimAll = await masterchef.multiclaim(
        [
          contractAddress.rgnAddress,
          contractAddress.rgnYetiAddress,
          contractAddress.fakeLpCurveAddress,
          contractAddress.fakeYusdAddress,
        ],
        String(accounts)
      );
      await claimAll.wait();
    }
  } catch (err: any) {
    appLogger(appTag, "- Error depositVeYeti-", err.message);
  }
};

export const claimRagnarPools = async () => {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const masterchef = new ethers.Contract(
        contractAddress.masterchefAddress,
        masterchefABI.abi,
        signer
      );

      const claimRagnarPools = await masterchef.multiclaim(
        [contractAddress.rgnAddress, contractAddress.rgnYetiAddress],
        String(accounts)
      );
      await claimRagnarPools.wait();
    }
  } catch (err: any) {
    appLogger("deposit", "- Error depositVeYeti-", err.message);
  }
};

export const claimYetiPools = async () => {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const masterchef = new ethers.Contract(
        contractAddress.masterchefAddress,
        masterchefABI.abi,
        signer
      );

      const claimYetiPools = await masterchef.multiclaim(
        [contractAddress.fakeLpCurveAddress, contractAddress.fakeYusdAddress],
        String(accounts)
      );
      await claimYetiPools.wait();
    }
  } catch (err: any) {
    appLogger("deposit", "- Error depositVeYeti-", err.message);
  }
};
