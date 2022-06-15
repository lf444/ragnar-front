import { Box, Typography, Tabs, Tab, Button, Grid } from "@mui/material";
import React from "react";
import CustomDisplay from "../../shared/CustomDisplay";
import CustomInput from "../../shared/CustomInput";

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
        <Box sx={{ p: 3 }}>
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

export default function RGNTableLock() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" ,boxShadow:"none"}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" ,boxShadow:"none" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          centered
          aria-label="basic tabs example"
        >
          <Tab label="Stake" {...a11yProps(0)}    style={{
              color: value === 0 ?"#ddeaf2":"#929ea6",
              fontWeight:"bold",
              textTransform: "none",
            }} />
          <Tab label="Unstake" {...a11yProps(1)}   style={{
              color: value === 1 ?"#ddeaf2":"#929ea6",
              fontWeight:"bold",
              textTransform: "none",
            }} />
          <Tab label="INFO" {...a11yProps(2)}    style={{
              color: value === 2 ?"#ddeaf2":"#929ea6",
              fontWeight:"bold",
              textTransform: "none",
            }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGN"} display="deposit" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" } }}>
              {" "}
              1
            </Grid>
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" } }}>
              2
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            {" "}
            <CustomInput poolName={"RGN"} />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              variant="contained"
              sx={{
                width: "45%",
                height: "80%",
                fontSize: { xs: "0.95em", sm: "0.95em" },
                borderRadius:"10px",
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "none",
              }}
            >
              Approve
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "45%",
                height: "80%",
                fontSize: { xs: "0.95em", sm: "0.95em" },
                borderRadius:"10px",
                fontWeight: "bold",
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.text.primary,
                textTransform: "none",
                boxShadow: "none",
              }}
            >
              Deposit
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGN"} display="Unstake" />
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
            <CustomInput poolName={"JOE"} />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button variant="contained"   sx={{
                width: "45%",
                height: "80%",
                fontSize: { xs: "0.95em", sm: "0.95em" },
                borderRadius:"10px",
                fontWeight: "bold",
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.text.primary,
                textTransform: "none",
                boxShadow: "none",
              }}>
              Unstake
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography sx={{ fontSize: "14px" }}>
          {" "}
          RGN Contract:{"    "}
          <a
            href={`https://snowtrace.io/address/0x3bc40d4307cd946157447cd55d70ee7495ba6140`}
          >
            {"0x3bc40d4307cd946157447cd55d70ee7495ba6140"}
          </a>
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>
          {" "}
          Staking Contract:{"    "}
          <a
            href={`https://snowtrace.io/address/0x3bc40d4307cd946157447cd55d70ee7495ba6140`}
          >
            {"0x3bc40d4307cd946157447cd55d70ee7495ba6140"}
          </a>
        </Typography>
      </TabPanel>
    </Box>
  );
}
