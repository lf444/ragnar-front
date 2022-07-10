import { Grid } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Funds from "./funds/Funds";
import StakeStablePoolComponent from "./pools/PoolTab";
import { Typography } from "@mui/material";
import PageHeader from "../shared/PageHeader";
import { useState } from "react";

const StakeScreen = ({
  data,
  priceYusd,
  priceRgnYeti,
}: {
  data: any;
  priceYusd: number;
  priceRgnYeti: number;
}) => {
  const [shouldRefetchData, setShouldRefetchData] = useState(false);
  const handleRefetchDeposit = () => {
    setShouldRefetchData(!shouldRefetchData);
  };
  return (
    <>
      <PageHeader pageTitle={`Ragnar finance - Stake`} />{" "}
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
              priceYusd={priceYusd}
              priceRgnYeti={priceRgnYeti}
              shouldDisplaySecondTabPrice
              data={data}
              shouldRefetchData={shouldRefetchData}
            />
          </Grid>
          <Grid item sx={{ width: "90%" }}>
            <StakeStablePoolComponent
              priceYusd={priceYusd}
              priceRgnYeti={priceRgnYeti}
              data={data}
              shouldRefetchData={shouldRefetchData}
              handleRefetchDeposit={handleRefetchDeposit}
            />
          </Grid>
        </Grid>
      </Zoom>
    </>
  );
};

export default StakeScreen;
