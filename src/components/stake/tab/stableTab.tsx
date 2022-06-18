import { Box, Typography, Tabs, Tab, Grid, Button } from "@mui/material";
import { FunctionComponent, useState } from "react";
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
  addressPool: string;
  pairAddress: string;
  pairName: string;
}

const StableTab: FunctionComponent<StableTabProps> = ({
  addressPool, pairAddress, pairName
}) => {

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Deposit"
            {...a11yProps(0)}
            style={{
              color: value === 0 ?"#ddeaf2":"#929ea6",
              fontWeight:"bold",
              textTransform: "none",
            }}
            sx={{ fontSize: { xs: "0.60em", sm: "1em" } }}
          />
          <Tab
            label="Withdraw"
            {...a11yProps(1)}
            style={{
              color: value === 1 ?"#ddeaf2":"#929ea6",
              fontWeight:"bold",
              textTransform: "none",
            }}
            sx={{ fontSize: { xs: "0.60em", sm: "1em" } }}
          />
          <Tab
            label="Info"
            style={{
              color: value === 2 ?"#ddeaf2":"#929ea6",
              fontWeight:"bold",
              textTransform: "none",
            }}
            {...a11yProps(2)}
            sx={{ fontSize: { xs: "0.60em", sm: "1em" } }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={pairName} display="Deposit" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" }, color: (theme) => theme.palette.text.primary }}>
              {" "}
              1
            </Grid>
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" }, color: (theme) => theme.palette.text.primary }}>
              2
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            {" "}
            <CustomInput poolName={pairName} />
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
            <CustomDisplay poolName={pairName} display="Withdraw" />
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
            <CustomInput poolName={pairName} />
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
                fontWeight: "bold",
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.text.primary,
                textTransform: "none",
                boxShadow: "none",
              }}
            >
              Withdraw
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography sx={{ fontSize: { xs: "0.65em", sm: "1em" }, color: (theme) => theme.palette.text.primary }}>
          {" "}
          Pools Contract:{"    "}
          <a href={`https://snowtrace.io/address/${addressPool}`}>
            {addressPool}
          </a>
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.65em", sm: "1em" }, color: (theme) => theme.palette.text.primary }}>
          {" "}
          {pairName} Contract:{"    "}
          <a href={`https://snowtrace.io/address/${pairAddress}`}>
            {pairAddress}
          </a>
        </Typography>
      </TabPanel>
    </Box>
  );
}

export default StableTab;