import { Typography, Grid } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { FunctionComponent } from "react";

interface CustomDisplayProps {
  poolName: string;
  display: string;
}

const CustomDisplay: FunctionComponent<CustomDisplayProps> = ({
  poolName,
  display,
}) => {
  return (
    <>
      <Grid xs={10}>
        {" "}
        <Typography sx={{ fontSize: "11px" }}>
          {" "}
          {display} {poolName}{" "}
        </Typography>
      </Grid>
      <Grid xs={2}>
        <AccountBalanceWalletIcon sx={{ height: "15px" }} /> 0.00
      </Grid>
    </>
  );
};

export default CustomDisplay;
