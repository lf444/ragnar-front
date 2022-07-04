import { Grid, Typography, Box, Tabs, Tab, Button } from "@mui/material";
import { useState, FunctionComponent } from "react";
import LinearProgress from "@mui/material/LinearProgress";

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
    apr1: number;
    apr2: number;
    deposit1: number;
    deposit2: number;
    tvl1: number;
    tvl2: number;
    isLoading: boolean;
}

const BoxReward: FunctionComponent<
BoxRewardProps
> = ({ pool1, pool2, apr1, apr2, deposit1, deposit2, tvl1, tvl2, isLoading }) => { 


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
          <Grid 
            container
            sx={{
              width: "100%"
            }}
          >
            <Grid item xs={12} sx={{color: (theme) => theme.palette.text.primary, fontWeight: "bold", fontSize:  "13px", marginBottom: "10px"}} >
              APR: {!isLoading ? (
              (apr1)
            ) : ( <LinearProgress
              color="inherit"
              sx={{
                width: "1.50rem"
              }} 
            /> 
            )}%
            </Grid>
            <Grid item xs={12} sx={{color: (theme) => theme.palette.text.primary, fontWeight: "bold", fontSize: "13px", marginBottom: "10px"}} >
              Your deposit: {!isLoading ? (
              (deposit1) 
            ) : ( <LinearProgress
              color="inherit"
              sx={{
                width: "1.50rem"
              }} 
            /> 
            )} {pool1}
            </Grid>
            <Grid item xs={12} sx={{color: (theme) => theme.palette.text.primary, fontWeight: "bold", fontSize: "13px",  marginBottom: "10px"}} >
              TVL: ${!isLoading ? (
              (tvl1)
            ) : ( <LinearProgress
              color="inherit"
              sx={{
                width: "1.50rem"
              }} 
            /> 
            )}
            </Grid>
          </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <Grid 
            container
            sx={{
              width: "100%"
            }}
          >
            <Grid item xs={12} sx={{color: (theme) => theme.palette.text.primary, fontWeight: "bold", fontSize:  "13px", marginBottom: "10px"}} >
              APR: {!isLoading ? (
              (apr2)
            ) : ( <LinearProgress
              color="inherit"
              sx={{
                width: "1.50rem"
              }} 
            /> 
            )}%
            </Grid>
            <Grid item xs={12} sx={{color: (theme) => theme.palette.text.primary, fontWeight: "bold", fontSize: "13px", marginBottom: "10px"}} >
              Your deposit: {!isLoading ? (
              (deposit2) 
            ) : ( <LinearProgress
              color="inherit"
              sx={{
                width: "1.50rem"
              }} 
            /> 
            )} {pool2}
            </Grid>
            <Grid item xs={12} sx={{color: (theme) => theme.palette.text.primary, fontWeight: "bold", fontSize: "13px",  marginBottom: "10px"}} >
              TVL: ${!isLoading ? (
              (tvl2)
            ) : ( <LinearProgress
              color="inherit"
              sx={{
                width: "1.50rem"
              }} 
            /> 
            )}
            </Grid>
          </Grid>
          </TabPanel>
    </>
  );
};

export default BoxReward;
