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
  masterchef: boolean;
  depositVeYeti: any;
  isLoading: boolean;
};

const PairTab: FunctionComponent<PairTabProps> = ({
  pairName1,
  logo1,
  apr,
  stacked,
  tvl,
  claimable,
  addressPool,
  pairAddress,
  masterchef,
  rgn,
  info,
  depositVeYeti,
  isLoading,
}) => {
  return (
    <>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100%",
          flexDirection: "column",
        }}
      >
        <StableStakeComponent
          pairName1={pairName1}
          logo1={logo1}
          apr={apr}
          stacked={stacked}
          tvl={tvl}
          claimable={claimable}
          addressPool={addressPool}
          pairAddress={pairAddress}
          rgn={rgn}
          info={info}
          masterchef={masterchef}
          depositVeYeti={depositVeYeti}
          isLoading={isLoading}
        />
      </Grid>
    </>
  );
};

export default PairTab;
