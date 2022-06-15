import { Box, Grid, Typography } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import Fade from '@mui/material/Fade';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import JoeTable from './tab/JoeTable';
import RGNTable from './tab/RGNTable';

interface StakeMainPoolComponenttProps {
  pairName1: string;
  address: string;
  logo1: string;
  type: 'rgn' | 'joe';
  openForScreen: boolean;
}

const StakeMainPoolComponent: FunctionComponent<
  StakeMainPoolComponenttProps
> = ({ pairName1, address, logo1, type, openForScreen }) => {
  const [aprValue, setAprValue] = useState(0);
  const [rajoeValue, setRajoeValue] = useState(0);
  const [tvlValue, setTvlValue] = useState(0);
  const [claimable, setClaimable] = useState(0);
  const [open, setOpen] = useState<boolean>(openForScreen);
  const style = {
    transform: open ? '' : 'rotate(90deg)',
    transition: 'transform 150ms ease', // smooth transition
  };

  return (
    <Box sx={{ width: '100%', color: '#000000', marginBottom: '7px' }}>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{
          backgroundColor: '#7A8C98',
          borderRadius: '5px 5px 5px 5px',
          borderRight: '2px solid grey',
          textAlign: 'center',
          cursor: 'pointer',
        }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Grid
          item
          xs={2}
          sx={{ marginTop: '13px', marginBottom: '5px', textAlign: 'center' }}
        >
          <img height='45px' src={logo1} alt={`${logo1} Logo`} />
        </Grid>
        <Grid item xs={2}>
          {pairName1}
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ fontSize: '11px', marginTop: '5px' }}>
            {' '}
            APR
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>{aprValue}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ fontSize: '11px', marginTop: '5px' }}>
            {' '}
            {pairName1}
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>{rajoeValue}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography sx={{ fontSize: '11px', marginTop: '5px' }}>
            {' '}
            TVL
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>{tvlValue}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ fontSize: '11px', marginTop: '5px' }}>
            {' '}
            Claimable
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>{claimable}</Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{ visibility: openForScreen ? 'hidden' : 'visible' }}
        >
          {' '}
          <LinearScaleIcon style={style} />
        </Grid>
      </Grid>

      {open && (
        <Fade in={open}>
          <Box sx={{ color: '#000000' }}>
            {type === 'joe' ? <JoeTable /> : <RGNTable />}
          </Box>
        </Fade>
      )}
    </Box>
  );
};
export default StakeMainPoolComponent;
