import { ethers } from "ethers";
import { contractAddress } from "../abi/address";
import { appLogger, errorToast } from "../utils/method";
import tokenABI from "../abi/contracts/Tokens/RGN.sol/RGN.json";
import masterchefABI from "../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";
import mainstakingABI from "../abi/contracts/MainProtocol/MainStaking.sol/MainStaking.json";

export const approve = async (
  qty: number,
  address: string,
  masterchefContract: boolean,
  appTag: string
): Promise<void> => {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const token = new ethers.Contract(address, tokenABI.abi, signer);
      const amount = ethers.utils.parseEther(qty.toString());

      if (masterchefContract) {
        const tokenApproveMasterchef = await token.approve(
          contractAddress.masterchefAddress,
          amount
        );
        tokenApproveMasterchef.wait();
      } else {
        const tokenApproveMainstaking = await token.approve(
          contractAddress.mainstakingAddress,
          amount
        );
        tokenApproveMainstaking.wait();
      }
    }
  } catch (err: any) {
    errorToast(err.code);
    appLogger(appTag, "- Error approve-", err.message);
  }
};

export const deposit = async (
  qty: number,
  address: string,
  masterchefContract: boolean,
  appTag: string
) => {
  try {
    if (window.ethereum) {
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const masterchef = new ethers.Contract(
        contractAddress.masterchefAddress,
        masterchefABI.abi,
        signer
      );
      const mainstaking = new ethers.Contract(
        contractAddress.mainstakingAddress,
        mainstakingABI.abi,
        signer
      );
      const amount = ethers.utils.parseEther(qty.toString());

      if (masterchefContract) {
        const depositTokenMasterchef = await masterchef.deposit(
          address,
          amount
        );
        await depositTokenMasterchef.wait();
      } else {
        const depositTokenMainstaking = await mainstaking.deposit(
          address,
          amount,
          String(accounts)
        );
        await depositTokenMainstaking.wait();
      }
    }
  } catch (err: any) {
    errorToast(err.code);
    appLogger(appTag, "- Error deposit-", err.message);
  }
};

export const withdraw = async (
  qty: number,
  address: string,
  masterchefContract: boolean,
  appTag: string
) => {
  try {
    if (window.ethereum) {
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const amount = ethers.utils.parseEther(qty.toString());
      if (masterchefContract) {
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
        const depositTokenMasterchef = await masterchef.withdraw(
          address,
          amount
        );
        await depositTokenMasterchef.wait();
      } else {
        const mainstaking = new ethers.Contract(
          contractAddress.mainstakingAddress,
          mainstakingABI.abi,
          signer
        );
        const depositTokenMainstaking = await mainstaking.withdraw(
          address,
          amount,
          String(accounts)
        );
        await depositTokenMainstaking.wait();
      }
    }
  } catch (err: any) {
    errorToast(err.code);
    appLogger(appTag, "- Error withdraw-", err.message);
  }
};
