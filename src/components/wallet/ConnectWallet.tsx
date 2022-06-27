import { Typography, Grid, Button } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { connectors } from "./connector";
import WalletModal from "./WalletModal";
import { truncateAddress } from "../../utils/method";
import LogoutIcon from "@mui/icons-material/Logout";
const ConnectWallet = () => {
  const [open, setOpen] = useState(false);

  const { library, chainId, account, activate, deactivate, active } =
    useWeb3React();

  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [network, setNetwork] = useState("");

  const refreshState = () => {
    // @ts-ignore
    window.localStorage.setItem("provider", undefined);
    setNetwork("");
    setSignature("");
  };

  const disconnect = () => {
    refreshState();
    deactivate();
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    // @ts-ignore
    if (provider) activate(connectors[provider]);
  }, []);

  return (
    <>
      {!account ? (
        <Button
          onClick={() => {
            setOpen(true);
          }}
          sx={{
            height: "2emx",
            borderRadius: "10px",
            backgroundColor: (theme) => theme.palette.primary.main,
            color: "#ffffff",
          }}
        >
          <AccountBalanceWalletIcon />
        </Button>
      ) : (
        <>
          <Typography>{truncateAddress(account)}</Typography>
          <Button
            onClick={disconnect}
            sx={{
              borderRadius: "10px",
              width: "5px",
              height: "25px",
              backgroundColor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.secondary.main,
            }}
          >
            <LogoutIcon />
          </Button>
          {chainId ||
            (chainId !== 43113 && (
              <Typography
                sx={{
                  height: "2emx",
                  borderRadius: "10px",
                  color: "red",
                }}
              >
                {" "}
                YOUR NOT EN AVALANCHE NETWORK
              </Typography>
            ))}
        </>
      )}

      {open && <WalletModal open={open} handleClose={handleClose} />}
    </>
  );
};

export default ConnectWallet;
