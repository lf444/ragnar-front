import { CardMedia, Grid, Typography } from "@mui/material";
import { ethers } from "ethers";
import { contractAddress } from "../../abi/address";
import LOCKABI from "../../abi/contracts/NFT/RGNLOCK.sol/RGNLOCK.json";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { Buffer } from "buffer";
import { formatEther } from "ethers/lib/utils";
import DisplayNFT from "./DisplayNFT";

const MyNFT = () => {
  const { data, error } = useAccount();

  const nftByUser: any[] = [];
  const nftMetadataByUser: any[] = [];

  const [test, setTest] = useState<any[]>([]);

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

        nftByUser.forEach(async (element) =>
          nftMetadataByUser.push(await lock.tokenURI(element))
        );
        let empty: any[] = [];
        setTimeout(function () {
          nftMetadataByUser.forEach(async (element) =>
            empty.push(
              ...test,
              JSON.parse(
                Buffer.from(
                  nftMetadataByUser[0].substring(29),
                  "base64"
                ).toString()
              )
            )
          );
          setTest(empty);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
>>>>>>> 1bfe751 (dev: add nft fetch data)
    }
  };

  return (
    <>
      <DisplayNFT test={test} />
    </>
  );
};

export default MyNFT;
