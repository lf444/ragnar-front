import { Typography } from "@mui/material"
import { ethers } from "ethers";
import { contractAddress } from "../../abi/address";
import LOCKABI from '../../abi/contracts/NFT/RGNLOCK.sol/RGNLOCK.json'
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";


const MyNFT = () => {
  
  const { data, error } = useAccount();

  const nftByUser : any[] = [];
  const nftMetadataByUser : any[] = [];
  const test : any[] = [];
  
  
  useEffect( () => {
    getNFTByOwner();
  }, [data])
  
  const getNFTByOwner = async () => {
    
    try {
      // @ts-ignore
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const lock = new ethers.Contract(contractAddress.NFTAddress, LOCKABI.abi, signer);
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const total = await lock.balanceOf(String(accounts));
        
        for (let i = 0; i < total; i++) {
          nftByUser.push(String(await lock.tokenOfOwnerByIndex(String(accounts), i)));
         }
         nftByUser.forEach(async (element) => nftMetadataByUser.push(await lock.tokenURI(element)))  
         
         Promise.all(nftMetadataByUser.map(url =>
          fetch(url)
            .then((response) => {
              response = JSON.parse(String(response))
            }                 
        )))
        .then(data => {
          test.push(data)
        })
        console.log(test)
        
      } 
  } catch (error) {
    console.log(error)
    }
}


               
    return (
     <Typography>Dont have NFT</Typography>
      );

};

export default MyNFT;