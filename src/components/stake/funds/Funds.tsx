import { ethers } from "ethers";
import masterchefABI from "../../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";
import mainstakingABI from "../../../abi/contracts/MainProtocol/MainStaking.sol/MainStaking.json";
import rgnABI from "../../../abi/contracts/Tokens/RGN.sol/RGN.json";
import { contractAddress } from "../../../abi/address";
import { useEffect, useState } from "react";
import { appLogger } from "../../../utils/method";
import FundsFirstTabs from "./FirstTab";
import FundSecondTabs from "./SecondTab";


const appTag: string = "Funds";

const Funds = ({
  data,
  priceYusd,
  priceRgnYeti,
  shouldDisplaySecondTabPrice,
}: {
  data: any;
  priceYusd: number;
  priceRgnYeti: number;
  shouldDisplaySecondTabPrice: boolean;
}) => {
  const [deposit, setDeposit] = useState(0);
  const [reward, setReward] = useState(0);
  const [valuelocked, setTotalValueLocked] = useState(0);
  const [totalYeti, setTotalYeti] = useState(0);
  const [totalVeYeti, setTotalVeYeti] = useState(0);
  const [totalRGN, setTotalRGN] = useState(0);
  const [totalRGNLocked, setTotalRGNLocked] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const getMasterChefDeposit = async () => {
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
        const priceLpCurve = 1;
        const priceRGN = 0.3;
        const myDepositYUSD =
          (await masterchef.depositInfo(
            contractAddress.fakeYusdAddress,
            String(accounts)
          )) * priceYusd;
        const myDepositRgnYeti =
          (await masterchef.depositInfo(
            contractAddress.rgnYetiAddress,
            String(accounts)
          )) * priceRgnYeti;
        const myDepositLpCurve =
          (await masterchef.depositInfo(
            contractAddress.fakeLpCurveAddress,
            String(accounts)
          )) * priceLpCurve;
        const myDepositRGN =
          (await masterchef.depositInfo(
            contractAddress.rgnAddress,
            String(accounts)
          )) * priceRGN;
        setDeposit(
          (myDepositYUSD + myDepositLpCurve + myDepositRgnYeti + myDepositRGN) /
            10 ** 18
        );
      }
    } catch (err: any) {
      appLogger(appTag, " fetchMyDeposit masterChef", err.message);
    }
  };

  const getMasterChefReward = async () => {
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
        const priceRGN = 0.3;
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
        const myTotalReward =
          (Number(myRewardYUSD.pendingBonusToken) * priceRgnYeti) / 10 ** 18 +
          (Number(myRewardYUSD.pendingRGN) * priceRGN) / 10 ** 18 +
          (Number(myRewardRgnYeti.pendingBonusToken) * priceRgnYeti) /
            10 ** 18 +
          (Number(myRewardRgnYeti.pendingRGN) * priceRGN) / 10 ** 18 +
          (Number(myRewardLpCurve.pendingBonusToken) * priceRgnYeti) /
            10 ** 18 +
          (Number(myRewardLpCurve.pendingRGN) * priceRGN) / 10 ** 18 +
          (Number(myRewardRGN.pendingBonusToken) * priceRgnYeti) / 10 ** 18 +
          (Number(myRewardRGN.pendingRGN) * priceRGN) / 10 ** 18;
        setReward(myTotalReward);
      }
    } catch (err: any) {
      appLogger(appTag, " fetchMyReward masterChef", err.message);
    }
  };

  const getTVL = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
        const priceLpCurve = 1;
        const priceRGN = 0.3;
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
        setTotalValueLocked(
          (Number(TVLYUSD.sizeOfPool) * priceYusd) / 10 ** 18 +
            (Number(TVLRgnYeti.sizeOfPool) * priceRgnYeti) / 10 ** 18 +
            (Number(TVLLpCurve.sizeOfPool) * priceLpCurve) / 10 ** 18 +
            (Number(TVLRGN.sizeOfPool) * priceRGN) / 10 ** 18
        );
      }
    } catch (err: any) {
      appLogger(appTag, " GetTVL masterChef", err.message);
    }
  };

  const getMainsStakingData = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const mainstaking = new ethers.Contract(
          contractAddress.mainstakingAddress,
          mainstakingABI.abi,
          signer
        );
        const rgn = new ethers.Contract(
          contractAddress.rgnAddress,
          rgnABI.abi,
          signer
        );
        const getStackedYETI = await mainstaking.getStakedYeti();
        const getStackedVeYeti = await mainstaking.getVeYETI();
        const rgnSupply = await rgn.totalSupply();
        //const rgnLocked = await
        setTotalYeti(Number(getStackedYETI) / 10 ** 18);
        setTotalVeYeti(Number(getStackedVeYeti) / 10 ** 18);
        setTotalRGN(Number(rgnSupply) / 10 ** 18);
        //setTotalRGNLocked(Number(rgnLocked) / 10**18)
      }
    } catch (err: any) {
      appLogger(appTag, "- Error getMainsStakingData-", err.message);
    }
  };

  const fetchMasterChefData = async () => {
    getMasterChefDeposit();
    getMasterChefReward();
    getTVL();
  };
  
  // set all State at 0
  const resetData = async () => {
    setDeposit(0);
    setReward(0);
    setTotalValueLocked(0);
    setTotalYeti(0);
    setTotalVeYeti(0);
    setTotalRGN(0);
    setTotalRGNLocked(0);
  }

  useEffect(() => {
    if(data){
      setIsLoading(true);
      fetchMasterChefData();
      shouldDisplaySecondTabPrice && getMainsStakingData();
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } else{
      setIsLoading(true);
      resetData();
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }

  }, [data]);

  return (
    <>
      <FundsFirstTabs
        deposit={deposit}
        reward={reward}
        valuelocked={valuelocked}
        isLoading={isLoading}
      />

      {shouldDisplaySecondTabPrice && (
        <FundSecondTabs
          totalYeti={totalYeti}
          totalVeYeti={totalVeYeti}
          totalRGN={totalRGN}
          totalRGNLocked={totalRGNLocked}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Funds;
