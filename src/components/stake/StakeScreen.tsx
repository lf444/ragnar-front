import { Grid } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import Funds from './Funds';
import StakeStablePoolComponent from './StakeStablePoolComponent';

const StakeScreen = () => {
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
          <Grid item sx={{ width: '90%', paddingBottom: 2 }}>
            <Funds />
          </Grid>
          <Grid item sx={{ width: '90%' }}>
            <StakeStablePoolComponent />
          </Grid>
        </Grid>
      </Zoom>
    </>
  );
};

export default StakeScreen;
