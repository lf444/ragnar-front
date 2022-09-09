import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  Grid,
  Link,
  CircularProgress,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState, FunctionComponent } from "react";
import CustomDisplay from "../../../shared/CustomDisplay";
import CustomInput from "../../../shared/CustomInput";
import { contractAddress } from "../../../../abi/address";
import { BigNumber, ethers } from "ethers";
import { appLogger, errorToast, successToast } from "../../../../utils/method";
import {
  approve,
  deposit,
  withdraw,
  approveRGNYETI,
} from "../../../../rpc/tokenInterraction";
import { useWaitForTransaction } from "wagmi";

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

interface RgnYetiTableProps {
  depositVeYeti: any;
  handleRefetchDeposit: () => void;
}
const appTag: string = "RgnYetiTable";
const RgnYetiTable: FunctionComponent<RgnYetiTableProps> = ({
  depositVeYeti,
  handleRefetchDeposit,
}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [Approved, setApproved] = useState(false);

  const [transaction, setTransaction] = useState("");
  const [depositTX, setDepositTX] = useState("");
  const [withdrawTX, setWithdrawTX] = useState("");
  const [amountToStake, setAmountToStake] = useState(0);
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

  const approveYeti = async () => {
    await approve(
      amountToStake,
      contractAddress.yetiAddres,
      false,
      appTag,
      handleSetTx
    );
  };

  const approveRGNYETIto = async () => {
    await approveRGNYETI(
      amountToStake,
      contractAddress.yetiAddres,
      appTag,
      handleSetTx
    );
  };
  const approveRGNYeti = async () => {
    await approve(
      amountToStake,
      contractAddress.rgnYetiAddress,
      true,
      appTag,
      handleSetTx
    );
  };

  const depositToken = async () => {
    await deposit(
      amountToStake,
      contractAddress.rgnYetiAddress,
      true,
      appTag,
      handleSetDepositTx
    );
  };

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
      depositVeYeti(amountToStake);
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, "depositVeYetiMain", err.message);
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
            label="Info"
            {...a11yProps(3)}
            style={{
              color: value === 3 ? "#ddeaf2" : "#929ea6",
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
            fontWeight: "bold",
          }}
        >
          Convert YETI to rgnYETI, then stake rgnYETI to earn protocol revenue
          plus RGN tokens
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.65em", sm: "0.9em" },
            color: (theme) => theme.palette.text.secondary,
            marginBottom: "20px",
            fontWeight: "normal",
          }}
        >
          Important: Converting YETI to rgnYETI is irreversible. You may stake
          and unstake rgnYETI tokens, but not convert them back to YETI via our
          protocol. Secondary markets exist to allow the exchange of rgnYETI for
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
            {" "}
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
              address={contractAddress.yetiAddres}
              stake={true}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              onClick={approveRGNYETIto}
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
              onClick={depositVeYetiMain}
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
                "CONVERT"
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
        <Typography
          sx={{
            fontSize: { xs: "0.65em", sm: "0.9em" },
            color: (theme) => theme.palette.text.primary,
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          By staking rgnYETI, you are earning approximately 66.6% of the Yeti
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
              address={contractAddress.rgnYetiAddress}
              stake={true}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              onClick={approveRGNYeti}
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
              onClick={depositToken}
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
            {" "}
            <CustomInput
              poolName={"YETI"}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={contractAddress.rgnYetiAddress}
              stake={false}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              onClick={withdrawToken}
              variant="contained"
              sx={{
                width: "55%",
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
      <TabPanel value={value} index={3}>
        <Typography
          sx={{
            fontSize: { xs: "10px", md: "14px" },
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
              fontSize: { xs: "10px", md: "14px" },
            }}
            href={`https://snowtrace.io/address/${contractAddress.yetiAddres}`}
          >
            {contractAddress.yetiAddres}
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
          rgnYeti Contract:{"    "}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
              textDecoration: "none",
              fontWeight: "normal",
              fontSize: { xs: "10px", md: "14px" },
            }}
            href={`https://snowtrace.io/address/${contractAddress.rgnYetiAddress}`}
          >
            {contractAddress.rgnYetiAddress}
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
          Staking Contract:{"    "}
          <Link
            sx={{
              color: (theme) => theme.palette.text.secondary,
              textDecoration: "none",
              fontWeight: "normal",
              fontSize: { xs: "10px", md: "14px" },
            }}
            href={`https://snowtrace.io/address/${contractAddress.masterchefAddress}`}
          >
            {contractAddress.masterchefAddress}
          </Link>
        </Typography>
        <Typography
          sx={{
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

export default RgnYetiTable;
