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
          alignItems="center"
          sx={{
            typography: "body1",
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            container
            direction="column"
            alignContent={"center"}
            sx={{
              width: "85%",
              height: "80%",
              boxShadow: 3,
              borderRadius: "20px",
              backgroundColor: "#DDEAF2",
            }}
          >
            <Grid sx={{ width: "90%" }}>
              <Funds />
            </Grid>
            <Grid sx={{ width: "90%" }}>
              <Typography
                sx={{
                  color: "#3A4149",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              ></Typography>{" "}
              <StakeStablePoolComponent />
            </Grid>
          </Grid>
        </Box>
      </Zoom>
    </>
  );
};

export default StakeScreen;
