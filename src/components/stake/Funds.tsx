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
          marginBottom: "10px",
          color: "#3A4149",
          width: "fit-content",
          padding: "5px",
          borderRadius: "5px",
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
    <Grid container direction="row" spacing={2} justifyContent="space-evenly">
      <Grid
        xs={4}
        sx={{
          backgroundColor: "#627F91",
          borderRadius: "15px",
          paddingTop: "5px",
          paddingBottom: "5px",
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        <Typography> YOUR DEPOSIT</Typography>
        <Typography sx={{ fontWeight: "bold" }}>${deposit}USD</Typography>
      </Grid>
      <Grid
        xs={4}
        sx={{
          backgroundColor: "#627F91",
          borderRadius: "15px",
          paddingTop: "5px",
          paddingBottom: "5px",
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        {" "}
        <Typography> YOUR REWARDS</Typography>
        <Typography sx={{ fontWeight: "bold" }}>${reward}USD</Typography>
      </Grid>
      <Grid
        xs={4}
        sx={{
          backgroundColor: "#627F91",
          borderRadius: "15px",
          paddingTop: "5px",
          paddingBottom: "5px",
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        {" "}
        <Typography>raJOE : RAG RATIO</Typography>
        <Typography sx={{ fontWeight: "bold" }}>{ratio}</Typography>
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
          backgroundColor: "#7A8C98",
          borderRadius: "20px 0 0 20px",
          borderRight: "2px solid grey",
          textAlign: "center",
        }}
      >
        {" "}
        <Typography sx={{ fontSize: "11px", marginTop: "5px" }}>
          {" "}
          TOTAL VALUE LOCKED
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>{totalValueLocked}</Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: "#7A8C98",
          borderRight: "2px solid grey",
          textAlign: "center",
        }}
      >
        {" "}
        <Typography sx={{ fontSize: "11px", marginTop: "5px" }}>
          {" "}
          TOTAL PTP CONVERTED
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>{totalRJOE}</Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: "#7A8C98",
          borderRight: "2px solid grey",
          textAlign: "center",
        }}
      >
        {" "}
        <Typography sx={{ fontSize: "11px", marginTop: "5px" }}>
          VECTOR vePTP BALANCE
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>{totalRAJOE}</Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: "#7A8C98",
          textAlign: "center",
          borderRight: "2px solid grey",
        }}
      >
        {" "}
        <Typography sx={{ fontSize: "11px", marginTop: "5px" }}>
          VTX CIRCULATING SUPPLY
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>{totalRGN}</Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: "#7A8C98",
          textAlign: "center",
          borderRadius: "0 20px 20px 0",
        }}
      >
        {" "}
        <Typography sx={{ fontSize: "11px", marginTop: "5px" }}>
          {" "}
          TOTAL VTX LOCKED
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>{totalRGNLocked}</Typography>
      </Grid>
    </Grid>
  );
};
