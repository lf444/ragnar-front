import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { contractAddress } from "../../../abi/address";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import masterchefABI from "../../../abi/contracts/MainProtocol/MasterChef.sol/MasterChefRGN.json";
import mainstakingABI from "../../../abi/contracts/MainProtocol/YetiBooster.sol/YetiBooster.json";
import rgnyetiABI from "../../../abi/contracts/Tokens/RGNYeti.sol/RGNYETI.json";
import { rgnPool, YetiPool, YusdPool, LpCurvePool } from "../../../abi/pools";

import { appLogger, errorToast } from "../../../utils/method";
import { useProvider } from "wagmi";
import PoolComponent from "./PoolComponent";
import { formatEther } from "ethers/lib/utils";
import {
  fetchAllApr,
  fetchAllTvl,
  fetchDeposit,
  fetchReward,
} from "../../../rpc/PoolFunc";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const appTag: string = "PoolTab";
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            paddingTop: 3,
            overflowY: "overlay",
            paddingBottom: 10,
          }}
        >
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PoolTab({
  userAddress,
  tokensPrices,
  shouldRefetchData,
  handleRefetchDeposit,
}: {
  userAddress: any;
  tokensPrices: {
    priceYeti: number;
    priceYusd: number;
    priceRgn: number;
    priceLpCurve: number;
    priceRgnYeti: number;
  };
  shouldRefetchData: boolean;
  handleRefetchDeposit: () => void;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [myStake, setMyStake] = useState({
    myYusd: 0,
    myYeti: 0,
    myLpCurve: 0,
  });
  const [TVL, setTVL] = useState({
    tvlYusd: 0,
    tvlYeti: 0,
    tvlLpCurve: 0,
  });
  const [aprRgn, setAprRgn] = useState({
    aprYusd: 0,
    aprYeti: 0,
    aprLpCurve: 0,
    aprLpCurveBoosted: 0,
  });
  const [reward, setReward] = useState({
    rewardYusd: 0,
    rewardYeti: 0,
    rewardLpCurve: 0,
  });
  const [value, setValue] = useState(0);
  const provider = useProvider();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const Yeti = (
    <PoolComponent
      pool={YetiPool}
      apr={Math.round(aprRgn.aprYeti)}
      stacked={Math.round(myStake.myYeti)}
      tvl={Math.round(TVL.tvlYeti)}
      claimable={Math.round(reward.rewardYeti)}
      depositVeYeti={depositVeYeti}
      aprYetiFinance={aprRgn.aprLpCurveBoosted * 0.05}
      isLoading={isLoading}
      handleRefetchDeposit={handleRefetchDeposit}
    />
  );

  const Yusd = (
    <PoolComponent
      pool={YusdPool}
      apr={Math.round(aprRgn.aprYusd)}
      stacked={Math.round(myStake.myYusd)}
      tvl={Math.round(TVL.tvlYusd)}
      claimable={Math.round(reward.rewardYusd)}
      depositVeYeti=""
      aprYetiFinance={0}
      isLoading={isLoading}
      handleRefetchDeposit={handleRefetchDeposit}
    />
  );

  const CurveLp = (
    <PoolComponent
      pool={LpCurvePool}
      apr={Math.round(aprRgn.aprLpCurve)}
      stacked={Math.round(myStake.myLpCurve)}
      tvl={Math.round(TVL.tvlLpCurve)}
      claimable={Math.round(reward.rewardLpCurve)}
      depositVeYeti=""
      aprYetiFinance={aprRgn.aprLpCurveBoosted * 0.95}
      isLoading={isLoading}
      handleRefetchDeposit={handleRefetchDeposit}
    />
  );

  const handleChangeStake = (
    myDepositYUSD: number,
    myDepositYeti: number,
    myDepositLpCurve: number
  ) => {
    setMyStake({
      myYusd: myDepositYUSD,
      myYeti: myDepositYeti,
      myLpCurve: myDepositLpCurve,
    });
  };
  const fetchMyStake = async () => {
    await fetchDeposit(handleChangeStake, appTag);
  };

  const handleChangeAPR = (
    Yusd: number,
    LpCurve: number,
    Yeti: number,
    LpCurveBoosted: number
  ) => {
    setAprRgn({
      aprYusd: Yusd,
      aprLpCurve: LpCurve,
      aprYeti: Yeti,
      aprLpCurveBoosted: LpCurveBoosted,
    });
  };
  const getApr = async () => {
    await fetchAllApr(provider, handleChangeAPR, appTag);
  };

  const handleChangeReward = (Yusd: number, Yeti: number, LpCurve: number) => {
    setReward({
      rewardYusd: Yusd,
      rewardYeti: Yeti,
      rewardLpCurve: LpCurve,
    });
  };

  const fetchMyReward = async () => {
    await fetchReward(tokensPrices, handleChangeReward, appTag);
  };

  const handleChangeTVL = (
    tvlYusd: number,
    tvlYeti: number,
    tvlLpCurve: number
  ) => {
    setTVL({
      ...TVL,
      tvlYusd: tvlYusd * tokensPrices.priceYusd,
      tvlYeti: tvlYeti * tokensPrices.priceYeti,
      tvlLpCurve: tvlLpCurve * tokensPrices.priceLpCurve,
    });
  };

  const fetchTVL = async () => {
    await fetchAllTvl(provider, appTag, handleChangeTVL);
  };

  const resetData = async () => {
    setReward({
      ...reward,
      rewardYusd: 0,
      rewardYeti: 0,
      rewardLpCurve: 0,
    });
    setMyStake({
      ...myStake,
      myYusd: 0,
      myYeti: 0,
      myLpCurve: 0,
    });
  };

  const fetchAllData = async () => {
    await fetchTVL();
    await getApr();
    if (userAddress) {
      await fetchMyReward();
      await fetchMyStake();
    }
  };

  useEffect(() => {
    fetchAllData().then(() => setTimeout(() => setIsLoading(false), 1000));
  }, []);

  useEffect(() => {
    if (userAddress) {
      setIsLoading(true);
      fetchAllData().then(() => setTimeout(() => setIsLoading(false), 1000));
    }
    if (!userAddress) {
      setIsLoading(true);
      resetData();
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [userAddress]);

  useEffect(() => {
    if (shouldRefetchData) {
      setIsLoading(true);
      fetchAllData().then(() => setTimeout(() => setIsLoading(false), 3000));
    }
  }, [shouldRefetchData]);

  /*

Calculer l'apr : 

APR Pool(in %) = (Total valeur des rewards token/Total valeur des staked token)*100


Total valeur des rewards token = Nombre de reward token * Prix d'un reward token
Nombre de reward token = Token par block * le nombre de block par an

Total valeur des staked token = Nombre de token stake * Prix d'un token stake




  const newFactor = Math.sqrt(LPStaked * veYETIBalance / 10 ** 4) OK

  const sumOfFactors = boosted.sumOfFactor; OK

  userBoostedRewardShare = newFactor / sumOfFactors OK
 
  
  const annualBoostedReward = format(veYETIStaked.boostRewardRate) * 365 * 86400 * (1000 - formatWithDecimals(veYETIStaked.boostBasePartition, 0)) / 1000 OK

  let boostedAPR = 100 * yetiPrice * annualBoostedReward / LPStaked * userBoostedRewardShare






*/

  async function depositVeYeti(qty: number) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const rgnyeti = new ethers.Contract(
          contractAddress.rgnYetiAddress,
          rgnyetiABI.abi,
          signer
        );

        const quantity = ethers.utils.parseEther(qty.toString());
        const value = [
          {
            rewarder: "0x0d938BCF55CCAE23D0823f3D3AA7B248ece5A2dC",
            amount: quantity,
            isIncrease: true,
          },
        ];

        const depositVeYeti = await rgnyeti.deposit(value);
        await depositVeYeti.wait();
      }
    } catch (err: any) {
      errorToast(err.code);
      appLogger(appTag, "- Error depositVeYeti-", err.message);
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{ borderBottom: 1, paddingBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          variant="fullWidth"
          centered
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="All Pools"
            {...a11yProps(0)}
            style={{
              color: value === 0 ? "#ddeaf2" : "#929ea6",
              fontWeight: "bold",
              textTransform: "none",
            }}
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.75em",
              },
            }}
          />
          <Tab
            label="Main Pools"
            {...a11yProps(1)}
            style={{
              color: value === 1 ? "#ddeaf2" : "#929ea6",
              fontWeight: "bold",
              textTransform: "none",
            }}
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.75em",
              },
            }}
          />
          <Tab
            label="Yeti Boosted Pools"
            {...a11yProps(2)}
            style={{
              color: value === 2 ? "#ddeaf2" : "#929ea6",
              fontWeight: "bold",
              textTransform: "none",
            }}
            sx={{
              fontSize: {
                lg: "1em",
                md: "1em",
                sm: "1em",
                xs: "0.75em",
              },
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {Yeti}
        {Yusd}
        {CurveLp}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {Yeti}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {Yusd}
        {CurveLp}
      </TabPanel>
    </Box>
  );
}
