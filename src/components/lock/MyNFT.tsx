import { Box, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { ethers } from "ethers";
import { contractAddress } from "../../abi/address";
import LOCKABI from "../../abi/contracts/NFT/RGNLOCK.sol/RGNLOCK.json";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { Buffer } from "buffer";
import Carousel from "react-material-ui-carousel";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const MyNFT = () => {
  const { data, error } = useAccount();
  const [nftMetadata, setNftMetadata] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      getNFTByOwner();
    }
  }, [data]);

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

        let emptyNFt: any[] = [];
        const test = await lock.getNftsOfOwner(accounts[0]);
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

  return (
    <>
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
      >
        {nftMetadata.map((meta, i) => (
          <Box
            sx={{
              height: "300px",
              width: "250px",
              ml: "auto",
              mr: "auto",
            }}
          >
            <object type="image/svg+xml" data={meta.image}></object>
          </Box>
        ))}
      </Carousel>
    </>
  );
};

export default MyNFT;

function Item(props: any) {
  return (
    <Box sx={{ height: "300px", width: "250px" }}>
      <object type="image/svg+xml" data={props.item}></object>
    </Box>
  );
}
