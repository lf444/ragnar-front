import { Button, Typography, Box, Grid, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import bigYeti from "../../assets/images/bigYeti.png";
import "../../assets/styles/index.css";

const SecondLevel = () => {
  let navigate = useNavigate();

  return (
    <Grid container justifyContent="flex-end" direction="column">
      <Grid
        item
        sx={{
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "0",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            color: (theme) => theme.palette.secondary.main,
            lineHeight: "29px",
            marginTop: "3rem",
            fontSize: "3rem",
          }}
        >
          {" "}
          Ragnar finance is a yeti
        </Typography>{" "}
        <Typography
          sx={{
            fontWeight: "700",
            color: (theme) => theme.palette.secondary.main,
            lineHeight: "29px",
            marginTop: "3rem",
            textAlign: "right",
            fontSize: "3rem",
          }}
        >
          {" "}
          boosting protocol
        </Typography>{" "}
      </Grid>
      <Grid
        item
        sx={{
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "0",
          justifyContent: "flex-end",
          marginTop: "6rem",
        }}
      >
        <Typography
          sx={{
            color: (theme) => theme.palette.secondary.main,
            lineHeight: "29px",
            textAlign: "right",
            fontSize: "1em",
          }}
        >
          {" "}
          Convert you $YETI. Stake your $rgnYETI on the Ragnar
        </Typography>{" "}
        <Typography
          sx={{
            color: (theme) => theme.palette.secondary.main,
            lineHeight: "29px",
            textAlign: "right",
            fontSize: "1em",
          }}
        >
          {" "}
          platform. Convert your $YETI Convert your $YETI to $rgnYETI. Stake
          your $rgnYETI on
        </Typography>{" "}
        <Typography
          sx={{
            color: (theme) => theme.palette.secondary.main,
            lineHeight: "29px",
            textAlign: "right",
            fontSize: "1em",
          }}
        >
          {" "}
          the Ragnar platform. Convert your $YETI Convert your $YETI to $rgn
        </Typography>{" "}
      </Grid>
    </Grid>
  );
};

export default SecondLevel;
