import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import RagnarRoute from "./components/RagnarRoute";

function App() {
  let navigate = useNavigate();

  /*
  useEffect(() => {
    // check if user is first time lauching the app and redirect to home
    if (localStorage.getItem("firstTime") === null) {
      localStorage.setItem("firstTime", "false");
      navigate("/home");
    }
  }, []);
    <Route path="/home" element={<Home />}></Route>

  */

  return (
    <React.Fragment>
      <Routes>
        <Route path="*" element={<RagnarRoute />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
}

export default App;
