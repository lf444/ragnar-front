<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
import { Box, Typography, Tabs, Tab, Button, Grid, Link } from "@mui/material";
=======
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  Grid,
  Link,
  CircularProgress,
<<<<<<< HEAD
} from "@mui/material";
<<<<<<< HEAD
>>>>>>> 797b602 (dev: remove disabled)
import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> 9a339f0 (dev: rtest)
import { useState, FunctionComponent } from "react";
import CustomDisplay from "../../../shared/CustomDisplay";
import CustomInput from "../../../shared/CustomInput";
import { contractAddress } from "../../../../abi/address";
import { BigNumber, ethers } from "ethers";
<<<<<<< HEAD
<<<<<<< HEAD:src/components/stake/tab/RgnYetiTable.tsx
<<<<<<< HEAD
=======
import { Box, Typography, Tabs, Tab, Button, Grid, Link } from '@mui/material';
import React from 'react';
import { useState, FunctionComponent } from 'react';
import CustomDisplay from '../../shared/CustomDisplay';
import CustomInput from '../../shared/CustomInput';
import { contractAddress } from '../../../abi/address';
import { BigNumber, ethers } from 'ethers';
<<<<<<< HEAD
import { appLogger } from '../../../utils/method';
>>>>>>> 4560517 (dev: remove dirty console log)
=======
import { appLogger, errorToast } from '../../../utils/method';
>>>>>>> a69614b (dev: add toast first step)
=======
import { appLogger, errorToast } from "../../../utils/method";
import { approve, deposit, withdraw } from "../../../rpc/simple";
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
import { appLogger, errorToast } from "../../../../utils/method";
<<<<<<< HEAD
import { approve, deposit, withdraw } from "../../../../rpc/simple";
>>>>>>> b84f72d (dev: component re-organise):src/components/stake/pools/tab/RgnYetiTable.tsx
=======
import { approve, deposit, withdraw } from "../../../../rpc/tokenInterraction";
>>>>>>> edf8c65 (dev: refactor rpc call)
=======
import { appLogger, errorToast, successToast } from "../../../../utils/method";
import { approve, deposit, withdraw } from "../../../../rpc/tokenInterraction";
import { useWaitForTransaction } from "wagmi";
>>>>>>> 9a339f0 (dev: rtest)
=======
} from '@mui/material';
import React, { useEffect } from 'react';
import { useState, FunctionComponent } from 'react';
import CustomDisplay from '../../../shared/CustomDisplay';
import CustomInput from '../../../shared/CustomInput';
import { contractAddress } from '../../../../abi/address';
import { BigNumber, ethers } from 'ethers';
import { appLogger, errorToast, successToast } from '../../../../utils/method';
import { approve, deposit, withdraw } from '../../../../rpc/tokenInterraction';
import { useWaitForTransaction } from 'wagmi';
>>>>>>> 5383c94 (dev: push kool change)

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
        <Box sx={{ p: 3 }}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <Typography component={"div"}>{children}</Typography>
=======
          <Typography component={'div'}>{children}</Typography>
>>>>>>> 4560517 (dev: remove dirty console log)
=======
          <Typography component={"div"}>{children}</Typography>
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
          <Typography component={'div'}>{children}</Typography>
>>>>>>> 5383c94 (dev: push kool change)
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

interface RgnYetiTableProps {
  depositVeYeti: any;
  handleRefetchDeposit: () => void;
}
const appTag: string = 'RgnYetiTable';
const RgnYetiTable: FunctionComponent<RgnYetiTableProps> = ({
  depositVeYeti,
  handleRefetchDeposit,
}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [Approved, setApproved] = useState(false);

  const [transaction, setTransaction] = useState('');
  const [depositTX, setDepositTX] = useState('');
  const [withdrawTX, setWithdrawTX] = useState('');
  const [amountToStake, setAmountToStake] = useState(0);
  const handleChangeAmount = (newValue: number) => {
    setAmountToStake(newValue);
  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  function approveTokenRgnYETI() {
<<<<<<< HEAD
    try {
      const amount = ethers.utils.parseEther(String(amountToStake));
      approve(String(amount), contractAddress.rgnYetiAddress, true);
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(err.message);
=======
=======
      errorToast(err.message);
>>>>>>> a69614b (dev: add toast first step)
      appLogger(appTag, 'approveTokenRgnYETI', err.message);
>>>>>>> 4560517 (dev: remove dirty console log)
    }
  }

  function approveYeti() {
    try {
      const amount = ethers.utils.parseEther(String(amountToStake));
      approve(String(amount), contractAddress.yetiAddres, false);
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(err.message);
=======
=======
      errorToast(err.message);
>>>>>>> a69614b (dev: add toast first step)
      appLogger(appTag, 'approveYeti', err.message);
>>>>>>> 4560517 (dev: remove dirty console log)
    }
  }

  function depositToken() {
    try {
      const amount = ethers.utils.parseEther(String(amountToStake));
      deposit(String(amount), contractAddress.rgnYetiAddress, true);
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(err.message);
=======
=======
      errorToast(err.message);
>>>>>>> a69614b (dev: add toast first step)
      appLogger(appTag, 'depositToken', err.message);
>>>>>>> 4560517 (dev: remove dirty console log)
    }
  }

  function withdrawToken() {
    try {
      const amount = ethers.utils.parseEther(String(amountToStake));
      withdraw(String(amount), contractAddress.rgnYetiAddress, true);
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(err.message);
=======
=======
      errorToast(err.message);
>>>>>>> a69614b (dev: add toast first step)
      appLogger(appTag, 'withdrawToken', err.message);
>>>>>>> 4560517 (dev: remove dirty console log)
    }
=======
=======
  /*   function approveTokenRgnYETI() {
>>>>>>> 92bf03c (dev: add waiting confirmation on stableTab)
    approve(amountToStake, contractAddress.rgnYetiAddress, true, appTag);
  }

  function approveYeti() {
    approve(amountToStake, contractAddress.yetiAddres, false, appTag);
  } */

  /*   function depositToken() {
    deposit(amountToStake, contractAddress.rgnYetiAddress, true, appTag);
  } */

  /*   function withdrawToken() {
    withdraw(amountToStake, contractAddress.rgnYetiAddress, true, appTag);
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
=======
  // @ts-ignore
>>>>>>> 4485386 (dev: better metamask connexion gestion)
  const { data, isError, isLoading } = useWaitForTransaction({
    hash: transaction,
  });

  // @ts-ignore
  const waitDepositTX = useWaitForTransaction({
    hash: depositTX,
  });

  const waitWithdrawTX = useWaitForTransaction({
    hash: withdrawTX,
  });

  const handleSetTx = (tx: string) => {
    setTransaction(`${tx}`);
  };

  const handleSetDepositTx = (tx: string) => {
    setDepositTX(`${tx}`);
  };

  const handleSetWithdrawTx = (tx: string) => {
    setWithdrawTX(`${tx}`);
  };

  useEffect(() => {
    if (!isLoading && transaction) {
      successToast('TX_SUCCESS');
      setApproved(true);
    }
    if (isError) {
      errorToast('TX_ERRROR');
    }
  }, [isLoading, isError]);

  useEffect(() => {
    if (!waitDepositTX.isLoading && depositTX) {
      successToast('TX_SUCCESS');
      handleRefetchDeposit();
      setApproved(false);
    }
    if (waitDepositTX.isError) {
      errorToast('TX_ERRROR');
      setApproved(false);
    }
  }, [waitDepositTX.isLoading, waitDepositTX.isError]);

  useEffect(() => {
    if (!waitWithdrawTX.isLoading && withdrawTX) {
      successToast('TX_SUCCESS');
      handleRefetchDeposit();
    }
    if (waitWithdrawTX.isError) {
      errorToast('TX_ERRROR');
    }
  }, [waitWithdrawTX.isLoading, waitWithdrawTX.isError]);
  /* 
   function approveTokenRgnYETI() {
    await approve(amountToStake, contractAddress.rgnYetiAddress, true, appTag);
  }
*/
  const approveYeti = async () => {
    await approve(
      amountToStake,
      contractAddress.yetiAddres,
      false,
      appTag,
      handleSetTx
    );
  };

<<<<<<< HEAD
  function approveYeti() {
    await approve(amountToStake, contractAddress.yetiAddres, false, appTag);
>>>>>>> 9a339f0 (dev: rtest)
  }
 */
  /*   function depositToken() {
    await deposit(amountToStake, contractAddress.rgnYetiAddress, true, appTag);
  }
=======
  const depositToken = async () => {
    await deposit(
      amountToStake,
      contractAddress.rgnYetiAddress,
      true,
      appTag,
      handleSetDepositTx
    );
  };
>>>>>>> c324d69 (dev: test)

  const withdrawToken = async () => {
    await withdraw(
      amountToStake,
      contractAddress.rgnYetiAddress,
      true,
      appTag,
      handleSetWithdrawTx
    );
  };

  function depositVeYetiMain() {
    try {
      const amount = ethers.utils.parseEther(String(amountToStake));
      depositVeYeti(amount);
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(err.message);
=======
=======
      errorToast(err.message);
>>>>>>> a69614b (dev: add toast first step)
      appLogger(appTag, 'depositVeYetiMain', err.message);
>>>>>>> 4560517 (dev: remove dirty console log)
=======
      errorToast(err.code);
<<<<<<< HEAD
      appLogger(appTag, "depositVeYetiMain", err.message);
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
      appLogger(appTag, 'depositVeYetiMain', err.message);
>>>>>>> 5383c94 (dev: push kool change)
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
          aria-label='basic tabs example'
        >
          <Tab
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            label="Convert"
=======
            label='Convert'
>>>>>>> 5383c94 (dev: push kool change)
            {...a11yProps(0)}
            style={{
              color: value === 0 ? '#ddeaf2' : '#929ea6',
              textTransform: 'none',
            }}
          />
          <Tab
            label='Stake'
            {...a11yProps(1)}
            style={{
              color: value === 1 ? '#ddeaf2' : '#929ea6',
              textTransform: 'none',
            }}
          />
          <Tab
            label='Unstake'
            {...a11yProps(2)}
            style={{
              color: value === 2 ? '#ddeaf2' : '#929ea6',
              textTransform: 'none',
            }}
          />
          <Tab
<<<<<<< HEAD
            label="INFO"
            {...a11yProps(3)}
            style={{
              color: value === 3 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
=======
            label='Convert'
=======
            label="Convert"
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
            {...a11yProps(0)}
            style={{
              color: value === 0 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
            }}
          />
          <Tab
            label="Stake"
            {...a11yProps(1)}
            style={{
              color: value === 1 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
            }}
          />
          <Tab
            label="Unstake"
            {...a11yProps(2)}
            style={{
              color: value === 2 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
            }}
          />
          <Tab
            label="Info"
            {...a11yProps(3)}
            style={{
<<<<<<< HEAD
              color: value === 3 ? '#ddeaf2' : '#929ea6',
              textTransform: 'none',
>>>>>>> 4560517 (dev: remove dirty console log)
=======
              color: value === 3 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
            label='Info'
            {...a11yProps(3)}
            style={{
              color: value === 3 ? '#ddeaf2' : '#929ea6',
              textTransform: 'none',
>>>>>>> 5383c94 (dev: push kool change)
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography
          sx={{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            fontSize: { xs: "0.65em", sm: "0.9em" },
            color: (theme) => theme.palette.text.primary,
            marginBottom: "20px",
            fontWeight: "bold",
=======
            fontSize: { xs: '0.65em', sm: '0.9em' },
            color: (theme) => theme.palette.text.primary,
            marginBottom: '20px',
            fontWeight: 'bold',
>>>>>>> 4560517 (dev: remove dirty console log)
=======
            fontSize: { xs: "0.65em", sm: "0.9em" },
            color: (theme) => theme.palette.text.primary,
            marginBottom: "20px",
            fontWeight: "bold",
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
            fontSize: { xs: '0.65em', sm: '0.9em' },
            color: (theme) => theme.palette.text.primary,
            marginBottom: '20px',
            fontWeight: 'bold',
>>>>>>> 5383c94 (dev: push kool change)
          }}
        >
          Convert YETI to RGNYETI, then stake RGNYETI to earn protocol revenue
          plus RGN tokens
        </Typography>
        <Typography
          sx={{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            fontSize: { xs: "0.65em", sm: "0.9em" },
            color: (theme) => theme.palette.text.secondary,
            marginBottom: "20px",
            fontWeight: "normal",
=======
            fontSize: { xs: '0.65em', sm: '0.9em' },
            color: (theme) => theme.palette.text.secondary,
            marginBottom: '20px',
            fontWeight: 'normal',
>>>>>>> 4560517 (dev: remove dirty console log)
=======
            fontSize: { xs: "0.65em", sm: "0.9em" },
            color: (theme) => theme.palette.text.secondary,
            marginBottom: "20px",
            fontWeight: "normal",
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
            fontSize: { xs: '0.65em', sm: '0.9em' },
            color: (theme) => theme.palette.text.secondary,
            marginBottom: '20px',
            fontWeight: 'normal',
>>>>>>> 5383c94 (dev: push kool change)
          }}
        >
          Important: Converting YETI to RGNYETI is irreversible. You may stake
          and unstake RGNYETI tokens, but not convert them back to YETI via our
          protocol. Secondary markets exist to allow the exchange of RGNYETI for
          YETI (see Trader Joe).
        </Typography>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={'YETI'} display='Convert' />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent='center'
            alignItems='center'
            textAlign='center'
          >
            {' '}
            <Grid
              item
              xs={6}
              sx={{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                fontSize: { xs: "0.65em", sm: "1em" },
<<<<<<< HEAD
                color: (theme) => theme.palette.text.primary,
              }}
            >
              {" "}
=======
                fontSize: { xs: '0.65em', sm: '1em' },
=======
                fontSize: { xs: "0.65em", sm: "1em" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
                color: (theme) => theme.palette.text.primary,
=======
>>>>>>> 797b602 (dev: remove disabled)
                fontWeight: "bold",
                justifyContent: "flex-end",
                alignItems: "center",
                display: "flex",
                pb: "4px",
              }}
            >
<<<<<<< HEAD
              {' '}
>>>>>>> 4560517 (dev: remove dirty console log)
=======
              {" "}
<<<<<<< HEAD
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
              1
=======
=======
                fontSize: { xs: '0.65em', sm: '1em' },
                fontWeight: 'bold',
                justifyContent: 'flex-end',
                alignItems: 'center',
                display: 'flex',
                pb: '4px',
              }}
            >
              {' '}
>>>>>>> 5383c94 (dev: push kool change)
              <Typography
                sx={{
                  borderRadius: '50%',
                  width: '25px',
                  color: !Approved
                    ? (theme) => theme.palette.text.primary
                    : '#262A2F',
                  backgroundColor: !Approved
                    ? (theme) => theme.palette.primary.light
                    : (theme) => '#2F343A',
                }}
              >
                1
              </Typography>
              <Box
                sx={{
                  width: '50%',

                  background: !Approved
                    ? 'linear-gradient(to right , #627f91, #868f96)'
                    : 'linear-gradient(to right, #262A2F, #868f96 )',
                  height: '4px',
                }}
              ></Box>
>>>>>>> 797b602 (dev: remove disabled)
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                fontSize: { xs: "0.65em", sm: "1em" },
<<<<<<< HEAD
=======
                fontSize: { xs: '0.65em', sm: '1em' },
>>>>>>> 4560517 (dev: remove dirty console log)
=======
                fontSize: { xs: "0.65em", sm: "1em" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
                color: (theme) => theme.palette.text.primary,
=======
>>>>>>> 797b602 (dev: remove disabled)
                fontWeight: "bold",
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
                pb: "4px",
=======
                fontSize: { xs: '0.65em', sm: '1em' },
                fontWeight: 'bold',
                justifyContent: 'flex-start',
                alignItems: 'center',
                display: 'flex',
                pb: '4px',
>>>>>>> 5383c94 (dev: push kool change)
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  background: Approved
                    ? 'linear-gradient(to right , #868f96, #627f91 )'
                    : 'linear-gradient(to right, #868f96, #262A2F)',
                  height: '4px',
                }}
              ></Box>
              <Typography
                sx={{
                  borderRadius: '50%',
                  width: '25px',
                  color: Approved
                    ? (theme) => theme.palette.text.primary
                    : '#262A2F',
                  backgroundColor: Approved
                    ? (theme) => theme.palette.primary.light
                    : (theme) => '#2F343A',
                }}
              >
                2
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={6}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            {" "}
            <CustomInput
              poolName={"YETI"}
=======
            {' '}
            <CustomInput
              poolName={'YETI'}
>>>>>>> 4560517 (dev: remove dirty console log)
=======
            {" "}
            <CustomInput
              poolName={"YETI"}
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
            {' '}
            <CustomInput
              poolName={'YETI'}
>>>>>>> 5383c94 (dev: push kool change)
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={contractAddress.yetiAddres}
              stake={true}
            />
          </Grid>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
=======
          <Grid item container xs={6} justifyContent='space-around'>
            {' '}
>>>>>>> 5383c94 (dev: push kool change)
            <Button
              /*  onClick={approveToken} */
              variant='contained'
              sx={{
                width: '45%',
                backgroundColor: !Approved
                  ? (theme) => theme.palette.primary.light
                  : '#262A2F',
                color: !Approved
                  ? (theme) => theme.palette.text.primary
<<<<<<< HEAD
                  : "#868f96",
                fontWeight: "bold",
=======
          <Grid item container xs={6} justifyContent='space-around'>
            {' '}
=======
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
            <Button
              onClick={approveYeti}
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
<<<<<<< HEAD
                fontWeight: 'bold',
<<<<<<< HEAD
>>>>>>> 4560517 (dev: remove dirty console log)
=======
                fontSize: {xs: "10px", md: "0.875em"}
>>>>>>> d8abe5b (font + minor change responsive)
=======
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
                  : '#868f96',
                fontWeight: 'bold',
                fontSize: { xs: '10px', md: '0.875em' },
>>>>>>> 5383c94 (dev: push kool change)
              }}
            >
              {!isLoading ? (
                'APPROVE'
              ) : (
                <CircularProgress
                  size='0.95em'
                  color='inherit'
                  sx={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
              )}
            </Button>
            <Button
<<<<<<< HEAD
              onClick={depositVeYetiMain}
<<<<<<< HEAD
<<<<<<< HEAD
=======
              /*     onClick={depositToken} */
<<<<<<< HEAD
>>>>>>> 797b602 (dev: remove disabled)
              variant="contained"
=======
              variant='contained'
>>>>>>> 5383c94 (dev: push kool change)
              sx={{
                width: '45%',
                backgroundColor: Approved
                  ? (theme) => theme.palette.primary.light
                  : '#262A2F',
                color: Approved
                  ? (theme) => theme.palette.text.primary
<<<<<<< HEAD
                  : "#868f96",
                fontWeight: "bold",
=======
              variant='contained'
=======
              variant="contained"
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
<<<<<<< HEAD
                fontWeight: 'bold',
<<<<<<< HEAD
>>>>>>> 4560517 (dev: remove dirty console log)
=======
                fontSize: {xs: "10px", md: "0.875em"} 
>>>>>>> d8abe5b (font + minor change responsive)
=======
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
                  : '#868f96',
                fontWeight: 'bold',
                fontSize: { xs: '10px', md: '0.875em' },
>>>>>>> 5383c94 (dev: push kool change)
              }}
            >
              {!waitDepositTX.isLoading ? (
                'DEPOSIT'
              ) : (
                <CircularProgress
                  size='0.95em'
                  color='inherit'
                  sx={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
              )}
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography
          sx={{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            fontSize: { xs: "0.65em", sm: "0.9em" },
            color: (theme) => theme.palette.text.primary,
            marginBottom: "20px",
            fontWeight: "bold",
=======
            fontSize: { xs: '0.65em', sm: '0.9em' },
            color: (theme) => theme.palette.text.primary,
            marginBottom: '20px',
            fontWeight: 'bold',
>>>>>>> 4560517 (dev: remove dirty console log)
=======
            fontSize: { xs: "0.65em", sm: "0.9em" },
            color: (theme) => theme.palette.text.primary,
            marginBottom: "20px",
            fontWeight: "bold",
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
            fontSize: { xs: '0.65em', sm: '0.9em' },
            color: (theme) => theme.palette.text.primary,
            marginBottom: '20px',
            fontWeight: 'bold',
>>>>>>> 5383c94 (dev: push kool change)
          }}
        >
          By staking RGNYETI, you are earning approximately 66.6% of the Yeti
          pool's revenue, plus additional RGN tokens on top of that.
        </Typography>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={'RGNYETI'} display='Stake' />
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
<<<<<<< HEAD
<<<<<<< HEAD
                fontSize: { xs: "0.65em", sm: "1em" },
                fontWeight: "bold",
                justifyContent: "flex-end",
                alignItems: "center",
                display: "flex",
                pb: "4px",
              }}
            >
              {" "}
<<<<<<< HEAD
=======
                fontSize: { xs: '0.65em', sm: '1em' },
=======
                fontSize: { xs: "0.65em", sm: "1em" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
              }}
            >
<<<<<<< HEAD
              {' '}
>>>>>>> 4560517 (dev: remove dirty console log)
=======
              {" "}
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
              1
=======
=======
                fontSize: { xs: '0.65em', sm: '1em' },
                fontWeight: 'bold',
                justifyContent: 'flex-end',
                alignItems: 'center',
                display: 'flex',
                pb: '4px',
              }}
            >
              {' '}
>>>>>>> 5383c94 (dev: push kool change)
              <Typography
                sx={{
                  borderRadius: '50%',
                  width: '25px',
                  color: !Approved
                    ? (theme) => theme.palette.text.primary
                    : '#262A2F',
                  backgroundColor: !Approved
                    ? (theme) => theme.palette.primary.light
                    : (theme) => '#2F343A',
                }}
              >
                1
              </Typography>
              <Box
                sx={{
                  width: '50%',

                  background: !Approved
                    ? 'linear-gradient(to right , #627f91, #868f96)'
                    : 'linear-gradient(to right, #262A2F, #868f96 )',
                  height: '4px',
                }}
              ></Box>
>>>>>>> 797b602 (dev: remove disabled)
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                fontSize: { xs: "0.65em", sm: "1em" },
                fontWeight: "bold",
<<<<<<< HEAD
=======
                fontSize: { xs: '0.65em', sm: '1em' },
                color: (theme) => theme.palette.text.primary,
                fontWeight: 'bold',
>>>>>>> 4560517 (dev: remove dirty console log)
=======
                fontSize: { xs: "0.65em", sm: "1em" },
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
                pb: "4px",
>>>>>>> 797b602 (dev: remove disabled)
=======
                fontSize: { xs: '0.65em', sm: '1em' },
                fontWeight: 'bold',
                justifyContent: 'flex-start',
                alignItems: 'center',
                display: 'flex',
                pb: '4px',
>>>>>>> 5383c94 (dev: push kool change)
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  background: Approved
                    ? 'linear-gradient(to right , #868f96, #627f91 )'
                    : 'linear-gradient(to right, #868f96, #262A2F)',
                  height: '4px',
                }}
              ></Box>
              <Typography
                sx={{
                  borderRadius: '50%',
                  width: '25px',
                  color: Approved
                    ? (theme) => theme.palette.text.primary
                    : '#262A2F',
                  backgroundColor: Approved
                    ? (theme) => theme.palette.primary.light
                    : (theme) => '#2F343A',
                }}
              >
                2
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={6}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            {" "}
            <CustomInput
              poolName={"YETI"}
=======
            {' '}
            <CustomInput
              poolName={'YETI'}
>>>>>>> 4560517 (dev: remove dirty console log)
=======
            {" "}
            <CustomInput
              poolName={"YETI"}
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
            {' '}
            <CustomInput
              poolName={'YETI'}
>>>>>>> 5383c94 (dev: push kool change)
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={contractAddress.rgnYetiAddress}
              stake={true}
            />
          </Grid>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
=======
          <Grid item container xs={6} justifyContent='space-around'>
            {' '}
>>>>>>> 5383c94 (dev: push kool change)
            <Button
              /*  onClick={approveToken} */
              variant='contained'
              sx={{
                width: '45%',
                backgroundColor: !Approved
                  ? (theme) => theme.palette.primary.light
                  : '#262A2F',
                color: !Approved
                  ? (theme) => theme.palette.text.primary
<<<<<<< HEAD
                  : "#868f96",
                fontWeight: "bold",
=======
          <Grid item container xs={6} justifyContent='space-around'>
            {' '}
=======
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
            <Button
              onClick={approveTokenRgnYETI}
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
<<<<<<< HEAD
                fontWeight: 'bold',
<<<<<<< HEAD
>>>>>>> 4560517 (dev: remove dirty console log)
=======
                fontSize: {xs: "10px", md: "0.875em"}
>>>>>>> d8abe5b (font + minor change responsive)
=======
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
                  : '#868f96',
                fontWeight: 'bold',
                fontSize: { xs: '10px', md: '0.875em' },
>>>>>>> 5383c94 (dev: push kool change)
              }}
            >
              {!isLoading ? (
                'APPROVE'
              ) : (
                <CircularProgress
                  size='0.95em'
                  color='inherit'
                  sx={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
              )}
            </Button>
            <Button
<<<<<<< HEAD
<<<<<<< HEAD
              onClick={depositToken}
<<<<<<< HEAD
<<<<<<< HEAD
=======
              /* onClick={depositToken} */
>>>>>>> 92bf03c (dev: add waiting confirmation on stableTab)
=======
              /*     onClick={depositToken} */
<<<<<<< HEAD
>>>>>>> 797b602 (dev: remove disabled)
              variant="contained"
=======
              variant='contained'
>>>>>>> 5383c94 (dev: push kool change)
              sx={{
                width: '45%',
                backgroundColor: Approved
                  ? (theme) => theme.palette.primary.light
                  : '#262A2F',
                color: Approved
                  ? (theme) => theme.palette.text.primary
<<<<<<< HEAD
                  : "#868f96",
                fontWeight: "bold",
=======
              variant='contained'
=======
              variant="contained"
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
<<<<<<< HEAD
                fontWeight: 'bold',
<<<<<<< HEAD
>>>>>>> 4560517 (dev: remove dirty console log)
=======
                fontSize: {xs: "10px", md: "0.875em"}
>>>>>>> d8abe5b (font + minor change responsive)
=======
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
                  : '#868f96',
                fontWeight: 'bold',
                fontSize: { xs: '10px', md: '0.875em' },
>>>>>>> 5383c94 (dev: push kool change)
              }}
            >
              {!waitDepositTX.isLoading ? (
                'DEPOSIT'
              ) : (
                <CircularProgress
                  size='0.95em'
                  color='inherit'
                  sx={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
              )}
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
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
<<<<<<< HEAD
<<<<<<< HEAD
            {" "}
            <CustomInput
              poolName={"YETI"}
=======
            {' '}
            <CustomInput
              poolName={'YETI'}
>>>>>>> 4560517 (dev: remove dirty console log)
=======
            {" "}
            <CustomInput
              poolName={"YETI"}
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
            {' '}
            <CustomInput
              poolName={'YETI'}
>>>>>>> 5383c94 (dev: push kool change)
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={contractAddress.rgnYetiAddress}
              stake={false}
            />
          </Grid>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
=======
          <Grid item container xs={6} justifyContent='space-around'>
            {' '}
>>>>>>> 5383c94 (dev: push kool change)
            <Button
              /* onClick={withdrawToken} */
              variant='contained'
              sx={{
                width: '55%',
                backgroundColor: (theme) => theme.palette.primary.light,
<<<<<<< HEAD
                fontWeight: "bold",
=======
          <Grid item container xs={6} justifyContent='space-around'>
            {' '}
=======
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
            <Button
              onClick={withdrawToken}
              variant="contained"
              sx={{
                width: "55%",
                backgroundColor: (theme) => theme.palette.primary.light,
<<<<<<< HEAD
                fontWeight: 'bold',
<<<<<<< HEAD
>>>>>>> 4560517 (dev: remove dirty console log)
=======
                fontSize: {xs: "10px", md: "0.875em"}
>>>>>>> d8abe5b (font + minor change responsive)
=======
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
                fontWeight: 'bold',
                fontSize: { xs: '10px', md: '0.875em' },
>>>>>>> 5383c94 (dev: push kool change)
              }}
            >
              {!waitWithdrawTX.isLoading ? (
                'WITHDRAW'
              ) : (
                <CircularProgress
                  size='0.95em'
                  color='inherit'
                  sx={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
              )}
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography
          sx={{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            fontSize: "14px",
=======
            fontSize: { xs: '10px', md: '14px' },
>>>>>>> 5383c94 (dev: push kool change)
            color: (theme) => theme.palette.text.primary,
            marginBottom: '10px',
            fontWeight: 'bold',
          }}
        >
          {' '}
          YETI Contract:{'    '}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
<<<<<<< HEAD
              textDecoration: "none",
              fontWeight: "normal",
=======
            fontSize: '14px',
=======
            fontSize: {xs: "10px", md: "14px"},
>>>>>>> d8abe5b (font + minor change responsive)
=======
            fontSize: { xs: "10px", md: "14px" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
            color: (theme) => theme.palette.text.primary,
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          {" "}
          YETI Contract:{"    "}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
<<<<<<< HEAD
              textDecoration: 'none',
              fontWeight: 'normal',
<<<<<<< HEAD
>>>>>>> 4560517 (dev: remove dirty console log)
=======
              fontSize: {xs: "10px", md: "14px"}
>>>>>>> d8abe5b (font + minor change responsive)
=======
              textDecoration: "none",
              fontWeight: "normal",
              fontSize: { xs: "10px", md: "14px" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
              textDecoration: 'none',
              fontWeight: 'normal',
              fontSize: { xs: '10px', md: '14px' },
>>>>>>> 5383c94 (dev: push kool change)
            }}
            href={`https://snowtrace.io/address/${contractAddress.yetiAddres}`}
          >
            {contractAddress.yetiAddres}
          </Link>
        </Typography>
        <Typography
          sx={{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            fontSize: "14px",
=======
            fontSize: { xs: '10px', md: '14px' },
>>>>>>> 5383c94 (dev: push kool change)
            color: (theme) => theme.palette.text.primary,
            marginBottom: '10px',
            fontWeight: 'bold',
          }}
        >
          {' '}
          RgnYeti Contract:{'    '}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
<<<<<<< HEAD
              textDecoration: "none",
              fontWeight: "normal",
=======
            fontSize: '14px',
=======
            fontSize: {xs: "10px", md: "14px"},
>>>>>>> d8abe5b (font + minor change responsive)
=======
            fontSize: { xs: "10px", md: "14px" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
            color: (theme) => theme.palette.text.primary,
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          {" "}
          RgnYeti Contract:{"    "}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
<<<<<<< HEAD
              textDecoration: 'none',
              fontWeight: 'normal',
<<<<<<< HEAD
>>>>>>> 4560517 (dev: remove dirty console log)
=======
              fontSize: {xs: "10px", md: "14px"}
>>>>>>> d8abe5b (font + minor change responsive)
=======
              textDecoration: "none",
              fontWeight: "normal",
              fontSize: { xs: "10px", md: "14px" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
              textDecoration: 'none',
              fontWeight: 'normal',
              fontSize: { xs: '10px', md: '14px' },
>>>>>>> 5383c94 (dev: push kool change)
            }}
            href={`https://snowtrace.io/address/${contractAddress.rgnYetiAddress}`}
          >
            {contractAddress.rgnYetiAddress}
          </Link>
        </Typography>
        <Typography
          sx={{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            fontSize: "14px",
=======
            fontSize: { xs: '10px', md: '14px' },
>>>>>>> 5383c94 (dev: push kool change)
            color: (theme) => theme.palette.text.primary,
            marginBottom: '10px',
            fontWeight: 'bold',
          }}
        >
          {' '}
          Staking Contract:{'    '}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
<<<<<<< HEAD
              textDecoration: "none",
              fontWeight: "normal",
=======
            fontSize: '14px',
=======
            fontSize: {xs: "10px", md: "14px"},
>>>>>>> d8abe5b (font + minor change responsive)
=======
            fontSize: { xs: "10px", md: "14px" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
            color: (theme) => theme.palette.text.primary,
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          {" "}
          Staking Contract:{"    "}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
<<<<<<< HEAD
              textDecoration: 'none',
              fontWeight: 'normal',
<<<<<<< HEAD
>>>>>>> 4560517 (dev: remove dirty console log)
=======
              fontSize: {xs: "10px", md: "14px"}
>>>>>>> d8abe5b (font + minor change responsive)
=======
              textDecoration: "none",
              fontWeight: "normal",
              fontSize: { xs: "10px", md: "14px" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
              textDecoration: 'none',
              fontWeight: 'normal',
              fontSize: { xs: '10px', md: '14px' },
>>>>>>> 5383c94 (dev: push kool change)
            }}
            href={`https://snowtrace.io/address/${contractAddress.masterchefAddress}`}
          >
            {contractAddress.masterchefAddress}
          </Link>
        </Typography>
        <Typography
          sx={{
<<<<<<< HEAD
<<<<<<< HEAD
            fontSize: "14px",
            color: (theme) => theme.palette.text.primary,
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          {" "}
          Converting Contract:{"    "}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
              textDecoration: "none",
              fontWeight: "normal",
=======
            fontSize: '14px',
=======
>>>>>>> d8abe5b (font + minor change responsive)
            color: (theme) => theme.palette.text.primary,
            marginBottom: '10px',
            fontWeight: 'bold',
            fontSize: { xs: '10px', md: '14px' },
          }}
        >
          {' '}
          Converting Contract:{'    '}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
<<<<<<< HEAD
<<<<<<< HEAD
              textDecoration: 'none',
              fontWeight: 'normal',
<<<<<<< HEAD
>>>>>>> 4560517 (dev: remove dirty console log)
=======
              fontSize: {xs: "10px", md: "14px"}
>>>>>>> d8abe5b (font + minor change responsive)
=======
              textDecoration: "none",
              fontWeight: "normal",
              fontSize: { xs: "10px", md: "14px" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
              textDecoration: 'none',
              fontWeight: 'normal',
              fontSize: { xs: '10px', md: '14px' },
>>>>>>> 5383c94 (dev: push kool change)
            }}
            href={`https://snowtrace.io/address/${contractAddress.mainstakingAddress}`}
          >
            {contractAddress.mainstakingAddress}
          </Link>
        </Typography>
      </TabPanel>
    </Box>
  );
};

export default RgnYetiTable;
