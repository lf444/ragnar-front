import { Box, Typography, Tabs, Tab, Button, Grid } from "@mui/material";
import React from "react";
import CustomDisplay from "../../shared/CustomDisplay";
import CustomInput from "../../shared/CustomInput";
import MyNFT from "../MyNFT";
import threemonth from "../../../assets/images/3months.png"

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
          <Tab label="3 MONTHS" {...a11yProps(0)}    style={{
            color: value === 0 ?"#ddeaf2":"#929ea6",
              textTransform: "none",
            }} />
          <Tab label="6 MONTHS" {...a11yProps(1)}   style={{
              color: value === 1 ?"#ddeaf2":"#929ea6",
              textTransform: "none",
            }} />
          <Tab label="1 YEAR" {...a11yProps(2)}    style={{
              color: value === 2 ?"#ddeaf2":"#929ea6",
              textTransform: "none",
            }} />
          <Tab label="2 YEARS" {...a11yProps(3)}    style={{
              color: value === 3 ?"#ddeaf2":"#929ea6",
              textTransform: "none",
            }} />
          <Tab label="3 YEARS" {...a11yProps(4)}    style={{
              color: value === 4 ?"#ddeaf2":"#929ea6",
              textTransform: "none",
            }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid sx={{width: "100%"}} container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGN"} display="Deposit" />
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
              variant="contained" sx={{ width: "45%" ,backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}
            >
              Approve
            </Button>
            <Button
              variant="contained" sx={{ width: "45%" ,backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}
            >
              Lock
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGN"} display="Deposit" />
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
              variant="contained" sx={{ width: "45%" ,backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}
            >
              Approve
            </Button>
            <Button
              variant="contained" sx={{ width: "45%" ,backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}
            >
              Lock
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGN"} display="Deposit" />
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
              variant="contained" sx={{ width: "45%" ,backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}
            >
              Approve
            </Button>
            <Button
              variant="contained" sx={{ width: "45%" ,backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}
            >
              Lock
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGN"} display="Deposit" />
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
              variant="contained" sx={{ width: "45%" ,backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}
            >
              Approve
            </Button>
            <Button
              variant="contained" sx={{ width: "45%" ,backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}
            >
              Lock
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGN"} display="Deposit" />
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
              variant="contained" sx={{ width: "45%" ,backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}
            >
              Approve
            </Button>
            <Button
              variant="contained" sx={{ width: "45%" ,backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}
            >
              Lock
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
}
