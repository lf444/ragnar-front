
import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import StakeScreen from "./stake/StakeScreen";
import Navbar from "./Navbar";


const RagnarRoute = () => {

  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // check if user is first time lauching the app and redirect to home
    if (location.pathname === "/") {
      navigate("/stake");
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/stake" element={<StakeScreen />} />
      </Routes>
    </>
  );
};

export default RagnarRoute;
