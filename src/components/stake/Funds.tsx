import { Grid, Typography } from "@mui/material";
import { ethers } from "ethers";
import masterchefABI from "../../abi/MasterChefRGN.json";
import { contractAddress } from "../../abi/address";
import { useState } from "react";
// import vejoestackingABI from "../../abi/vejoestking.json"

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
  const [ratio, setRatio] = useState(1);
  async function fetchData() {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchef,
          masterchefABI.abi,
          signer
        );
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
          borderRadius: "10px",
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
            ${deposit}USD
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
          borderRadius: "10px",
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
            ${reward}USD
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
          borderRadius: "10px",
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
            raJOE RATIO
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
            {ratio}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const FundSecondTabs = () => {
  const [totalValueLocked, setTotalValueLocked] = useState(0);
  const [totalRJOE, setTotalRJOE] = useState(0);
  const [totalRAJOE, setTotalRAJOE] = useState(0);
  const [totalRGN, setTotalRGN] = useState(0);
  const [totalRGNLocked, setTotalRGNLocked] = useState(0);

  async function fetchData() {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchef,
          masterchefABI.abi,
          signer
        );
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
          borderRadius: "10px 0 0 10px",
          borderRight: "2px solid grey",
          
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
          TOTAL VALUE LOCKED
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
          {totalValueLocked}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRight: "2px solid grey",
          
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
          TOTAL PTP CONVERTED
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
          {totalRJOE}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRight: "2px solid grey",
          
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
          VECTOR vePTP BALANCE
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
          {totalRAJOE}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          textAlign: "center",
          
          borderRight: "2px solid grey",
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
          VTX CIRCUL SUPPLY
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
          
          borderRadius: "0 10px 10px 0",
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
          TOTAL VTX LOCKED
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
