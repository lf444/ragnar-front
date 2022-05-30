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
      {" "}
      <Typography sx={{ fontSize: "11px" }}>
        {" "}
        {display} {poolName}{" "}
      </Typography>
    </>
  );
};

export default CustomDisplay;
