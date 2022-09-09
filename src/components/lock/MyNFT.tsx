import { FunctionComponent } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LOCKABI from "../../abi/contracts/NFT/RGNLOCK.sol/RGNLOCK.json";
import { contractAddress } from "../../abi/address";
import { ethers } from "ethers";
interface MyNftProps {
  nftMetadata: any[];
  isLoadingMyNft: boolean;
  numberOfNFTOwned: number;
}

const MyNft: FunctionComponent<MyNftProps> = ({
  nftMetadata,
  isLoadingMyNft,
  numberOfNFTOwned,
}) => {
  async function claimRGN(index: number) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const lock = new ethers.Contract(
          contractAddress.NFTAddress,
          LOCKABI.abi,
          signer
        );
        const claimRGN1 = await lock.compoundReward(index, false);
        claimRGN1.wait();
      }
    } catch (err: any) {
      console.log(err);
    }
  }
  // somes changes
  async function claimbRGN(index: number) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const lock = new ethers.Contract(
          contractAddress.NFTAddress,
          LOCKABI.abi,
          signer
        );
        const compoundReward = await lock.generateBRgn(index);
        compoundReward.wait();
      }
    } catch (err: any) {
      console.log(err);
    }
  }

  const theme = useTheme();

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
        <Typography> My NFTs </Typography>
        <Typography sx={{ pr: "2rem" }}>
          {" "}
          Number of NFTs: {numberOfNFTOwned}{" "}
        </Typography>
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
          height: "auto",
        }}
      >
        <Carousel
          navButtonsAlwaysVisible
          NextIcon={<ArrowRightIcon />}
          PrevIcon={<ArrowLeftIcon />}
          indicatorContainerProps={{
            style: {
              marginTop: "1.5rem",
              textAlign: "center",
            },
          }}
          autoPlay={false}
        >
          {!isLoadingMyNft ? (
            nftMetadata.length > 0 ? (
              nftMetadata.map((meta, i) => (
                <>
                  <Box
                    sx={{
                      height: "420px",
                      width: { lg: "250px", xs: "180px" },
                      ml: "auto",
                      mr: "auto",
                    }}
                    key={i}
                  >
                    <object type="image/svg+xml" data={meta.image}></object>

                    <Button
                      onClick={() => claimbRGN(meta.edition)}
                      sx={{
                        variant: "contained",
                        backgroundColor: (theme) => theme.palette.primary.light,
                        color: (theme) => theme.palette.text.primary,
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginBottom: "20px",
                        marginTop: "10px",
                        width: "95%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Claim bRGN (
                      {(meta.attributes[3].value / 10 ** 18).toLocaleString(
                        "en"
                      )}
                      )
                    </Button>
                    <Button
                      onClick={() => claimRGN(meta.edition)}
                      sx={{
                        variant: "contained",
                        backgroundColor: (theme) => theme.palette.primary.light,
                        color: (theme) => theme.palette.text.primary,
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginBottom: "20px",
                        width: "95%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Claim RGN (
                      {(meta.attributes[2].value / 10 ** 18).toLocaleString(
                        "en"
                      )}
                      )
                    </Button>
                  </Box>
                </>
              ))
            ) : (
              <Box
                sx={{
                  height: "420px",
                  width: "300px",
                  margin: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Typography>NO NFT, Lock now to get one!</Typography>
              </Box>
            )
          ) : (
            <Box
              sx={{
                height: "420px",
                width: "250px",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <CircularProgress size="6rem" />
            </Box>
          )}
        </Carousel>
      </Grid>
    </>
  );
};

export default MyNft;
