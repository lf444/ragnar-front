import { Grid, Typography, Button } from "@mui/material";
import { FunctionComponent } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { formatPrice } from "../../utils/method";

interface ClaimPoolProps {
  pool: string;
  apr: number;
  deposit: number;
  tvl: number;
  isLoading: boolean;
}

const ClaimPool: FunctionComponent<ClaimPoolProps> = ({
  pool,
  apr,
  deposit,
  tvl,
  isLoading,
}) => {
  return (
    <Grid
      container
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      sx={{
        marginTop: "1em",
        marginBottom: "10px",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          color: (theme) => theme.palette.text.primary,
          fontWeight: "bold",
          fontSize: { md: "13px", xs: "8px" },
        }}
      >
        <Typography sx={{ pt: "1rem" }}> Pool Balance:</Typography>
      </Grid>
      <Grid
        container
        item
        xs
        alignItems="flex-end"
        justifyContent="space-around"
      >
        <Grid
          item
          sx={{
            color: (theme) => theme.palette.text.primary,
            fontWeight: "bold",
            fontSize: { md: "13px", xs: "8px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ marginRight: "0.5em" }}>APR</Typography>
          {!isLoading ? (
            apr + "%"
          ) : (
            <LinearProgress
              color="inherit"
              sx={{
                marginTop: "0.625em",
                marginBottom: "0.625em",
                width: "1.25rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          )}
        </Grid>
        <Grid
          item
          sx={{
            color: (theme) => theme.palette.text.primary,
            fontWeight: "bold",
            fontSize: { md: "13px", xs: "8px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ marginRight: "0.5em" }}>Deposit</Typography>
          {!isLoading ? (
            deposit + " " + pool
          ) : (
            <LinearProgress
              color="inherit"
              sx={{
                marginTop: "0.625em",
                marginBottom: "0.625em",
                width: "1.25rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          )}{" "}
        </Grid>
        <Grid
          item
          sx={{
            color: (theme) => theme.palette.text.primary,
            fontWeight: "bold",
            fontSize: { md: "13px", xs: "8px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ marginRight: "0.5em" }}>TVL</Typography>
          {!isLoading ? (
            formatPrice(tvl, "USD")
          ) : (
            <LinearProgress
              color="inherit"
              sx={{
                marginTop: "0.625em",
                marginBottom: "0.625em",
                width: "1.25rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ClaimPool;
