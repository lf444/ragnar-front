import { Grid, Input, Button, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface CustomInputProps {
  poolName: string;
  amountToStake: number;
  setAmountToStake: any;
}
const CustomInput: FunctionComponent<CustomInputProps> = ({
  poolName,
  amountToStake,
  setAmountToStake,
}) => {
  const handleChangeAmount = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAmountToStake(+event.target.value);
  };

  return (
    <>
      <Grid
        item
        container
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          borderRadius: "5px",
          alignItems: "center",
        }}
      >
        {" "}
<<<<<<< HEAD
<<<<<<< HEAD
        <Input
          sx={{ marginLeft: 1, width: { xs: "50%", md: "65%", sm: "30%" } }}
          onChange={(e) => handleChangeAmount(e)}
          disableUnderline
          placeholder="Enter an amount"
          defaultValue={0}
          type="number"
        ></Input>
=======
        <Input sx={{marginLeft: 1, width: {xs: "40%", md:"65%" , sm: "30%"}}} disableUnderline placeholder="Enter an amount" defaultValue={0} type="number"></Input>
>>>>>>> c66f1d1 (dev: pool minor change)
=======
        <Input sx={{marginLeft: 1, width: {xs: "40%", md:"65%" , sm: "30%"}}} onChange={(e) => handleChangeAmount(e)} disableUnderline placeholder="Enter an amount" defaultValue={0} type="number"></Input>
>>>>>>> 52fb786 (Debut claim)
        <Button
          variant="contained"
<<<<<<< HEAD
<<<<<<< HEAD
          sx={{
            borderRadius: "5px",
            fontSize: { xs: "0.60rem", sm: "1rem" },
            position: "relative",
            marginRight: "0.25rem",
            fontWeight: "normal",
            marginLeft: "auto",
            boxShadow: "none",
            textTransform: "none",
            backgroundColor: (theme) => theme.palette.secondary.main,
            color: (theme) => theme.palette.text.primary,
          }}
=======
          sx={{borderRadius:"5px", fontSize: { xs: "0.60rem", sm: "0.65em" }, position:"relative", marginRight:"0.25rem" ,fontWeight:"normal", marginLeft:"auto",boxShadow: "none", textTransform: "none", backgroundColor: (theme) => theme.palette.secondary.main, color: (theme) => theme.palette.text.primary }}
>>>>>>> 9ff617c (dev: somes css changes)
=======
          sx={{borderRadius:"5px", fontSize: { xs: "0.50rem", sm: "0.50em" }, position:"relative", marginRight:"0.25rem" ,fontWeight:"bold", marginLeft:"auto",boxShadow: "none", textTransform: "none", backgroundColor: (theme) => theme.palette.secondary.main, color: (theme) => theme.palette.text.primary }}
>>>>>>> 459293d (minor change)
        >
          MAX
        </Button>
      </Grid>
    </>
  );
};

export default CustomInput;
