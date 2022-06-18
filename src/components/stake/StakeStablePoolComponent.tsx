import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PairTab from './PairTab';
import { textTransform } from '@mui/system';
import { contractAddress } from '../../abi/address';
import { useState, useEffect } from 'react';
import axios from "axios";
import { ethers } from 'ethers';
import masterchefABI from '../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json'
import rgn from '../../assets/poolsImages/rgn.png'
import curve from '../../assets/poolsImages/curve.png'
import yeti from '../../assets/poolsImages/yeti.png'
import yusd from '../../assets/poolsImages/yusd.png'

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
  const [value, setValue] = useState(0);
  const [myYusd, setMyYusd] = useState(0);
  const [myYeti, setMyYeti] = useState(0);
  const [myRgn, setMyRgn] = useState(0);
  const [myLpCurve, setMyLpCurve] = useState(0);
  const [tvlYusd, setTvlYusd] = useState(0);
  const [tvlYeti, setTvlYeti] = useState(0);
  const [tvlRgn, setTvlRgn] = useState(0);
  const [tvlLpCurve, setTvlLpCurve] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const RGN = <PairTab pairName1="Rgn" logo1={rgn} 
  apr={100} stacked={Math.round(myRgn)} 
  tvl={Math.round(tvlRgn)} claimable={100} addressPool="0x7969c5eD335650692Bc04293B07F5BF2e7A673C0" pairAddress="0x2bdCC0de6bE1f7D2ee689a0342D76F52E8EFABa3" />
  const Yeti = <PairTab pairName1="Yeti" logo1={yeti} 
  apr={100} stacked={Math.round(myYeti)} 
  tvl={Math.round(tvlYeti)} claimable={100} addressPool="0x7969c5eD335650692Bc04293B07F5BF2e7A673C0" pairAddress="0x77777777777d4554c39223C354A05825b2E8Faa3" />
  const Yusd = <PairTab pairName1="Yusd" logo1={yusd} 
  apr={100} stacked={Math.round(myYusd)} 
  tvl={Math.round(tvlYusd)} claimable={100} addressPool="0x7bc06c482DEAd17c0e297aFbC32f6e63d3846650" pairAddress="0x111111111111ed1D73f860F57b2798b683f2d325" />
  const CurveLp = <PairTab pairName1="LP Curve" logo1={curve} 
  apr={100} stacked={Math.round(myLpCurve)} 
  tvl={Math.round(tvlLpCurve)} claimable={100} addressPool="0x7bc06c482DEAd17c0e297aFbC32f6e63d3846650" pairAddress="0xD8A4AA01D54C8Fdd104EAC28B9C975f0663E75D8" />

  useEffect(() => {
    fetchMyDeposit();
    fetchTVL();
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
        const myDepositYeti = await masterchef.depositInfo(contractAddress.rgnYetiAddress, String(accounts));
        const myDepositRgn = await masterchef.depositInfo(contractAddress.rgnAddress, String(accounts));
        const myDepositLpCurve = await masterchef.depositInfo(contractAddress.fakeLpCurveAddress, String(accounts));
        setMyYusd(Number(myDepositYUSD) / 10**18);  
        setMyYeti(Number(myDepositYeti) / 10**18);  
        setMyRgn(Number(myDepositRgn) / 10**18);  
        setMyLpCurve(Number(myDepositLpCurve) / 10**18);  
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
        const priceYusd = await getPrice("yusd-stablecoin");
        const priceRgnYeti = await getPrice("yeti-finance");
        const priceLpCurve = 1;
        const priceRGN = 0.3;
        const TVLYUSD = await masterchef.getPoolInfo(contractAddress.fakeYusdAddress);
        const TVLRgnYeti = await masterchef.getPoolInfo(contractAddress.rgnYetiAddress);
        const TVLLpCurve = await masterchef.getPoolInfo(contractAddress.fakeLpCurveAddress);
        const TVLRGN = await masterchef.getPoolInfo(contractAddress.rgnAddress);
        setTvlYusd((Number(TVLYUSD.sizeOfPool) / 10**18) * priceYusd);  
        setTvlYeti((Number(TVLRgnYeti.sizeOfPool) / 10**18) * priceRgnYeti);  
        setTvlRgn((Number(TVLLpCurve.sizeOfPool) / 10**18) * priceRGN);  
        setTvlLpCurve((Number(TVLRGN.sizeOfPool) / 10**18) * priceLpCurve);  
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
            label='All Pool'
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
            label='Main Pool'
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
            label='Yeti Pool'
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
        {RGN}
        {Yeti}
        {Yusd}
        {CurveLp}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {RGN}
        {Yeti}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {Yusd}
        {CurveLp}
      </TabPanel>
    </Box>
  );
}
