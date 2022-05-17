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
          backgroundColor: "#FFFFFF",
          borderRadius: "20px 0 0 20px",
          borderRight: "2px solid grey",
          boxShadow:3,
          textAlign: "center",
        }}
      >
        {" "}
        <Typography sx={{ fontSize: "11px", marginTop: "5px",color:"#3A4149" }}>
          {" "}
          TOTAL VALUE LOCKED
        </Typography>
        <Typography sx={{ fontWeight: "bold" ,color:"#627F91"}}>{totalValueLocked}</Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: "#FFFFFF",
          borderRight: "2px solid grey",
          boxShadow:3,
          textAlign: "center",
        }}
      >
        {" "}
        <Typography sx={{ fontSize: "11px", marginTop: "5px",color:"#3A4149" }}>
          {" "}
          TOTAL PTP CONVERTED
        </Typography>
        <Typography sx={{ fontWeight: "bold",color:"#627F91" }}>{totalRJOE}</Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: "#FFFFFF",
          borderRight: "2px solid grey",
          boxShadow:3,
          textAlign: "center",
        }}
      >
        {" "}
        <Typography sx={{ fontSize: "11px", marginTop: "5px",color:"#3A4149" }}>
          VECTOR vePTP BALANCE
        </Typography>
        <Typography sx={{ fontWeight: "bold",color:"#627F91" }}>{totalRAJOE}</Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          boxShadow:3,
          borderRight: "2px solid grey",
        }}
      >
        {" "}
        <Typography sx={{ fontSize: "11px", marginTop: "5px" ,color:"#3A4149"}}>
          VTX CIRCULATING SUPPLY
        </Typography>
        <Typography sx={{ fontWeight: "bold",color:"#627F91" }}>{totalRGN}</Typography>
      </Grid>
      <Grid
        item
        xs
        sx={{
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          boxShadow:3,
          borderRadius: "0 20px 20px 0",
        }}
      >
        {" "}
        <Typography sx={{ fontSize: "11px", marginTop: "5px",color:"#3A4149" }}>
          {" "}
          TOTAL VTX LOCKED
        </Typography>
        <Typography sx={{ fontWeight: "bold",color:"#627F91" }}>{totalRGNLocked}</Typography>
      </Grid>
    </Grid>
  );
};
