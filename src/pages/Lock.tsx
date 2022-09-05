import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Buffer } from 'buffer';
import { contractAddress } from '../abi/address';
import { Grid, Typography, Button, Box } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import LockPool from '../components/lock/LockPool';
import rgn from '../assets/images/pools/rgn.png';
import Funds from '../components/shared/funds/Funds';
import MyNft from '../components/lock/MyNFT';
import theme from '../utils/theme';
import PageHeader from '../components/shared/PageHeader';
import LOCKABI from '../abi/contracts/NFT/RGNLOCK.sol/RGNLOCK.json';
import { appLogger, errorToast } from '../utils/method';
import MyRewards from '../components/lock/MyRewards';

const appTag = 'Lock';

const Lock = ({
  userAddress,
  tokensPrices,
}: {
  userAddress: string | undefined;
  tokensPrices: {
    priceYeti: number;
    priceYusd: number;
    priceRgn: number;
    priceLpCurve: number;
    priceRgnYeti: number;
  };
}) => {
  const [shouldRefetchData, setShouldRefetchData] = useState(false);
  const handleRefetchDeposit = () => {
    setShouldRefetchData(true);
    setTimeout(() => setShouldRefetchData(false), 1500);
  };

  const [nftMetadata, setNftMetadata] = useState<any[]>([]);
  const [isLoadingMyNft, setIsLoading] = useState(false);
  const [numberOfNFTOwned, setNumberOfNFTOwned] = useState(0);

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
        let emptyNFt: any[] = [];
        const test = await lock.getNftsOfOwner(userAddress);
        setNumberOfNFTOwned(+test.length);
        const allNFTOwned = await Promise.all(
          test.map((e: any) => {
            return lock.tokenURI(e);
          })
        )
          .then((e) => {
            emptyNFt = e.map((e: any) => {
              return JSON.parse(
                Buffer.from(e.substring(29), 'base64').toString()
              );
            });
          })
          .then(() => setNftMetadata(emptyNFt));

      }
    } catch (error: any) {
      errorToast(error.code);
      appLogger(appTag, ' getNFTByOwner lock', error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userAddress) {
      setIsLoading(true);
      getNFTByOwner().then(() => setIsLoading(false));
    }
  }, [userAddress]);

  useEffect(() => {
    if (userAddress && shouldRefetchData) {
      setIsLoading(true);
      getNFTByOwner().then(() => setIsLoading(false));
    }
  }, [shouldRefetchData]);

  return (
    <>
      <PageHeader pageTitle={`Ragnar finance - Lock`} />{' '}
      <Zoom in={true}>
        <Grid
          container
          direction='row'
          alignItems='center'
          sx={{
            marginBottom: '4rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: {
              xs: '100%',
              sm: '65%',
            },
            borderRadius: { xs: '0px', sm: '20px' },
          }}
        >
          <Grid item sx={{ width: '100%', paddingBottom: 5 }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                color: (theme) => theme.palette.text.primary,
                width: 'fit-content',
                padding: 1,
                paddingTop: 4,
                borderRadius: '5px',
                fontSize: '1rem',
              }}
            >
              LOCK RGN
            </Typography>
            <Funds
              shouldDisplaySecondTabPrice={true}
              userAddress={userAddress}
              shouldRefetchData={shouldRefetchData}
              tokensPrices={tokensPrices}
            />
          </Grid>

          <Grid item xs={12} sx={{ width: '100%', mb: '25px', p: 1 }}>
            <LockPool logo1={rgn} handleRefetchDeposit={handleRefetchDeposit} />
          </Grid>
          <Grid item container xs={12} sm={6} sx={{ width: '100%', p: 1 }}>
            {' '}
            <MyNft
              nftMetadata={nftMetadata}
              isLoadingMyNft={isLoadingMyNft}
              numberOfNFTOwned={numberOfNFTOwned}
            />
          </Grid>
          <Grid item container xs={12} sm={6} sx={{ width: '100%', p: 1 }}>
            {' '}
            <MyRewards
              nftMetadata={nftMetadata}
            />
          </Grid>
          <Grid item container xs={12} sm={12} sx={{ width: '100%', p: 1 }}>
            {' '}
            <Typography sx={{fontSize: "20px", fontWeight: "bold"}} >Secondary Market</Typography>         
          </Grid>
          <Grid item container xs={2} sm={3} md={2} lg={1} sx={{ width: '100%', p: 1 }}>
            {' '}
            <Button sx={{fontSize: "14px", backgroundColor: (theme) => theme.palette.primary.light, color: (theme) => theme.palette.text.primary, width: {xs:"20%", sm:"100%"}}} >JoePegs</Button>         
          </Grid>
          <Grid item container xs={2} sm={3} md={2} lg={1}sx={{ width: '100%', p: 1 }}>
            {' '}
            <Button sx={{fontSize: "14px", backgroundColor: (theme) => theme.palette.primary.light, color: (theme) => theme.palette.text.primary, width: {xs:"20%", sm:"100%"}}} >Kalao</Button>         
          </Grid>
          <Grid item container xs={2} sm={3} md={2} lg={1}sx={{ width: '100%', p: 1 }}>
            {' '}
            <Button sx={{fontSize: "14px", backgroundColor: (theme) => theme.palette.primary.light, color: (theme) => theme.palette.text.primary, width: {xs:"20%", sm:"100%"}}} >NFTrade</Button>         
          </Grid>
        </Grid>
      </Zoom>
    </>
  );
};

export default Lock;
