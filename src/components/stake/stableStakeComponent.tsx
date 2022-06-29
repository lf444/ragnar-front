import { Box, Grid, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Fade from "@mui/material/Fade";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import StableTab from "./tab/stableTab";
import theme from "../../theme";
import RgnYetiStable from "./tab/RgnYetiTable";

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
  deposit: any;
  withdraw: any;
  approve: any;
  masterchef: boolean;
  depositVeYeti: any;
}

const StableStakeComponent: FunctionComponent<StableStakeComponentProps> = ({
  pairName1,
  logo1,
  apr,
  stacked,
  tvl,
  claimable,
  addressPool,
  pairAddress,
  rgn,
  info,
  deposit,
  withdraw,
  approve,
  masterchef,
  depositVeYeti,
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
            src={logo1}
            alt={`${logo1} Logo`}
          />
            {" "}
            {rgn ? (
       <Typography
        sx={{
        fontSize: { xs: "0.5em", sm: "1.25em" },
        fontWeight: "bold",
        color: (theme) => theme.palette.text.primary,
        }}
        >
          {pairName1} 
        </Typography>
            ) : (
              <Typography
         sx={{
          fontSize: { xs: "0.5em", sm: "1.25em" },
          fontWeight: "bold",
          color: (theme) => theme.palette.text.primary,
            }}
            >
           {pairName1} 
        </Typography>
            )}
        </Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              marginTop: "2px",
              pr: { xs: "15px", sm: 0 },
              color: (theme) => theme.palette.text.secondary,
              display: { xs: "inline-block", sm: "block" },
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
            }}
          >
            {apr}%
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
            Deposit
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {stacked.toLocaleString('en')} {pairName1}
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
            ${tvl.toLocaleString('en')}
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
            Rewards
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.75em", sm: "1em" },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            ${claimable.toLocaleString('en')}
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
            {rgn ? (
              <RgnYetiStable
                deposit={deposit}
                withdraw={withdraw}
                approve={approve}
                depositVeYeti={depositVeYeti}
              />
            ) : (
              <StableTab
                addressPool={addressPool}
                pairAddress={pairAddress}
                pairName={pairName1}
                info={info}
                deposit={deposit}
                withdraw={withdraw}
                approve={approve}
                masterchef={masterchef}
              />
            )}
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default StableStakeComponent;
