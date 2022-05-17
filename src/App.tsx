import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import StakeScreen from "./components/stake/StakeScreen";

import Notfound from "./pages/Notfound";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<StakeScreen />}></Route>
        <Route path="/stake" element={<StakeScreen />}></Route>
        {/*  <Route path="/claim" element={<Claim />}></Route>
        <Route path="/lock" element={<Lock />}></Route> */}
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
