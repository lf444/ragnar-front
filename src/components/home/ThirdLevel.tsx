import { Typography, Grid, CardMedia, Box } from "@mui/material";
import "../../assets/styles/index.css";
import a_ragnar from "../../assets/images/home/a_ragnar.png";
import a_liqui from "../../assets/images/home/a_liqui.png";
import a_pool from "../../assets/images/home/a_pool.png";
import a_yeti from "../../assets/images/home/a_yeti.png";
import bg_trace from "../../assets/images/home/bg_trace.png";

const ThirdLevel = () => {
  return (
    <Grid container direction="column">
      <Grid
        item
        sx={{
          alignItem: "left",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            marginTop: "1rem",
            lineHeight: "29px",
            fontSize: "3rem",
          }}
        >
          {" "}
          How to use Ragnar finance
        </Typography>{" "}
        <Typography
          sx={{
            fontWeight: "600",
            marginTop: "1rem",
            lineHeight: "29px",
            fontSize: "2.5rem",
          }}
        >
          {" "}
          On the platform deposit lp, depdoafz shv,
        </Typography>{" "}
        <Typography
          sx={{
            fontWeight: "600",
            marginTop: "1rem",
            lineHeight: "29px",
            fontSize: "2.5rem",
          }}
        >
          {" "}
          shvaeveh and earn $RGN
        </Typography>{" "}
      </Grid>
      <Grid
        item
        sx={{
          width: "fit-content",
          marginTop: "1rem",
        }}
      >
        <Typography
          sx={{
            lineHeight: "29px",

            fontSize: "1em",
          }}
        >
          {" "}
          Convert your $YETI to $rgnYETI. Stake your $rgnYeti on the Ragnrar
          platform. Convert your $etiaett Convertt your $YETI to $rgnYETI. Stake
          your $rgnYeti on the Ragnrar platform. Convert your $etiaett
        </Typography>{" "}
        <Typography
          sx={{
            lineHeight: "29px",

            fontSize: "1em",
          }}
        >
          {" "}
          Convert your $YETI to $rgnYETI. Stake your $rgnYeti on the Ragnrar
          platform. Convert your $etiaett
        </Typography>{" "}
        <Typography
          sx={{
            lineHeight: "29px",

            fontSize: "1em",
          }}
        >
          {" "}
          Convert your $YETI to $rgnYETI. Stake your $rgnYeti on the Ragnrar
          platform. Convert your $etiaett
        </Typography>{" "}
      </Grid>
    </Grid>
  );
};

export default ThirdLevel;
