import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  avaxAltPoolAddress,
  avaxStablePoolAddress,
  otherPoolAddress,
  stablePoolAddress,
} from "../../abi/pools";
import PairTab from "./PairTab";

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

export default function StakeStablePoolComponent() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%",    maxHeight: {
      sx: "calc(100vh - 500px)",
      sm: "calc(100vh - 350px)",
      md: "calc(100vh - 450px)",
      lg: "calc(100vh - 450px)",
      xl: "calc(100vh - 450px)",
    }
, overflowY:"auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          variant="fullWidth"
          centered
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All Pool" {...a11yProps(0)} />
          <Tab label="Main Pool" {...a11yProps(1)} />
          <Tab label="Yeti Pool" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <PairTab pools={avaxStablePoolAddress} />
      <PairTab pools={avaxAltPoolAddress} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PairTab pools={avaxStablePoolAddress} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PairTab pools={avaxAltPoolAddress} />  
      </TabPanel>
    </Box>
  );
}
