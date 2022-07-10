import { ethers } from "ethers";
import { contractAddress } from "../abi/address";
import { appLogger, errorToast } from "../utils/method";
import tokenABI from "../abi/contracts/Tokens/RGN.sol/RGN.json";
import masterchefABI from "../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";
import mainstakingABI from "../abi/contracts/MainProtocol/MainStaking.sol/MainStaking.json";

export const fetchMyReward = async () => {
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
      const myRewardYUSD = await masterchef.pendingTokens(
        contractAddress.fakeYusdAddress,
        String(accounts),
        contractAddress.yetiAddres
      );
      const myRewardRgnYeti = await masterchef.pendingTokens(
        contractAddress.rgnYetiAddress,
        String(accounts),
        contractAddress.yetiAddres
      );
      const myRewardLpCurve = await masterchef.pendingTokens(
        contractAddress.fakeLpCurveAddress,
        String(accounts),
        contractAddress.yetiAddres
      );
      const myRewardRGN = await masterchef.pendingTokens(
        contractAddress.rgnAddress,
        String(accounts),
        contractAddress.yetiAddres
      );
      console.log(myRewardRGN);
      const priceRGN = 0.3;

      /*        setReward({
          ...reward,
          rewardYusdRGN:
            (Number(myRewardYUSD.pendingRGN) * priceRGN) / 10 ** 18,
          rewardYusdYETI:
            (Number(myRewardYUSD.pendingBonusToken) * priceRgnYeti) / 10 ** 18,
          rewardYetiRGN:
            (Number(myRewardRgnYeti.pendingRGN) * priceRGN) / 10 ** 18,
          rewardYetiYETI:
            (Number(myRewardRgnYeti.pendingBonusToken) * priceRgnYeti) /
            10 ** 18,
          rewardRgnRGN: (Number(myRewardRGN.pendingRGN) * priceRGN) / 10 ** 18,
          rewardRgnYETI:
            (Number(myRewardRGN.pendingBonusToken) * priceRgnYeti) / 10 ** 18,
          rewardLpCurveRGN:
            (Number(myRewardLpCurve.pendingRGN) * priceRGN) / 10 ** 18,
          rewardLpCurveYETI:
            (Number(myRewardLpCurve.pendingBonusToken) * priceRGN) / 10 ** 18,
        }); */
    }
  } catch (err: any) {
    errorToast(err.code);
    appLogger("appTag", "- Error fetchMyDeposit-", err.message);
  }
};
