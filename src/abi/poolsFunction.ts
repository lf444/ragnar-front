import { contractAddress } from './address';
import { useState, useEffect } from 'react';
import axios from "axios";
import { ethers } from 'ethers';
import masterchefABI from './contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json'

export const PoolsFunction = () => {
    
    const [myYusd, setMyYusd] = useState(0);

    useEffect(() => {
        fetchMyDeposit();
      }, [])

    async function getPrice(tokenID: string): Promise<number> {
        return axios
          .get(`https://api.coingecko.com/api/v3/coins/${tokenID}`)
          .then((response) => {
            return response.data.market_data.current_price.usd;
          });
      }

      async function fetchMyDeposit() {
        try {
          if (window.ethereum) {
            let accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const masterchef = new ethers.Contract(
              contractAddress.masterchefAddress,
              masterchefABI.abi,
              signer
            );
            const myDepositYUSD = await masterchef.depositInfo(contractAddress.fakeYusdAddress, String(accounts));
            setMyYusd(myDepositYUSD);  
          }
        } catch (err: any) {
          console.log(err.message);
        }
      }



};

export default PoolsFunction;


