import { Grid } from "@mui/material";
import { Pools } from "../../abi/pools";
import { FunctionComponent } from "react";
import StableStakeComponent from "./stableStakeComponent";

type PairTabProps = {
  pools: Pools[];
};
const PairTab: FunctionComponent<PairTabProps> = ({ pools }) => {
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
        {pools.map((pool) => {
          return <StableStakeComponent pool={pool} />;
        })}
      </Grid>
    </>
  );
};

export default PairTab;
