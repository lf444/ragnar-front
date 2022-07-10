import { ethers } from "ethers";
import { contractAddress } from "../abi/address";
import { appLogger, errorToast } from "../utils/method";
import masterchefABI from "../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";
import { formatEther } from "ethers/lib/utils";

export const fetchAllTvl = async (
  provider: any,
  appTag: string,
  handleChangeTVL: (
    tvlYusd: number,
    tvlYeti: number,
    tvlRgn: number,
    tvlLpCurve: number
  ) => void
) => {
  try {
    if (window.ethereum) {
      const masterchef = new ethers.Contract(
        contractAddress.masterchefAddress,
        masterchefABI.abi,
        provider
      );
      const TVLYUSD = await masterchef.getPoolInfo(
        contractAddress.fakeYusdAddress
      );
      const TVLRgnYeti = await masterchef.getPoolInfo(
        contractAddress.rgnYetiAddress
      );
      const TVLLpCurve = await masterchef.getPoolInfo(
        contractAddress.fakeLpCurveAddress
      );
      const TVLRGN = await masterchef.getPoolInfo(contractAddress.rgnAddress);

      handleChangeTVL(
        +formatEther(TVLYUSD.sizeOfPool),
        +formatEther(TVLRgnYeti.sizeOfPool),
        +formatEther(TVLRGN.sizeOfPool),
        +formatEther(TVLLpCurve.sizeOfPool)
      );
    }
  } catch (err: any) {
    errorToast(err.code);
    appLogger(appTag, "- Error fetchTVL-", err.message);
  }
};
export const fetchAllApr = async (
  provider: any,
  handleChangeAPR: (
    Yusd: number,
    LpCurve: number,
    Rgn: number,
    Yeti: number
  ) => void,
  appTag: string
) => {
  try {
    if (window.ethereum) {
      const masterchef = new ethers.Contract(
        contractAddress.masterchefAddress,
        masterchefABI.abi,
        provider
      );

      const rgnPerBlock = await masterchef.rgnPerSec();
      const allocPointYusd = await masterchef.getPoolInfo(
        contractAddress.fakeYusdAddress
      );
      const allocPointYeti = await masterchef.getPoolInfo(
        contractAddress.rgnYetiAddress
      );
      const allocPointLpCurve = await masterchef.getPoolInfo(
        contractAddress.fakeLpCurveAddress
      );
      const allocPointRgn = await masterchef.getPoolInfo(
        contractAddress.rgnAddress
      );
      const allocPointTotal = await masterchef.totalAllocPoint();
      const rgnPerBlockYusd =
        (allocPointYusd.allocpoint * rgnPerBlock) / allocPointTotal;
      const rgnPerBlockYeti =
        (allocPointYeti.allocpoint * rgnPerBlock) / allocPointTotal;
      const rgnPerBlockLpCurve =
        (allocPointLpCurve.allocpoint * rgnPerBlock) / allocPointTotal;
      const rgnPerBlockRgn =
        (allocPointRgn.allocpoint * rgnPerBlock) / allocPointTotal;
      handleChangeAPR(
        ((rgnPerBlockYusd * 28800 * 365) / allocPointYusd.sizeOfPool) * 100,
        ((rgnPerBlockLpCurve * 28800 * 365) / allocPointLpCurve.sizeOfPool) *
          100,
        ((rgnPerBlockRgn * 28800 * 365) / allocPointRgn.sizeOfPool) * 100,
        ((rgnPerBlockYeti * 28800 * 365) / allocPointYeti.sizeOfPool) * 100
      );
    }
  } catch (err: any) {
    errorToast(err.code);
    appLogger(appTag, "- Error fetchAprRGN-", err.message);
  }
};
export const fetchDeposit = async (
  handleChangeStake: (
    myDepositYUSD: number,
    myDepositYeti: number,
    myDepositRgn: number,
    myDepositLpCurve: number
  ) => void,
  appTag: string
) => {
  try {
    if (window.ethereum) {
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const masterchefUser = new ethers.Contract(
        contractAddress.masterchefAddress,
        masterchefABI.abi,
        signer
      );
      const myDepositYUSD = await masterchefUser.depositInfo(
        contractAddress.fakeYusdAddress,
        String(accounts)
      );
      const myDepositYeti = await masterchefUser.depositInfo(
        contractAddress.rgnYetiAddress,
        String(accounts)
      );
      const myDepositRgn = await masterchefUser.depositInfo(
        contractAddress.rgnAddress,
        String(accounts)
      );
      const myDepositLpCurve = await masterchefUser.depositInfo(
        contractAddress.fakeLpCurveAddress,
        String(accounts)
      );

      handleChangeStake(
        +formatEther(myDepositYUSD),
        +formatEther(myDepositYeti),
        +formatEther(myDepositRgn),
        +formatEther(myDepositLpCurve)
      );
    }
  } catch (err: any) {
    errorToast(err.code);
    appLogger(appTag, "- Error fetchAprRGN-", err.message);
  }
};

export const fetchReward = async (
  tokensPrices: {
    priceYeti: number;
    priceYusd: number;
    priceRgn: number;
    priceLpCurve: number;
    priceRgnYeti: number;
  },
  handleChangeRewards: (
    rewardYusd: number,
    rewardYeti: number,
    rewardRgn: number,
    rewardLpCurve: number
  ) => void,
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

      handleChangeRewards(
        +formatEther(myRewardYUSD.pendingBonusToken) *
          tokensPrices.priceRgnYeti +
          +formatEther(myRewardYUSD.pendingRGN) * tokensPrices.priceRgn,

        +formatEther(myRewardRgnYeti.pendingBonusToken) *
          tokensPrices.priceRgnYeti +
          +formatEther(myRewardRgnYeti.pendingRGN) * tokensPrices.priceRgn,

        +formatEther(myRewardRGN.pendingBonusToken) *
          tokensPrices.priceRgnYeti +
          +formatEther(myRewardRGN.pendingRGN) * tokensPrices.priceRgn,

        +formatEther(myRewardLpCurve.pendingBonusToken) *
          tokensPrices.priceLpCurve +
          +formatEther(myRewardLpCurve.pendingRGN) * tokensPrices.priceRgn
      );
    }
  } catch (err: any) {
    errorToast(err.code);
    appLogger(appTag, "- Error fetchMyDeposit-", err.message);
  }
};
