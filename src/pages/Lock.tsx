import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Buffer } from "buffer";
import { contractAddress } from "../abi/address";
import { Grid, Typography } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import LockPool from "../components/lock/LockPool";
import rgn from "../assets/images/pools/rgn.png";
import Funds from "../components/shared/funds/Funds";
import MyNft from "../components/lock/MyNFT";
import theme from "../utils/theme";
import PageHeader from "../components/shared/PageHeader";
import LOCKABI from "../abi/contracts/NFT/RGNLOCK.sol/RGNLOCK.json";
import { appLogger, errorToast } from "../utils/method";

const appTag = "Lock";

const Lock = ({
  userAddress,
  tokensPrices,
}: {
  userAddress: string | undefined;
  tokensPrices: {
    priceYeti: number;
    priceYusd: number;
    priceRgn: number;
    priceLpCurve: number;
    priceRgnYeti: number;
  };
}) => {
  const [shouldRefetchData, setShouldRefetchData] = useState(false);
  const handleRefetchDeposit = () => {
    setShouldRefetchData(true);
    setTimeout(() => setShouldRefetchData(false), 1500);
  };

  const [nftMetadata, setNftMetadata] = useState<any[]>([]);
  const [isLoadingMyNft, setIsLoading] = useState(false);
  const [numberOfNFTOwned, setNumberOfNFTOwned] = useState(0);

  const getNFTByOwner = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const lock = new ethers.Contract(
          contractAddress.NFTAddress,
          LOCKABI.abi,
          signer
        );

        let emptyNFt: any[] = [];
        const test = await lock.getNftsOfOwner(userAddress);
        setNumberOfNFTOwned(+test.length);
        const allNFTOwned = await Promise.all(
          test.map((e: any) => {
            return lock.tokenURI(e);
          })
        )
          .then((e) => {
            emptyNFt = e.map((e: any) => {
              return JSON.parse(
                Buffer.from(e.substring(29), "base64").toString()
              );
            });
          })
          .then(() => setNftMetadata(emptyNFt));
      }
    } catch (error: any) {
      errorToast(error.code);
      appLogger(appTag, " fetchMyDeposit masterChef", error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userAddress) {
      setIsLoading(true);
      getNFTByOwner().then(() => setIsLoading(false));
    }
  }, [userAddress]);

  useEffect(() => {
    if (userAddress && shouldRefetchData) {
      setIsLoading(true);
      getNFTByOwner().then(() => setIsLoading(false));
    }
  }, [shouldRefetchData]);

  return (
    <>
      <PageHeader pageTitle={`Ragnar finance - Lock`} />{" "}
      <Zoom in={true}>
        <Grid
          container
          direction="row"
          alignItems="center"
          sx={{
            marginBottom: "4rem",
            marginLeft: "auto",
            marginRight: "auto",
            width: {
              xs: "100%",
              sm: "65%",
            },
            borderRadius: { xs: "0px", sm: "20px" },
          }}
        >
          <Grid item sx={{ width: "100%", paddingBottom: 5 }}>
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
              LOCK RGN
            </Typography>
            <Funds
              shouldDisplaySecondTabPrice={true}
              userAddress={userAddress}
              shouldRefetchData={shouldRefetchData}
              tokensPrices={tokensPrices}
            />
          </Grid>

          <Grid item xs={12} sx={{ width: "100%", mb: "25px", p: 1 }}>
            <LockPool logo1={rgn} handleRefetchDeposit={handleRefetchDeposit} />
          </Grid>
          <Grid item container xs={12} sm={6} sx={{ width: "100%", p: 1 }}>
            {" "}
            <MyNft
              nftMetadata={nftMetadata}
              isLoadingMyNft={isLoadingMyNft}
              numberOfNFTOwned={numberOfNFTOwned}
            />
          </Grid>
          <Grid item container xs={12} sm={6} sx={{ width: "100%", p: 1 }}>
            {" "}
            <Grid
              item
              xs={12}
              sx={{
                color: (theme) => theme.palette.text.primary,
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
              Rewards
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
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Zoom>
    </>
  );
};

export default Lock;
