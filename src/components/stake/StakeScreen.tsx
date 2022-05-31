import Navbar from "../Navbar";
import { Box, Grid, Typography } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Funds from "./Funds";
import StakeStablePoolComponent from "./StakeStablePoolComponent";

const StakeScreen = () => {
  return (
    <>
      {" "}
      <Zoom in={true}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            width: "100%",
            height: "100%",
            alignItems: {
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
                xs: "100%",
                sm: "85%",
              },
              height: {
                sm: "90%",
              },
              boxShadow: { xs: 0, sm: 3 },
              borderRadius: { xs: "0px", sm: "20px" },
              backgroundColor: {
                xs: "none",
                sm: "#none",
                md: "#DDEAF2",
              },
            }}
          >
            <Grid item sx={{ width: "90%" ,paddingBottom:2}}>
              <Funds />
            </Grid>
            <Grid item sx={{ width: "90%" }}>
              <StakeStablePoolComponent />
            </Grid>
          </Grid>
        </Box>
      </Zoom>
    </>
  );
};

export default StakeScreen;
