<<<<<<< HEAD
import { Box, Grid, Typography } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import Fade from '@mui/material/Fade';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import RGNTable from '../stake/pools/tab/RGNTable';
=======
import { Box, Grid, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Fade from "@mui/material/Fade";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
>>>>>>> e1c2612 (dev: lock better animation)

interface StakeMainPoolComponenttProps {
  pairName1: string;
  addressPool: string;
  logo1: string;
  type: 'rgn' | 'yeti';
  openForScreen: boolean;
}

const StakeMainPoolComponent: FunctionComponent<
  StakeMainPoolComponenttProps
> = ({ pairName1, addressPool, logo1, type, openForScreen }) => {
  const [aprValue, setAprValue] = useState(0);
  const [rgnyetiValue, setrgnyetiValue] = useState(0);
  const [tvlValue, setTvlValue] = useState(0);
  const [claimable, setClaimable] = useState(0);
  const [open, setOpen] = useState<boolean>(openForScreen);
  const style = {
    transform: open ? '' : 'rotate(90deg)',
    transition: 'transform 150ms ease', // smooth transition
  };

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: (theme) => theme.palette.secondary.main,
        borderRadius: '5px 5px 5px 5px',
        boxShadow: 'none',
      }}
    >
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{
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
        <Grid
          item
          xs={2}
          sx={{
            color: (theme) => theme.palette.text.primary,
            fontWeight: 'bold',
            fontSize: { xs: '0.75em', sm: '0.75em', md: '1em' },
          }}
        >
          Lock RGN in a NFT
        </Grid>
<<<<<<< HEAD
        <Grid item xs={2}>
<<<<<<< HEAD
=======
          <Typography
            sx={{
              fontSize: '11px',
              marginTop: '5px',
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {' '}
            APR
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {aprValue}%
          </Typography>
>>>>>>> 719e4c8 (dev: remove border)
        </Grid>
=======
        <Grid item xs={2}></Grid>
>>>>>>> e1c2612 (dev: lock better animation)
        <Grid item xs={2}>
          <Typography
            sx={{
              fontSize: '11px',
              marginTop: '5px',
              color: (theme) => theme.palette.text.secondary,
            }}
          >
<<<<<<< HEAD
            {" "}
            Deposit
=======
            {' '}
            {pairName1}
>>>>>>> 719e4c8 (dev: remove border)
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {rgnyetiValue}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            sx={{
              fontSize: '11px',
              marginTop: '5px',
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {' '}
            TVL
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {tvlValue}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontSize: '11px',
              marginTop: '5px',
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {' '}
            Claimable
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {claimable}
          </Typography>
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
          <Box></Box>
        </Fade>
      )}
    </Box>
  );
};
export default StakeMainPoolComponent;
