import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  avaxAltPoolAddress,
  avaxStablePoolAddress,
  otherPoolAddress,
  stablePoolAddress,
} from '../../abi/pools';
import PairTab from './PairTab';
import { textTransform } from '@mui/system';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            paddingTop: 3,
            overflowY: 'overlay',
            paddingBottom: 10,
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function StakeStablePoolComponent() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box sx={{ borderBottom: 1, paddingBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          variant='fullWidth'
          centered
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab
            label='All Pool'
            {...a11yProps(0)}
            style={{
              color: value === 0 ?"#ddeaf2":"#929ea6",
              fontWeight:"bold",
              textTransform: "none",
            }}
            sx={{
              fontSize: {
                lg: '1em',
                md: '1em',
                sm: '1em',
                xs: '0.75em',
              },
              
            }}
          />
          <Tab
            label='Main Pool'
            {...a11yProps(1)}
            style={{
              color: value === 1 ?"#ddeaf2":"#929ea6",
              fontWeight:"bold",
              textTransform: "none",
            }}
            sx={{
              fontSize: {
                lg: '1em',
                md: '1em',
                sm: '1em',
                xs: '0.75em',
              },
            }}
          />
          <Tab
            label='Yeti Pool'
            {...a11yProps(2)}
            style={{
              color: value === 2 ?"#ddeaf2":"#929ea6",
              fontWeight:"bold",
              textTransform: "none",
            }}
            sx={{
              fontSize: {
                lg: '1em',
                md: '1em',
                sm: '1em',
                xs: '0.75em',
              },
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/*    <Grid container direction="row">
          <Typography
            sx={{
              position: "relative",
              color: "#3A4149",
              left: "0%",
              fontSize: "0.85em",
            }}
          >
            Pool Name
          </Typography>
          <Typography
            sx={{
              position: "relative",
              color: "#3A4149",
              left: { xs: "25%", sm: "30%", md: "30.5%", lg: "35%", xl: "36.5%" },
              fontSize: "0.85em",
            }}
          >
            APR
          </Typography>
          <Typography
            sx={{
              position: "relative",
              color: "#3A4149",
              left: { xs: "35%", sm: "39%", md: "40%", lg: "47%",xl:"50%" },
              fontSize: "0.85em",
            }}
          >
            Your deposits
          </Typography>
          <Typography
            sx={{
              position: "relative",
              color: "#3A4149",
              left: { xs: "45%", sm: "42%", md: "44%", lg: "54.5%",xl:"59%" },
              fontSize: "0.85em",
            }}
          >
            TVL
          </Typography>
          <Typography
            sx={{
              position: "relative",
              color: "#3A4149",
              left: { xs: "50%", sm: "48.5%", md: "50%", lg: "63%",xl:"68.5%" },
              fontSize: "0.85em",
            }}
          >
            Claimable
          </Typography>
          <SettingsIcon
            sx={{
              position: "relative",
              color: "#3A4149",
              left: { xs: "60%", sm: "54%", md: "65%", lg: "72%",xl:"78.4%" },
              size: "1.5em",
            }}
          />
        </Grid> */}
        <PairTab pools={stablePoolAddress} />
        <PairTab pools={otherPoolAddress} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PairTab pools={avaxStablePoolAddress} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PairTab pools={stablePoolAddress} />
        <PairTab pools={otherPoolAddress} />
      </TabPanel>
    </Box>
  );
}
