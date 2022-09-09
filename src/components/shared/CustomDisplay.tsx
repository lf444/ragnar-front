import { Typography } from "@mui/material";
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
      <Typography
        sx={{ fontSize: "11px", color: (theme) => theme.palette.text.primary }}
      >
        {" "}
        {display} {poolName}{" "}
      </Typography>
    </>
  );
};

export default CustomDisplay;
