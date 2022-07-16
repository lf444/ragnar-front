<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0eef68e (fix: useProvider of rainbowKit to get data without connecting on wallet)
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import StakeScreen from './stake/StakeScreen';
import Navbar from './Navbar';
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
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import StakeScreen from "./stake/StakeScreen";
import Navbar from "./Navbar";
import ClaimScreen from "./claim/ClaimScreen";
import LockRGN from "./lock/Lock";
import { coinGeckoService } from "../services/coinGeckoService";
import { TOKEN_ID } from "../utils/constance";
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
>>>>>>> b84f72d (dev: component re-organise)
=======
import { CircularProgress } from "@mui/material";
>>>>>>> 2fe4e23 (dev: improve loading on landing)

const RagnarRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tokensPrices, setTokensPrices] = useState({
    priceYeti: 0,
    priceYusd: 0,
    priceRgn: 0,
    priceLpCurve: 0,
    priceRgnYeti: 0,
  });

  // Change of account will trigger render on each fetch for personnal data and update the state accordingly
  const [userAccount, setUserAccount] = useState<any>(undefined);

  const { data, error } = useAccount();
  let navigate = useNavigate();
  const location = useLocation();

  const getPrices = async () => {
    const yusdPrice = await coinGeckoService.getPrice(TOKEN_ID.yusd);
    const yetiprice = await coinGeckoService.getPrice(TOKEN_ID.yeti);
    const rgnPrice = await coinGeckoService.getPrice(TOKEN_ID.yeti);
    const lpCurvePrice = await coinGeckoService.getPrice(TOKEN_ID.lpCurve);
    setTokensPrices({
      ...tokensPrices,
      priceYeti: yetiprice,
      priceYusd: yusdPrice,
      priceRgn: rgnPrice,
      priceLpCurve: 1,
      priceRgnYeti: 1,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getPrices().then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (data) {
      setUserAccount(data);
    } else {
      setUserAccount(undefined);
    }
  }, [data]);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/stake");
    }
  }, [location]);

  return !isLoading ? (
    <>
      <Navbar tokensPrices={tokensPrices} />
      <Routes>
        <Route
          path="/stake"
          element={
            <StakeScreen data={userAccount} tokensPrices={tokensPrices} />
          }
        />
        <Route
          path="/claim"
          element={
            <ClaimScreen tokensPrices={tokensPrices} data={userAccount} />
          }
        />
        <Route
          path="/lock"
          element={<LockRGN tokensPrices={tokensPrices} data={userAccount} />}
        />
      </Routes>
    </>
  ) : (
    <>
      <Navbar tokensPrices={tokensPrices} />
      <CircularProgress
        size="6rem"
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
        }}
      />
    </>
  );
};

export default RagnarRoute;
