import { Box, Grid, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Fade from "@mui/material/Fade";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import StableTab from "./tab/stableTab";
import theme from "../../theme";
import RgnYetiStable from './tab/RgnYetiTable';

interface StableStakeComponentProps {
  pairName1: string;
  logo1: string;
  apr: number;
  stacked: number;
  tvl: number;
  claimable: number;
  addressPool: string;
  pairAddress: string;
  rgn: boolean;
  info: string;

}

const StableStakeComponent: FunctionComponent<StableStakeComponentProps> = ({
  pairName1, logo1, apr, stacked, tvl, claimable, addressPool, pairAddress, rgn, info
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
          paddingBottom:  open ?"10px": "0px",
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
          <img height="35px" style={{ position: "relative", left: "-0.75em" }} src={logo1} alt={`${logo1} Logo`} />
          <Typography
            sx={{
              fontSize: { xs: "0.5em", sm: "1.25em" },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {" "}
            {pairName1}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              marginTop: "2px",
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {" "}
            APR
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {apr}%
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              marginTop: "2px",
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {" "}
            Staked {pairName1}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {stacked} {pairName1}
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
            }}
          >
            ${tvl}
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
            Claimable
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {claimable}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{ marginTop: "2px", fontSize: { xs: "0.55em", sm: "1em" } }}
        >
          {" "}
          <LinearScaleIcon style={style} />
        </Grid>
      </Grid>
      
      {open && (
        <Fade in={open}>
          <Box sx={{ color: "#000000" }}>
            {rgn ? <RgnYetiStable /> : <StableTab addressPool={addressPool} pairAddress={pairAddress} pairName={pairName1} info={info} />}
          </Box>
        </Fade>
      )}

    </Box>
  );
};

export default StableStakeComponent;
