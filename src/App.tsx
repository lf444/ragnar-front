import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home/Home";
import RagnarRoute from "./components/RagnarRoute";

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    // check if user is first time lauching the app and redirect to home
    if (localStorage.getItem("firstTime") === null) {
      localStorage.setItem("firstTime", "false");
      navigate("/home");
    }
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> d8abe5b (font + minor change responsive)
=======
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======


>>>>>>> 2b2829d (minor)
  return (
    <React.Fragment>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<RagnarRoute />} />
      </Routes>
      <ToastContainer
        style={{ backgroundColor: "#535b63" }}
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
