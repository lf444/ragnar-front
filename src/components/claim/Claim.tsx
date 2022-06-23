import { Grid, Typography } from '@mui/material';
import { ethers } from 'ethers';
import masterchefABI from '../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json';
import { contractAddress } from '../../abi/address';
import { useState, useEffect } from 'react';
import axios from "axios";
import Zoom from '@mui/material/Zoom';
import Funds from '../stake/Funds';

const ClaimRewards = () => {
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
              sm: '70%',
            },
            /* boxShadow: { xs: 0, sm: 3 }, */
            borderRadius: { xs: '0px', sm: '20px' },
/*             backgroundColor: {
              xs: 'none',
              sm: '#none',
              md: '#DDEAF2',
            }, */
          }}
        >
          <Grid item sx={{ width: '90%', paddingBottom: 2 }}>
          <Typography
          sx={{
          fontWeight: "bold",
          color: (theme) => theme.palette.text.primary,
          width: "fit-content",
          padding: 1,
          paddingTop: 4,
          borderRadius: "5px",
          fontSize: "1rem",
          }}
        >
        CLAIM REWARDS
          </Typography>
            <Funds />
          </Grid>
          <Grid item sx={{ width: '90%' }}>
          </Grid>
        </Grid>
      </Zoom>
    </>
  );
};

export default ClaimRewards;
