import Navbar from "../Navbar";
import { Box, Grid, Typography } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Funds from "./Funds";
import StakeStablePoolComponent from "./StakeStablePoolComponent";

const StakeScreen = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Zoom in={true}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            width: "100%",
            height: "100%",
            alignItems:{
              xs: "flex-start",
              sm: "center",
              md: "center",
              lg: "center",
            },
          }}
        >
          <Grid
            container
            direction="column"
            alignContent={"center"}
            sx={{
              width: {
                sx: "100%",
                sm: "85%",
              },
              height: "80%",
              boxShadow: { sx: 0, sm: 3 },
              borderRadius: { sx: "0px", sm: "20px" },
              backgroundColor: {
                sx: "none",
                sm: "#DDEAF2",
                md: "#DDEAF2",
              },
            }}
          >
            <Grid sx={{ width: "90%" }}>
              <Funds />
            </Grid>
            <Grid sx={{ width: "90%" }}>
                <StakeStablePoolComponent /> 
            </Grid>
          </Grid>
        </Box>
      </Zoom>
    </>
  );
};

export default StakeScreen;
