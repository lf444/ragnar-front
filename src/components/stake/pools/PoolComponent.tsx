import { Box, Grid, Typography, Tooltip, IconButton } from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { FunctionComponent, useState } from "react";
import Fade from "@mui/material/Fade";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import StableTab from "./tab/stableTab";
import theme from "../../../theme";
import RgnYetiStable from "./tab/RgnYetiTable";
import LinearProgress from "@mui/material/LinearProgress";
import { Pool } from "../../../abi/pools";

interface PoolComponentProps {
  pool: Pool;
  apr: number;
  stacked: number;
  tvl: number;
  claimable: number;
  masterchef: boolean;
  depositVeYeti: any;
  isLoading: boolean;
  aprInfo: any;
}

const PoolComponent: FunctionComponent<PoolComponentProps> = ({
  pool,
  apr,
  stacked,
  tvl,
  claimable,
  masterchef,
  depositVeYeti,
  isLoading,
  aprInfo,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const style = {
    transform: open ? "" : "rotate(90deg)",
    transition: "transform 150ms ease", // smooth transition
    color: "#ddeaf2",
  };

  return (
    <Box
      sx={{
        width: "100%",
        color: "#000000",
        marginBottom: "25px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "5px 5px 5px 5px",
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 3,
        paddingRight: 3,
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
        sx={{
          display: "flex",
          paddingBottom: open ? "10px" : "0px",
          borderBottom: open ? "3px solid #2f343a" : "none",
          textAlign: "center",
          cursor: "pointer",
          justifyContent: {
            xs: "space-between",
            sm: "center",
          },
        }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Grid
          item
          xs
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            paddingLeft: {
              xs: "10px",
              sm: "0px",
            },
          }}
        >
          <img
            height="35px"
            style={{ position: "relative", left: "-0.75em" }}
            src={pool.logo}
            alt={`${pool.pairName} Logo`}
          />{" "}
          <Typography
            sx={{
              fontSize: { xs: "0.5em", sm: "1.25em" },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {pool.pairName}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              marginTop: "2px",
              pr: { xs: "15px", sm: 0 },
              color: (theme) => theme.palette.text.secondary,
              display: { xs: "inline-block", sm: "block" },
              border: "1px solid transparent",
            }}
          >
            {" "}
            APR
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              fontWeight: "bold",
              color: "#D0BA97",
              display: { xs: "inline-block", sm: "block" },
              minHeight: "2em",
              border: "1px solid transparent",
            }}
          >
            {!isLoading ? (
              <>
                {apr + "%"}
                <Tooltip title={aprInfo}>
                  <InfoRoundedIcon
                    sx={{
                      color: (theme) => theme.palette.background.default,
                      fontSize: "1em",
                      marginLeft: "0.5em",
                    }}
                  />
                </Tooltip>
              </>
            ) : (
              <LinearProgress
                color="inherit"
                sx={{
                  width: "1.50rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "0.625em",
                  marginBottom: "0.625em",
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid item xs={0} sm={2} sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              marginTop: "2px",
              color: (theme) => theme.palette.text.secondary,
              border: "1px solid transparent",
            }}
          >
            {" "}
            Deposit
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
              border: "1px solid transparent",
              minHeight: "2em",
            }}
          >
            {!isLoading ? (
              stacked.toLocaleString("en")
            ) : (
              <LinearProgress
                sx={{
                  width: "1.25rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "0.625em",
                  marginBottom: "0.625em",
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid item xs={0} sm={2} sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              marginTop: "2px",
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {" "}
            TVL
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
              border: "1px solid transparent",
              minHeight: "2em",
            }}
          >
            {!isLoading ? (
              "$" + tvl.toLocaleString("en")
            ) : (
              <LinearProgress
                sx={{
                  marginTop: "0.625em",
                  marginBottom: "0.625em",
                  width: "1.25rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid item xs={0} sm={2} sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              marginTop: "2px",
              color: (theme) => theme.palette.text.secondary,
              border: "1px solid transparent",
            }}
          >
            {" "}
            Rewards
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
              minHeight: "2em",
              border: "1px solid transparent",
            }}
          >
            {!isLoading ? (
              "$" + claimable.toLocaleString("en")
            ) : (
              <LinearProgress
                sx={{
                  width: "1.25rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "0.625em",
                  marginBottom: "0.625em",
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{ marginTop: "2px", fontSize: { xs: "0.625em", sm: "1em" } }}
        >
          {" "}
          <LinearScaleIcon style={style} />
        </Grid>
      </Grid>

      {open && (
        <Fade in={open}>
          <Box sx={{ color: "#000000" }}>
            {pool.pairName === "yeti" ? (
              <RgnYetiStable depositVeYeti={depositVeYeti} />
            ) : (
              <StableTab pool={pool} masterchef={masterchef} />
            )}
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default PoolComponent;
