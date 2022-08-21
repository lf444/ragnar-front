import { Button, Typography, Box, Grid, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import bigYeti from "../../assets/images/bigYeti.png";
import "../../assets/styles/index.css";

const FirstLevel = () => {
  let navigate = useNavigate();

  return (
    <Grid container direction="row" sx={{ width: "100%" }}>
      <Grid item xs={12} sm={6}>
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
              fontSize: { xs: "1.5rem", sm: "2.13rem", lg: "3.13rem" },
              paddingTop: "1%",
            }}
          >
            The first
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: { xs: "1.5rem", sm: "2.13rem", lg: "3.13rem" },
              color: "#DE7650",
            }}
          >
            YETI
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: { xs: "1.5rem", sm: "2.13rem", lg: "3.13rem" },
            }}
          >
            boosting
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: { xs: "1.5rem", sm: "2.13rem", lg: "3.13rem" },
            }}
          >
            protocol
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction="row"
          sx={{ marginBottom: { xs: "10em", sm: 0 } }}
        >
          <Button
            variant="contained"
            onClick={() => {
              navigate("/farm");
            }}
            sx={{
              backgroundColor: "#DE7650",
              marginTop: "1%",
              fontSize: "16px",
              width: "fit-content",
              marginRight: { xs: 0, sm: "2em" },
            }}
          >
            Start farming !
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              window.open("https://ragnarfinance.gitbook.io/ragnar-finance/");
            }}
            sx={{
              backgroundColor: "transparent",
              color: "#ddeaf2",
              marginTop: "1%",
              width: "fit-content",
              fontSize: "12.7px",
            }}
          >
            How does it WORK ?
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={0} sm={6}>
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
              display: { xs: "none", sm: "flex" },
              maxHeight: { md: 550 },
              maxWidth: { md: 550 },
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
