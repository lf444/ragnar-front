import { Grid, Typography } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import PageHeader from "../shared/PageHeader";

import Funds from "../stake/funds/Funds";
import ClaimRewardsScreen from "./ClaimRewardsScreen";

const ClaimScreen = ({
  data,
  priceYusd,
  priceRgnYeti,
}: {
  data: any;
  priceYusd: number;
  priceRgnYeti: number;
}) => {
  return (
    <>
      <PageHeader pageTitle={`Ragnar finance - Claim`} />{" "}
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
            borderRadius: { xs: "0px", sm: "20px" },
          }}
        >
          <Grid item sx={{ width: "90%", paddingBottom: 0 }}>
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
              CLAIM REWARDS
            </Typography>
            <Funds
              priceYusd={priceYusd}
              priceRgnYeti={priceRgnYeti}
              shouldDisplaySecondTabPrice={false}
              data={data}
            />
          </Grid>
          <Grid item sx={{ width: "90%" }}>
            <ClaimRewardsScreen />
          </Grid>
        </Grid>
      </Zoom>
    </>
  );
};

export default ClaimScreen;
