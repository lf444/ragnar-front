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
import { FunctionComponent, useEffect, useState } from "react";
import CustomInput from "../../../shared/CustomInput";
import CustomDisplay from "../../../shared/CustomDisplay";
import { approve, deposit, withdraw } from "../../../../rpc/tokenInterraction";
import { Pool } from "../../../../abi/pools";
import { useWaitForTransaction } from "wagmi";
import { errorToast, successToast } from "../../../../utils/method";
import { contractAddress } from "../../../../abi/address";

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

const appTag: string = "StableTab";

const StableTab: FunctionComponent<StableTabProps> = ({
  pool,
  handleRefetchDeposit,
}) => {
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
            label="Info"
            {...a11yProps(2)}
            style={{
              color: value === 2 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography
          sx={{
            fontSize: { xs: "0.65em", sm: "0.9em" },
            color: (theme) => theme.palette.text.primary,
            marginBottom: "20px",
            marginTop: "20px",
            fontWeight: "bold",
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
                fontSize: { xs: "0.65em", sm: "1em" },
                fontWeight: "bold",
                justifyContent: "flex-end",
                alignItems: "center",
                display: "flex",
                pb: "4px",
              }}
            >
              {" "}
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
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                fontSize: { xs: "0.65em", sm: "1em" },
                fontWeight: "bold",
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
                pb: "4px",
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
            {" "}
            <CustomInput
              poolName={"YETI"}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={pool.pairAddress}
              stake={true}
            />
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
            {" "}
            <CustomInput
              poolName={"YETI"}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={pool.fakeAddress}
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
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography
          sx={{
            fontSize: { xs: "10px", md: "14px" },
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
              fontSize: { xs: "10px", md: "14px" },
            }}
            href={`https://snowtrace.io/address/${pool.pairAddress}`}
          >
            {pool.pairAddress}
          </Link>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "10px", md: "14px" },
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
              fontSize: { xs: "10px", md: "14px" },
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

export default StableTab;
