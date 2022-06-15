import { Grid, Typography } from '@mui/material';
import { ethers } from 'ethers';
import masterchefABI from '../../abi/MasterChefRGN.json';
import { contractAddress } from '../../abi/address';
import { useState } from 'react';
// import vejoestackingABI from "../../abi/vejoestking.json"

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
  async function fetchData() {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchef,
          masterchefABI.abi,
          signer
        );
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
          borderRadius: "10px",
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
            ${deposit}USD
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
          borderRadius: "10px",
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
          borderRadius: "10px",
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
