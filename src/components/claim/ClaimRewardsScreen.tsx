import { Grid, Typography } from "@mui/material";

const appTag: string = "ClaimRewardsScreen";

const ClaimRewardsScreen = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ height: "500px" }}
      >
        <Grid
          item
          xs={6}
          sx={{ height: "50%", pr:2, marginBottom:"3rem"}}
        >
          <Grid
            item
            xs={12}
            container
            direction="row"
            sx={{
              p: 1,
              borderRadius: "5px",
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "100%",
            }}
          >
            <Grid item xs={12}>
              <Typography> RGN</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography> RGN</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography> RGN</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography> RGN</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ height: "50%" ,pl:2,width: "35%",marginBottom:"3rem"}}
        >
          {" "}
          <Grid
            item
            xs={12}
            container
            direction="row"
            sx={{
              p: 1,
              borderRadius: "5px",
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "100%",
            }}
          ></Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ height: "50%" ,pr:2}}
        >
          {" "}
          <Grid
            item
            xs={12}
            container
            direction="row"
            sx={{
              p: 1,
              borderRadius: "5px",
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "100%",
            }}
          ></Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ height: "50%" ,pl:2}}
        >
          {" "}
          <Grid
            item
            xs={12}
            container
            direction="row"
            sx={{
              p: 1,
              borderRadius: "5px",
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "100%",
            }}
          ></Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ClaimRewardsScreen;
