import { ethers } from "ethers";
import masterchefABI from "../../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";
import mainstakingABI from "../../../abi/contracts/MainProtocol/YetiBooster.sol/YetiBooster.json";
import NFTABI from "../../../abi/contracts/NFT/RGNLOCK.sol/RGNLOCK.json";
import rgnABI from "../../../abi/contracts/Tokens/RGN.sol/RGN.json";
import { contractAddress } from "../../../abi/address";
import { useEffect, useState } from "react";
import { appLogger, errorToast } from "../../../utils/method";
import FundsFirstTabs from "./FirstTab";
import FundSecondTabs from "./SecondTab";
import { useProvider } from "wagmi";
import { formatEther } from "ethers/lib/utils";
import { fetchAllTvl } from "../../../rpc/PoolFunc";
import { Buffer } from "buffer";

const appTag: string = "Funds";

const Funds = ({
  userAddress,
  shouldDisplaySecondTabPrice,
  shouldRefetchData,
  tokensPrices,
}: {
  userAddress: string | undefined;
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

  const [nftMetadata, setNftMetadata] = useState<any[]>([]);
  let [RGNlock, setRGNlock] = useState(0);
  let [NFTrewards, setNFTrewards] = useState(0);
  const [numberOfNFTOwned, setNumberOfNFTOwned] = useState(0);

  const getNFTByOwner = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const lock = new ethers.Contract(
          contractAddress.NFTAddress,
          NFTABI.abi,
          signer
        );
        let emptyNFt: any[] = [];
        const test = await lock.getNftsOfOwner(userAddress);
        setNumberOfNFTOwned(+test.length);
        const allNFTOwned = await Promise.all(
          test.map((e: any) => {
            return lock.tokenURI(e);
          })
        )
          .then((e) => {
            emptyNFt = e.map((e: any) => {
              return JSON.parse(
                Buffer.from(e.substring(29), "base64").toString()
              );
            });
          })
          .then(() => setNftMetadata(emptyNFt));
        for (let i = 0; i < emptyNFt.length; i++) {
          RGNlock += emptyNFt[i].attributes[0].value / 10 ** 18 / 2;
        }
        for (let i = 0; i < emptyNFt.length; i++) {
          NFTrewards += emptyNFt[i].attributes[2].value / 10 ** 18 / 2;
        }
      }
    } catch (error: any) {
      errorToast(error.code);
      appLogger(appTag, " getNFTByOwner", error.message);
      setIsLoading(false);
    }
  };

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

        setDeposit(
          +formatEther(myDepositYUSD) * tokensPrices.priceYusd +
            +formatEther(myDepositRgnYeti) * tokensPrices.priceRgnYeti +
            +formatEther(myDepositLpCurve) * tokensPrices.priceLpCurve +
            RGNlock * tokensPrices.priceRgn
        );
      }
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, " getMasterChefDeposit", err.message);
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
            NFTrewards * tokensPrices.priceRgn
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
    tvlLpCurve: number,
    tvlNFT: number
  ) => {
    setTotalValueLocked(
      tvlYusd * tokensPrices.priceYusd +
        tvlYeti * tokensPrices.priceYeti +
        tvlLpCurve * tokensPrices.priceLpCurve +
        tvlNFT * tokensPrices.priceRgn
    );
  };

  const fetchTVL = async () => {
    await fetchAllTvl(provider, appTag, handleChangeTVL);
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
        const NFT = new ethers.Contract(
          contractAddress.NFTAddress,
          NFTABI.abi,
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
        const TotalRGNLOCKED = await NFT.totalValueLocked();

        setTotalYeti(+formatEther(getStackedYETI));
        setTotalVeYeti(getStackedVeYeti / 10 ** 36);
        setTotalRGN(+formatEther(rgnSupply));
        setTotalRGNLocked(+formatEther(TotalRGNLOCKED));
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
    if (userAddress) {
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
    if (userAddress) {
      getNFTByOwner();
    }
  }, [userAddress]);

  useEffect(() => {
    fetchAllData().then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (userAddress) {
      setIsLoading(true);
      fetchAllData().then(() => setIsLoading(false));
    }

    if (!userAddress) {
      setIsLoading(true);
      resetData();
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [userAddress]);

  useEffect(() => {
    if (shouldRefetchData) {
      setIsLoading(true);
      fetchAllData().then(() => setTimeout(() => setIsLoading(false), 3000));
      getNFTByOwner();
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
          priceRGN={tokensPrices.priceRgn}
        />
      )}
    </>
  );
};

export default Funds;
