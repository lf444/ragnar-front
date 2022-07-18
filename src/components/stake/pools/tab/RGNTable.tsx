import { Box, Typography, Tabs, Tab, Button, Grid } from "@mui/material";
import React from "react";
import { useState, FunctionComponent } from "react";
import CustomDisplay from "../../../shared/CustomDisplay";
import CustomInput from "../../../shared/CustomInput";
import { ethers } from 'ethers';
import { contractAddress } from "../../../../abi/address";
import { useWaitForTransaction } from "wagmi";
import { errorToast, successToast } from "../../../../utils/method";
import RGNABI from '../../../../abi/contracts/Tokens/RGN.sol/RGN.json'
import LOCKABI from '../../../../abi/contracts/NFT/RGNLOCK.sol/RGNLOCK.json'

interface RGNTableProps {
  selectedIndex: any;
}

const RGNTable: FunctionComponent<RGNTableProps> = ({ selectedIndex }) => {
 
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [amountToStake, setAmountToStake] = useState(0);
  const handleChangeAmount = (newValue: number) => {
    setAmountToStake(newValue);
  };

  async function approve(
    qty: number,
  ) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const rgn = new ethers.Contract(contractAddress.rgnAddress, RGNABI.abi, signer);
        const amount = ethers.utils.parseEther(qty.toString());
       
          const tokenApproveMasterchef = await rgn.approve(
            contractAddress.NFTAddress,
            amount
          );
          tokenApproveMasterchef.wait();
        } 
      } catch (err: any) {
    errorToast(err.code);
  }
}
  async function lock(
    qty: number,
  ) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const lock = new ethers.Contract(contractAddress.NFTAddress, LOCKABI.abi, signer);
        const amount = ethers.utils.parseEther(qty.toString());
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (selectedIndex === 0) {
          const lockNFT3month = await lock.mint(
            String(accounts),
            amount,
            3
          );
          lockNFT3month.wait();

        } else if (selectedIndex === 1) {
          const lockNFT6month = await lock.mint(
            accounts,
            amount,
            6
          );
          lockNFT6month.wait();
        } else if (selectedIndex === 2) {
          const lockNFT12month = await lock.mint(
            accounts,
            amount,
            12
          );
          lockNFT12month.wait();
        } else if (selectedIndex === 3) {
          const lockNFT24month = await lock.mint(
            accounts,
            amount,
            24
          );
          lockNFT24month.wait();
        } else if (selectedIndex === 4) {
          const lockNFT36month = await lock.mint(
            accounts,
            amount,
            36
          );
          lockNFT36month.wait();
        } 
       
        } 
      } catch (err: any) {
    errorToast(err.code);
    console.log(err)
  }
}


  return (
    <Grid sx={{ width: "100%", pt: "1rem" }} direction="column">
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
        <Button onClick={() => approve(amountToStake)}
          variant="contained"
          sx={{
            mr: "1rem",
            width: "20%",
            backgroundColor: (theme) => theme.palette.primary.light,
            fontWeight: "bold",
          }}
        >
<<<<<<< HEAD
          <Tab
            label="3 MONTHS"
            {...a11yProps(0)}
            style={{
              color: value === 0 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
            }}
          />
          <Tab
            label="6 MONTHS"
            {...a11yProps(1)}
            style={{
              color: value === 1 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
            }}
          />
          <Tab
            label="1 YEAR"
            {...a11yProps(2)}
            style={{
              color: value === 2 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
            }}
          />
          <Tab
            label="2 YEARS"
            {...a11yProps(3)}
            style={{
              color: value === 3 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
            }}
          />
          <Tab
            label="3 YEARS"
            {...a11yProps(4)}
            style={{
              color: value === 4 ? "#ddeaf2" : "#929ea6",
              textTransform: "none",
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid sx={{ width: "100%" }} container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGN"} display="Deposit" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" } }}>
              {" "}
              1
            </Grid>
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" } }}>
              2
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            {" "}
            <CustomInput
              poolName={"RGN"}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={contractAddress.rgnAddress}
              stake={true}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
              Approve
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
              Lock
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGN"} display="Deposit" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" } }}>
              {" "}
              1
            </Grid>
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" } }}>
              2
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            {" "}
            <CustomInput
              poolName={"RGN"}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={contractAddress.rgnAddress}
              stake={true}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
              Approve
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
              Lock
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGN"} display="Deposit" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" } }}>
              {" "}
              1
            </Grid>
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" } }}>
              2
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            {" "}
            <CustomInput
              poolName={"RGN"}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={contractAddress.rgnAddress}
              stake={true}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
              Approve
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
              Lock
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGN"} display="Deposit" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" } }}>
              {" "}
              1
            </Grid>
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" } }}>
              2
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            {" "}
            <CustomInput
              poolName={"RGN"}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={contractAddress.rgnAddress}
              stake={true}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
              Approve
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
              Lock
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid container>
          <Grid item container xs={6}>
            <CustomDisplay poolName={"RGN"} display="Deposit" />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" } }}>
              {" "}
              1
            </Grid>
            <Grid item xs={6} sx={{ fontSize: { xs: "0.65em", sm: "1em" } }}>
              2
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            {" "}
            <CustomInput
              poolName={"RGN"}
              amountToStake={amountToStake}
              setAmountToStake={handleChangeAmount}
              address={contractAddress.rgnAddress}
              stake={true}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="space-around">
            {" "}
            <Button
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
              Approve
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "45%",
                backgroundColor: (theme) => theme.palette.primary.light,
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "0.875em" },
              }}
            >
              Lock
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
=======
          Approve
        </Button>
        <Button onClick={() => lock(amountToStake)}
          variant="contained"
          sx={{
            width: "20%",
            backgroundColor: (theme) => theme.palette.primary.light,
            fontWeight: "bold",
          }}
        >
          Lock
        </Button>
      </Grid>
    </Grid>
>>>>>>> 2ab6f7c (dev: css top lock)
  );
}

export default RGNTable;