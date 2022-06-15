import Navbar from '../Navbar';
import { Box, Grid, Typography } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import StakeMainPoolComponent from '../stake/StakeMainPoolComponent';
import frame from '../../assets/images/frame.png';

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
            boxShadow: { xs: 0, sm: 3 },
            borderRadius: { xs: '0px', sm: '20px' },
            backgroundColor: {
              xs: 'none',
              sm: '#none',
              md: '#DDEAF2',
            },
          }}
        >
          <StakeMainPoolComponent
            pairName1={'RGN'}
            address={'0x5817d4f0b62a59b17f75207da1848c2ce75e7af4'}
            logo1={frame}
            type={'rgn'}
            openForScreen={true}
          />
        </Grid>
      </Zoom>
    </>
  );
};

export default LockRGN;
