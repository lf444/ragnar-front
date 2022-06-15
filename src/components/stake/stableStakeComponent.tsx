import { Box, Grid, Typography } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import Fade from '@mui/material/Fade';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import StableTab from './tab/stableTab';
import { Pools } from '../../abi/pools';

interface StableStakeComponentProps {
  pool: Pools;
}

const StableStakeComponent: FunctionComponent<StableStakeComponentProps> = ({
  pool,
}) => {
  const [aprValue, setAprValue] = useState(0);
  const [rajoeValue, setRajoeValue] = useState(0);
  const [tvlValue, setTvlValue] = useState(0);
  const [claimable, setClaimable] = useState(0);
  const [open, setOpen] = useState<boolean>(false);
  const style = {
    transform: open ? '' : 'rotate(90deg)',
    transition: 'transform 150ms ease', // smooth transition
    color: '#3A4149',
  };

  return (
    <Box sx={{ width: '100%', color: '#000000', marginBottom: '8px' }}>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        direction='row'
        sx={{
          display: 'flex',
          backgroundColor: '#627F91',
          borderRadius: '5px 5px 5px 5px',
          borderRight: '2px solid grey',
          textAlign: 'center',
          cursor: 'pointer',
          justifyContent: {
            xs: 'space-between',
            sm: 'center',
          },
        }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Grid
          item
          xs={3}
          sm={2}
          sx={{
            textAlign: 'center',
            paddingTop: '5px',
            paddingLeft: {
              xs: '10px',
              sm: '0px',
            },
          }}
        >
          <img height='35px' src={pool.logo1} alt={`${pool.logo1} Logo`} />
          <img
            height='35px'
            style={{ position: 'relative', left: '-0.75em' }}
            src={pool.logo2}
            alt={`${pool.logo2} Logo`}
          />
        </Grid>
        <Grid
          item
          xs={1}
          sm={2}
          sx={{
            marginRight: '3px',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.5em', sm: '1em' },
              fontWeight: 'bold',
              color: '#3A4149',
            }}
          >
            {' '}
            {pool.pairName1}-{pool.pairName2}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            sx={{
              fontSize: { xs: '0.75em', sm: '1em' },
              marginTop: '2px',
              color: '#3A4149',
            }}
          >
            {' '}
            APR
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '0.75em', sm: '1em' }, fontWeight: 'bold' }}
          >
            {aprValue}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontSize: { xs: '0.75em', sm: '1em' },
              marginTop: '2px',
              color: '#3A4149',
            }}
          >
            {' '}
            {pool.pairName1}-{pool.pairName2}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '0.75em', sm: '1em' }, fontWeight: 'bold' }}
          >
            {rajoeValue}
          </Typography>
        </Grid>
        <Grid item xs={0} sm={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Typography
            sx={{
              fontSize: { xs: '0.75em', sm: '1em' },
              marginTop: '2px',
              color: '#3A4149',
            }}
          >
            {' '}
            TVL
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.75em', sm: '1em' },
              fontWeight: 'bold',
            }}
          >
            {tvlValue}
          </Typography>
        </Grid>
        <Grid item xs={0} sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Typography
            sx={{
              fontSize: { xs: '0.75em', sm: '1em' },
              marginTop: '2px',
              color: '#3A4149',
            }}
          >
            {' '}
            Claimable
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.75em', sm: '1em' },
              fontWeight: 'bold',
            }}
          >
            {claimable}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{ marginTop: '2px', fontSize: { xs: '0.55em', sm: '1em' } }}
        >
          {' '}
          <LinearScaleIcon style={style} />
        </Grid>
      </Grid>

      {open && (
        <Fade in={open}>
          <Box sx={{ color: '#000000' }}>
            <StableTab pool={pool} />
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default StableStakeComponent;
