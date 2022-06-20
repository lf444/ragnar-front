import { Grid, Typography } from "@mui/material";
import { ethers } from "ethers";
import masterchefABI from "../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";
import mainstakingABI from "../../abi/contracts/MainProtocol/MainStaking.sol/MainStaking.json";
import rgnABI from "../../abi/contracts/Tokens/RGN.sol/RGN.json"
import { contractAddress } from "../../abi/address";
import { useEffect, useState } from "react";
import { coinGeckoService } from "../../services/coinGeckoService";
import { TOKEN_ID } from "../../utils/constance";

const Funds = () => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: "bold",
          color: (theme) => theme.palette.text.primary,
          width: "fit-content",
          padding: 1,
          paddingTop: 4,
          borderRadius: "5px",
          fontSize: "1rem",
        }}
      >
        STAKE FUNDS
      </Typography>
      <FundsFirstTabs />
      <FundSecondTabs />
    </>
  );
};

export default Funds;

const FundsFirstTabs = () => {
  const [deposit, setDeposit] = useState(0);
  const [reward, setReward] = useState(0);
  const [valuelocked, setTotalValueLocked] = useState(0);
 

  useEffect(() => {
    fetchMyDeposit();
    fetchMyReward();
    TVL();
  }, [])


  async function fetchMyDeposit() {
    try {
      if (window.ethereum) {
        let accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
        const priceYusd = await coinGeckoService.getPrice(TOKEN_ID.yusd);
        const priceRgnYeti = await coinGeckoService.getPrice(TOKEN_ID.yeti);
        const priceLpCurve = 1;
        const priceRGN = 0.3;
        const myDepositYUSD = await masterchef.depositInfo(contractAddress.fakeYusdAddress, String(accounts)) * priceYusd;
        const myDepositRgnYeti = await masterchef.depositInfo(contractAddress.rgnYetiAddress, String(accounts)) * priceRgnYeti;
        const myDepositLpCurve = await masterchef.depositInfo(contractAddress.fakeLpCurveAddress, String(accounts)) * priceLpCurve;
        const myDepositRGN = await masterchef.depositInfo(contractAddress.rgnAddress, String(accounts)) * priceRGN;
        setDeposit((myDepositYUSD + myDepositLpCurve + myDepositRgnYeti + myDepositRGN) / 10**18);  
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }

  async function fetchMyReward() {
    try {
      if (window.ethereum) {
        let accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
        const priceRgnYeti = await coinGeckoService.getPrice(TOKEN_ID.yeti);
        const priceRGN = 0.3;
        const myRewardYUSD = await masterchef.pendingTokens(contractAddress.fakeYusdAddress, String(accounts), contractAddress.yetiAddres);
        const myRewardRgnYeti = await masterchef.pendingTokens(contractAddress.rgnYetiAddress, String(accounts), contractAddress.yetiAddres);
        const myRewardLpCurve = await masterchef.pendingTokens(contractAddress.fakeLpCurveAddress, String(accounts), contractAddress.yetiAddres);
        const myRewardRGN = await masterchef.pendingTokens(contractAddress.rgnAddress, String(accounts), contractAddress.yetiAddres);
        const myTotalReward = ((Number(myRewardYUSD.pendingBonusToken) * priceRgnYeti / 10**18) + (Number(myRewardYUSD.pendingRGN) * priceRGN / 10**18) + 
        (Number(myRewardRgnYeti.pendingBonusToken) * priceRgnYeti / 10**18) + (Number(myRewardRgnYeti.pendingRGN) * priceRGN / 10**18) + 
        (Number(myRewardLpCurve.pendingBonusToken) * priceRgnYeti / 10**18) + (Number(myRewardLpCurve.pendingRGN) * priceRGN / 10**18) + 
        (Number(myRewardRGN.pendingBonusToken) * priceRgnYeti / 10**18) + (Number(myRewardRGN.pendingRGN) * priceRGN / 10**18))
        setReward(myTotalReward)  
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }

  async function TVL() {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
        const priceYusd = await coinGeckoService.getPrice(TOKEN_ID.yusd);
        const priceRgnYeti = await coinGeckoService.getPrice(TOKEN_ID.yeti);
        const priceLpCurve = 1;
        const priceRGN = 0.3;
        const TVLYUSD = await masterchef.getPoolInfo(contractAddress.fakeYusdAddress);
        const TVLRgnYeti = await masterchef.getPoolInfo(contractAddress.rgnYetiAddress);
        const TVLLpCurve = await masterchef.getPoolInfo(contractAddress.fakeLpCurveAddress);
        const TVLRGN = await masterchef.getPoolInfo(contractAddress.rgnAddress);
        setTotalValueLocked((Number(TVLYUSD.sizeOfPool) * priceYusd / 10**18) + (Number(TVLRgnYeti.sizeOfPool) * priceRgnYeti / 10**18) +
        (Number(TVLLpCurve.sizeOfPool) * priceLpCurve / 10**18) + (Number(TVLRGN.sizeOfPool) * priceRGN / 10**18));
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }  



  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ marginBottom: "3%" }}
    >
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        display="flex"
        xs={3.75}
        sm={3}
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRadius: "5px",
          textAlign: "center",
          
          p: 1,
        }}
      >
        <Grid item direction="column">
          <Typography
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.50rem",
              },
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {" "}
            YOUR DEPOSIT
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.50rem",
              },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            ${Math.round(deposit)} USD
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        display="flex"
        xs={3.75}
        sm={3}
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRadius: "5px",
          textAlign: "center",
          
          p: 1,
        }}
      >
        <Grid item direction="column">
          <Typography
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.50rem",
              },
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {" "}
            YOUR REWARDS
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.50rem",
              },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            ${Math.round(reward)} USD
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        display="flex"
        xs={3.75}
        sm={3}
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRadius: "5px",
          textAlign: "center",
          
          p: 1,
        }}
      >
        <Grid item direction="column">
          <Typography
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.50rem",
              },
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            TOTAL VALUE LOCKED
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.50rem",
              },
              color: (theme) => theme.palette.text.primary,
              fontWeight: "bold",
            }}
          >
            ${Math.round(valuelocked)} USD
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const FundSecondTabs = () => {
  const [totalYeti, setTotalYeti] = useState(0);
  const [totalVeYeti, setTotalVeYeti] = useState(0);
  const [totalRGN, setTotalRGN] = useState(0);
  const [totalRGNLocked, setTotalRGNLocked] = useState(0);

  useEffect(() => {
    fetchDATA();
  }, [])



  async function fetchDATA() {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const mainstaking = new ethers.Contract(
          contractAddress.mainstakingAddress,
          mainstakingABI.abi,
          signer
        );
        const rgn = new ethers.Contract(
          contractAddress.rgnAddress,
          rgnABI.abi,
          signer
        );
        const getStackedYETI = await mainstaking.getStakedYeti();
        const getStackedVeYeti = await mainstaking.getVeYETI();
        const rgnSupply = await rgn.totalSupply();
        //const rgnLocked = await
        setTotalYeti(Number(getStackedYETI) / 10**18);
        setTotalVeYeti(Number(getStackedVeYeti) / 10**18);
        setTotalRGN(Number(rgnSupply) / 10**18);
        //setTotalRGNLocked(Number(rgnLocked) / 10**18)
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }  


  return (
    <Grid container direction="row">
      <Grid
        item
        xs
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRadius: "1px 0 0 1px",
          borderRight: "1px solid grey",
          
          textAlign: "center",
        }}
      >
        {" "}
        <Typography
          sx={{
            fontSize: {
              lg: "0.85em",
              md: "0.75em",
              sm: "0.65em",
              xs: "0.50rem",
            },
            marginTop: "5px",
            color: "#929ea6",
          }}
        >
          {" "}
          RGN BURNED
        </Typography>
        <Typography
          sx={{
            fontSize: {
              lg: "0.85em",
              md: "0.75em",
              sm: "0.65em",
              xs: "0.50rem",
            },
            fontWeight: "bold",
            color: "#bfcbd2",
          }}
        >
          0
        </Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRight: "1px solid grey",
          
          textAlign: "center",
        }}
      >
        {" "}
        <Typography
          sx={{
            fontSize: {
              lg: "0.85em",
              md: "0.75em",
              sm: "0.65em",
              xs: "0.50rem",
            },
            marginTop: "5px",
            color:  (theme) => theme.palette.text.secondary,
          }}
        >
          {" "}
          TOTAL YETI CONVERTED
        </Typography>
        <Typography
          sx={{
            fontSize: {
              lg: "0.85em",
              md: "0.75em",
              sm: "0.65em",
              xs: "0.50rem",
            },
            fontWeight: "bold",
            color: "#bfcbd2",
          }}
        >
          {totalYeti}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRight: "1px solid grey",
          
          textAlign: "center",
        }}
      >
        {" "}
        <Typography
          sx={{
            fontSize: {
              lg: "0.85em",
              md: "0.75em",
              sm: "0.65em",
              xs: "0.50rem",
            },
            marginTop: "5px",
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          veYeti BALANCE
        </Typography>
        <Typography
          sx={{
            fontSize: {
              lg: "0.85em",
              md: "0.75em",
              sm: "0.65em",
              xs: "0.50rem",
            },
            fontWeight: "bold",
            color:  (theme) => theme.palette.text.primary,
          }}
        >
          {totalVeYeti}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          textAlign: "center",
          
          borderRight: "1px solid grey",
        }}
      >
        {" "}
        <Typography
          sx={{
            fontSize: {
              lg: "0.85em",
              md: "0.75em",
              sm: "0.65em",
              xs: "0.50rem",
            },
            marginTop: "5px",
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          RGN CIRCUL SUPPLY
        </Typography>
        <Typography
          sx={{
            fontSize: {
              lg: "0.85em",
              md: "0.75em",
              sm: "0.65em",
              xs: "0.50rem",
            },
            fontWeight: "bold",
            color:  (theme) => theme.palette.text.primary,
          }}
        >
          {totalRGN}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          textAlign: "center",
          
          borderRadius: "0 1px 1px 0",
        }}
      >
        {" "}
        <Typography
          sx={{
            fontSize: {
              lg: "0.85em",
              md: "0.75em",
              sm: "0.65em",
              xs: "0.50rem",
            },
            marginTop: "5px",
            color: "#929ea6",
          }}
        >
          {" "}
          TOTAL RGN LOCKED
        </Typography>
        <Typography
          sx={{
            fontSize: {
              lg: "0.85em",
              md: "0.75em",
              sm: "0.65em",
              xs: "0.50rem",
            },
            fontWeight: "bold",
            color:  (theme) => theme.palette.text.primary,
          }}
        >
          {totalRGNLocked}
        </Typography>
      </Grid>
    </Grid>
  );
};
