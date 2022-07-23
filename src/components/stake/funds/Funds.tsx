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
import { fetchAllTvl } from "../../../rpc/PoolFunc";

const appTag: string = "Funds";

const Funds = ({
  data,
  shouldDisplaySecondTabPrice,
  shouldRefetchData,
  tokensPrices,
}: {
  data: any;
  tokensPrices: {
    priceYeti: number;
    priceYusd: number;
    priceRgn: number;
    priceLpCurve: number;
    priceRgnYeti: number;
  };
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

  const [isLoading, setIsLoading] = useState(true);
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

        const myDepositYUSD = await masterchef.depositInfo(
          contractAddress.fakeYusdAddress,
          accounts[0]
        );
        const myDepositRgnYeti = await masterchef.depositInfo(
          contractAddress.rgnYetiAddress,
          accounts[0]
        );
        const myDepositLpCurve = await masterchef.depositInfo(
          contractAddress.fakeLpCurveAddress,
          accounts[0]
        );
        const myDepositRGN = await masterchef.depositInfo(
          contractAddress.rgnAddress,
          accounts[0]
        );
        setDeposit(
          +formatEther(myDepositYUSD) * tokensPrices.priceYusd +
            +formatEther(myDepositRgnYeti) * tokensPrices.priceRgnYeti +
            +formatEther(myDepositLpCurve) * tokensPrices.priceLpCurve +
            +formatEther(myDepositRGN) * tokensPrices.priceRgn
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
        const myRewardYUSD = await masterchef.pendingTokens(
          contractAddress.fakeYusdAddress,
          accounts[0],
          contractAddress.yetiAddres
        );
        const myRewardRgnYeti = await masterchef.pendingTokens(
          contractAddress.rgnYetiAddress,
          accounts[0],
          contractAddress.yetiAddres
        );
        const myRewardLpCurve = await masterchef.pendingTokens(
          contractAddress.fakeLpCurveAddress,
          accounts[0],
          contractAddress.yetiAddres
        );
        const myRewardRGN = await masterchef.pendingTokens(
          contractAddress.rgnAddress,
          accounts[0],
          contractAddress.yetiAddres
        );

        setReward(
          +formatEther(myRewardYUSD.pendingBonusToken) *
            tokensPrices.priceRgnYeti +
            +formatEther(myRewardYUSD.pendingRGN) * tokensPrices.priceRgn +
            +formatEther(myRewardRgnYeti.pendingBonusToken) *
              tokensPrices.priceRgnYeti +
            +formatEther(myRewardRgnYeti.pendingRGN) * tokensPrices.priceRgn +
            +formatEther(myRewardLpCurve.pendingBonusToken) *
              tokensPrices.priceRgnYeti +
            +formatEther(myRewardLpCurve.pendingRGN) * tokensPrices.priceRgn +
            +formatEther(myRewardRGN.pendingBonusToken) *
              tokensPrices.priceRgnYeti +
            +formatEther(myRewardRGN.pendingRGN) * tokensPrices.priceRgn
        );
      }
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, " fetchMyReward masterChef", err.message);
      setIsLoading(false);
    }
  };

  const handleChangeTVL = (
    tvlYusd: number,
    tvlYeti: number,
    tvlRgn: number,
    tvlLpCurve: number
  ) => {
    setTotalValueLocked(
      tvlYusd * tokensPrices.priceYusd +
        tvlYeti * tokensPrices.priceYeti +
        tvlRgn * tokensPrices.priceRgn +
        tvlLpCurve * tokensPrices.priceLpCurve
    );
  };

  const fetchTVL = async () => {
    await fetchAllTvl(provider, appTag, handleChangeTVL);
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
    await fetchTVL();
  };
  // set all State at 0
  const resetData = async () => {
    setDeposit(0);
    setReward(0);
  };

  useEffect(() => {
    fetchAllData().then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (data) {
      setIsLoading(true);
      fetchAllData().then(() => setIsLoading(false));
    }

    if (!data) {
      setIsLoading(true);
      resetData();
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [data]);

  useEffect(() => {
    if (shouldRefetchData) {
      setIsLoading(true);
      fetchAllData().then(() => setTimeout(() => setIsLoading(false), 3000));
    }
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
