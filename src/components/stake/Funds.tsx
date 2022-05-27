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
          color: "#3A4149",
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
          backgroundColor: "#627F91",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: 3,
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
                xs: "0.85rem",
              },
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
                xs: "0.85rem",
              },
              fontWeight: "bold",
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
          backgroundColor: "#627F91",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: 3,
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
                xs: "0.85rem",
              },
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
                xs: "0.85rem",
              },
              fontWeight: "bold",
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
          backgroundColor: "#627F91",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: 3,
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
                xs: "0.85rem",
              },
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
                xs: "0.85rem",
              },
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
          backgroundColor: "#FFFFFF",
          borderRadius: "10px 0 0 10px",
          borderRight: "2px solid grey",
          boxShadow: 3,
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
              xs: "0.60rem",
            },
            marginTop: "5px",
            color: "#3A4149",
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
              xs: "0.60rem",
            },
            fontWeight: "bold",
            color: "#627F91",
          }}
        >
          {totalValueLocked}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: "#FFFFFF",
          borderRight: "2px solid grey",
          boxShadow: 3,
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
              xs: "0.60rem",
            },
            marginTop: "5px",
            color: "#3A4149",
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
              xs: "0.60rem",
            },
            fontWeight: "bold",
            color: "#627F91",
          }}
        >
          {totalRJOE}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: "#FFFFFF",
          borderRight: "2px solid grey",
          boxShadow: 3,
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
              xs: "0.60rem",
            },
            marginTop: "5px",
            color: "#3A4149",
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
              xs: "0.60rem",
            },
            fontWeight: "bold",
            color: "#627F91",
          }}
        >
          {totalRAJOE}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          boxShadow: 3,
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
              xs: "0.60rem",
            },
            marginTop: "5px",
            color: "#3A4149",
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
              xs: "0.60rem",
            },
            fontWeight: "bold",
            color: "#627F91",
          }}
        >
          {totalRGN}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          boxShadow: 3,
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
              xs: "0.60rem",
            },
            marginTop: "5px",
            color: "#3A4149",
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
              xs: "0.60rem",
            },
            fontWeight: "bold",
            color: "#627F91",
          }}
        >
          {totalRGNLocked}
        </Typography>
      </Grid>
    </Grid>
  );
};
