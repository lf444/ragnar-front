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

export default function JoeTable() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          centered
          aria-label="basic tabs example"
        >
          <Tab label="Convert" {...a11yProps(0)} />
          <Tab label="Stake" {...a11yProps(1)} />
          <Tab label="Unstake" {...a11yProps(2)} />
          <Tab label="INFO" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"JOE"} display="Convert" />
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
            <CustomInput poolName={"JOE"} />
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
            <CustomDisplay poolName={"JOE"} display="Stake" />
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
            <CustomInput poolName={"JOE"} />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button variant="contained" sx={{ width: "45%" ,backgroundColor: (theme) => theme.palette.primary.light }}>
              APPROVE
            </Button>
            <Button variant="contained" sx={{ width: "45%",backgroundColor: (theme) => theme.palette.primary.light }}>
              DEPOSIT
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"JOE"} display="Unstake" />
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
            <Button variant="contained" sx={{ width: "45%" }}>
              WITHDRAW
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography sx={{ fontSize: "14px" }}>
          {" "}
          Joe Contract:{"    "}
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
