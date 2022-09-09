import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Farm from "../pages/Farm";
import Navbar from "./Navbar";
import Claim from "../pages/Claim";
import Lock from "../pages/Lock";
import { coinGeckoService } from "../services/coinGeckoService";
import { TOKEN_ID } from "../utils/constance";
import { useAccount } from "wagmi";
import Footer from "./shared/Footer";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Modal,
  useTheme,
  CardMedia,
  CardHeader,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

const RagnarRoute = () => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [tokensPrices, setTokensPrices] = useState({
    priceYeti: 0,
    priceYusd: 0,
    priceRgn: 0,
    priceAvax: 0,
    priceLpCurve: 1,
    priceRgnYeti: 0,
  });

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  // Change of account will trigger render on each fetch for personnal data and update the state accordingly
  const [userAddress, setUserAccount] = useState<any>(undefined);

  const { address, isConnected } = useAccount();
  let navigate = useNavigate();
  const location = useLocation();

  const getPrices = async () => {
    const yusdPrice = await coinGeckoService.getPrice(TOKEN_ID.yusd);
    const yetiprice = await coinGeckoService.getPrice(TOKEN_ID.yeti);
    const rgnPrice = await coinGeckoService.getPrice(TOKEN_ID.yeti);
    const avaxPrice = await coinGeckoService.getPrice(TOKEN_ID.avax);
    const lpCurvePrice = await coinGeckoService.getPrice(TOKEN_ID.lpCurve);
    setTokensPrices({
      ...tokensPrices,
      priceYeti: yetiprice,
      priceYusd: yusdPrice,
      priceRgn: rgnPrice,
      priceAvax: avaxPrice,
      priceLpCurve: 1,
      priceRgnYeti: rgnPrice,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getPrices().then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (isConnected && address) {
      setUserAccount(address);
    } else {
      setUserAccount(undefined);
    }
  }, [address]);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/farm");
    }
  }, [location]);

  return (
    <>
      <Navbar tokensPrices={tokensPrices} />
      <Button
        onClick={handleOpenModal}
        sx={{
          color: "#000000",
          backgroundColor: "#F2D6A9",
          borderRadius: "25px",
          position: "absolute",
          right: { sm: "3%", xs: "1%", lg: "5%" },
          top: "70%",
          height: "25px",
          textTransform: "none",
        }}
      >
        <HelpIcon />{" "}
        <Typography
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            marginLeft: "0.2em",
          }}
        >
          {" "}
          Help center
        </Typography>
      </Button>
      {!isLoading ? (
        <>
          <Routes>
            <Route
              path="*"
              element={
                <Farm userAddress={userAddress} tokensPrices={tokensPrices} />
              }
            />
            <Route
              path="/claim"
              element={
                <Claim tokensPrices={tokensPrices} userAddress={userAddress} />
              }
            />
            <Route
              path="/lock"
              element={
                <Lock tokensPrices={tokensPrices} userAddress={userAddress} />
              }
            />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          <CircularProgress
            size="6rem"
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
            }}
          />
          <Box sx={{ position: "fixed", left: 0, bottom: 0, right: 0 }}>
            <Footer />
          </Box>
        </>
      )}

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          direction="row"
          sx={{
            color: "#000000",
            backgroundColor: theme.palette.background.default,
            borderRadius: "5px 5px 5px 5px",
            width: "fit-content",
          }}
        >
          <Grid item sm={6}>
            <a
              href="https://ragnarfinance.gitbook.io/ragnar-finance/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  maxWidth: 250,
                  margin: "1em",
                  cursor: "pointer",
                  backgroundColor: theme.palette.secondary.main,
                }}
              >
                <CardHeader title="Documentation" />
                <CardMedia
                  component="img"
                  height="150"
                  image={require("../assets/images/gitbook.png")}
                  alt="gitbook image"
                />
              </Card>
            </a>
          </Grid>
          <Grid item sm={6}>
            <a
              href="https://discord.com/invite/MHHEYWTFyq"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  maxWidth: 250,
                  margin: "1em",
                  cursor: "pointer",
                  backgroundColor: theme.palette.secondary.main,
                }}
              >
                <CardHeader title="Discord" />
                <CardMedia
                  component="img"
                  height="150"
                  image={require("../assets/images/discord.jpg")}
                  alt="discord image"
                />
              </Card>
            </a>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default RagnarRoute;
