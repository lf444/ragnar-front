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
          backgroundColor: "#7A8C98",
          borderRadius: "5px",
          border: "1px solid grey",
          alignItems: "center",
        }}
      >
        {" "}
        <Grid xs={10}>
          <Input disableUnderline defaultValue={0}></Input>
        </Grid>
        <Grid xs={2}>
          {" "}
          <Button variant="contained" sx={{ margin: 0.5 }}>
            MAX
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CustomInput;
