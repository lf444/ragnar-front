import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          /*           height: "100%", */
          paddingTop: {
            xl: "6%",
            lg: "4%",
            md: "2%",
            sm: "1%",
            xs: "0%",
          },
          paddingLeft: {
            xl: "10%",
            lg: "8%",
            md: "5%",
            sm: "2%",
            xs: "0%",
          },
          paddingRight: {
            xl: "5%",
            lg: "3%",
            md: "2%",
            sm: "1%",
            xs: "0%",
          },
        }}
      ></Grid>
    </>
  );
};

export default Home;
