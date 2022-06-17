import { Grid, Typography } from '@mui/material';
import { ethers } from 'ethers';
import masterchefABI from '../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json';
import { contractAddress } from '../../abi/address';
import { useState, useEffect } from 'react';
import axios from "axios";
import Zoom from '@mui/material/Zoom';

const StakeScreen = () => {
  return (
    <>
      {' '}
      <Zoom in={true}>
        <Grid
          container
          direction='column'
          alignItems='center'
          sx={{
            marginBottom: '4rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: {
              xs: '100%',
              sm: '60%',
            },
            backgroundColor: {
              xs: 'none',
            },
          }}
        >
          <Grid item sx={{ width: '90%', paddingBottom: 2 }}>
            <ClaimRewards />
          </Grid>
        </Grid>
      </Zoom>
    </>
  );
};

export default StakeScreen;

const ClaimRewards = () => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: 'bold',
          color: (theme) => theme.palette.text.primary,
          width: 'fit-content',
          padding: 1,
          paddingTop: 4,
          borderRadius: '5px',
          fontSize: '1rem',
        }}
      >
        CLAIM REWARDS
      </Typography>
      <FundsFirstTabs />
    </>
  );
};

const FundsFirstTabs = () => {
  const [deposit, setDeposit] = useState(0);
  const [reward, setReward] = useState(0);
  const [ratio, setRatio] = useState(1);
 

  useEffect(() => {
    fetchMyDeposit();
    fetchMyReward();
  }, [])


  async function getPrice(tokenID: string): Promise<number> {
    return axios
      .get(`https://api.coingecko.com/api/v3/coins/${tokenID}`)
      .then((response) => {
        return response.data.market_data.current_price.usd;
      });
  }

  async function fetchMyDeposit() {
    try {
      if (window.ethereum) {
        let accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
        const priceYusd = await getPrice("yusd-stablecoin");
        const priceRgnYeti = await getPrice("yeti-finance");
        const priceLpCurve = 1;
        const priceRGN = 0.3;
        const myDepositYUSD = await masterchef.depositInfo(contractAddress.fakeYusdAddress, String(accounts)) * priceYusd;
        const myDepositRgnYeti = await masterchef.depositInfo(contractAddress.rgnYetiAddress, String(accounts)) * priceRgnYeti;
        const myDepositLpCurve = await masterchef.depositInfo(contractAddress.fakeLpCurveAddress, String(accounts)) * priceLpCurve;
        const myDepositRGN = await masterchef.depositInfo(contractAddress.rgnAddress, String(accounts)) * priceRGN;
        setDeposit((myDepositYUSD + myDepositLpCurve + myDepositRgnYeti + myDepositRGN) / 10**18);  
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }

  async function fetchMyReward() {
    try {
      if (window.ethereum) {
        let accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
        const priceRgnYeti = await getPrice("yeti-finance");
        const priceRGN = 0.3;
        const myRewardYUSD = await masterchef.pendingTokens(contractAddress.fakeYusdAddress, String(accounts), contractAddress.yetiAddres);
        const myRewardRgnYeti = await masterchef.pendingTokens(contractAddress.rgnYetiAddress, String(accounts), contractAddress.yetiAddres);
        const myRewardLpCurve = await masterchef.pendingTokens(contractAddress.fakeLpCurveAddress, String(accounts), contractAddress.yetiAddres);
        const myRewardRGN = await masterchef.pendingTokens(contractAddress.rgnAddress, String(accounts), contractAddress.yetiAddres);
        const myTotalReward = ((Number(myRewardYUSD.pendingBonusToken) * priceRgnYeti / 10**18) + (Number(myRewardYUSD.pendingRGN) * priceRGN / 10**18) + 
        (Number(myRewardRgnYeti.pendingBonusToken) * priceRgnYeti / 10**18) + (Number(myRewardRgnYeti.pendingRGN) * priceRGN / 10**18) + 
        (Number(myRewardLpCurve.pendingBonusToken) * priceRgnYeti / 10**18) + (Number(myRewardLpCurve.pendingRGN) * priceRGN / 10**18) + 
        (Number(myRewardRGN.pendingBonusToken) * priceRgnYeti / 10**18) + (Number(myRewardRGN.pendingRGN) * priceRGN / 10**18))
        setReward(myTotalReward)  
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ marginBottom: "3%" }}
    >
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        display="flex"
        xs={3.75}
        sm={3}
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRadius: "5px",
          textAlign: "center",
          
          p: 1,
        }}
      >
        <Grid item direction="column">
          <Typography
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.50rem",
              },
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {" "}
            YOUR DEPOSIT
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.50rem",
              },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            ${Math.round(deposit)}USD
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        display="flex"
        xs={3.75}
        sm={3}
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRadius: "5px",
          textAlign: "center",
          
          p: 1,
        }}
      >
        <Grid item direction="column">
          <Typography
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.50rem",
              },
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {" "}
            YOUR REWARDS
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.50rem",
              },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            ${reward}USD
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        display="flex"
        xs={3.75}
        sm={3}
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRadius: "5px",
          textAlign: "center",
          
          p: 1,
        }}
      >
        <Grid item direction="column">
          <Typography
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.50rem",
              },
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            raJOE RATIO
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.50rem",
              },
              color: (theme) => theme.palette.text.primary,
              fontWeight: "bold",
            }}
          >
            {ratio}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
