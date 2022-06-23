import Navbar from '../Navbar';
import { Box, Grid, Typography } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import StakeMainPoolComponent from '../stake/StakeMainPoolComponent';
import rgn from '../../assets/poolsImages/rgn.png';
import Funds from '../stake/Funds';
import MyNFT from '../stake/MyNFT';
import theme from '../../theme';

const LockRGN = () => {
  return (
    <>
      {' '}
      <Zoom in={true}>
        <Grid
          container
          direction='column'
          alignItems='center'
          sx={{
            marginBottom: '4rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: {
              xs: '100%',
              sm: '70%',
            },
            /* boxShadow: { xs: 0, sm: 3 }, */
            borderRadius: { xs: '0px', sm: '20px' },
/*             backgroundColor: {
              xs: 'none',
              sm: '#none',
              md: '#DDEAF2',
            }, */
          }}
        >
          <Grid item sx={{ width: '90%', paddingBottom: 5 }}>
          <Typography
          sx={{
          fontWeight: "bold",
          color: (theme) => theme.palette.text.primary,
          width: "fit-content",
          padding: 1,
          paddingTop: 4,
          borderRadius: "5px",
          fontSize: "1rem",
          }}
        >
        LOCK RGN
          </Typography>
            <Funds />
          </Grid>
          <Grid item sx={{ width: '90%' }}>
            <StakeMainPoolComponent
            pairName1={'RGN'}
            addressPool={'0x5817d4f0b62a59b17f75207da1848c2ce75e7af4'}
            logo1={rgn}
            type={'rgn'}
            openForScreen={true}
          />
          <Grid item sx={{ width: '90%', paddingBottom: 5 }} />
          <Grid item sx={{ color:  (theme) => theme.palette.text.primary, fontWeight: 'bold', fontSize: {xs: "0.75em", sm: "1em"}}}>
          Your NFTs
        </Grid>
        <Box
      sx={{
        width: "100%",
        color: "#000000",
        marginBottom: "25px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "5px 5px 5px 5px",
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 3,
        paddingRight: 3,
      }}
    >          
        <MyNFT />
        </Box>
        </Grid>
        </Grid>
      </Zoom>
    </>
  );
};

export default LockRGN;
