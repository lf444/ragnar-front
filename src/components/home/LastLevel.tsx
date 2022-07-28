import { Typography, Grid, CardMedia, Box, Button } from "@mui/material";
import "../../assets/styles/index.css";
import a_ragnar from "../../assets/images/home/a_ragnar.png";
import a_liqui from "../../assets/images/home/a_liqui.png";
import a_pool from "../../assets/images/home/a_pool.png";
import a_yeti from "../../assets/images/home/a_yeti.png";
import bg_trace from "../../assets/images/home/bg_trace.png";

const LastLevel = () => {
  return (
    <Grid
      container
      direction="column"
      alignContent={"right"}
      justifyContent="flex-end"
    >
      <Grid
        item
        sx={{
          alignItem: "right",
          textAlign: "right",
        }}
      >
        <Typography
          sx={{
            fontWeight: "300",
            marginTop: "1rem",
            lineHeight: "29px",
            fontSize: "2.5rem",
            textAlign: "right",
          }}
        >
          {" "}
          You want to learn more on Ragnar Finance
        </Typography>{" "}
      </Grid>
      <Grid
        item
        sx={{
          marginTop: "1rem",
          textAlign: "right",
          alignItem: "right",
        }}
      >
        <Typography
          sx={{
            lineHeight: "29px",
            textAlign: "right",
            fontSize: "1em",
          }}
        >
          {" "}
          platform. Convert your $etiaett Convertt your $YETI to $rgnYETI. Stake
        </Typography>{" "}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DE7650",
            marginTop: "1%",
            textAlign: "right",

            fontSize: "16px",
            width: "fit-content",
          }}
        >
          Gitbook
        </Button>
      </Grid>
      <Grid
        item
        sx={{
          alignItem: "right",
          textAlign: "right",
        }}
      >
        <Typography
          sx={{
            fontWeight: "300",
            marginTop: "3rem",
            lineHeight: "29px",
            fontSize: "2rem",
            textAlign: "right",
          }}
        >
          {" "}
          Ragar community
        </Typography>{" "}
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignContent={"right"}
        justifyContent="flex-end"
        sx={{
          alignItem: "right",
          marginTop: "1rem",
        }}
      >
        {" "}
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "transparent",
            color: "#ddeaf2",
            marginTop: "1%",
            textAlign: "right",
            m: 1,
            fontSize: "16px",
            width: "fit-content",
          }}
        >
          Discord
        </Button>{" "}
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "transparent",
            color: "#ddeaf2",
            marginTop: "1%",
            textAlign: "right",
            m: 1,
            fontSize: "16px",
            width: "fit-content",
          }}
        >
          Twitter
        </Button>{" "}
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "transparent",
            color: "#ddeaf2",
            textAlign: "right",
            marginTop: "1%",
            m: 1,
            fontSize: "16px",
            width: "fit-content",
          }}
        >
          Medium
        </Button>
      </Grid>
    </Grid>
  );
};

export default LastLevel;
