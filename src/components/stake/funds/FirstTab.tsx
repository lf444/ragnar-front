import { Grid, Typography } from "@mui/material";

const FundsFirstTabs = ({
    deposit,
    reward,
    valuelocked,
  }: {
    deposit: number;
    reward: number;
    valuelocked: number;
  }) => {
    return (
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: "3%" }}
      >
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          display="flex"
          xs={3.75}
          sm={3}
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            borderRadius: "5px",
            textAlign: "center",
  
            p: 1,
          }}
        >
          <Grid item>
            <Typography
              sx={{
                fontSize: {
                  lg: "1em",
                  md: "1em",
                  sm: "1em",
                  xs: "0.50rem",
                },
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              {" "}
              YOUR DEPOSIT
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "1em",
                  md: "1em",
                  sm: "1em",
                  xs: "0.50rem",
                },
                fontWeight: "bold",
                color: (theme) => theme.palette.text.primary,
              }}
            >
              ${deposit.toLocaleString('en')} USD
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          display="flex"
          xs={3.75}
          sm={3}
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            borderRadius: "5px",
            textAlign: "center",
  
            p: 1,
          }}
        >
          <Grid item >
            <Typography
              sx={{
                fontSize: {
                  lg: "1em",
                  md: "1em",
                  sm: "1em",
                  xs: "0.50rem",
                },
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              {" "}
              YOUR REWARDS
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "1em",
                  md: "1em",
                  sm: "1em",
                  xs: "0.50rem",
                },
                fontWeight: "bold",
                color:"#D0BA97",
              }}
            >
              ${reward.toLocaleString('en')} USD
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          display="flex"
          xs={3.75}
          sm={3}
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            borderRadius: "5px",
            textAlign: "center",
  
            p: 1,
          }}
        >
          <Grid item>
            <Typography
              sx={{
                fontSize: {
                  lg: "1em",
                  md: "1em",
                  sm: "1em",
                  xs: "0.50rem",
                },
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              TOTAL VALUE LOCKED
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "1em",
                  md: "1em",
                  sm: "1em",
                  xs: "0.50rem",
                },
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
              }}
            >
              ${valuelocked.toLocaleString('en')} USD
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  

export default FundsFirstTabs;
