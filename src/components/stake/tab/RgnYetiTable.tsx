<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
import { Box, Typography, Tabs, Tab, Button, Grid, Link } from "@mui/material";
import React from "react";
import { useState, FunctionComponent } from "react";
import CustomDisplay from "../../shared/CustomDisplay";
import CustomInput from "../../shared/CustomInput";
import { contractAddress } from "../../../abi/address";
import { BigNumber, ethers } from "ethers";
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
<<<<<<< HEAD
<<<<<<< HEAD
          <Typography component={"div"}>{children}</Typography>
=======
          <Typography component={'div'}>{children}</Typography>
>>>>>>> 4560517 (dev: remove dirty console log)
=======
          <Typography component={"div"}>{children}</Typography>
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
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

interface RgnYetiTableProps {
  depositVeYeti: any;
}
const appTag: string = "RgnYetiTable";
const RgnYetiTable: FunctionComponent<RgnYetiTableProps> = ({
  depositVeYeti,
}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [amountToStake, setAmountToStake] = useState(0);
  const handleChangeAmount = (newValue: number) => {
    setAmountToStake(newValue);
  };

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
    approve(amountToStake, contractAddress.rgnYetiAddress, true, appTag);
  }

  function approveYeti() {
    approve(amountToStake, contractAddress.yetiAddres, false, appTag);
  }

  function depositToken() {
    deposit(amountToStake, contractAddress.rgnYetiAddress, true, appTag);
  }

  function withdrawToken() {
    withdraw(amountToStake, contractAddress.rgnYetiAddress, true, appTag);
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
  }

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
      appLogger(appTag, "depositVeYetiMain", err.message);
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
    }
  }

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
          <Tab
<<<<<<< HEAD
<<<<<<< HEAD
            label="Convert"
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
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography
          sx={{
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
          }}
        >
          Convert YETI to RGNYETI, then stake RGNYETI to earn protocol revenue
          plus RGN tokens
        </Typography>
        <Typography
          sx={{
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
          }}
        >
          Important: Converting YETI to RGNYETI is irreversible. You may stake
          and unstake RGNYETI tokens, but not convert them back to YETI via our
          protocol. Secondary markets exist to allow the exchange of RGNYETI for
          YETI (see Trader Joe).
        </Typography>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"YETI"} display="Convert" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid
              item
              xs={6}
              sx={{
<<<<<<< HEAD
<<<<<<< HEAD
                fontSize: { xs: "0.65em", sm: "1em" },
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
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
<<<<<<< HEAD
<<<<<<< HEAD
                fontSize: { xs: "0.65em", sm: "1em" },
=======
                fontSize: { xs: '0.65em', sm: '1em' },
>>>>>>> 4560517 (dev: remove dirty console log)
=======
                fontSize: { xs: "0.65em", sm: "1em" },
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
              }}
            >
              2
            </Grid>
          </Grid>
          <Grid item container xs={6}>
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
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={contractAddress.yetiAddres}
              stake={true}
            />
          </Grid>
<<<<<<< HEAD
<<<<<<< HEAD
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              onClick={approveYeti}
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
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
              }}
            >
              APPROVE
            </Button>
            <Button
              onClick={depositVeYetiMain}
<<<<<<< HEAD
<<<<<<< HEAD
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
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
              }}
            >
              DEPOSIT
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography
          sx={{
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
          }}
        >
          By staking RGNYETI, you are earning approximately 66.6% of the Yeti
          pool's revenue, plus additional RGN tokens on top of that.
        </Typography>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGNYETI"} display="Stake" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid
              item
              xs={6}
              sx={{
<<<<<<< HEAD
<<<<<<< HEAD
                fontSize: { xs: "0.65em", sm: "1em" },
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
              }}
            >
              {" "}
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
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
<<<<<<< HEAD
<<<<<<< HEAD
                fontSize: { xs: "0.65em", sm: "1em" },
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
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
              }}
            >
              2
            </Grid>
          </Grid>
          <Grid item container xs={6}>
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
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={contractAddress.rgnYetiAddress}
              stake={true}
            />
          </Grid>
<<<<<<< HEAD
<<<<<<< HEAD
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              onClick={approveTokenRgnYETI}
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
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
              }}
            >
              APPROVE
            </Button>
            <Button
              onClick={depositToken}
<<<<<<< HEAD
<<<<<<< HEAD
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
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
              }}
            >
              DEPOSIT
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container>
          <Grid sx={{ marginBottom: "5px" }} item container xs={6}>
            <CustomDisplay poolName={"RGNYETI"} display="Unstake" />
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
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={contractAddress.rgnYetiAddress}
              stake={false}
            />
          </Grid>
<<<<<<< HEAD
<<<<<<< HEAD
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              onClick={withdrawToken}
              variant="contained"
              sx={{
                width: "55%",
                backgroundColor: (theme) => theme.palette.primary.light,
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
              }}
            >
              WITHDRAW
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
            fontSize: "14px",
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
            fontSize: "14px",
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
            fontSize: "14px",
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
            marginBottom: "10px",
            fontWeight: "bold",
            fontSize: { xs: "10px", md: "14px" },
          }}
        >
          {" "}
          Converting Contract:{"    "}
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
