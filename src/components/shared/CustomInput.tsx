import { Grid, Input, Button } from "@mui/material";
import { FunctionComponent } from "react";

interface CustomInputProps {
  poolName: string;
}
const CustomInput: FunctionComponent<CustomInputProps> = ({ poolName }) => {
  return (
    <>
      <Grid
        item
        container
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          borderRadius: "5px",
          alignItems: "center", 
          height: "100%",
        }}
      >
        {" "}
        <Input sx={{marginLeft: 1, width: {xs: "50%", md:"65%" , sm: "30%"}}} disableUnderline placeholder="Enter an amount" defaultValue={0} type="number"></Input>
        <Button
          variant="contained"
          sx={{ margin: 0.5,borderRadius:"5px",height: "80%", fontSize: { xs: "0.45", sm: "0.85em" }, position:"relative", marginRight:"0.35rem" ,fontWeight:"normal", marginLeft:"auto",boxShadow: "none", textTransform: "none", backgroundColor: (theme) => theme.palette.secondary.main, color: (theme) => theme.palette.text.primary }}
        >
          MAX
        </Button>
      </Grid>
    </>
  );
};

export default CustomInput;
