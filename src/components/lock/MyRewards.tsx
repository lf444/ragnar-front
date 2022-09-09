import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
  Tooltip,
} from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAddress } from "../../abi/address";
import bRGNABI from "../../abi/contracts/Tokens/RGN.sol/RGN.json";
import theme from "../../utils/theme";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

interface MyRewardsProps {
  nftMetadata: any[];
}

const MyRewards: FunctionComponent<MyRewardsProps> = ({ nftMetadata }) => {
  const theme = useTheme();
  let [RGNlock, setRgnlock] = useState(0);
  let [NFTrewards, setNFTrewards] = useState(0);
  let [bRGNPending, setbRGNPending] = useState(0);
  let [bRGNLock, setbRGNLock] = useState(0);
  let [powerGouvernance, setPowerGouvernance] = useState(0);

  async function fetchAllData() {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const bRGN = new ethers.Contract(
          contractAddress.bRGN,
          bRGNABI.abi,
          signer
        );

        for (let i = 0; i < nftMetadata.length; i++) {
          RGNlock += nftMetadata[i].attributes[0].value / 10 ** 18;
        }
        for (let i = 0; i < nftMetadata.length; i++) {
          NFTrewards += nftMetadata[i].attributes[2].value / 10 ** 18;
        }
        for (let i = 0; i < nftMetadata.length; i++) {
          bRGNPending += nftMetadata[i].attributes[3].value / 10 ** 18;
        }
        for (let i = 0; i < nftMetadata.length; i++) {
          bRGNLock += nftMetadata[i].attributes[1].value / 10 ** 18;
        }

        const supplyBRGN = (await bRGN.totalSupply()) / 10 ** 18;
        setPowerGouvernance((100 * bRGNLock) / supplyBRGN);
        console.log(supplyBRGN);
      }
    } catch (err: any) {
      console.log(err);
    }
  }

  fetchAllData();

  return (
    <>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        xs={12}
        sx={{
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "5px 5px 0 0",
          widthl: "100%",
          fontWeight: "bold",
          fontSize: { xs: "0.75em", sm: "1em" },
          pl: "1rem",
          pt: "0.5em",
          pb: "1rem",
          borderBottom: 2,
          borderColor: "divider",
          alignItems: "center",
        }}
      >
        <Typography> My Rewards </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
          marginBottom: "25px",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "0 0 5px 5px",
          paddingTop: 1,
          paddingBottom: 1,
          paddingLeft: 3,
          paddingRight: 3,
          marginLeft: "auto",
          marginRight: "auto",
          height: "485px",
        }}
      >
        <Typography sx={{ marginBottom: "18px", marginTop: "100px" }}>
          Total Rewards: {NFTrewards.toLocaleString("en")}
        </Typography>
        <Typography sx={{ marginBottom: "18px" }}>
          Total Pending bRGN: {bRGNPending.toLocaleString("en")}
        </Typography>
        <Typography sx={{ marginBottom: "18px" }}>
          Total bRGN Lock: {bRGNLock.toLocaleString("en")}
        </Typography>
        <Typography sx={{ marginBottom: "18px" }}>
          Total RGN Lock: {RGNlock.toLocaleString("en")}
        </Typography>
        <Typography sx={{ marginBottom: "18px" }}>
          Power of Gouvernance: {powerGouvernance.toLocaleString("en")}%{" "}
          <Tooltip title="Governance power is relative to the number of bRGN locks in your NFTs and not to the bRGNs in pending.">
            <InfoRoundedIcon
              sx={{
                color: (theme) => theme.palette.background.default,
                fontSize: "1em",
                marginLeft: "0.5em",
              }}
            />
          </Tooltip>
        </Typography>
      </Grid>
    </>
  );
};

export default MyRewards;
