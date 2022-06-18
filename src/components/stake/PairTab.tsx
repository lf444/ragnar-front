import { Grid } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import StableStakeComponent from "./stableStakeComponent";
import axios from 'axios';
import ethers from 'ethers';
import masterchefABI from '../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json'
import { contractAddress } from '../../abi/address';


type PairTabProps = {
  pairName1: string;
  logo1: string;
  apr: number;
  stacked: number;
  tvl: number;
  claimable: number;
  addressPool: string;
  pairAddress: string;
};

const PairTab: FunctionComponent<PairTabProps> = ({ pairName1, logo1, apr, stacked, tvl, claimable, addressPool, pairAddress }) => {

  return (
    <>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="column"
        sx={{
          height: "100%",
        }}
      >
        <StableStakeComponent pairName1={pairName1} logo1={logo1} 
        apr={apr} stacked={stacked} 
        tvl={tvl} claimable={claimable} addressPool={addressPool} pairAddress={pairAddress} />
      </Grid>
    </>
  );
};

export default PairTab;
