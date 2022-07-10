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
            (+formatEther(myRewardYUSD.pendingRGN) * priceRGN) ,
          rewardYusdYETI:
            (+formatEther(myRewardYUSD.pendingBonusToken) * priceRgnYeti) ,
          rewardYetiRGN:
            (+formatEther(myRewardRgnYeti.pendingRGN) * priceRGN) ,
          rewardYetiYETI:
            (+formatEther(myRewardRgnYeti.pendingBonusToken) * priceRgnYeti) ,
          rewardRgnRGN: (+formatEther(myRewardRGN.pendingRGN) * priceRGN) ,
          rewardRgnYETI:
            (+formatEther(myRewardRGN.pendingBonusToken) * priceRgnYeti) ,
          rewardLpCurveRGN:
            (+formatEther(myRewardLpCurve.pendingRGN) * priceRGN) ,
          rewardLpCurveYETI:
            (+formatEther(myRewardLpCurve.pendingBonusToken) * priceRGN) ,
        }); */
    }
  } catch (err: any) {
    errorToast(err.code);
    appLogger("appTag", "- Error fetchMyDeposit-", err.message);
  }
};
