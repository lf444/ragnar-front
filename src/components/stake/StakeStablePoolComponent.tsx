import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PairTab from './PairTab';
import { contractAddress } from '../../abi/address';
import { useState, useEffect } from 'react';
import { coinGeckoService } from '../../services/coinGeckoService';
import { ethers } from 'ethers';
import masterchefABI from '../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json'
import { rgnPool, YetiPool, YusdPool, LpCurvePool } from '../../abi/pools'
import { TOKEN_ID } from "../../utils/constance";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
          <Typography>{children}</Typography>
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

export default function StakeStablePoolComponent() {
  const [myStake, setMyStake] = useState({
    myYusd: 0,
    myYeti: 0,
    myRgn: 0,
    myLpCurve: 0,
    tvlYusd: 0,
    tvlYeti: 0,
    tvlRgn: 0,
    tvlLpCurve: 0,

  });
  const [aprRgn, setAprRgn] = useState({
    aprYusd: 0,
    aprYeti: 0,
    aprRgn: 0,
    aprLpCurve: 0
  })
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const RGN = <PairTab pairName1="RGN" logo1={rgnPool.logo} 
  apr={aprRgn.aprRgn} stacked={Math.round(myStake.myRgn)} 
  tvl={Math.round(myStake.tvlRgn)} claimable={0} 
  addressPool={rgnPool.addressPool} pairAddress={rgnPool.pairAddress} rgn={false} info={rgnPool.info}
   />

  const Yeti = <PairTab pairName1="YETI" logo1={YetiPool.logo} 
  apr={aprRgn.aprYeti} stacked={Math.round(myStake.myYeti)} 
  tvl={Math.round(myStake.tvlYeti)} claimable={0} 
  addressPool={YetiPool.addressPool} pairAddress={YetiPool.pairAddress} rgn={true} info=""
   />

  const Yusd = <PairTab pairName1="YUSD" logo1={YusdPool.logo} 
  apr={aprRgn.aprYusd} stacked={Number(myStake.myYusd)} 
  tvl={Math.round(myStake.tvlYusd)} claimable={0} 
  addressPool={YusdPool.addressPool} pairAddress={YusdPool.pairAddress} rgn={false} info={YusdPool.info}
   />
  
  const CurveLp = <PairTab pairName1="LP CURVE" logo1={LpCurvePool.logo} 
  apr={aprRgn.aprLpCurve} stacked={Math.round(myStake.myLpCurve)} 
  tvl={Math.round(myStake.tvlLpCurve)} claimable={0} 
  addressPool={LpCurvePool.addressPool} pairAddress={LpCurvePool.pairAddress} rgn={false} info={LpCurvePool.info}
   />

  useEffect(() => {
    fetchMyDeposit();
    fetchTVL();
    fetchAprRGN();
  }, [])

/*

Calculer l'apr : 

APR Pool(in %) = (Total valeur des rewards token/Total valeur des staked token)*100


Total valeur des rewards token = Nombre de reward token * Prix d'un reward token
Nombre de reward token = Token par block * le nombre de block par an

Total valeur des staked token = Nombre de token stake * Prix d'un token stake

*/

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
      const rgnPerBlock = await masterchef.rgnPerSec();
      const allocPointYusd = await masterchef.getPoolInfo(contractAddress.fakeYusdAddress);
      const allocPointYeti = await masterchef.getPoolInfo(contractAddress.rgnYetiAddress);
      const allocPointLpCurve = await masterchef.getPoolInfo(contractAddress.fakeLpCurveAddress);
      const allocPointRgn = await masterchef.getPoolInfo(contractAddress.rgnAddress);
      const allocPointTotal = await masterchef.totalAllocPoint();
      const rgnPerBlockYusd = allocPointYusd.allocpoint * rgnPerBlock / allocPointTotal; 
      const rgnPerBlockYeti = allocPointYeti.allocpoint * rgnPerBlock / allocPointTotal; 
      const rgnPerBlockLpCurve = allocPointLpCurve.allocpoint * rgnPerBlock / allocPointTotal; 
      const rgnPerBlockRgn = allocPointRgn.allocpoint * rgnPerBlock / allocPointTotal; 
      setAprRgn({...aprRgn, aprYusd: (rgnPerBlockYusd * 28800 * 365 / allocPointYusd.sizeOfPool) * 100, aprLpCurve: ((rgnPerBlockLpCurve * 28800 * 365) / allocPointLpCurve.sizeOfPool) * 100,
    aprRgn: ((rgnPerBlockRgn * 28800 * 365) / allocPointRgn.sizeOfPool) * 100, aprYeti: ((rgnPerBlockYeti * 28800 * 365) / allocPointYeti.sizeOfPool) * 100})
    }
  } catch (err: any) {
    console.log(err.message);
  }
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
        const myDepositYeti = await masterchef.depositInfo(contractAddress.rgnYetiAddress, String(accounts));
        const myDepositRgn = await masterchef.depositInfo(contractAddress.rgnAddress, String(accounts));
        const myDepositLpCurve = await masterchef.depositInfo(contractAddress.fakeLpCurveAddress, String(accounts));
        setMyStake({...myStake, myYusd: myDepositYUSD, myYeti: myDepositYeti, myRgn: myDepositRgn, myLpCurve: myDepositLpCurve});
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }

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
        const priceYusd = await coinGeckoService.getPrice(TOKEN_ID.yusd);
        const priceRgnYeti = await coinGeckoService.getPrice(TOKEN_ID.yeti);
        const priceLpCurve = 1;
        const priceRGN = 0.3;
        const TVLYUSD = await masterchef.getPoolInfo(contractAddress.fakeYusdAddress);
        const TVLRgnYeti = await masterchef.getPoolInfo(contractAddress.rgnYetiAddress);
        const TVLLpCurve = await masterchef.getPoolInfo(contractAddress.fakeLpCurveAddress);
        const TVLRGN = await masterchef.getPoolInfo(contractAddress.rgnAddress);
        setMyStake({...myStake, tvlYusd: TVLYUSD.sizeOfPool * priceYusd / 10**18, 
        tvlYeti: TVLRgnYeti.sizeOfPool * priceRgnYeti / 10**18, 
        tvlRgn: TVLRGN.sizeOfPool * priceRGN / 10**18, 
        tvlLpCurve: TVLLpCurve.sizeOfPool * priceLpCurve / 10**18});
      }
    } catch (err: any) {
      console.log(err.message);
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
              color: value === 0 ?"#ddeaf2":"#929ea6",
              fontWeight:"bold",
              textTransform: "none",
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
              color: value === 1 ?"#ddeaf2":"#929ea6",
              fontWeight:"bold",
              textTransform: "none",
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
            label='Yeti Pools'
            {...a11yProps(2)}
            style={{
              color: value === 2 ?"#ddeaf2":"#929ea6",
              fontWeight:"bold",
              textTransform: "none",
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
