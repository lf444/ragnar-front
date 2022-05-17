import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Button, Typography } from "@mui/material";
import { appLogger } from "../../utils/method";

function ConnectWalletButton() {
  const appTag = "ConnectWalletButton";
  /*
   * Just a state variable we use to store our user's public wallet.
   */
  const [currentAccount, setCurrentAccount] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) {
        setErrorMsg("Make sure you have metamask!");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const { chainId } = await provider.getNetwork();

      if (chainId === 43114) {
        setErrorMsg("");
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length !== 0) {
          const account = accounts[0];
          setCurrentAccount(account);
          setErrorMsg("");
        } else {
          appLogger(appTag, "- not an authorized account -");
        }
      } else {
        setErrorMsg("you're not in the Avalanche network!");
      }
    } catch (error) {
      appLogger(appTag, "- Error check wallte -", error);
    }
  };

  /**
   * Implement your connectWallet method here
   */
  const connectWallet = async () => {
    try {
      checkIfWalletIsConnected();
      if (errorMsg === "") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrentAccount(accounts[0]);
        setErrorMsg("");
      } else {
        appLogger(appTag, "- Clean error msg -");
      }
    } catch (error) {
      appLogger(appTag, "- Error connectWallet -", error);
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    if (currentAccount && currentAccount !== "") {
      appLogger(appTag, "Current account:", currentAccount);
    }
  }, [currentAccount]);

  useEffect(() => {
    checkIfWalletIsConnected();
    // execute checkIfWalletIsConnected is connected when component unmounts
    return () => {
      checkIfWalletIsConnected();
    };
  }, []);

  return (
    <div>
      {currentAccount && currentAccount !== "" ? (
        <></>
      ) : (
        <Button
          sx={{
            marginLeft: "50px",
            height: "45px",
            borderRadius: "40px",
            backgroundColor: "#7F98AC",
            color: "#ffffff",
          }}
          onClick={() => {
            connectWallet();
          }}
        >
          Connect wallet
        </Button>
      )}
      {errorMsg !== "" && (
        <Typography
          sx={{ color: "#ff0000", position: "absolute",zIndex: "1",backgroundColor: "#3A4149", padding: "10px", borderRadius: "5px", marginTop:"0.5em"}}
        >
          {errorMsg}
        </Typography>
      )}
    </div>
  );
}

export default ConnectWalletButton;
