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
          height: "80%",
        }}
      >
        {" "}
        <Input disableUnderline defaultValue={0}></Input>
        <Button
          variant="contained"
          sx={{ margin: 0.5,borderRadius:"05px",height: "80%", fontSize: { xs: "0.65em", sm: "0.85em" }, position:"relative", marginRight:"0.35rem" ,fontWeight:"bold", marginLeft:"auto",boxShadow: "none", textTransform: "none", backgroundColor: (theme) => theme.palette.secondary.main, color: (theme) => theme.palette.text.primary }}
        >
          Max
        </Button>
      </Grid>
    </>
  );
};

export default CustomInput;
