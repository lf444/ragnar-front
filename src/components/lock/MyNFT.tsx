import { FunctionComponent, useState } from "react";
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


<<<<<<< HEAD
<<<<<<< HEAD
const MyNFT = ({ userAddress }: { userAddress: string | undefined }) => {
  const [nftMetadata, setNftMetadata] = useState<any[]>([]);

  useEffect(() => {
    if (userAddress) {
      getNFTByOwner();
    }
  }, [userAddress]);

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
<<<<<<< HEAD
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
<<<<<<< HEAD
<<<<<<< HEAD
        const total = await lock.balanceOf(String(accounts));
        
        for (let i = 0; i < total; i++) {
          nftByUser.push(String(await lock.tokenOfOwnerByIndex(String(accounts), i)));
         }
         nftByUser.forEach(async (element) => nftMetadataByUser.push(await lock.tokenURI(element)))  
         
        console.log(nftMetadataByUser)
        
      } 
  } catch (error) {
    console.log(error)
=======
        const total = await lock.balanceOf(accounts[0]);
        for (let i = 0; i < +formatEther(total); i++) {
          nftByUser.push(await lock.tokenOfOwnerByIndex(accounts[0], i));
        }
=======
>>>>>>> 881e8eb (dev: add nft viewer)
=======
>>>>>>> 4485386 (dev: better metamask connexion gestion)

        let emptyNFt: any[] = [];
        const test = await lock.getNftsOfOwner(userAddress);
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
    } catch (error) {
      console.log(error);
>>>>>>> 1bfe751 (dev: add nft fetch data)
    }
  };

  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

=======
const MyNFT = ({
  nftMetadata,
  isLoadingMyNft,
}: {
=======
interface MyNftProps {
>>>>>>> e1c2612 (dev: lock better animation)
  nftMetadata: any[];
  isLoadingMyNft: boolean;
  numberOfNFTOwned: number;
  
}

const MyNft: FunctionComponent<MyNftProps> = ({
  nftMetadata,
  isLoadingMyNft,
  numberOfNFTOwned,
}) => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 5133f0e (dev add loading on NFT page)
=======
=======


  async function rewards(index: number, rgn: boolean) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const lock = new ethers.Contract(
          contractAddress.NFTAddress,
          LOCKABI.abi,
          signer
        );
        const pendingtokens = await lock.pendingTokens(index);
        
        if (rgn) {
        return pendingtokens.pendingRGN;
        } else return pendingtokens.pendingBRGN;
      }
    } catch (err: any) {
      console.log(err);
    }
  }
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
        const generateBRgn = await lock.generateBRgn(index);
        generateBRgn.wait();
      }
    } catch (err: any) {
      console.log(err);
    }
  }
  async function compoundReward(index: number) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const lock = new ethers.Contract(
          contractAddress.NFTAddress,
          LOCKABI.abi,
          signer
        );
        const compoundReward = await lock.compoundReward(index, true);
        compoundReward.wait();
      }
    } catch (err: any) {
      console.log(err);
    }
  }


>>>>>>> 92d3965 (buttton nft)
  const theme = useTheme();
>>>>>>> 46eca83 (dev : add nft preview on select lock)
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
                      width: "250px",
                      ml: "auto",
                      mr: "auto",
                    }}
                    key={i}
                  >
                  <object type="image/svg+xml" data={meta.image}></object>
                  <Typography sx={{textAlign: "center"}}>Total Rewards: {meta.edition}</Typography>
                  <Typography sx={{textAlign: "center"}}>Pending bRGN: {meta.edition}</Typography>
                  <Typography sx={{textAlign: "center"}}>Power of Gouvernance: </Typography>
                  <Button onClick={() => claimRGN(meta.edition)} sx={{
                variant: "contained",
                marginRight: "25%",
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
                fontSize: "12px",
                marginBottom: "20px",
              }}>Claim bRGN</Button>
                  <Button onClick={() => compoundReward(meta.edition)} sx={{
                variant: "contained",
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
                fontSize: "12px",
                marginBottom: "20px",
              }}>Claim RGN</Button>
                  </Box>
                </>
              ))
            ) : (
              <Box
                sx={{
                  height: "420px",
                  width: "200px",
                  margin: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                NO NFT
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
