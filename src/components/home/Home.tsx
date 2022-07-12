import { Typography, Box, Grid } from "@mui/material";
import logo from "../../assets/images/logo.png";
import "../../index.css";
import FirstLevel from "./FirstLevel";

import SecondLevel from "./SecondLevel";
import ThirdLevel from "./ThirdLevel";

const Home = () => {
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Box
        sx={{
          paddingLeft: "13%",
          paddingRight: "13%",
          paddingTop: "6%",
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <FirstLevel />
      </Box>
      <Box
        sx={{
          mask: "radial-gradient(100% 80% at bottom, white 79.5%,transparent 80%)left, radial-gradient(100% 80% at top, transparent 79.5%, white 80%) right",
          width: "100%",
          height: "200px",
          maskSize: "50.1% 100%",
          maskRepeat: " no-repeat",
          background: "white",
          marginTop: "-170px",
          marginBottom: "-40px",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          paddingLeft: "13%",
          paddingRight: "13%",
          paddingBottom: "3%",
        }}
      >
        <SecondLevel />
      </Box>
      <Box
        sx={{
          mask: "radial-gradient(100% 80% at top, white 79.5%,transparent 80%)left, radial-gradient(100% 80% at bottom, transparent 79.5%, white 80%) right",
          width: "100%",
          height: "200px",
          maskSize: "50.1% 100%",
          maskRepeat: " no-repeat",
          background: "white",
        }}
      />
      <Box
        sx={{
          width: "100%",
          marginTop: "-100px",
          paddingLeft: "13%",
          paddingRight: "13%",
          paddingBottom: "3%",
        }}
      >
        <ThirdLevel />
      </Box>
    </Box>
  );
};

export default Home;
