import { Box, Grid, Typography } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import LockPool from "./LockPool";
import rgn from "../../assets/images/pools/rgn.png";
import Funds from "../stake/funds/Funds";
import MyNFT from "./MyNFT";
import theme from "../../theme";
import PageHeader from "../shared/PageHeader";
import { useState } from "react";

const LockRGN = ({
  userAddress,
  tokensPrices,
}: {
  userAddress: string | undefined;
  tokensPrices: {
    priceYeti: number;
    priceYusd: number;
    priceRgn: number;
    priceLpCurve: number;
    priceRgnYeti: number;
  };
}) => {
  return (
    <>
      <PageHeader pageTitle={`Ragnar finance - Lock`} />{" "}
      <Zoom in={true}>
        <Grid
          container
          direction="row"
          alignItems="center"
          sx={{
            marginBottom: "4rem",
            marginLeft: "auto",
            marginRight: "auto",
            width: {
              xs: "100%",
              sm: "65%",
            },
            borderRadius: { xs: "0px", sm: "20px" },
          }}
        >
          <Grid item sx={{ width: "100%", paddingBottom: 5 }}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: (theme) => theme.palette.text.primary,
                width: "fit-content",
                padding: 1,
                paddingTop: 4,
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            >
              LOCK RGN
            </Typography>
            <Funds
              shouldDisplaySecondTabPrice={true}
              userAddress={userAddress}
              shouldRefetchData={false}
              tokensPrices={tokensPrices}
            />
          </Grid>

          <Grid item xs={12} sx={{ width: "100%", mb: "25px", p: 1 }}>
            <LockPool
              pairName1={"RGN"}
              addressPool={"0x5817d4f0b62a59b17f75207da1848c2ce75e7af4"}
              logo1={rgn}
              type={"rgn"}
              openForScreen={true}
            />
          </Grid>
          <Grid item container xs={6} sx={{ width: "100%", p: 1 }}>
            {" "}
            <Grid
              item
              xs={12}
              sx={{
                color: (theme) => theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.main,
                borderRadius: "5px 5px 0 0",
                widthl: "100%",
                fontWeight: "bold",
                fontSize: { xs: "0.75em", sm: "1em" },
                pl: "1rem",
                pt: "0.5em",
                pb: "1rem",
                borderBottom: 2,
                borderColor: "divider",
                alignItems: "center",
              }}
            >
              My NFTs
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                width: "100%",
                marginBottom: "25px",
                backgroundColor: theme.palette.secondary.main,
                borderRadius: "0 0 5px 5px",
                paddingTop: 1,
                paddingBottom: 1,
                paddingLeft: 3,
                paddingRight: 3,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <MyNFT userAddress={userAddress} />
            </Grid>
          </Grid>
          <Grid item container xs={6} sx={{ width: "100%", p: 1 }}>
            {" "}
            <Grid
              item
              xs={12}
              sx={{
                color: (theme) => theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.main,
                borderRadius: "5px 5px 0 0",
                widthl: "100%",
                fontWeight: "bold",
                fontSize: { xs: "0.75em", sm: "1em" },
                pl: "1rem",
                pt: "0.5em",
                pb: "1rem",
                borderBottom: 2,
                borderColor: "divider",
                alignItems: "center",
              }}
            >
              Rewards
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                width: "100%",
                marginBottom: "25px",
                backgroundColor: theme.palette.secondary.main,
                borderRadius: "0 0 5px 5px",
                paddingTop: 1,
                paddingBottom: 1,
                paddingLeft: 3,
                paddingRight: 3,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Zoom>
    </>
  );
};

export default LockRGN;
