import { Button, Typography, Box, Grid, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import bigYeti from "../../assets/images/bigYeti.png";
import "../../index.css";

const FirstLevel = () => {
  let navigate = useNavigate();

  return (
    <Grid container direction="row" sx={{ width: "100%" }}>
      <Grid item xs={6}>
        <Grid container item alignItems={"center"}>
          <Grid item>
            <img height="40" src={logo} alt="Ragnar Logo" />
          </Grid>
          <Typography
            sx={{
              marginLeft: "1rem",
              fontSize: "20px",
              fontWeight: "700",
              color: (theme) => theme.palette.text.primary,
              lineHeight: "29px",
            }}
            variant="h6"
          >
            {" "}
            Ragnar
          </Typography>{" "}
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "500",
              color: (theme) => theme.palette.text.secondary,
              lineHeight: "29px",
            }}
            variant="h6"
            color="textPrimary"
          >
            {" "}
            Finance
          </Typography>{" "}
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "3.13rem",
              paddingTop: "1%",
            }}
          >
            The first
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "3.13rem",
              color: "#DE7650",
            }}
          >
            YETI
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "3.13rem",
            }}
          >
            boosting
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "3.13rem",
            }}
          >
            protocol
          </Typography>
        </Grid>
        <Grid container item direction="row">
          <Button
            variant="contained"
            onClick={() => {
              navigate("/farm");
            }}
            sx={{
              backgroundColor: "#DE7650",
              marginTop: "1%",
              /*    height: '50%',
            width: '10%', */
              fontSize: "16px",
              width: "fit-content",
            }}
          >
            Start farming !
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/farm");
            }}
            sx={{
              backgroundColor: "transparent",
              color: "#ddeaf2",
              marginTop: "1%",
              /*    height: '50%',
            width: '10%', */
              width: "fit-content",
              fontSize: "16px",
              marginLeft: "2rem",
            }}
          >
            How does it WORK ?
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            position: "relative",
            marginLeft: "auto",
            marginRight: "1px",
            width: "fit-content",
          }}
        >
          {" "}
          <CardMedia
            component="img"
            sx={{
              position: "relative",
              maxHeight: { xs: 233, md: 550 },
              maxWidth: { xs: 350, md: 550 },
              zIndex: 9,
            }}
            src={bigYeti}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FirstLevel;
