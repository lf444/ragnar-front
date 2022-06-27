import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import StableStakeComponent from "./stableStakeComponent";



type PairTabProps = {
  pairName1: string;
  logo1: string;
  apr: number;
  stacked: number;
  tvl: number;
  claimable: number;
  addressPool: string;
  pairAddress: string;
  rgn: boolean;
  info: string;
  deposit: any;
  withdraw: any;
  approve: any;
  masterchef: boolean;
  depositVeYeti: any;

};

const PairTab: FunctionComponent<PairTabProps> = ({ pairName1, logo1, apr, stacked, tvl, claimable, addressPool, pairAddress, masterchef, rgn, info, deposit, withdraw, approve, depositVeYeti }) => {

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
        tvl={tvl} claimable={claimable} addressPool={addressPool} pairAddress={pairAddress} rgn={rgn} info={info}
        deposit={deposit} withdraw={withdraw} approve={approve} masterchef={masterchef} depositVeYeti={depositVeYeti}/>
      </Grid>
    </>
  );
};

export default PairTab;
