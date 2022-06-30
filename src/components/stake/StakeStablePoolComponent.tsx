<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7449a99 (all data + all function)
=======
>>>>>>> c331051 (dev: right size for loader)
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PairTab from './PairTab';
import { contractAddress } from '../../abi/address';
import { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { coinGeckoService } from '../../services/coinGeckoService';
=======
>>>>>>> 7449a99 (all data + all function)
import { ethers, BigNumber } from 'ethers';
import masterchefABI from '../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json'
import mainstakingABI from '../../abi/contracts/MainProtocol/MainStaking.sol/MainStaking.json'
import tokenABI from '../../abi/contracts/Tokens/RGN.sol/RGN.json'
import { rgnPool, YetiPool, YusdPool, LpCurvePool } from '../../abi/pools'
<<<<<<< HEAD
import { TOKEN_ID } from "../../utils/constance";
=======
=======
>>>>>>> aa8edd6 (dev: add auto connect to wallet)
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PairTab from "./PairTab";
import { contractAddress } from "../../abi/address";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import masterchefABI from "../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";
<<<<<<< HEAD
import { rgnPool, YetiPool, YusdPool, LpCurvePool } from "../../abi/pools";
>>>>>>> 96c243c (dev: reduce req call)
=======

<<<<<<< HEAD
>>>>>>> 7449a99 (all data + all function)

=======
import { appLogger } from "../../utils/method";
>>>>>>> 9ff617c (dev: somes css changes)
=======
=======
>>>>>>> c331051 (dev: right size for loader)
import { ethers } from 'ethers';
import masterchefABI from '../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json';
import mainstakingABI from '../../abi/contracts/MainProtocol/MainStaking.sol/MainStaking.json';
import tokenABI from '../../abi/contracts/Tokens/RGN.sol/RGN.json';
import { rgnPool, YetiPool, YusdPool, LpCurvePool } from '../../abi/pools';
<<<<<<< HEAD

import { appLogger } from '../../utils/method';
>>>>>>> 4560517 (dev: remove dirty console log)
=======
import mainstakingABI from "../../abi/contracts/MainProtocol/MainStaking.sol/MainStaking.json";
import tokenABI from "../../abi/contracts/Tokens/RGN.sol/RGN.json";
import { rgnPool, YetiPool, YusdPool, LpCurvePool } from "../../abi/pools";

import { appLogger } from "../../utils/method";
>>>>>>> aa8edd6 (dev: add auto connect to wallet)
=======

import { appLogger } from '../../utils/method';
>>>>>>> c331051 (dev: right size for loader)

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const appTag: string = 'StakeStablePoolComponent';
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            paddingTop: 3,
            overflowY: 'overlay',
            paddingBottom: 10,
          }}
        >
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function StakeStablePoolComponent({
  data,
  priceYusd,
  priceRgnYeti,
}: {
  data: any;
  priceYusd: number;
  priceRgnYeti: number;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const [myStake, setMyStake] = useState({
    myYusd: 0,
    myYeti: 0,
    myRgn: 0,
    myLpCurve: 0,
  });
  const [TVL, setTVL] = useState({
    tvlYusd: 0,
    tvlYeti: 0,
    tvlRgn: 0,
    tvlLpCurve: 0,
  });
  const [aprRgn, setAprRgn] = useState({
    aprYusd: 0,
    aprYeti: 0,
    aprRgn: 0,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7449a99 (all data + all function)
    aprLpCurve: 0
  })
=======
    aprLpCurve: 0,
  });
>>>>>>> 4560517 (dev: remove dirty console log)
  const [reward, setReward] = useState({
    rewardYusd: 0,
    rewardYeti: 0,
    rewardRgn: 0,
<<<<<<< HEAD
    rewardLpCurve: 0
  })
<<<<<<< HEAD
=======
    aprLpCurve: 0,
  });
>>>>>>> 96c243c (dev: reduce req call)
=======
>>>>>>> 7449a99 (all data + all function)
=======
    rewardLpCurve: 0,
  });
>>>>>>> 4560517 (dev: remove dirty console log)
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7449a99 (all data + all function)
  const RGN = <PairTab pairName1="RGN" logo1={rgnPool.logo} 
  apr={Math.round(aprRgn.aprRgn)} stacked={Math.round(myStake.myRgn)} 
  tvl={Math.round(myStake.tvlRgn)} claimable={Math.round(reward.rewardRgn)} 
  addressPool={rgnPool.addressPool} pairAddress={rgnPool.pairAddress} rgn={false} info={rgnPool.info}
  deposit={deposit} withdraw={withdraw} approve={approve} masterchef={true} depositVeYeti=""
   />
<<<<<<< HEAD
=======
  const RGN = (
    <PairTab
      pairName1='RGN'
      logo1={rgnPool.logo}
      apr={Math.round(aprRgn.aprRgn)}
      stacked={Math.round(myStake.myRgn)}
      tvl={Math.round(TVL.tvlRgn)}
      claimable={Math.round(reward.rewardRgn)}
      addressPool={rgnPool.addressPool}
      pairAddress={rgnPool.pairAddress}
      rgn={false}
      info={rgnPool.info}
      deposit={deposit}
      withdraw={withdraw}
      approve={approve}
      masterchef={true}
      depositVeYeti=''
      isLoading={isLoading}
    />
  );
>>>>>>> 4560517 (dev: remove dirty console log)

  const Yeti = (
    <PairTab
      pairName1='YETI'
      logo1={YetiPool.logo}
      apr={Math.round(aprRgn.aprYeti)}
      stacked={Math.round(myStake.myYeti)}
      tvl={Math.round(TVL.tvlYeti)}
      claimable={Math.round(reward.rewardYeti)}
      addressPool={YetiPool.addressPool}
      pairAddress={YetiPool.pairAddress}
      rgn={true}
      info=''
      deposit={deposit}
      withdraw={withdraw}
      approve={approve}
      masterchef={true}
      depositVeYeti={depositVeYeti}
      isLoading={isLoading}
    />
  );

<<<<<<< HEAD
  const Yusd = <PairTab pairName1="YUSD" logo1={YusdPool.logo} 
  apr={Math.round(aprRgn.aprYusd)} stacked={Number(myStake.myYusd)} 
  tvl={Math.round(myStake.tvlYusd)} claimable={Math.round(reward.rewardYusd)} 
  addressPool={YusdPool.addressPool} pairAddress={YusdPool.pairAddress} rgn={false} info={YusdPool.info}
  deposit={deposit} withdraw={withdraw} approve={approve} masterchef={false} depositVeYeti=""
   />
  
  const CurveLp = <PairTab pairName1="LP CURVE" logo1={LpCurvePool.logo} 
  apr={Math.round(aprRgn.aprLpCurve)} stacked={Math.round(myStake.myLpCurve)} 
  tvl={Math.round(myStake.tvlLpCurve)} claimable={Math.round(reward.rewardLpCurve)} 
  addressPool={LpCurvePool.addressPool} pairAddress={LpCurvePool.pairAddress} rgn={false} info={LpCurvePool.info}
  deposit={deposit} withdraw={withdraw} approve={approve} masterchef={false} depositVeYeti=""
   />
=======
  const RGN = (
    <PairTab
      pairName1="RGN"
      logo1={rgnPool.logo}
      apr={aprRgn.aprRgn}
      stacked={Math.round(myStake.myRgn)}
      tvl={Math.round(myStake.tvlRgn)}
      claimable={0}
      addressPool={rgnPool.addressPool}
      pairAddress={rgnPool.pairAddress}
      rgn={false}
      info={rgnPool.info}
    />
  );
=======
>>>>>>> 7449a99 (all data + all function)

  const Yeti = <PairTab pairName1="YETI" logo1={YetiPool.logo} 
  apr={Math.round(aprRgn.aprYeti)} stacked={Math.round(myStake.myYeti)} 
  tvl={Math.round(myStake.tvlYeti)} claimable={Math.round(reward.rewardYeti)} 
  addressPool={YetiPool.addressPool} pairAddress={YetiPool.pairAddress} rgn={true} info=""
  deposit={deposit} withdraw={withdraw} approve={approve} masterchef={true} depositVeYeti={depositVeYeti}
   />

<<<<<<< HEAD
  const Yusd = (
    <PairTab
      pairName1="YUSD"
      logo1={YusdPool.logo}
      apr={aprRgn.aprYusd}
      stacked={Number(myStake.myYusd)}
      tvl={Math.round(myStake.tvlYusd)}
      claimable={0}
=======
  const Yusd = (
    <PairTab
      pairName1='YUSD'
      logo1={YusdPool.logo}
      apr={Math.round(aprRgn.aprYusd)}
      stacked={Number(myStake.myYusd)}
      tvl={Math.round(TVL.tvlYusd)}
      claimable={Math.round(reward.rewardYusd)}
>>>>>>> 4560517 (dev: remove dirty console log)
      addressPool={YusdPool.addressPool}
      pairAddress={YusdPool.pairAddress}
      rgn={false}
      info={YusdPool.info}
<<<<<<< HEAD
=======
      deposit={deposit}
      withdraw={withdraw}
      approve={approve}
      masterchef={false}
<<<<<<< HEAD
<<<<<<< HEAD
      depositVeYeti=''
>>>>>>> 4560517 (dev: remove dirty console log)
=======
      depositVeYeti=""
<<<<<<< HEAD
>>>>>>> aa8edd6 (dev: add auto connect to wallet)
=======
=======
      depositVeYeti=''
>>>>>>> c331051 (dev: right size for loader)
      isLoading={isLoading}
>>>>>>> 03050fe (dev: add loader when fetch)
    />
  );

  const CurveLp = (
    <PairTab
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      pairName1="LP CURVE"
=======
      pairName1='LP CURVE'
>>>>>>> c331051 (dev: right size for loader)
      logo1={LpCurvePool.logo}
      apr={aprRgn.aprLpCurve}
      stacked={Math.round(myStake.myLpCurve)}
      tvl={Math.round(myStake.tvlLpCurve)}
      claimable={0}
=======
      pairName1='LP CURVE'
=======
      pairName1="LP CURVE"
>>>>>>> aa8edd6 (dev: add auto connect to wallet)
      logo1={LpCurvePool.logo}
      apr={Math.round(aprRgn.aprLpCurve)}
      stacked={Math.round(myStake.myLpCurve)}
      tvl={Math.round(TVL.tvlLpCurve)}
      claimable={Math.round(reward.rewardLpCurve)}
>>>>>>> 4560517 (dev: remove dirty console log)
      addressPool={LpCurvePool.addressPool}
      pairAddress={LpCurvePool.pairAddress}
      rgn={false}
      info={LpCurvePool.info}
<<<<<<< HEAD
    />
  );
>>>>>>> 96c243c (dev: reduce req call)
=======
  const Yusd = <PairTab pairName1="YUSD" logo1={YusdPool.logo} 
  apr={Math.round(aprRgn.aprYusd)} stacked={Number(myStake.myYusd)} 
  tvl={Math.round(myStake.tvlYusd)} claimable={Math.round(reward.rewardYusd)} 
  addressPool={YusdPool.addressPool} pairAddress={YusdPool.pairAddress} rgn={false} info={YusdPool.info}
  deposit={deposit} withdraw={withdraw} approve={approve} masterchef={false} depositVeYeti=""
   />
  
  const CurveLp = <PairTab pairName1="LP CURVE" logo1={LpCurvePool.logo} 
  apr={Math.round(aprRgn.aprLpCurve)} stacked={Math.round(myStake.myLpCurve)} 
  tvl={Math.round(myStake.tvlLpCurve)} claimable={Math.round(reward.rewardLpCurve)} 
  addressPool={LpCurvePool.addressPool} pairAddress={LpCurvePool.pairAddress} rgn={false} info={LpCurvePool.info}
  deposit={deposit} withdraw={withdraw} approve={approve} masterchef={false} depositVeYeti=""
   />
>>>>>>> 7449a99 (all data + all function)
=======
      deposit={deposit}
      withdraw={withdraw}
      approve={approve}
      masterchef={false}
      depositVeYeti=''
      isLoading={isLoading}
    />
  );
>>>>>>> 4560517 (dev: remove dirty console log)

  const resetData = () => {
    setTVL({
      ...TVL,
      tvlYusd: 0,
      tvlYeti: 0,
      tvlRgn: 0,
      tvlLpCurve: 0,
    });
    setReward({
      ...reward,
      rewardYusd: 0,
      rewardYeti: 0,
      rewardRgn: 0,
      rewardLpCurve: 0,
    });
    setAprRgn({
      ...aprRgn,
      aprYusd: 0,
      aprLpCurve: 0,
      aprRgn: 0,
      aprYeti: 0,
    });
  };

  useEffect(() => {
<<<<<<< HEAD
    fetchMyDeposit();
    fetchTVL();
    fetchAprRGN();
<<<<<<< HEAD
<<<<<<< HEAD
    fetchMyReward();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }, [])
=======
  }, []);
>>>>>>> 96c243c (dev: reduce req call)
=======
    fetchMyReward();
  }, [])
>>>>>>> 7449a99 (all data + all function)
=======
  },[])
>>>>>>> d7c1a2c (fix: correct kool bug)
=======
  },[userAccount])
>>>>>>> 685d0dd (dev: for kool bitch)
=======
  }, [userAccount]);
>>>>>>> 4560517 (dev: remove dirty console log)
=======
=======
    if (data) {
      setIsLoading(true);
      fetchMyDeposit();
      fetchTVL();
      fetchAprRGN();
      fetchMyReward();
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    } else {
      setIsLoading(true);
      resetData();
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
>>>>>>> aa8edd6 (dev: add auto connect to wallet)
  }, [data]);
>>>>>>> 3e0e08f (dev: when connect sucfuless re-fetch data)

  /*

Calculer l'apr : 

APR Pool(in %) = (Total valeur des rewards token/Total valeur des staked token)*100


Total valeur des rewards token = Nombre de reward token * Prix d'un reward token
Nombre de reward token = Token par block * le nombre de block par an

Total valeur des staked token = Nombre de token stake * Prix d'un token stake

*/

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7449a99 (all data + all function)
async function fetchAprRGN() {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const masterchef = new ethers.Contract(
        contractAddress.masterchefAddress,
        masterchefABI.abi,
        signer
      );
      const mainstaking = new ethers.Contract(
        contractAddress.mainstakingAddress,
        mainstakingABI.abi,
        signer
      );

<<<<<<< HEAD
      const priceYusd = await coinGeckoService.getPrice(TOKEN_ID.yusd);
      const priceRgnYeti = await coinGeckoService.getPrice(TOKEN_ID.yeti);
=======
>>>>>>> 7449a99 (all data + all function)
      const priceLpCurve = 1;
      const priceRGN = 0.3;

      const rgnPerBlock = Number(ethers.utils.formatEther(await masterchef.rgnPerSec()));
      const allocPointYusd = await masterchef.getPoolInfo(contractAddress.fakeYusdAddress);
      const allocPointYeti = await masterchef.getPoolInfo(contractAddress.rgnYetiAddress);
      const allocPointLpCurve = await masterchef.getPoolInfo(contractAddress.fakeLpCurveAddress);
      const allocPointRgn = await masterchef.getPoolInfo(contractAddress.rgnAddress);
      const allocPointTotal = await masterchef.totalAllocPoint();

      const rgnPerBlockYusd = allocPointYusd.allocpoint * rgnPerBlock / allocPointTotal; 
      const rgnPerBlockYeti = allocPointYeti.allocpoint * rgnPerBlock / allocPointTotal; 
      const rgnPerBlockLpCurve = allocPointLpCurve.allocpoint * rgnPerBlock / allocPointTotal; 
      const rgnPerBlockRgn = allocPointRgn.allocpoint * rgnPerBlock / allocPointTotal; 

      const rgnPricePerYearYusd = (rgnPerBlockYusd * 28800 * 365) * priceRGN;
      const rgnPricePerYearLpCurve = (rgnPerBlockLpCurve * 28800 * 365) * priceRGN;
      const rgnPricePerYearRgn = (rgnPerBlockRgn * 28800 * 365) * priceRGN;
      const rgnPricePerYearYeti = (rgnPerBlockYeti * 28800 * 365) * priceRGN;
      


      setAprRgn({...aprRgn, 
      aprYusd: (rgnPricePerYearYusd / (allocPointYusd.sizeOfPool * priceYusd / 10**18) * priceRGN) * 100, 
      aprLpCurve: (rgnPricePerYearLpCurve / (allocPointLpCurve.sizeOfPool * priceLpCurve / 10**18) * priceRGN) * 100,
      aprRgn: (rgnPricePerYearRgn / (allocPointRgn.sizeOfPool * priceRGN / 10**18) * priceRGN) * 100, 
      aprYeti: (rgnPricePerYearYeti / (allocPointYeti.sizeOfPool / 10**18) * priceRgnYeti) * 100})

  }
  } catch (err: any) {
    console.log(err.message);
  }
}

=======
>>>>>>> 9ff617c (dev: somes css changes)

async function approve(qty: number, address: string, masterchefContract: boolean) {

=======
  async function approve(
    qty: number,
    address: string,
    masterchefContract: boolean
  ) {
>>>>>>> 4560517 (dev: remove dirty console log)
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const token = new ethers.Contract(address, tokenABI.abi, signer);
      try {
        if (masterchefContract) {
          const tokenApproveMasterchef = await token.approve(
            contractAddress.masterchefAddress,
            qty
          );
          tokenApproveMasterchef.wait();
        } else {
          const tokenApproveMainstaking = await token.approve(
            contractAddress.mainstakingAddress,
            qty
          );
          tokenApproveMainstaking.wait();
        }
      } catch (err: any) {
        appLogger(appTag, '- Error approve-', err.message);
      }
    }
  }

<<<<<<< HEAD

async function deposit(qty: number, address: string, masterchefContract: boolean) {
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
      const mainstaking = new ethers.Contract(
        contractAddress.mainstakingAddress,
        mainstakingABI.abi,
        signer
      );

      if (masterchefContract) {

      const depositTokenMasterchef = await masterchef.deposit(address, qty);
      await depositTokenMasterchef.wait();

      } else {

        const depositTokenMainstaking = await mainstaking.deposit(address, qty, String(accounts));
        await depositTokenMainstaking.wait();
      
      }


    }
  } catch (err: any) {
    console.log(err.message);
  }
}

async function withdraw(qty: number, address: string, masterchefContract: boolean) {
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
      const mainstaking = new ethers.Contract(
        contractAddress.mainstakingAddress,
        mainstakingABI.abi,
        signer
      );

      if (masterchefContract) {

      const depositTokenMasterchef = await masterchef.withdraw(address, qty);
      await depositTokenMasterchef.wait();

      } else {

        const depositTokenMainstaking = await mainstaking.withdraw(address, qty, String(accounts));
        await depositTokenMainstaking.wait();
      
      }


    }
  } catch (err: any) {
    console.log(err.message);
  }
}

async function depositVeYeti(qty: number) {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const mainstaking = new ethers.Contract(
        contractAddress.mainstakingAddress,
        mainstakingABI.abi,
        signer
      );

      const depositVeYeti = await mainstaking.stakeYETI(qty);
      await depositVeYeti.wait();

    }
  } catch (err: any) {
    console.log(err.message);
  }
}


<<<<<<< HEAD

  async function fetchMyDeposit() {
<<<<<<< HEAD
=======
  async function fetchAprRGN() {
>>>>>>> 96c243c (dev: reduce req call)
=======
>>>>>>> 7449a99 (all data + all function)
=======
  async function fetchAprRGN() {
>>>>>>> 9ff617c (dev: somes css changes)
=======
  async function deposit(
    qty: number,
    address: string,
    masterchefContract: boolean
  ) {
>>>>>>> 4560517 (dev: remove dirty console log)
    try {
      if (window.ethereum) {
        let accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7449a99 (all data + all function)
        const myDepositYUSD = await masterchef.depositInfo(contractAddress.fakeYusdAddress, String(accounts));
        const myDepositYeti = await masterchef.depositInfo(contractAddress.rgnYetiAddress, String(accounts));
        const myDepositRgn = await masterchef.depositInfo(contractAddress.rgnAddress, String(accounts));
        const myDepositLpCurve = await masterchef.depositInfo(contractAddress.fakeLpCurveAddress, String(accounts));
        
        setMyStake({...myStake, myYusd: myDepositYUSD / 10**18, myYeti: myDepositYeti / 10**18, myRgn: myDepositRgn / 10**18, myLpCurve: myDepositLpCurve / 10**18});
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 9ff617c (dev: somes css changes)
=======
        const mainstaking = new ethers.Contract(
          contractAddress.mainstakingAddress,
          mainstakingABI.abi,
          signer
        );

        if (masterchefContract) {
          const depositTokenMasterchef = await masterchef.deposit(address, qty);
          await depositTokenMasterchef.wait();
        } else {
          const depositTokenMainstaking = await mainstaking.deposit(
            address,
            qty,
            String(accounts)
          );
          await depositTokenMainstaking.wait();
        }
      }
    } catch (err: any) {
      appLogger(appTag, '- Error deposit-', err.message);
    }
  }

  async function depositVeYeti(qty: number) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const mainstaking = new ethers.Contract(
          contractAddress.mainstakingAddress,
          mainstakingABI.abi,
          signer
        );

        const depositVeYeti = await mainstaking.stakeYETI(qty);
        await depositVeYeti.wait();
      }
    } catch (err: any) {
      appLogger(appTag, '- Error depositVeYeti-', err.message);
    }
  }

  async function withdraw(
    qty: number,
    address: string,
    masterchefContract: boolean
  ) {
    try {
      if (window.ethereum) {
        let accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
        const mainstaking = new ethers.Contract(
          contractAddress.mainstakingAddress,
          mainstakingABI.abi,
          signer
        );

        if (masterchefContract) {
          const depositTokenMasterchef = await masterchef.withdraw(
            address,
            qty
          );
          await depositTokenMasterchef.wait();
        } else {
          const depositTokenMainstaking = await mainstaking.withdraw(
            address,
            qty,
            String(accounts)
          );
          await depositTokenMainstaking.wait();
        }
      }
    } catch (err: any) {
      appLogger(appTag, '- Error withdraw-', err.message);
    }
  }

  async function fetchAprRGN() {
    try {
      if (window.ethereum) {
        let accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
        const myDepositYUSD = await masterchef.depositInfo(
          contractAddress.fakeYusdAddress,
          String(accounts)
        );
        const myDepositYeti = await masterchef.depositInfo(
          contractAddress.rgnYetiAddress,
          String(accounts)
        );
        const myDepositRgn = await masterchef.depositInfo(
          contractAddress.rgnAddress,
          String(accounts)
        );
        const myDepositLpCurve = await masterchef.depositInfo(
          contractAddress.fakeLpCurveAddress,
          String(accounts)
        );

        setMyStake({
          ...myStake,
          myYusd: myDepositYUSD / 10 ** 18,
          myYeti: myDepositYeti / 10 ** 18,
          myRgn: myDepositRgn / 10 ** 18,
          myLpCurve: myDepositLpCurve / 10 ** 18,
        });
>>>>>>> 4560517 (dev: remove dirty console log)
        const rgnPerBlock = await masterchef.rgnPerSec();
        const allocPointYusd = await masterchef.getPoolInfo(
          contractAddress.fakeYusdAddress
        );
        const allocPointYeti = await masterchef.getPoolInfo(
          contractAddress.rgnYetiAddress
        );
        const allocPointLpCurve = await masterchef.getPoolInfo(
          contractAddress.fakeLpCurveAddress
        );
        const allocPointRgn = await masterchef.getPoolInfo(
          contractAddress.rgnAddress
        );
        const allocPointTotal = await masterchef.totalAllocPoint();
        const rgnPerBlockYusd =
          (allocPointYusd.allocpoint * rgnPerBlock) / allocPointTotal;
        const rgnPerBlockYeti =
          (allocPointYeti.allocpoint * rgnPerBlock) / allocPointTotal;
        const rgnPerBlockLpCurve =
          (allocPointLpCurve.allocpoint * rgnPerBlock) / allocPointTotal;
        const rgnPerBlockRgn =
          (allocPointRgn.allocpoint * rgnPerBlock) / allocPointTotal;
        setAprRgn({
          ...aprRgn,
          aprYusd:
            ((rgnPerBlockYusd * 28800 * 365) / allocPointYusd.sizeOfPool) * 100,
          aprLpCurve:
            ((rgnPerBlockLpCurve * 28800 * 365) /
              allocPointLpCurve.sizeOfPool) *
            100,
          aprRgn:
            ((rgnPerBlockRgn * 28800 * 365) / allocPointRgn.sizeOfPool) * 100,
          aprYeti:
            ((rgnPerBlockYeti * 28800 * 365) / allocPointYeti.sizeOfPool) * 100,
        });
<<<<<<< HEAD
=======
>>>>>>> 7449a99 (all data + all function)
=======
>>>>>>> 9ff617c (dev: somes css changes)
      }
    } catch (err: any) {
      appLogger(appTag, '- Error fetchAprRGN-', err.message);
    }
  }

  async function fetchMyDeposit() {
    try {
      if (window.ethereum) {
        let accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
        const myDepositYUSD = await masterchef.depositInfo(
          contractAddress.fakeYusdAddress,
          String(accounts)
        );
        const myDepositYeti = await masterchef.depositInfo(
          contractAddress.rgnYetiAddress,
          String(accounts)
        );
        const myDepositRgn = await masterchef.depositInfo(
          contractAddress.rgnAddress,
          String(accounts)
        );
        const myDepositLpCurve = await masterchef.depositInfo(
          contractAddress.fakeLpCurveAddress,
          String(accounts)
        );
        setMyStake({
          ...myStake,
          myYusd: myDepositYUSD,
          myYeti: myDepositYeti,
          myRgn: myDepositRgn,
          myLpCurve: myDepositLpCurve,
        });
      }
    } catch (err: any) {
      appLogger(appTag, '- Error fetchMyDeposit-', err.message);
    }
  }

  async function fetchMyReward() {
    try {
      if (window.ethereum) {
        let accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
<<<<<<< HEAD
        const myDepositYUSD = await masterchef.depositInfo(
          contractAddress.fakeYusdAddress,
          String(accounts)
        );
        const myDepositYeti = await masterchef.depositInfo(
          contractAddress.rgnYetiAddress,
          String(accounts)
        );
        const myDepositRgn = await masterchef.depositInfo(
          contractAddress.rgnAddress,
          String(accounts)
        );
        const myDepositLpCurve = await masterchef.depositInfo(
          contractAddress.fakeLpCurveAddress,
          String(accounts)
        );
        setMyStake({
          ...myStake,
          myYusd: myDepositYUSD,
          myYeti: myDepositYeti,
          myRgn: myDepositRgn,
          myLpCurve: myDepositLpCurve,
        });
>>>>>>> 96c243c (dev: reduce req call)
=======
        const priceRGN = 0.3;
        const myRewardYUSD = await masterchef.pendingTokens(contractAddress.fakeYusdAddress, String(accounts), contractAddress.yetiAddres);
        const myRewardRgnYeti = await masterchef.pendingTokens(contractAddress.rgnYetiAddress, String(accounts), contractAddress.yetiAddres);
        const myRewardLpCurve = await masterchef.pendingTokens(contractAddress.fakeLpCurveAddress, String(accounts), contractAddress.yetiAddres);
        const myRewardRGN = await masterchef.pendingTokens(contractAddress.rgnAddress, String(accounts), contractAddress.yetiAddres);
        console.log(Number(myRewardYUSD.pendingBonusToken) * priceRgnYeti / 10**18)

        setReward({...reward, 
          rewardYusd: (Number(myRewardYUSD.pendingBonusToken) * priceRgnYeti / 10**18) + (Number(myRewardYUSD.pendingRGN) * priceRGN / 10**18)
        , rewardYeti: (Number(myRewardRgnYeti.pendingBonusToken) * priceRgnYeti / 10**18) + (Number(myRewardRgnYeti.pendingRGN) * priceRGN / 10**18), 
        rewardRgn:(Number(myRewardRGN.pendingBonusToken) * priceRgnYeti / 10**18) + (Number(myRewardRGN.pendingRGN) * priceRGN / 10**18), 
        rewardLpCurve: (Number(myRewardLpCurve.pendingBonusToken) * priceRgnYeti / 10**18) + (Number(myRewardLpCurve.pendingRGN) * priceRGN / 10**18)});
>>>>>>> 7449a99 (all data + all function)
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }

<<<<<<< HEAD
  async function fetchMyReward() {
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
        const priceRgnYeti = await coinGeckoService.getPrice(TOKEN_ID.yeti);
        const priceRGN = 0.3;
        const myRewardYUSD = await masterchef.pendingTokens(
          contractAddress.fakeYusdAddress,
          String(accounts),
          contractAddress.yetiAddres
        );
        const myRewardRgnYeti = await masterchef.pendingTokens(
          contractAddress.rgnYetiAddress,
          String(accounts),
          contractAddress.yetiAddres
        );
        const myRewardLpCurve = await masterchef.pendingTokens(
          contractAddress.fakeLpCurveAddress,
          String(accounts),
          contractAddress.yetiAddres
        );
        const myRewardRGN = await masterchef.pendingTokens(
          contractAddress.rgnAddress,
          String(accounts),
          contractAddress.yetiAddres
        );

        setReward({
          ...reward,
          rewardYusd:
            (Number(myRewardYUSD.pendingBonusToken) * priceRgnYeti) / 10 ** 18 +
            (Number(myRewardYUSD.pendingRGN) * priceRGN) / 10 ** 18,
          rewardYeti:
            (Number(myRewardRgnYeti.pendingBonusToken) * priceRgnYeti) /
              10 ** 18 +
            (Number(myRewardRgnYeti.pendingRGN) * priceRGN) / 10 ** 18,
          rewardRgn:
            (Number(myRewardRGN.pendingBonusToken) * priceRgnYeti) / 10 ** 18 +
            (Number(myRewardRGN.pendingRGN) * priceRGN) / 10 ** 18,
          rewardLpCurve:
            (Number(myRewardLpCurve.pendingBonusToken) * priceRgnYeti) /
              10 ** 18 +
            (Number(myRewardLpCurve.pendingRGN) * priceRGN) / 10 ** 18,
        });
      }
    } catch (err: any) {
      appLogger(appTag, '- Error fetchMyDeposit-', err.message);
    }
  }

<<<<<<< HEAD
=======
>>>>>>> 7449a99 (all data + all function)

=======
>>>>>>> 4560517 (dev: remove dirty console log)
  async function fetchTVL() {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const masterchef = new ethers.Contract(
          contractAddress.masterchefAddress,
          masterchefABI.abi,
          signer
        );
        const priceLpCurve = 1;
        const priceRGN = 0.3;
        const TVLYUSD = await masterchef.getPoolInfo(
          contractAddress.fakeYusdAddress
        );
        const TVLRgnYeti = await masterchef.getPoolInfo(
          contractAddress.rgnYetiAddress
        );
        const TVLLpCurve = await masterchef.getPoolInfo(
          contractAddress.fakeLpCurveAddress
        );
        const TVLRGN = await masterchef.getPoolInfo(contractAddress.rgnAddress);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7449a99 (all data + all function)
        setMyStake({...myStake, tvlYusd: Number(TVLYUSD.sizeOfPool) * priceYusd / 10**18, 
        tvlYeti: Number(TVLRgnYeti.sizeOfPool) * priceRgnYeti / 10**18, 
        tvlRgn: Number(TVLRGN.sizeOfPool) * priceRGN / 10**18, 
        tvlLpCurve: Number(TVLLpCurve.sizeOfPool) * priceLpCurve / 10**18});
<<<<<<< HEAD
=======
=======
>>>>>>> 9ff617c (dev: somes css changes)
        setMyStake({
          ...myStake,
=======
        setTVL({
          ...TVL,
>>>>>>> 9e86397 (resolve useState bug + claim function)
          tvlYusd: (TVLYUSD.sizeOfPool * priceYusd) / 10 ** 18,
          tvlYeti: (TVLRgnYeti.sizeOfPool * priceRgnYeti) / 10 ** 18,
          tvlRgn: (TVLRGN.sizeOfPool * priceRGN) / 10 ** 18,
          tvlLpCurve: (TVLLpCurve.sizeOfPool * priceLpCurve) / 10 ** 18,
        });
<<<<<<< HEAD
>>>>>>> 96c243c (dev: reduce req call)
=======
>>>>>>> 7449a99 (all data + all function)
=======
>>>>>>> 9ff617c (dev: somes css changes)
      }
    } catch (err: any) {
      appLogger(appTag, '- Error fetchTVL-', err.message);
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box sx={{ borderBottom: 1, paddingBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          variant='fullWidth'
          centered
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab
            label='All Pools'
            {...a11yProps(0)}
            style={{
              color: value === 0 ? '#ddeaf2' : '#929ea6',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
            sx={{
              fontSize: {
                lg: '1em',
                md: '1em',
                sm: '1em',
                xs: '0.75em',
              },
            }}
          />
          <Tab
            label='Main Pools'
            {...a11yProps(1)}
            style={{
              color: value === 1 ? '#ddeaf2' : '#929ea6',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
            sx={{
              fontSize: {
                lg: '1em',
                md: '1em',
                sm: '1em',
                xs: '0.75em',
              },
            }}
          />
          <Tab
            label='Yeti Boosted Pools'
            {...a11yProps(2)}
            style={{
              color: value === 2 ? '#ddeaf2' : '#929ea6',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
            sx={{
              fontSize: {
                lg: '1em',
                md: '1em',
                sm: '1em',
                xs: '0.75em',
              },
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {Yeti}
        {RGN}
        {Yusd}
        {CurveLp}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {Yeti}
        {RGN}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {Yusd}
        {CurveLp}
      </TabPanel>
    </Box>
  );
}
