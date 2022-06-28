import { Grid, Typography, Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import BoxReward from "./BoxReward";
import rgn from "../../assets/images/pools/rgn.png"
import yeti from "../../assets/images/pools/yeti.png"

const appTag: string = "ClaimRewardsScreen";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography  component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
          sx={{ height: "50%", pr:2, marginBottom:"5rem"}}
        >
          <Grid container sx={{backgroundColor: (theme) => theme.palette.secondary.main, height: "60px", borderRadius: "5px", borderBottom: 3, borderColor: "divider"}}>
            <Grid item xs={1.5} sx={{fontWeight: "bold", fontSize: "20px",  textAlign: 'center', marginTop: "8px", marginLeft: "5px"}}>
            <img height='40px' src={rgn}></img>
            </Grid>
            <Grid item xs={10} sm={10} md={6} lg={3} sx={{fontWeight: "bold", fontSize: {xs: "12px", md: "16px"} ,  textAlign: 'center', marginTop: "18px", color: (theme) => theme.palette.text.primary}}>
            Ragnar Pools
           </Grid>
           </Grid>
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
          <BoxReward pool1="RGNYETI"pool2="RGN" />
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ height: "50%", pr:2, marginBottom:"5rem"}}
        >
          <Grid container sx={{backgroundColor: (theme) => theme.palette.secondary.main, height: "60px", borderRadius: "5px", borderBottom: 3, borderColor: "divider", marginLeft: "15px"}}>
            <Grid item xs={10} md={8} lg={4} sx={{fontWeight: "bold", fontSize: {xs: "15px", md: "16px"},  textAlign: 'center', marginTop: "18px", color: (theme) => theme.palette.text.primary}}>
            Pools Rewards
           </Grid>
           </Grid>          
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
              marginLeft: "15px"
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
          sx={{ height: "50%", pr:2, marginBottom:"5rem"}}
        >
          <Grid container sx={{backgroundColor: (theme) => theme.palette.secondary.main, height: "60px", borderBottom: 3, borderColor: "divider", borderRadius: "5px"}}>
            <Grid item xs={1.5} sx={{fontWeight: "bold", fontSize: "20px",  textAlign: 'center', marginTop: "5px", marginLeft: "5px"}}>
            <img height='45px' src={yeti}></img>
            </Grid>
            <Grid item xs={9} md={5} lg={2.5} sx={{fontWeight: "bold", fontSize: {xs: "15px", md: "16px"},  textAlign: 'center', marginTop: "18px", color: (theme) => theme.palette.text.primary}}>
            Yeti Pools
           </Grid>
           </Grid>
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
          <BoxReward pool1="YUSD" pool2="LPCURVE" />
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ height: "50%", pr:2, marginBottom:"5rem"}}
        >
          <Grid container sx={{backgroundColor: (theme) => theme.palette.secondary.main, height: "60px", borderRadius: "5px", borderBottom: 3, borderColor: "divider", marginLeft: "15px"}}>
            <Grid item xs={10} md={8} lg={4} sx={{fontWeight: "bold", fontSize: {xs: "15px", md: "16px"},  textAlign: 'center', marginTop: "18px", color: (theme) => theme.palette.text.primary}}>
            Pools Rewards
           </Grid>
           </Grid>
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
              marginLeft: "15px"
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
      </Grid>
    </>
  );
};

export default ClaimRewardsScreen;
