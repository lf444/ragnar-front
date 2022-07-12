import { Grid, Button } from "@mui/material";
import { useState, useEffect } from "react";
import ClaimTable from "./ClaimTable";
import rgn from "../../assets/images/pools/rgn.png";
import yeti from "../../assets/images/pools/yeti.png";
import { ethers } from "ethers";
import { contractAddress } from "../../abi/address";
import { appLogger, errorToast } from "../../utils/method";
import masterchefABI from "../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";
import { useProvider } from "wagmi";
import LinearProgress from "@mui/material/LinearProgress";
import ClaimRewards from "./ClaimRewards";
import { formatEther } from "ethers/lib/utils";
import { fetchAllTvl, fetchAllApr, fetchDeposit } from "../../rpc/PoolFunc";
import {
  claimAll,
  claimRagnarPools,
  claimYetiPools,
} from "../../rpc/rewardInteraction";

const appTag: string = "ClaimRewardsScreen";

export default function ClaimRewardsScreen({
  data,
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
}) {
  const provider = useProvider();
  const [isLoading, setIsLoading] = useState(true);

  const [myStake, setMyStake] = useState({
    myYusd: 0,
    myYeti: 0,
    myRgn: 0,
    myLpCurve: 0,
  });
  const [TVL, setTVL] = useState({
    tvlYusd: 0,
    tvlYeti: 0,
    tvlRgn: 0,
    tvlLpCurve: 0,
  });
  const [aprRgn, setAprRgn] = useState({
    aprYusd: 0,
    aprYeti: 0,
    aprRgn: 0,
    aprLpCurve: 0,
  });
  const [reward, setReward] = useState({
    rewardYusdRGN: 0,
    rewardYusdYETI: 0,
    rewardYetiRGN: 0,
    rewardYetiYETI: 0,
    rewardRgnRGN: 0,
    rewardRgnYETI: 0,
    rewardLpCurveRGN: 0,
    rewardLpCurveYETI: 0,
  });

  const handleChangeStake = (
    myDepositYUSD: number,
    myDepositYeti: number,
    myDepositRgn: number,
    myDepositLpCurve: number
  ) => {
    setMyStake({
      myYusd: +formatEther(myDepositYUSD),
      myYeti: +formatEther(myDepositYeti),
      myRgn: +formatEther(myDepositRgn),
      myLpCurve: +formatEther(myDepositLpCurve),
    });
  };
  const fetchMyStake = async () => {
    fetchDeposit(handleChangeStake, appTag);
  };

  const handleChangeAPR = (
    Yusd: number,
    LpCurve: number,
    Rgn: number,
    Yeti: number
  ) => {
    setAprRgn({
      aprYusd: Yusd,
      aprLpCurve: LpCurve,
      aprRgn: Rgn,
      aprYeti: Yeti,
    });
  };
  const getApr = async () => {
    await fetchAllApr(provider, handleChangeAPR, appTag);
  };

  const handleChangeTVL = (
    tvlYusd: number,
    tvlYeti: number,
    tvlRgn: number,
    tvlLpCurve: number
  ) => {
    setTVL({
      tvlYusd: tvlYusd * tokensPrices.priceYusd,
      tvlYeti: tvlYeti * tokensPrices.priceYeti,
      tvlRgn: tvlRgn * tokensPrices.priceRgn,
      tvlLpCurve: tvlLpCurve * tokensPrices.priceLpCurve,
    });
  };

  const fetchTVL = async () => {
    await fetchAllTvl(provider, appTag, handleChangeTVL);
  };

  async function fetchMyReward() {
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

        setReward({
          ...reward,
          rewardYusdRGN:
            +formatEther(myRewardYUSD.pendingRGN) * tokensPrices.priceRgn,
          rewardYusdYETI:
            +formatEther(myRewardYUSD.pendingBonusToken) *
            tokensPrices.priceRgnYeti,
          rewardYetiRGN:
            +formatEther(myRewardRgnYeti.pendingRGN) * tokensPrices.priceRgn,
          rewardYetiYETI:
            +formatEther(myRewardRgnYeti.pendingBonusToken) *
            tokensPrices.priceRgnYeti,
          rewardRgnRGN:
            +formatEther(myRewardRGN.pendingRGN) * tokensPrices.priceRgn,
          rewardRgnYETI:
            +formatEther(myRewardRGN.pendingBonusToken) *
            tokensPrices.priceRgnYeti,
          rewardLpCurveRGN:
            +formatEther(myRewardLpCurve.pendingRGN) * tokensPrices.priceRgn,
          rewardLpCurveYETI:
            +formatEther(myRewardLpCurve.pendingBonusToken) *
            tokensPrices.priceRgn,
        });
      }
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, "- Error fetchMyDeposit-", err.message);
      setIsLoading(false);
    }
  }

  const InfoRgnYetiPools = `RGN: $${reward.rewardYetiRGN.toLocaleString(
    "en"
  )} , YETI: $${reward.rewardYetiYETI.toLocaleString("en")}`;
  const InfoRgnPools = `RGN: $${reward.rewardRgnRGN.toLocaleString(
    "en"
  )} , YETI: $${reward.rewardRgnYETI.toLocaleString("en")}`;
  const InfoYUSDPools = `RGN: $${reward.rewardYusdRGN.toLocaleString(
    "en"
  )} , YETI: $${reward.rewardYusdYETI.toLocaleString("en")}`;
  const InfoLpCurvePools = `RGN: $${reward.rewardLpCurveRGN.toLocaleString(
    "en"
  )} , YETI: $${reward.rewardLpCurveYETI.toLocaleString("en")}`;

  const resetData = async () => {
    setReward({
      ...reward,
      rewardYusdRGN: 0,
      rewardYusdYETI: 0,
      rewardYetiRGN: 0,
      rewardYetiYETI: 0,
      rewardRgnRGN: 0,
      rewardRgnYETI: 0,
      rewardLpCurveRGN: 0,
      rewardLpCurveYETI: 0,
    });
    setMyStake({
      ...myStake,
      myYusd: 0,
      myYeti: 0,
      myRgn: 0,
      myLpCurve: 0,
    });
  };

  const fetchAllData = async () => {
    await fetchTVL();
    await getApr();
    if (data) {
      await fetchMyReward();
      await fetchMyStake();
    }
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

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ height: "400px" }}
      >
        <Grid item xs={6} sx={{ height: "50%", pr: 2, marginBottom: "5rem" }}>
          <Grid
            container
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "60px",
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <Grid
              item
              xs={1.5}
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
                marginTop: "10px",
                marginLeft: "8px",
              }}
            >
              <img height="40px" src={rgn} alt="Ragnar Logo"></img>
            </Grid>
            <Grid
              item
              xs={6}
              lg={8}
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "12px", md: "16px" },
                textAlign: "left",
                marginTop: { xs: "20px", md: "18px" },
                color: (theme) => theme.palette.text.primary,
                marginLeft: { xs: "30px", md: "20px", lg: "10px" },
              }}
            >
              Ragnar Pools
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row"
            sx={{
              p: 1,
              borderRadius: "0px 0px 5px 5px",
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "100%",
            }}
          >
            <ClaimTable
              pool1="RGN"
              pool2="RGNYETI"
              apr1={Math.round(aprRgn.aprRgn)}
              apr2={Math.round(aprRgn.aprYeti)}
              deposit1={Math.round(myStake.myRgn)}
              deposit2={Math.round(myStake.myYeti)}
              tvl1={Math.round(TVL.tvlRgn)}
              tvl2={Math.round(TVL.tvlYeti)}
              isLoading={isLoading}
            />
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ height: "50%", pr: 2, marginBottom: "5rem" }}>
          <ClaimRewards
            claim={claimRagnarPools}
            title={InfoRgnYetiPools}
            title2={InfoRgnPools}
            text1={"RGNYETI Pools:"}
            text2={"RGN Pools:"}
            price1={reward.rewardYetiRGN + reward.rewardYetiYETI}
            price2={reward.rewardRgnRGN + reward.rewardRgnYETI}
            price3={
              reward.rewardYetiRGN +
              reward.rewardYetiYETI +
              reward.rewardRgnRGN +
              reward.rewardRgnYETI
            }
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={6} sx={{ height: "50%", pr: 2, marginBottom: "5rem" }}>
          <Grid
            container
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "60px",
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <Grid
              item
              xs={1.5}
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
                marginTop: "10px",
                marginLeft: "8px",
              }}
            >
              <img height="45px" src={yeti} alt="yeti logo"></img>
            </Grid>
            <Grid
              item
              xs={6}
              lg={8}
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "12px", md: "16px" },
                textAlign: "left",
                marginTop: { xs: "22px", md: "18px" },
                color: (theme) => theme.palette.text.primary,
                marginLeft: { xs: "30px", md: "20px", lg: "10px" },
              }}
            >
              Yeti Pools
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row"
            sx={{
              p: 1,
              borderRadius: "0px 0px 5px 5px",
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "100%",
            }}
          >
            <ClaimTable
              pool1="YUSD"
              pool2="LPCURVE"
              apr1={Math.round(aprRgn.aprYusd)}
              apr2={Math.round(aprRgn.aprLpCurve)}
              deposit1={Math.round(myStake.myYusd)}
              deposit2={Math.round(myStake.myLpCurve)}
              tvl1={Math.round(TVL.tvlYusd)}
              tvl2={Math.round(TVL.tvlLpCurve)}
              isLoading={isLoading}
            />
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ height: "50%", pr: 2, marginBottom: "5rem" }}>
          <ClaimRewards
            claim={claimYetiPools}
            title={InfoYUSDPools}
            title2={InfoLpCurvePools}
            text1={"YUSD Pools:"}
            text2={"LP CURVE Pools:"}
            price1={reward.rewardYusdRGN + reward.rewardYusdYETI}
            price2={reward.rewardLpCurveRGN + reward.rewardLpCurveYETI}
            price3={
              reward.rewardYusdRGN +
              reward.rewardYusdYETI +
              reward.rewardLpCurveRGN +
              reward.rewardLpCurveYETI
            }
            isLoading={isLoading}
          />
        </Grid>
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              onClick={() => claimAll(appTag)}
              sx={{
                width: { lg: "20%", xs: "40%" },
                backgroundColor: "#D0BA97",
                fontWeight: "bold",
                color: (theme) => theme.palette.secondary.main,
                fontSize: "15px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Claim all ($
              {!isLoading ? (
                (
                  reward.rewardYusdRGN +
                  reward.rewardYusdYETI +
                  reward.rewardLpCurveRGN +
                  reward.rewardLpCurveYETI +
                  reward.rewardYetiRGN +
                  reward.rewardYetiYETI +
                  reward.rewardRgnRGN +
                  reward.rewardRgnYETI
                ).toLocaleString("en")
              ) : (
                <LinearProgress
                  color="inherit"
                  sx={{
                    width: "1rem",
                  }}
                />
              )}
              )
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
