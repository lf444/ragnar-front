import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import StakeScreen from './stake/StakeScreen';
import Navbar from './Navbar';
import ClaimRewards from './claim/Claim';
import LockRGN from './lock/Lock';

const RagnarRoute = () => {
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // check if user is first time lauching the app and redirect to home
    if (location.pathname === '/') {
      navigate('/stake');
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/stake' element={<StakeScreen />} />
        <Route path='/claim' element={<ClaimRewards />} />
        <Route path='/lock' element={<LockRGN />} />
      </Routes>
    </>
  );
};

export default RagnarRoute;
