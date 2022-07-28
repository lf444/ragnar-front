import { Typography, Box, Grid } from "@mui/material";
import logo from "../../assets/images/logo.png";
import "../../assets/styles/index.css";
import FirstLevel from "./FirstLevel";
import logo_ts from "../../assets/images/home/logo_ts.png";
import SecondLevel from "./SecondLevel";
import ThirdLevel from "./ThirdLevel";
import bg_trace from "../../assets/images/home/bg_trace.png";
import bg_trace2 from "../../assets/images/home/bg_trace2.png";
import FourthLevel from "./FourthLevel";
import FiveLevel from "./FiveLevel";
import SevenLevel from "./SevenLevel";
import Footer from "../shared/Footer";
import LastLevel from "./LastLevel";

const Home = () => {
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Box
        sx={{
          paddingLeft: "13%",
          paddingRight: "13%",
          paddingTop: "6%",
          backgroundImage: `url(${logo_ts})`,
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
          paddingLeft: "13%",
          paddingRight: "13%",
          paddingBottom: "3%",
        }}
      >
        <ThirdLevel />
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: "-3%",
          paddingLeft: "13%",
          paddingRight: "13%",
          paddingBottom: "3%",
          backgroundImage: `url(${bg_trace})`,
          backgroundSize: "auto cover%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <FourthLevel />
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: "13%",
          paddingRight: "13%",
          paddingBottom: "3%",
        }}
      >
        <FiveLevel />
      </Box>
      <Box
        sx={{
          mask: "radial-gradient(100% 80% at bottom, white 79.5%,transparent 80%)left, radial-gradient(100% 80% at top, transparent 79.5%, white 80%) right",
          width: "100%",
          height: "200px",
          maskSize: "50.1% 100%",
          maskRepeat: " no-repeat",
          background: "white",
          marginTop: "-40px",
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
          backgroundImage: `url(${bg_trace2})`,
          backgroundSize: "auto cover%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <FourthLevel />
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          paddingLeft: "13%",
          paddingRight: "13%",
          paddingBottom: "3%",
        }}
      >
        <SevenLevel />
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
          marginTop: "-3%",
          paddingLeft: "13%",
          paddingRight: "13%",
          paddingBottom: "3%",
          backgroundImage: `url(${bg_trace})`,
          backgroundSize: "auto cover%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <FourthLevel />
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: "13%",
          paddingRight: "13%",
          paddingBottom: "3%",
        }}
      >
        <FiveLevel />
      </Box>
      <Box
        sx={{
          mask: "radial-gradient(100% 80% at bottom, white 79.5%,transparent 80%)left, radial-gradient(100% 80% at top, transparent 79.5%, white 80%) right",
          width: "100%",
          height: "200px",
          maskSize: "50.1% 100%",
          maskRepeat: " no-repeat",
          background: "white",
          marginTop: "-40px",
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
          backgroundImage: `url(${bg_trace2})`,
          backgroundSize: "auto cover%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <FourthLevel />
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
          paddingLeft: "13%",
          paddingRight: "13%",
          paddingBottom: "3%",
        }}
      >
        <LastLevel />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
