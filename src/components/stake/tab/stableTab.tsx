import { Box, Typography, Tabs, Tab, Grid, Button, Input } from "@mui/material";
import React from "react";
import { Pools } from "../../../abi/pools";
import CustomInput from "../../shared/CustomInput";
import CustomDisplay from "../../shared/CustomDisplay";
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
          <Typography>{children}</Typography>
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

interface StableTabProps {
  pool: Pools;
}

export default function StableTab(props: StableTabProps) {
  const { pool } = props;

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          variant="fullWidth"
          centered
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Deposit" {...a11yProps(0)} sx={{fontSize:"14px"}}/>
          <Tab label="Withdraw" {...a11yProps(1)} sx={{fontSize:"14px"}} />
          <Tab label="INFO" {...a11yProps(2)}  sx={{fontSize:"14px"}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={pool.pairName1} display="deposit" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item xs={6}>
              {" "}
              1
            </Grid>
            <Grid item xs={6}>
              2
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            {" "}
            <CustomInput poolName={pool.pairName1} />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button variant="contained" sx={{ width: "45%" }}>
              APPROVE
            </Button>
            <Button variant="contained" sx={{ width: "45%" }}>
              DEPOSIT
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={pool.pairName1} display="withdraw" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item xs={6}>
              {" "}
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
          <Grid item container xs={6}>
            {" "}
            <CustomInput poolName={pool.pairName1} />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button variant="contained" sx={{ width: "45%" }}>
              WITHDRAW
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography sx={{ fontSize: "14px" }}>
          {" "}
          {pool.pairName1}-{pool.pairName2} Contract:{"    "}
          <a href={`https://snowtrace.io/address/${pool.address}`}>
            {pool.address}
          </a>
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>
          {" "}
          {pool.pairName1} Contract:{"    "}
          <a href={`https://snowtrace.io/address/${pool.pairAddress1}`}>
            {pool.pairAddress1}
          </a>
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>
          {" "}
          {pool.pairName2} Contract:{"    "}
          <a href={`https://snowtrace.io/address/${pool.pairAddress2}`}>
            {pool.pairAddress2}
          </a>
        </Typography>
      </TabPanel>
    </Box>
  );
}
