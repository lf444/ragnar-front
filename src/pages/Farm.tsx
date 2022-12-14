import { Grid } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Funds from "../components/shared/funds/Funds";
import PoolTab from "../components/stake/pools/PoolTab";
import { Typography } from "@mui/material";
import PageHeader from "../components/shared/PageHeader";
import { useState } from "react";

const Farm = ({
  userAddress,
  tokensPrices,
}: {
  userAddress: any;
  tokensPrices: {
    priceYeti: number;
    priceYusd: number;
    priceRgn: number;
    priceLpCurve: number;
    priceRgnYeti: number;
  };
}) => {
  const [shouldRefetchData, setShouldRefetchData] = useState(false);
  const handleRefetchDeposit = () => {
    setShouldRefetchData(true);
    setTimeout(() => setShouldRefetchData(false), 1500);
  };

  return (
    <>
      <PageHeader pageTitle={`Ragnar finance - Farm`} />{" "}
      <Zoom in={true}>
        <Grid
          container
          direction="column"
          alignItems="center"
          sx={{
            marginBottom: "4rem",
            marginLeft: "auto",
            marginRight: "auto",
            width: {
              xs: "100%",
              sm: "70%",
            },
          }}
        >
          <Grid item sx={{ width: "90%", paddingBottom: 2 }}>
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
              STAKE FUNDS
            </Typography>
            <Funds
              tokensPrices={tokensPrices}
              shouldDisplaySecondTabPrice
              userAddress={userAddress}
              shouldRefetchData={shouldRefetchData}
            />
          </Grid>
          <Grid item sx={{ width: "90%" }}>
            <PoolTab
              tokensPrices={tokensPrices}
              userAddress={userAddress}
              shouldRefetchData={shouldRefetchData}
              handleRefetchDeposit={handleRefetchDeposit}
            />
          </Grid>
        </Grid>
      </Zoom>
    </>
  );
};

export default Farm;
