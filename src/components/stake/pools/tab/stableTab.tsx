<<<<<<< HEAD
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
<<<<<<< HEAD
import { appLogger } from '../../../utils/method';
<<<<<<< HEAD
>>>>>>> 4560517 (dev: remove dirty console log)
=======
=======
import { appLogger, errorToast } from '../../../utils/method';
>>>>>>> a69614b (dev: add toast first step)
import { contractAddress } from '../../../abi/address';
>>>>>>> 98af50a (button max OK)
=======
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Button,
  Link,
  CircularProgress,
} from "@mui/material";
<<<<<<< HEAD
import { FunctionComponent, useState } from "react";
<<<<<<< HEAD:src/components/stake/tab/stableTab.tsx
import CustomInput from "../../shared/CustomInput";
import CustomDisplay from "../../shared/CustomDisplay";
import { ethers } from "ethers";
import { appLogger, errorToast } from "../../../utils/method";
import { contractAddress } from "../../../abi/address";
import { approve, deposit, withdraw } from "../../../rpc/simple";
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
=======
=======
import { FunctionComponent, useEffect, useState } from "react";
>>>>>>> 92bf03c (dev: add waiting confirmation on stableTab)
import CustomInput from "../../../shared/CustomInput";
import CustomDisplay from "../../../shared/CustomDisplay";
<<<<<<< HEAD
import { approve, deposit, withdraw } from "../../../../rpc/simple";
<<<<<<< HEAD
>>>>>>> b84f72d (dev: component re-organise):src/components/stake/pools/tab/stableTab.tsx
=======
=======
import { approve, deposit, withdraw } from "../../../../rpc/tokenInterraction";
>>>>>>> edf8c65 (dev: refactor rpc call)
import { Pool } from "../../../../abi/pools";
<<<<<<< HEAD
>>>>>>> d1d8a1a (dev: rename component)
=======
import { useWaitForTransaction } from "wagmi";
import { errorToast, successToast } from "../../../../utils/method";
>>>>>>> 92bf03c (dev: add waiting confirmation on stableTab)

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
          <Typography component={"div"}>{children}</Typography>
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
  pool: Pool;
  handleRefetchDeposit: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
const StableTab: FunctionComponent<StableTabProps> = ({
  addressPool, pairAddress, pairName, info, deposit, withdraw, approve, masterchef
=======
const appTag: string = 'StableTab';
=======
const appTag: string = "StableTab";
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)

<<<<<<< HEAD
<<<<<<< HEAD
const StableTab: FunctionComponent<StableTabProps> = ({
  addressPool,
  pairAddress,
  pairName,
  info,
  masterchef,
>>>>>>> 4560517 (dev: remove dirty console log)
}) => {
=======
const StableTab: FunctionComponent<StableTabProps> = ({ pool, masterchef }) => {
>>>>>>> d1d8a1a (dev: rename component)
=======
const StableTab: FunctionComponent<StableTabProps> = ({
  pool,
  handleRefetchDeposit,
}) => {
>>>>>>> f125765 (dev: refactor claim screen + add timeout on refetchData)
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [transaction, setTransaction] = useState("");
  const [depositTX, setDepositTX] = useState("");
  const [withdrawTX, setWithdrawTX] = useState("");
  const [amountToStake, setAmountToStake] = useState(0);

  const [Approved, setApproved] = useState(false);

  const handleChangeAmount = (newValue: number) => {
    setAmountToStake(newValue);
  };

  // @ts-ignore
  const { data, isError, isLoading } = useWaitForTransaction({
    hash: transaction,
  });

  // @ts-ignore
  const waitDepositTX = useWaitForTransaction({
    hash: depositTX,
  });

  // @ts-ignore
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

  const approveToken = async () => {
    await approve(
      amountToStake,
      pool.pairAddress,
      pool.isMasterchef,
      appTag,
      handleSetTx
    );
  };

  const depositToken = async () => {
    await deposit(
      amountToStake,
      pool.pairAddress,
      pool.isMasterchef,
      appTag,
      handleSetDepositTx
    );
  };

  const withdrawToken = async () => {
    await withdraw(
      amountToStake,
      pool.pairAddress,
      pool.isMasterchef,
      appTag,
      handleSetWithdrawTx
    );
  };

  useEffect(() => {
    if (!isLoading && transaction) {
      successToast("TX_SUCCESS");
      setApproved(true);
    }
    if (isError) {
      errorToast("TX_ERRROR");
    }
  }, [isLoading, isError]);

  useEffect(() => {
    if (!waitDepositTX.isLoading && depositTX) {
      successToast("TX_SUCCESS");
      handleRefetchDeposit();
      setApproved(false);
    }
    if (waitDepositTX.isError) {
      errorToast("TX_ERRROR");
      setApproved(false);
    }
  }, [waitDepositTX.isLoading, waitDepositTX.isError]);

  useEffect(() => {
    if (!waitWithdrawTX.isLoading && withdrawTX) {
      successToast("TX_SUCCESS");
      handleRefetchDeposit();
    }
    if (waitWithdrawTX.isError) {
      errorToast("TX_ERRROR");
    }
  }, [waitWithdrawTX.isLoading, waitWithdrawTX.isError]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          centered
<<<<<<< HEAD
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
=======
          aria-label="basic tabs example"
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
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
            label="Info"
            {...a11yProps(2)}
            style={{
<<<<<<< HEAD
              color: value === 2 ? '#ddeaf2' : '#929ea6',
              textTransform: 'none',
>>>>>>> 4560517 (dev: remove dirty console log)
=======
              color: value === 2 ? "#ddeaf2" : "#929ea6",
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
            marginTop: "20px",
            fontWeight: "bold",
=======
            fontSize: { xs: '0.65em', sm: '0.9em' },
            color: (theme) => theme.palette.text.primary,
            marginBottom: '20px',
            marginTop: '20px',
            fontWeight: 'bold',
>>>>>>> 4560517 (dev: remove dirty console log)
=======
            fontSize: { xs: "0.65em", sm: "0.9em" },
            color: (theme) => theme.palette.text.primary,
            marginBottom: "20px",
            marginTop: "20px",
            fontWeight: "bold",
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
          }}
        >
          {pool.info}
        </Typography>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={pool.pairName} display="Stake" />
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
              <Typography
                sx={{
                  borderRadius: "50%",
                  width: "25px",
                  color: !Approved
                    ? (theme) => theme.palette.text.primary
                    : "#262A2F",
                  backgroundColor: !Approved
                    ? (theme) => theme.palette.primary.light
                    : (theme) => "#2F343A",
                }}
              >
                1
              </Typography>
              <Box
                sx={{
                  width: "50%",

                  background: !Approved
                    ? "linear-gradient(to right , #627f91, #868f96)"
                    : "linear-gradient(to right, #262A2F, #868f96 )",
                  height: "4px",
                }}
              ></Box>
>>>>>>> 63b6b9f (dev: yata yata yata)
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
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
>>>>>>> 63b6b9f (dev: yata yata yata)
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  background: Approved
                    ? "linear-gradient(to right , #868f96, #627f91 )"
                    : "linear-gradient(to right, #868f96, #262A2F)",
                  height: "4px",
                }}
              ></Box>
              <Typography
                sx={{
                  borderRadius: "50%",
                  width: "25px",
                  color: Approved
                    ? (theme) => theme.palette.text.primary
                    : "#262A2F",
                  backgroundColor: Approved
                    ? (theme) => theme.palette.primary.light
                    : (theme) => "#2F343A",
                }}
              >
                2
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={6}>
<<<<<<< HEAD
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
=======
            {" "}
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
            <CustomInput
              poolName={"YETI"}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={pool.pairAddress}
              stake={true}
            />
>>>>>>> 4560517 (dev: remove dirty console log)
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              onClick={() => approveToken()}
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: !Approved
                  ? (theme) => theme.palette.primary.light
                  : "#262A2F",
                color: !Approved
                  ? (theme) => theme.palette.text.primary
                  : "#868f96",
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
              {!isLoading ? (
                "APPROVE"
              ) : (
                <CircularProgress
                  size="0.95em"
                  color="inherit"
                  sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              )}
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
              onClick={() => depositToken()}
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: Approved
                  ? (theme) => theme.palette.primary.light
                  : "#262A2F",
                color: Approved
                  ? (theme) => theme.palette.text.primary
                  : "#868f96",
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
<<<<<<< HEAD
>>>>>>> 4560517 (dev: remove dirty console log)
              DEPOSIT
=======
              {!waitDepositTX.isLoading ? (
                "DEPOSIT"
              ) : (
                <CircularProgress
                  size="0.95em"
                  color="inherit"
                  sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              )}
>>>>>>> 92bf03c (dev: add waiting confirmation on stableTab)
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Grid sx={{ marginBottom: "5px" }} item container xs={6}>
            <CustomDisplay poolName={pool.pairName} display="Unstake" />
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
=======
            {" "}
>>>>>>> 47f29bb (dev: simple rpc function move to another file deposit withdraw approve)
            <CustomInput
              poolName={"YETI"}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={pool.pairAddress}
              stake={false}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              onClick={() => withdrawToken()}
              variant="contained"
              sx={{
                width: "50%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
<<<<<<< HEAD
>>>>>>> 4560517 (dev: remove dirty console log)
              WITHDRAW
=======
              {!waitWithdrawTX.isLoading ? (
                "WITHDRAW"
              ) : (
                <CircularProgress
                  size="0.95em"
                  color="inherit"
                  sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              )}
>>>>>>> 92bf03c (dev: add waiting confirmation on stableTab)
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
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
          {pool.pairName} Contract: {"    "}
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
          {pairName} Contract: {"    "}
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
            href={`https://snowtrace.io/address/${pool.pairAddress}`}
          >
            {pool.addressPool}
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
          Staking Contract: {"    "}
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
          Staking Contract: {"    "}
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
            href={`https://snowtrace.io/address/${pool.addressPool}`}
          >
            {pool.addressPool}
          </Link>
        </Typography>
      </TabPanel>
    </Box>
  );
};

export default StableTab;
