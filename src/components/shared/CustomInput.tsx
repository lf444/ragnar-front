import { Grid, Input, Button } from "@mui/material";
import { FunctionComponent } from "react";
import { appLogger } from "../../utils/method";
import { ethers } from "ethers";
import tokenABI from "../../abi/contracts/Tokens/RGN.sol/RGN.json";
import masterchefABI from "../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";
import { contractAddress } from "../../abi/address";
import { formatEther } from "ethers/lib/utils";

interface CustomInputProps {
  poolName: string;
  amountToStake: number;
  setAmountToStake: any;
  address: string;
  stake: boolean;
}
const CustomInput: FunctionComponent<CustomInputProps> = ({
  poolName,
  amountToStake,
  setAmountToStake,
  address,
  stake,
}) => {
  const appTag: string = "CustomInput";

  const handleChangeAmount = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAmountToStake(+event.target.value);
  };

  async function balanceOfMax() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const token = new ethers.Contract(address, tokenABI.abi, signer);
      const masterchef = new ethers.Contract(
        contractAddress.masterchefAddress,
        masterchefABI.abi,
        signer
      );
      try {
        if (stake) {
          const balanceOfToken = await token.balanceOf(accounts[0]);
          const parseBalanceOf = formatEther(String(balanceOfToken));
          setAmountToStake(Math.round(+parseBalanceOf));
        } else {
          const balanceOfTokenStaked = await masterchef.depositInfo(
            address,
            accounts[0]
          );
          const parseBalanceOfStaked = ethers.utils.formatEther(
            String(balanceOfTokenStaked)
          );
          setAmountToStake(Math.round(+parseBalanceOfStaked));
        }
      } catch (err: any) {
        appLogger(appTag, "- Error approve-", err.message);
      }
    }
  }

  return (
    <>
      <Grid
        item
        container
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          borderRadius: "5px",
          alignItems: "center",
        }}
      >
        {" "}
        <Input
          sx={{
            marginLeft: 1,
            width: { xs: "40%", md: "65%", sm: "30%" },
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              {
                display: "none",
              },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
          }}
          onChange={(e) => handleChangeAmount(e)}
          disableUnderline
          placeholder="Enter an amount"
          value={amountToStake}
          type="number"
        ></Input>
        {stake ? (
          <Button
            onClick={() => balanceOfMax()}
            variant="contained"
            sx={{
              borderRadius: "5px",
              fontSize: { xs: "0.50rem", sm: "0.50em" },
              position: "relative",
              marginRight: "0.25rem",
              fontWeight: "bold",
              marginLeft: "auto",
              boxShadow: "none",
              textTransform: "none",
              backgroundColor: (theme) => theme.palette.secondary.main,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            MAX
          </Button>
        ) : (
          <Button
            onClick={() => balanceOfMax()}
            variant="contained"
            sx={{
              borderRadius: "5px",
              fontSize: { xs: "0.50rem", sm: "0.50em" },
              position: "relative",
              marginRight: "0.25rem",
              fontWeight: "bold",
              marginLeft: "auto",
              boxShadow: "none",
              textTransform: "none",
              backgroundColor: (theme) => theme.palette.secondary.main,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            MAX
          </Button>
        )}
      </Grid>
    </>
  );
};

export default CustomInput;
