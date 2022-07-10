import { ethers } from "ethers";
import masterchefABI from "../../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";
import mainstakingABI from "../../../abi/contracts/MainProtocol/MainStaking.sol/MainStaking.json";
import rgnABI from "../../../abi/contracts/Tokens/RGN.sol/RGN.json";
import { contractAddress } from "../../../abi/address";
import { useEffect, useState } from "react";
import { appLogger, errorToast } from "../../../utils/method";
import FundsFirstTabs from "./FirstTab";
import FundSecondTabs from "./SecondTab";
import { useProvider } from "wagmi";
import { formatEther } from "ethers/lib/utils";

const appTag: string = "Funds";

const Funds = ({
  data,
  priceYusd,
  priceRgnYeti,
  shouldDisplaySecondTabPrice,
  shouldRefetchData,
}: {
  data: any;
  priceYusd: number;
  priceRgnYeti: number;
  shouldDisplaySecondTabPrice: boolean;
  shouldRefetchData: boolean;
}) => {
  const [deposit, setDeposit] = useState(0);
  const [reward, setReward] = useState(0);
  const [valuelocked, setTotalValueLocked] = useState(0);
  const [totalYeti, setTotalYeti] = useState(0);
  const [totalVeYeti, setTotalVeYeti] = useState(0);
  const [totalRGN, setTotalRGN] = useState(0);
  const [totalRGNLocked, setTotalRGNLocked] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const provider = useProvider();

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
          +formatEther(
            myDepositYUSD + myDepositLpCurve + myDepositRgnYeti + myDepositRGN
          )
        );
      }
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, " fetchMyDeposit masterChef", err.message);
      setIsLoading(false);
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
          +formatEther(myRewardYUSD.pendingBonusToken) * priceRgnYeti +
          +formatEther(myRewardYUSD.pendingRGN) * priceRGN +
          ((+formatEther(myRewardRgnYeti.pendingBonusToken) * priceRgnYeti) /
            +(+formatEther(myRewardRgnYeti.pendingRGN))) *
            priceRGN +
          +formatEther(myRewardLpCurve.pendingBonusToken) * priceRgnYeti +
          +formatEther(myRewardLpCurve.pendingRGN) * priceRGN +
          +formatEther(myRewardRGN.pendingBonusToken) * priceRgnYeti +
          +formatEther(myRewardRGN.pendingRGN) * priceRGN;
        setReward(myTotalReward);
      }
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, " fetchMyReward masterChef", err.message);
      setIsLoading(false);
    }
  };

  const getTVL = async () => {
    try {
      if (window.ethereum) {
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          provider
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
          +formatEther(TVLYUSD.sizeOfPool) * priceYusd +
            +formatEther(TVLRgnYeti.sizeOfPool) * priceRgnYeti +
            +formatEther(TVLLpCurve.sizeOfPool) * priceLpCurve +
            +formatEther(TVLRGN.sizeOfPool) * priceRGN
        );
      }
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, " GetTVL masterChef", err.message);
      setIsLoading(false);
    }
  };

  const getMainsStakingData = async () => {
    try {
      if (window.ethereum) {
        const mainstaking = new ethers.Contract(
          contractAddress.mainstakingAddress,
          mainstakingABI.abi,
          provider
        );
        const rgn = new ethers.Contract(
          contractAddress.rgnAddress,
          rgnABI.abi,
          provider
        );
        const getStackedYETI = await mainstaking.getStakedYeti();
        const getStackedVeYeti = await mainstaking.getVeYETI();
        const rgnSupply = await rgn.totalSupply();
        //const rgnLocked = await
        setTotalYeti(+formatEther(getStackedYETI));
        setTotalVeYeti(+formatEther(getStackedVeYeti));
        setTotalRGN(+formatEther(rgnSupply));
        //setTotalRGNLocked(+formatEther(rgnLocked))
      }
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, "- Error getMainsStakingData-", err.message);
      setIsLoading(false);
    }
  };

  const fetchMasterChefData = async () => {
    await getMasterChefDeposit();
    await getMasterChefReward();
  };

  const fetchAllData = async () => {
    if (data) {
      await fetchMasterChefData();
    }
    shouldDisplaySecondTabPrice && (await getMainsStakingData());
    await getTVL();
  };
  // set all State at 0
  const resetData = async () => {
    setDeposit(0);
    setReward(0);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchAllData().then(() => setIsLoading(false));
    if (!data) {
      setIsLoading(true);
      resetData();
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      fetchAllData().then(() => setTimeout(() => setIsLoading(false), 3000));
    }, 3000);
  }, [shouldRefetchData]);

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
