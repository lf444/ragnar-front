import { Button, Typography, Box, Grid, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import bigYeti from "../../assets/images/bigYeti.png";
import "../../index.css";

const Home = () => {
  let navigate = useNavigate();

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
                  navigate("/stake");
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
                Start staking !
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  navigate("/stake");
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
        {" "}
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
      </Box>
    </Box>
  );
};

export default Home;
