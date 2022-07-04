import { Grid, Typography, Box, Tabs, Tab, Button, IconButton, Tooltip } from "@mui/material";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { useState, useEffect } from "react";
import BoxReward from "./BoxReward";
import rgn from "../../assets/images/pools/rgn.png"
import yeti from "../../assets/images/pools/yeti.png"
import { ethers } from "ethers";
import { contractAddress } from "../../abi/address";
import { appLogger, errorToast } from "../../utils/method";
import masterchefABI from "../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json"
import { useProvider } from "wagmi";
import LinearProgress from "@mui/material/LinearProgress";

const appTag: string = "ClaimRewardsScreen";




export default function ClaimRewardsScreen({
  data,
  priceYusd,
  priceRgnYeti,
}: {
  data: any;
  priceYusd: number;
  priceRgnYeti: number;
}) {

  const [isLoading, setIsLoading] = useState(false);

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
    await fetchAprRGN();
    if (data) {
      await fetchMyReward();
      await fetchAprRGNUser();
    }
  };
  
  const provider = useProvider();

  useEffect(() => {
    setIsLoading(true);
    fetchAllData().then(() => setIsLoading(false));
    if (!data) {
      setIsLoading(true);
      resetData();
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [data]);

  async function fetchAprRGNUser() {
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

        setMyStake({
          ...myStake,
          myYusd: myDepositYUSD / 10 ** 18,
          myYeti: myDepositYeti / 10 ** 18,
          myRgn: myDepositRgn / 10 ** 18,
          myLpCurve: myDepositLpCurve / 10 ** 18,
        });
      }
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, "- Error fetchAprRGN-", err.message);
      setIsLoading(false);
    }
  }

  async function fetchAprRGN() {
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
        setAprRgn({
          ...aprRgn,
          aprYusd:
            ((rgnPerBlockYusd * 28800 * 365) / allocPointYusd.sizeOfPool) * 100,
          aprLpCurve:
            ((rgnPerBlockLpCurve * 28800 * 365) /
              allocPointLpCurve.sizeOfPool) *
            100,
          aprRgn:
            ((rgnPerBlockRgn * 28800 * 365) / allocPointRgn.sizeOfPool) * 100,
          aprYeti:
            ((rgnPerBlockYeti * 28800 * 365) / allocPointYeti.sizeOfPool) * 100,
        });
      }
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, "- Error fetchAprRGN-", err.message);
      setIsLoading(false);
    }
  }

  async function fetchTVL() {
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
        setTVL({
          ...TVL,
          tvlYusd: (TVLYUSD.sizeOfPool * priceYusd) / 10 ** 18,
          tvlYeti: (TVLRgnYeti.sizeOfPool * priceRgnYeti) / 10 ** 18,
          tvlRgn: (TVLRGN.sizeOfPool * priceRGN) / 10 ** 18,
          tvlLpCurve: (TVLLpCurve.sizeOfPool * priceLpCurve) / 10 ** 18,
        });
      }
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, "- Error fetchTVL-", err.message);
      setIsLoading(false);
    }
  }

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
        console.log((myRewardRGN))

        setReward({
          ...reward,
          rewardYusdRGN:
            (Number(myRewardYUSD.pendingRGN) * priceRGN) / 10 ** 18,
          rewardYusdYETI:
            (Number(myRewardYUSD.pendingBonusToken) * priceRgnYeti) / 10 ** 18, 
          rewardYetiRGN:
            (Number(myRewardRgnYeti.pendingRGN) * priceRGN) / 10 ** 18,
          rewardYetiYETI:
            (Number(myRewardRgnYeti.pendingBonusToken) * priceRgnYeti) / 10 ** 18, 
          rewardRgnRGN:
            (Number(myRewardRGN.pendingRGN) * priceRGN) / 10 ** 18,
          rewardRgnYETI:
            (Number(myRewardRGN.pendingBonusToken) * priceRgnYeti) / 10 ** 18,
          rewardLpCurveRGN:
            (Number(myRewardLpCurve.pendingRGN) * priceRGN) / 10 ** 18,
          rewardLpCurveYETI:
            (Number(myRewardLpCurve.pendingBonusToken) * priceRGN) / 10 ** 18
        });
      }
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, "- Error fetchMyDeposit-", err.message);
      setIsLoading(false);
    }
  }

  async function claim(choise: number) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
        if (choise === 1) {
        const claimRagnarPools = await masterchef.multiclaim([contractAddress.rgnAddress, contractAddress.rgnYetiAddress], String(accounts));
        await claimRagnarPools.wait();
        } else if (choise === 2) {
        const claimYetiPools = await masterchef.multiclaim([contractAddress.fakeLpCurveAddress, contractAddress.fakeYusdAddress], String(accounts));
        await claimYetiPools.wait();
        } else if (choise === 3) {
        const claimAll = await masterchef.multiclaim([contractAddress.rgnAddress, contractAddress.rgnYetiAddress, contractAddress.fakeLpCurveAddress, contractAddress.fakeYusdAddress], String(accounts));
        await claimAll.wait();
        }
      }
    } catch (err: any) {
      appLogger(appTag, "- Error depositVeYeti-", err.message);
    }
  }

  const InfoRgnYetiPools = `RGN: $${reward.rewardYetiRGN.toLocaleString('en')} , YETI: $${reward.rewardYetiYETI.toLocaleString('en')}`
  const InfoRgnPools = `RGN: $${reward.rewardRgnRGN.toLocaleString('en')} , YETI: $${reward.rewardRgnYETI.toLocaleString('en')}`
  const InfoYUSDPools = `RGN: $${reward.rewardYusdRGN.toLocaleString('en')} , YETI: $${reward.rewardYusdYETI.toLocaleString('en')}`
  const InfoLpCurvePools = `RGN: $${reward.rewardLpCurveRGN.toLocaleString('en')} , YETI: $${reward.rewardLpCurveYETI.toLocaleString('en')}`

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ height: "400px" }}
      >
        <Grid
          item
          xs={6}
          sx={{ height: "50%", pr:2, marginBottom:"5rem"}}
        >
          <Grid container sx={{backgroundColor: (theme) => theme.palette.secondary.main, height: "60px", borderRadius: "5px 5px 0px 0px"}}>
            <Grid item xs={1.5} sx={{fontWeight: "bold", fontSize: "20px",  textAlign: 'center', marginTop: "10px", marginLeft: "8px"}}>
            <img height='40px' src={rgn}></img>
            </Grid>
            <Grid item xs={6}  lg={8} sx={{fontWeight: "bold", fontSize: {xs: "12px", md: "16px"} ,  textAlign: 'left', marginTop: {xs: "20px",md: "18px"}, color: (theme) => theme.palette.text.primary, marginLeft: {xs: "30px", md: "20px", lg: "10px"}}}>
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
          <BoxReward pool1="RGN" pool2="RGNYETI" 
          apr1={Math.round(aprRgn.aprRgn)} apr2={Math.round(aprRgn.aprYeti)} 
          deposit1={Math.round(myStake.myRgn)} deposit2={Math.round(myStake.myYeti)} 
          tvl1={Math.round(TVL.tvlRgn)} tvl2={Math.round(TVL.tvlYeti)} isLoading={isLoading}/>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ height: "50%", pr:2, marginBottom:"5rem"}}
        >
          <Grid container sx={{backgroundColor: (theme) => theme.palette.secondary.main, height: "60px", borderRadius: "5px 5px 0px 0px", marginLeft: "15px", borderBottom: 1, borderColor: "divider" }}>
            <Grid item xs={10} md={8} lg={12} sx={{fontWeight: "bold", fontSize: {xs: "12px", md: "16px"},  textAlign: 'left', marginTop: "22px", color: (theme) => theme.palette.text.primary, marginLeft: "19px"}}>
            Your Rewards
           </Grid>
           </Grid>          
           <Grid
            item
            xs={12}
            container
            direction="row"
            sx={{
              p: 1,
              borderRadius: "0px 0px 5px 5px  ",
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "100%",
              marginLeft: "15px"
            }}
          >
            <Grid item xs={12} sx={{marginLeft: "15px", color: (theme) => theme.palette.text.primary, fontWeight: "bold", fontSize: {md:"13px", xs: "8px"}, marginTop: "15px"}} >
              RGNYETI Pools: ${!isLoading ? (
              (reward.rewardYetiRGN + reward.rewardYetiYETI).toLocaleString('en')
            ) : ( <LinearProgress
              color="inherit"
              sx={{
                width: "1.50rem"
              }} 
            /> 
            )}
              <Tooltip title={InfoRgnYetiPools}>
                <IconButton>
                  <InfoRoundedIcon sx={{ color: (theme) => theme.palette.background.default, width: "20px" }} />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={12} sx={{borderBottom: 2, borderColor: "divider", marginLeft: "15px", color: (theme) => theme.palette.text.primary, fontWeight: "bold", fontSize: {md:"13px", xs: "8px"}}} >
              RGN Pools: ${!isLoading ? (
              (reward.rewardRgnRGN + reward.rewardRgnYETI).toLocaleString('en')
            ) : (
              <LinearProgress
                color="inherit"
                sx={{
                  width: "1rem"
                }} 
              />
            )}
              <Tooltip title={InfoRgnPools}>
                <IconButton>
                  <InfoRoundedIcon sx={{ color: (theme) => theme.palette.background.default, width: "20px" }} />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid container sx={{height: "60px"}}>
            <Grid item xs={4} sx={{marginTop: {xs:"15px", md:"20px"}, marginLeft: "15px"}}>
            <Button  onClick={() => claim(1)} sx={{
                variant: "contained",
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.text.primary,
                width: {lg:'150px', xs:'100px'},
                fontWeight: 'bold',
                fontSize: "12px",
                marginBottom: "20px"}}>Claim (${!isLoading ? (
                  (reward.rewardYetiRGN + reward.rewardYetiYETI 
                    + reward.rewardRgnRGN + reward.rewardRgnYETI).toLocaleString('en')
                ) : (
                  <LinearProgress
                    color="inherit"
                    sx={{
                      width: "1rem"
                    }} 
                  />
                )})</Button>
           </Grid>
           </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ height: "50%", pr:2, marginBottom:"5rem"}}
        >
          <Grid container sx={{backgroundColor: (theme) => theme.palette.secondary.main, height: "60px", borderRadius: "5px 5px 0px 0px"}}>
          <Grid item xs={1.5} sx={{fontWeight: "bold", fontSize: "20px",  textAlign: 'center', marginTop: "10px", marginLeft: "8px"}}>
            <img height='45px' src={yeti}></img>
            </Grid>
            <Grid item xs={6} lg={8} sx={{fontWeight: "bold", fontSize: {xs: "12px", md: "16px"} ,  textAlign: 'left', marginTop: {xs: "22px",md: "18px"}, color: (theme) => theme.palette.text.primary, marginLeft: {xs: "30px", md: "20px", lg: "10px"}}}>
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
          <BoxReward pool1="YUSD" pool2="LPCURVE" 
          apr1={Math.round(aprRgn.aprYusd)} apr2={Math.round(aprRgn.aprLpCurve)} 
          deposit1={Math.round(myStake.myYusd)} deposit2={Math.round(myStake.myLpCurve)} 
          tvl1={Math.round(TVL.tvlYusd)} tvl2={Math.round(TVL.tvlLpCurve)} isLoading={isLoading}/>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ height: "50%", pr:2, marginBottom:"5rem"}}
        >
          <Grid container sx={{backgroundColor: (theme) => theme.palette.secondary.main, height: "60px", borderRadius: "5px 5px 0px 0px", marginLeft: "15px", borderBottom: 1, borderColor: "divider" }}>
          <Grid item xs={10} md={8} lg={12} sx={{fontWeight: "bold", fontSize: {xs: "12px", md: "16px"},  textAlign: 'left', marginTop: "22px", color: (theme) => theme.palette.text.primary, marginLeft: "19px"}}>
            Your Rewards
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
              marginLeft: "15px"
            }}
          >
            <Grid item xs={12} sx={{marginLeft: "15px", color: (theme) => theme.palette.text.primary, fontWeight: "bold", fontSize: {md:"13px", xs: "8px"}, marginTop: "15px"}} >
              YUSD Pools: ${!isLoading ? (
              (reward.rewardYusdRGN + reward.rewardYusdYETI).toLocaleString('en')
            ) : (
              <LinearProgress
                color="inherit"
                sx={{
                  width: "1rem"
                }} 
              />
            )}
              <Tooltip title={InfoYUSDPools}>
                <IconButton>
                  <InfoRoundedIcon sx={{ color: (theme) => theme.palette.background.default, width: "20px" }} />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={12} sx={{borderBottom: 2, borderColor: "divider", marginLeft: "15px", color: (theme) => theme.palette.text.primary, fontWeight: "bold", fontSize: {md:"13px", xs: "8px"}}} >
              LP CURVE Pools: ${!isLoading ? (
              (reward.rewardLpCurveRGN + reward.rewardLpCurveYETI).toLocaleString('en')
            ) : (
              <LinearProgress
                color="inherit"
                sx={{
                  width: "1rem"
                }} 
              />
            )}
              <Tooltip title={InfoLpCurvePools}>
                <IconButton>
                  <InfoRoundedIcon sx={{ color: (theme) => theme.palette.background.default, width: "20px" }} />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid container sx={{height: "60px"}}>
            <Grid item xs={4} sx={{marginTop: {xs:"15px", md:"20px"}, marginLeft: "15px"}}>
            <Button onClick={() => claim(2)} sx={{
                variant: "contained",
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.text.primary,
                width: {lg:'150px', xs:'100px'},
                fontWeight: 'bold',
                fontSize: "12px",
                marginBottom: "20px"}}>Claim (${!isLoading ? (
                  (reward.rewardYusdRGN + reward.rewardYusdYETI + 
                    reward.rewardLpCurveRGN + reward.rewardLpCurveYETI).toLocaleString('en')
                ) : (
                  <LinearProgress
                    color="inherit"
                    sx={{
                      width: "1rem"
                    }} 
                  />
                )})</Button>
           </Grid>
           </Grid>
          </Grid>
        </Grid>
          <Grid container>
            <Grid xs={12} sx={{textAlign: 'center'}}>
            <Button onClick={() => claim(3)}
              sx={{
                width: {lg:'20%', xs:'40%'},
                backgroundColor: "#D0BA97",
                fontWeight: 'bold',
                color: (theme) => theme.palette.secondary.main,
                fontSize: "15px",
                marginBottom: "20px",
                marginTop: "20px"}}>
                  Claim all (${!isLoading ? (
              (reward.rewardYusdRGN + reward.rewardYusdYETI + reward.rewardLpCurveRGN + reward.rewardLpCurveYETI + 
                reward.rewardYetiRGN + reward.rewardYetiYETI + reward.rewardRgnRGN + reward.rewardRgnYETI).toLocaleString('en')
            ) : (
              <LinearProgress
                color="inherit"
                sx={{
                  width: "1rem"
                }} 
              />
            )})
            </Button>
           </Grid>
          </Grid>
        </Grid>
    </>
  );
};

