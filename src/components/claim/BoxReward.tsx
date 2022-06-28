import { Grid, Typography, Box, Tabs, Tab } from "@mui/material";
import { useState, FunctionComponent } from "react";

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
interface BoxRewardProps {
    pool1: string;
    pool2: string;
}

const BoxReward: FunctionComponent<
BoxRewardProps
> = ({ pool1, pool2 }) => { 


const [value, setValue] = useState(0);

const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  return (
    <>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                centered
                aria-label="basic tabs example"
                
              >
                <Tab label={pool1} {...a11yProps(0)} style={{
                  color: value === 0 ?"#ddeaf2":"#929ea6",
                    textTransform: "none",
                  }} />
                <Tab label={pool2} {...a11yProps(1)} style={{
                  color: value === 1 ?"#ddeaf2":"#929ea6",
                    textTransform: "none",
                  }} />
              </Tabs>
            </Box>
          </Box>
          <TabPanel value={value} index={0}>
            ghj
          </TabPanel>
    </>
  );
};

export default BoxReward;
