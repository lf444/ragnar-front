import { Button, Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          paddingLeft: "7%",
          paddingRight: "7%",
          paddingTop: "2%",
        }}
      >
        <Typography
          sx={{
            color: "#F7F7F7",
            fontWeight: "700",
            fontSize: "24px",
            paddingTop: "3%",
          }}
        >
          NFT Game
        </Typography>

        <Grid container>
          {" "}
          <Typography
            sx={{ color: "#785CE6", fontWeight: "700", fontSize: "48px" }}
          >
            Explore
          </Typography>
          <Typography
            sx={{ color: "#F7F7F7", fontWeight: "700", fontSize: "48px" }}
          >
            the world
          </Typography>
        </Grid>
        <Grid container>
          {" "}
          <Typography
            sx={{ color: "#785CE6", fontWeight: "700", fontSize: "48px" }}
          >
            Craft
          </Typography>
          <Typography
            sx={{ color: "#F7F7F7", fontWeight: "700", fontSize: "48px" }}
          >
            ball
          </Typography>
        </Grid>
        <Grid container>
          {" "}
          <Typography
            sx={{ color: "#785CE6", fontWeight: "700", fontSize: "48px" }}
          >
            Catch
          </Typography>
          <Typography
            sx={{ color: "#F7F7F7", fontWeight: "700", fontSize: "48px" }}
          >
            ’em All !
          </Typography>
        </Grid>

        <Typography
          sx={{ color: "#F7F7F7", fontWeight: "700", fontSize: "20px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Button
          onClick={() => {
            navigate("/stake");
          }}
          sx={{
            backgroundColor: "#785CE6",
            marginTop: "2%",
            height: "7%",
            width: "10%",
          }}
        >
          Get started!
        </Button>
        <Box
          sx={{
            position: "relative",
            left: "65%",
            bottom: "45%",
          }}
        >
        </Box>
      </Box>
    </>
  );
};

export default Home;
