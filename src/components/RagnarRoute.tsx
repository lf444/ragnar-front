import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import StakeScreen from './stake/StakeScreen';
import Navbar from './Navbar';
import ClaimRewards from './claim/Claim';
import LockRGN from './lock/Lock';
import { coinGeckoService } from '../services/coinGeckoService';
import { TOKEN_ID } from '../utils/constance';

const RagnarRoute = () => {

  const [priceYusd, SetPriceYusd] = useState(0);
  const [priceRgnYeti, SetPriceRgnYeti] = useState(0);
  const [priceYeti, setPriceYeti] = useState(0);
  const [priceRgn, setPriceRgn] = useState(0);


  const getPrices = async () => {
    await coinGeckoService.getPrice(TOKEN_ID.yusd).then((r) => SetPriceYusd(r));
    await coinGeckoService
      .getPrice(TOKEN_ID.yeti)
      .then((r) => SetPriceRgnYeti(r));
      await coinGeckoService.getPrice(TOKEN_ID.yeti).then((r) => setPriceYeti(r));
      await coinGeckoService.getPrice(TOKEN_ID.yeti).then((r) => setPriceRgn(r));
  };

  useEffect(() => {
    getPrices();
  }, []);

  
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/stake');
    }
  }, [location]);
  return (
    <>
      <Navbar priceYeti={priceYeti} priceRgn={priceRgn} />
      <Routes>
        <Route path='/stake' element={<StakeScreen priceYusd={priceYusd} priceRgnYeti={priceRgnYeti} />} />
        <Route path='/claim' element={<ClaimRewards priceYusd={priceYusd} priceRgnYeti={priceRgnYeti}/>} />
        <Route path='/lock' element={<LockRGN priceYusd={priceYusd} priceRgnYeti={priceRgnYeti}/> } />
      </Routes>
    </>
  );
};

export default RagnarRoute;
