import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home/Home";
import RagnarRoute from "./components/RagnarRoute";


function App() {
  let navigate = useNavigate();

  useEffect(() => {
    // check if user is first time lauching the app and redirect to home
    if (localStorage.getItem("firstTime") === null) {
      localStorage.setItem("firstTime", "false");
      //navigate("/home");
    }
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<RagnarRoute />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
