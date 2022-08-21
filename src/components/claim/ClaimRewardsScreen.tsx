import {
  Grid,
  Button,
  CardMedia,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { ClaimTable, ClaimTable2 } from "./ClaimTable";
import rgn from "../../assets/images/pools/rgn.png";
import yeti from "../../assets/images/pools/yeti.png";
import { ethers } from "ethers";
import { contractAddress } from "../../abi/address";
import { appLogger, errorToast } from "../../utils/method";
import masterchefABI from "../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";
import { useProvider } from "wagmi";
import LinearProgress from "@mui/material/LinearProgress";
import { ClaimRewards, ClaimRewards2 } from "./ClaimRewards";
import { formatEther } from "ethers/lib/utils";
import { fetchAllTvl, fetchAllApr, fetchDeposit } from "../../rpc/PoolFunc";
import {
  claimAll,
  claimRagnarPools,
  claimYetiPools,
} from "../../rpc/rewardInteraction";
import bigYeti from "../../assets/images/no_rewards.png";
import { useNavigate } from "react-router-dom";

const appTag: string = "ClaimRewardsScreen";

export default function ClaimRewardsScreen({
  userAddress,
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
}) {
  const provider = useProvider();
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [myStake, setMyStake] = useState({
    myYusd: 0,
    myYeti: 0,
    myLpCurve: 0,
  });
  const [TVL, setTVL] = useState({
    tvlYusd: 0,
    tvlYeti: 0,
    tvlLpCurve: 0,
  });
  const [aprRgn, setAprRgn] = useState({
    aprYusd: 0,
    aprYeti: 0,
    aprLpCurve: 0,
  });
  const [reward, setReward] = useState({
    rewardYusdRGN: 0,
    rewardYusdYETI: 0,
    rewardYetiRGN: 0,
    rewardYetiYETI: 0,
    rewardLpCurveRGN: 0,
    rewardLpCurveYETI: 0,
  });

  const handleChangeStake = (
    myDepositYUSD: number,
    myDepositYeti: number,
    myDepositLpCurve: number
  ) => {
    setMyStake({
      myYusd: +formatEther(myDepositYUSD),
      myYeti: +formatEther(myDepositYeti),
      myLpCurve: +formatEther(myDepositLpCurve),
    });
  };
  const fetchMyStake = async () => {
    fetchDeposit(handleChangeStake, appTag);
  };

  const handleChangeAPR = (Yusd: number, LpCurve: number, Yeti: number) => {
    setAprRgn({
      aprYusd: Yusd,
      aprLpCurve: LpCurve,
      aprYeti: Yeti,
    });
  };
  const getApr = async () => {
    await fetchAllApr(provider, handleChangeAPR, appTag);
  };

  const handleChangeTVL = (
    tvlYusd: number,
    tvlYeti: number,
    tvlLpCurve: number
  ) => {
    setTVL({
      tvlYusd: tvlYusd * tokensPrices.priceYusd,
      tvlYeti: tvlYeti * tokensPrices.priceYeti,
      tvlLpCurve: tvlLpCurve * tokensPrices.priceLpCurve,
    });
  };

  const fetchTVL = async () => {
    await fetchAllTvl(provider, appTag, handleChangeTVL);
  };

  async function fetchMyReward() {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );

        const myRewardYUSD = await masterchef.pendingTokens(
          contractAddress.fakeYusdAddress,
          userAddress,
          contractAddress.yetiAddres
        );
        const myRewardRgnYeti = await masterchef.pendingTokens(
          contractAddress.rgnYetiAddress,
          userAddress,
          contractAddress.yetiAddres
        );
        const myRewardLpCurve = await masterchef.pendingTokens(
          contractAddress.fakeLpCurveAddress,
          userAddress,
          contractAddress.yetiAddres
        );

        setReward({
          ...reward,
          rewardYusdRGN:
            +formatEther(myRewardYUSD.pendingRGN) * tokensPrices.priceRgn,
          rewardYusdYETI:
            +formatEther(myRewardYUSD.pendingBonusToken) *
            tokensPrices.priceYeti,
          rewardYetiRGN:
            +formatEther(myRewardRgnYeti.pendingRGN) * tokensPrices.priceRgn,
          rewardYetiYETI:
            +formatEther(myRewardRgnYeti.pendingBonusToken) *
            tokensPrices.priceYeti,
          rewardLpCurveRGN:
            +formatEther(myRewardLpCurve.pendingRGN) * tokensPrices.priceRgn,
          rewardLpCurveYETI:
            +formatEther(myRewardLpCurve.pendingBonusToken) *
            tokensPrices.priceYeti,
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
      rewardLpCurveRGN: 0,
      rewardLpCurveYETI: 0,
    });
    setMyStake({
      ...myStake,
      myYusd: 0,
      myYeti: 0,
      myLpCurve: 0,
    });
  };

  const fetchAllData = async () => {
    await fetchTVL();
    await getApr();
    if (userAddress) {
      await fetchMyReward();
      await fetchMyStake();
    }
  };

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

  return isLoading ? (
    <>
      {" "}
      <CircularProgress
        size="6rem"
        sx={{
          marginLeft: "40%",
          marginRight: "auto",
          position: "relative",
          marginBottom: "12rem",
          marginTop: "10rem",
        }}
      />
    </>
  ) : (
    <>
      {userAddress &&
      myStake.myLpCurve + myStake.myYeti + myStake.myYusd > 0 ? (
        <Grid container direction="row">
          <Grid
            item
            container
            direction="row"
            xs={12}
            sx={{ marginBottom: "5rem" }}
          >
            <Grid item xs={6} sx={{ pr: 2 }}>
              <Grid
                container
                sx={{
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  height: "40px",
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
                <ClaimTable2
                  pool1="rgnYETI"
                  apr1={Math.round(aprRgn.aprYeti)}
                  deposit1={Math.round(myStake.myYeti)}
                  tvl1={Math.round(TVL.tvlYeti)}
                  isLoading={isLoading}
                />
              </Grid>
            </Grid>
            <Grid item xs={6} sx={{ pr: 2, pb: "1.3rem" }}>
              <ClaimRewards2
                claim={claimRagnarPools}
                title={InfoRgnYetiPools}
                text1={"rgnYETI Pools:"}
                price1={reward.rewardYetiRGN + reward.rewardYetiYETI}
                price2={reward.rewardYetiRGN + reward.rewardYetiYETI}
                isLoading={isLoading}
              />
            </Grid>
          </Grid>
          <Grid item container direction="row" xs={12}>
            <Grid item xs={6} sx={{ pr: 2, marginBottom: "5rem" }}>
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
                  pool2="CURVE LP"
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
            <Grid
              item
              xs={6}
              sx={{
                pr: 2,
                marginBottom: "5rem",
              }}
            >
              <ClaimRewards
                claim={claimYetiPools}
                title={InfoYUSDPools}
                title2={InfoLpCurvePools}
                text1={"YUSD Pools:"}
                text2={"CURVE LP Pools:"}
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
                    reward.rewardYetiYETI
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
      ) : (
        <Grid
          container
          item
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: "1rem", position: "relative", bottom: "0" }}
        >
          <Grid item xs={6}>
            <CardMedia
              component="img"
              sx={{
                maxHeight: { xs: 233, md: 450 },
                maxWidth: { xs: 350, md: 450 },
                pr: "1em",
              }}
              src={bigYeti}
            />
          </Grid>
          <Grid item xs={6} sx={{ pl: "1em" }}>
            <Typography
              sx={{
                fontSize: { xs: "1.05em", sm: "1.5em", mb: "1em" },
                fontWeight: "bold",
              }}
            >
              {" "}
              NOTHING TO CLAIM
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.95", sm: "1.25em", mb: "1em" },
                fontWeight: "bold",
              }}
            >
              {" "}
              You don't have anything from farming
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/farm");
              }}
              sx={{
                backgroundColor: "#D0BA97",
                marginTop: "1%",
                fontSize: "16px",
                width: "fit-content",
              }}
            >
              GO FARM
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}
