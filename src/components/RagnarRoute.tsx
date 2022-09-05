<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0eef68e (fix: useProvider of rainbowKit to get data without connecting on wallet)
=======
>>>>>>> e8b2f8c (dev: repare page)
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import StakeScreen from './stake/StakeScreen';
import Navbar from './Navbar';
<<<<<<< HEAD
import ClaimRewards from './claim/Claim';
import LockRGN from './lock/Lock';
import { coinGeckoService } from '../services/coinGeckoService';
import { TOKEN_ID } from '../utils/constance';
<<<<<<< HEAD
<<<<<<< HEAD
import { useAccount } from 'wagmi'

=======
import Footer from './Footer';
>>>>>>> 0098540 (Claim bientot fini + footer)
=======
=======
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
>>>>>>> 92f4ef0 (dev: re-deploy)
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Farm from "../pages/Farm";
import Navbar from "./Navbar";
import Claim from "../pages/Claim";
import Lock from "../pages/Lock";
import { coinGeckoService } from "../services/coinGeckoService";
import { TOKEN_ID } from "../utils/constance";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useAccount } from "wagmi";
import Footer from "./Footer";
>>>>>>> 03050fe (dev: add loader when fetch)
=======
import { useAccount } from 'wagmi';
import Footer from './Footer';
>>>>>>> 0eef68e (fix: useProvider of rainbowKit to get data without connecting on wallet)
=======
import { useAccount, useWaitForTransaction } from "wagmi";
<<<<<<< HEAD
import Footer from "./Footer";
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
=======
import { useAccount } from "wagmi";
>>>>>>> f125765 (dev: refactor claim screen + add timeout on refetchData)
import Footer from "./shared/Footer";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b84f72d (dev: component re-organise)
=======
import { CircularProgress } from "@mui/material";
>>>>>>> 2fe4e23 (dev: improve loading on landing)
=======
import ClaimScreen from './claim/ClaimScreen';
import LockRGN from './lock/Lock';
=======
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Farm from '../pages/Farm';
import Navbar from './Navbar';
import Claim from '../pages/Claim';
import Lock from '../pages/Lock';
>>>>>>> 5a5daed (dev: add claim image when not connected or no stake at all)
import { coinGeckoService } from '../services/coinGeckoService';
import { TOKEN_ID } from '../utils/constance';
import { useAccount } from 'wagmi';
import Footer from './shared/Footer';
<<<<<<< HEAD
import { CircularProgress } from '@mui/material';
>>>>>>> e8b2f8c (dev: repare page)
=======
import { Box, CircularProgress } from "@mui/material";
>>>>>>> 63997b5 (dev: test footer)
=======
=======
>>>>>>> 5a5daed (dev: add claim image when not connected or no stake at all)
=======
import { useAccount } from "wagmi";
import Footer from "./shared/Footer";
>>>>>>> 92f4ef0 (dev: re-deploy)
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
<<<<<<< HEAD
<<<<<<< HEAD
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
>>>>>>> abc1331 (dev: add help center)
=======
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
>>>>>>> 5a5daed (dev: add claim image when not connected or no stake at all)
=======
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
>>>>>>> 92f4ef0 (dev: re-deploy)

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (location.pathname === "/") {
      navigate("/farm");
=======
    if (location.pathname === '/') {
      navigate('/stake');
>>>>>>> e8b2f8c (dev: repare page)
=======
    if (location.pathname === '/') {
      navigate('/farm');
>>>>>>> 5a5daed (dev: add claim image when not connected or no stake at all)
=======
    if (location.pathname === "/") {
      navigate("/farm");
>>>>>>> 92f4ef0 (dev: re-deploy)
    }
  }, [location]);

  return (
    <>
      <Navbar tokensPrices={tokensPrices} />
<<<<<<< HEAD
<<<<<<< HEAD
      <Routes>
        <Route
<<<<<<< HEAD
          path="/farm"
=======
          path='/farm'
>>>>>>> e8b2f8c (dev: repare page)
          element={
            <StakeScreen
              userAddress={userAddress}
              tokensPrices={tokensPrices}
            />
          }
        />
        <Route
          path='/claim'
          element={
            <ClaimScreen
              tokensPrices={tokensPrices}
              userAddress={userAddress}
            />
          }
        />
        <Route
<<<<<<< HEAD
          path='/lock'
          element={<LockRGN tokensPrices={tokensPrices} data={userAccount} />}
=======
          path="/lock"
          element={
            <LockRGN tokensPrices={tokensPrices} userAddress={userAddress} />
          }
>>>>>>> 4485386 (dev: better metamask connexion gestion)
        />
      </Routes>
    </>
  ) : (
    <>
      <Navbar tokensPrices={tokensPrices} />
      <CircularProgress
        size='6rem'
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
        }}
      />
=======
=======
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
>>>>>>> abc1331 (dev: add help center)
      {!isLoading ? (
        <>
          <Routes>
            <Route
              path="/farm"
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
<<<<<<< HEAD
>>>>>>> 2605053 (dev: files arch changes & navbar amelioration)
=======

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
>>>>>>> abc1331 (dev: add help center)
    </>
  );
};

export default RagnarRoute;
