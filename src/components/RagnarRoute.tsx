<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import StakeScreen from './stake/StakeScreen';
import Navbar from './Navbar';
import ClaimRewards from './claim/Claim';
import LockRGN from './lock/Lock';
import { coinGeckoService } from '../services/coinGeckoService';
import { TOKEN_ID } from '../utils/constance';
<<<<<<< HEAD
import { useAccount } from 'wagmi'

=======
import Footer from './Footer';
>>>>>>> 0098540 (Claim bientot fini + footer)
=======
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import StakeScreen from "./stake/StakeScreen";
import Navbar from "./Navbar";
import ClaimRewards from "./claim/Claim";
import LockRGN from "./lock/Lock";
import { coinGeckoService } from "../services/coinGeckoService";
import { TOKEN_ID } from "../utils/constance";
import { useAccount } from "wagmi";
import Footer from "./Footer";
>>>>>>> 03050fe (dev: add loader when fetch)

const RagnarRoute = () => {
  const [priceYusd, SetPriceYusd] = useState(0);
  const [priceRgnYeti, SetPriceRgnYeti] = useState(0);
  const [priceYeti, setPriceYeti] = useState(0);
  const [priceRgn, setPriceRgn] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Change of account will trigger render on each fetch for personnal data and update the state accordingly
  const [userAccount, setUserAccount] = useState<any>(undefined);

  const { data, error } = useAccount();
  const getPrices = async () => {
    await coinGeckoService.getPrice(TOKEN_ID.yusd).then((r) => SetPriceYusd(r));
    await coinGeckoService
      .getPrice(TOKEN_ID.yeti)
      .then((r) => SetPriceRgnYeti(r));
    await coinGeckoService.getPrice(TOKEN_ID.yeti).then((r) => setPriceYeti(r));
    await coinGeckoService.getPrice(TOKEN_ID.yeti).then((r) => setPriceRgn(r));
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getPrices();
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
      setUserAccount(data);
    } else {
      setUserAccount(undefined);
    }
  }, [data]);

  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/stake");
    }
  }, [location]);
  return (
    <>
      <Navbar priceYeti={priceYeti} priceRgn={priceRgn} />
      <Routes>
        <Route
          path="/stake"
          element={
            <StakeScreen
              priceYusd={priceYusd}
              priceRgnYeti={priceRgnYeti}
              data={userAccount}
            />
          }
        />
        <Route
          path="/claim"
          element={
            <ClaimRewards
              priceYusd={priceYusd}
              priceRgnYeti={priceRgnYeti}
              data={userAccount}
            />
          }
        />
        <Route
          path="/lock"
          element={
            <LockRGN
              priceYusd={priceYusd}
              priceRgnYeti={priceRgnYeti}
              data={userAccount}
            />
          }
        />
      </Routes>
    </>
  );
};

export default RagnarRoute;
