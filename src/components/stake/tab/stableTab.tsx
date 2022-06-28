<<<<<<< HEAD
import { Box, Typography, Tabs, Tab, Grid, Button, Link } from "@mui/material";
import { FunctionComponent, useState } from "react";
import CustomInput from "../../shared/CustomInput";
import CustomDisplay from "../../shared/CustomDisplay";
import { ethers, BigNumber } from 'ethers';
=======
import { Box, Typography, Tabs, Tab, Grid, Button, Link } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import CustomInput from '../../shared/CustomInput';
import CustomDisplay from '../../shared/CustomDisplay';
import { ethers } from 'ethers';
import { appLogger } from '../../../utils/method';
>>>>>>> 4560517 (dev: remove dirty console log)

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
        <Box sx={{ p: 1 }}>
          <Typography component={'div'}>{children}</Typography>
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

interface StableTabProps {
  addressPool: string;
  pairAddress: string;
  pairName: string;
  info: string;
  deposit: any;
  withdraw: any;
  approve: any;
  masterchef: boolean;
}

<<<<<<< HEAD
const StableTab: FunctionComponent<StableTabProps> = ({
  addressPool, pairAddress, pairName, info, deposit, withdraw, approve, masterchef
=======
const appTag: string = 'StableTab';

const StableTab: FunctionComponent<StableTabProps> = ({
  addressPool,
  pairAddress,
  pairName,
  info,
  deposit,
  withdraw,
  approve,
  masterchef,
>>>>>>> 4560517 (dev: remove dirty console log)
}) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [amountToStake, setAmountToStake] = useState(0);
  const handleChangeAmount = (newValue: number) => {
    setAmountToStake(newValue);
  };

  function approveToken() {
    try {
      const amount = ethers.utils.parseEther(String(amountToStake));
      console.log(amount)
      approve(String(amount), pairAddress, masterchef);
    } catch (err: any) {
      appLogger(appTag, 'approveToken', err.message);
    }
  }

  function depositToken() {
    try {
      const amount = ethers.utils.parseEther(String(amountToStake));
      deposit(String(amount), pairAddress, masterchef);
    } catch (err: any) {
      appLogger(appTag, ' depositToken', err.message);
    }
  }

  function withdrawToken() {
    try {
      const amount = ethers.utils.parseEther(String(amountToStake));
      withdraw(String(amount), pairAddress, masterchef);
    } catch (err: any) {
      appLogger(appTag, ' withdrawToken', err.message);
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          centered
<<<<<<< HEAD
          aria-label="basic tabs example"
        >
          <Tab
            label="Stake"
            {...a11yProps(0)}
            style={{
              color: value === 0 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
            }}
          />
          <Tab
            label="Unstake"
            {...a11yProps(1)}
            style={{
              color: value === 1 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
            }}
          />
          <Tab
            label="INFO"
            {...a11yProps(2)}
            style={{
              color: value === 2 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
=======
          aria-label='basic tabs example'
        >
          <Tab
            label='Stake'
            {...a11yProps(0)}
            style={{
              color: value === 0 ? '#ddeaf2' : '#929ea6',
              textTransform: 'none',
            }}
          />
          <Tab
            label='Unstake'
            {...a11yProps(1)}
            style={{
              color: value === 1 ? '#ddeaf2' : '#929ea6',
              textTransform: 'none',
            }}
          />
          <Tab
            label='INFO'
            {...a11yProps(2)}
            style={{
              color: value === 2 ? '#ddeaf2' : '#929ea6',
              textTransform: 'none',
>>>>>>> 4560517 (dev: remove dirty console log)
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography
          sx={{
<<<<<<< HEAD
            fontSize: { xs: "0.65em", sm: "0.9em" },
            color: (theme) => theme.palette.text.primary,
            marginBottom: "20px",
            marginTop: "20px",
            fontWeight: "bold",
=======
            fontSize: { xs: '0.65em', sm: '0.9em' },
            color: (theme) => theme.palette.text.primary,
            marginBottom: '20px',
            marginTop: '20px',
            fontWeight: 'bold',
>>>>>>> 4560517 (dev: remove dirty console log)
          }}
        >
          {info}
        </Typography>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={pairName} display='Stake' />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent='center'
            alignItems='center'
            textAlign='center'
          >
            <Grid
              item
              xs={6}
              sx={{
<<<<<<< HEAD
                fontSize: { xs: "0.65em", sm: "1em" },
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
              }}
            >
              {" "}
=======
                fontSize: { xs: '0.65em', sm: '1em' },
                color: (theme) => theme.palette.text.primary,
                fontWeight: 'bold',
              }}
            >
              {' '}
>>>>>>> 4560517 (dev: remove dirty console log)
              1
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
<<<<<<< HEAD
                fontSize: { xs: "0.65em", sm: "1em" },
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
=======
                fontSize: { xs: '0.65em', sm: '1em' },
                color: (theme) => theme.palette.text.primary,
                fontWeight: 'bold',
>>>>>>> 4560517 (dev: remove dirty console log)
              }}
            >
              2
            </Grid>
          </Grid>
          <Grid item container xs={6}>
<<<<<<< HEAD
            {" "}
<<<<<<< HEAD
            <CustomInput
              poolName={"YETI"}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              onClick={approveToken}
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
              }}
            >
              APPROVE
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
              }}
            >
=======
            <CustomInput poolName={"YETI"} amountToStake={amountToStake} setAmountToStake={handleChangeAmount} />
=======
            {' '}
            <CustomInput
              poolName={'YETI'}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
            />
>>>>>>> 4560517 (dev: remove dirty console log)
          </Grid>
          <Grid item container xs={6} justifyContent='space-around'>
            {' '}
            <Button
              onClick={approveToken}
              variant='contained'
              sx={{
                width: '45%',
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: 'bold',
              }}
            >
              APPROVE
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button variant="contained" sx={{ width: "45%", backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold"}}>
<<<<<<< HEAD
=======
            <Button onClick={depositToken} variant="contained" sx={{ width: "45%",backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold"}}>
>>>>>>> 67fd7e4 (all data + all function)
>>>>>>> 7449a99 (all data + all function)
=======
>>>>>>> c66f1d1 (dev: pool minor change)
=======
            <Button onClick={depositToken} variant="contained" sx={{ width: "45%", backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold"}}>
>>>>>>> 53dd8be (minor change)
=======
            <Button
              onClick={depositToken}
              variant='contained'
              sx={{
                width: '45%',
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: 'bold',
              }}
            >
>>>>>>> 4560517 (dev: remove dirty console log)
              DEPOSIT
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Grid sx={{ marginBottom: '5px' }} item container xs={6}>
            <CustomDisplay poolName={'RGNYETI'} display='Unstake' />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent='center'
            alignItems='center'
            textAlign='center'
          >
            <Grid item xs={6}>
              {' '}
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
          <Grid item container xs={6}>
<<<<<<< HEAD
            {" "}
<<<<<<< HEAD
            <CustomInput
              poolName={"YETI"}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              onClick={withdrawToken}
              variant="contained"
              sx={{
                width: "50%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
              }}
            >
=======
            <CustomInput poolName={"YETI"} amountToStake={amountToStake} setAmountToStake={handleChangeAmount}  />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button onClick={withdrawToken} variant="contained" sx={{ width: "50%",backgroundColor: (theme) => theme.palette.primary.light, fontWeight: "bold" }}>
>>>>>>> 7449a99 (all data + all function)
=======
            {' '}
            <CustomInput
              poolName={'YETI'}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
            />
          </Grid>
          <Grid item container xs={6} justifyContent='space-around'>
            {' '}
            <Button
              onClick={withdrawToken}
              variant='contained'
              sx={{
                width: '50%',
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: 'bold',
              }}
            >
>>>>>>> 4560517 (dev: remove dirty console log)
              WITHDRAW
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography
          sx={{
<<<<<<< HEAD
            fontSize: "14px",
            color: (theme) => theme.palette.text.primary,
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          {" "}
          {pairName} Contract: {"    "}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
              textDecoration: "none",
              fontWeight: "normal",
=======
            fontSize: '14px',
            color: (theme) => theme.palette.text.primary,
            marginBottom: '10px',
            fontWeight: 'bold',
          }}
        >
          {' '}
          {pairName} Contract: {'    '}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
              textDecoration: 'none',
              fontWeight: 'normal',
>>>>>>> 4560517 (dev: remove dirty console log)
            }}
            href={`https://snowtrace.io/address/${pairAddress}`}
          >
            {addressPool}
          </Link>
        </Typography>
        <Typography
          sx={{
<<<<<<< HEAD
            fontSize: "14px",
            color: (theme) => theme.palette.text.primary,
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          {" "}
          Staking Contract: {"    "}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
              textDecoration: "none",
              fontWeight: "normal",
=======
            fontSize: '14px',
            color: (theme) => theme.palette.text.primary,
            marginBottom: '10px',
            fontWeight: 'bold',
          }}
        >
          {' '}
          Staking Contract: {'    '}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
              textDecoration: 'none',
              fontWeight: 'normal',
>>>>>>> 4560517 (dev: remove dirty console log)
            }}
            href={`https://snowtrace.io/address/${addressPool}`}
          >
            {addressPool}
          </Link>
        </Typography>
      </TabPanel>
    </Box>
  );
};

export default StableTab;
