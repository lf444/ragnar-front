import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState, FunctionComponent } from "react";
import CustomDisplay from "../shared/CustomDisplay";
import CustomInput from "../shared/CustomInput";
import { ethers } from "ethers";
import { contractAddress } from "../../abi/address";
import { useWaitForTransaction } from "wagmi";
import { errorToast, successToast } from "../../utils/method";
import RGNABI from "../../abi/contracts/Tokens/RGN.sol/RGN.json";
import LOCKABI from "../../abi/contracts/NFT/RGNLOCK.sol/RGNLOCK.json";

interface LockRGNProps {
  selectedIndex: any;
  handleRefetchDeposit: () => void;
}

const LockRGN: FunctionComponent<LockRGNProps> = ({
  selectedIndex,
  handleRefetchDeposit,
}) => {
  const [amountToStake, setAmountToStake] = useState(0);
  const handleChangeAmount = (newValue: number) => {
    setAmountToStake(newValue);
  };

  const [approveWait, setApproveWait] = useState("");
  const [waitLockTx, setWaitLockTx] = useState("");
  const [Approved, setApproved] = useState(false);

  const waitApprove = useWaitForTransaction({
    hash: approveWait,
  });

  const waitLock = useWaitForTransaction({
    hash: waitLockTx,
  });

  const handleSetTxApprove = (tx: string) => {
    setApproveWait(`${tx}`);
  };

  const handleSetLockTx = (tx: string) => {
    setWaitLockTx(`${tx}`);
  };

  async function approve(qty: number) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const rgn = new ethers.Contract(
          contractAddress.rgnAddress,
          RGNABI.abi,
          signer
        );
        const amount = ethers.utils.parseEther(qty.toString());

        const tokenApproveMasterchef = await rgn.approve(
          contractAddress.NFTAddress,
          amount
        );
        tokenApproveMasterchef.wait();
        handleSetTxApprove(tokenApproveMasterchef.hash);
      }
    } catch (err: any) {
      errorToast(err.code);
    }
  }
  async function lock(qty: number) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const lock = new ethers.Contract(
          contractAddress.NFTAddress,
          LOCKABI.abi,
          signer
        );
        const amount = ethers.utils.parseEther(qty.toString());
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const lockNFT = await lock.mint(accounts[0], amount, selectedIndex);
        lockNFT.wait();
        handleSetLockTx(lockNFT.hash);
      }
    } catch (err: any) {
      errorToast(err.code);
      console.log(err);
    }
  }

  useEffect(() => {
    if (!waitApprove.isLoading && approveWait) {
      successToast("TX_SUCCESS");
      setApproved(true);
    }
    if (waitApprove.isError) {
      errorToast("TX_ERRROR");
    }
  }, [waitApprove.isLoading, waitApprove.isError]);

  useEffect(() => {
    if (!waitLock.isLoading && waitLockTx) {
      successToast("TX_SUCCESS");
      handleRefetchDeposit();
      setApproved(false);
    }
    if (waitLock.isError) {
      errorToast("TX_ERRROR");
      setApproved(false);
    }
  }, [waitLock.isLoading, waitLock.isError]);

  return (
    <Grid container sx={{ width: "100%", pt: "1rem" }} direction="column">
      <Grid item container xs={12}>
        <CustomDisplay poolName={"RGN"} display="LOCK" />
      </Grid>
      <Grid item container xs={6} sx={{ pb: "10px" }}>
        {" "}
        <CustomInput
          poolName={"RGN"}
          amountToStake={amountToStake}
          setAmountToStake={handleChangeAmount}
          address={contractAddress.rgnAddress}
          stake={true}
        />
      </Grid>
      <Grid item container xs={6} justifyContent="flex-start">
        {" "}
        <Button
          onClick={() => approve(amountToStake)}
          variant="contained"
          sx={{
            mr: "1rem",
            width: "20%",
            fontWeight: "bold",
            backgroundColor: !Approved
              ? (theme) => theme.palette.primary.light
              : "#262A2F",
            color: !Approved
              ? (theme) => theme.palette.text.primary
              : "#868f96",
          }}
        >
          {!waitApprove.isLoading ? (
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
          onClick={() => lock(amountToStake)}
          variant="contained"
          sx={{
            width: "20%",
            fontWeight: "bold",
            backgroundColor: Approved
              ? (theme) => theme.palette.primary.light
              : "#262A2F",
            color: Approved ? (theme) => theme.palette.text.primary : "#868f96",
          }}
        >
          {!waitLock.isLoading ? (
            "LOCK"
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
  );
};

export default LockRGN;
