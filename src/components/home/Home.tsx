import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          paddingLeft: '7%',
          paddingRight: '7%',
          paddingTop: '2%',
        }}
      >
        <Typography
          sx={{
            color: '#3A4149',
            fontWeight: '700',
            fontSize: '22px',
            paddingTop: '3%',
          }}
        >
          Ragnar finance
        </Typography>

        <Typography
          sx={{
            color: '#3A4149',
            fontWeight: '700',
            fontSize: '24px',
            paddingTop: '3%',
          }}
        >
          Deposit on Vector, the best yield booster on YETI & AVALANCHE
        </Typography>

        <Typography
          sx={{ color: '#3A4149', fontWeight: '700', fontSize: '18px' }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting .
        </Typography>
        <Button
          variant='contained'
          onClick={() => {
            navigate('/stake');
          }}
          sx={{
            backgroundColor: '#627F91',
            marginTop: '2%',
            /*    height: '50%',
            width: '10%', */
            fontSize: '11px',
          }}
        >
          Start staking now !
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            navigate('/stake');
          }}
          sx={{
            marginTop: '2%',
            /*    height: '50%',
            width: '10%', */
            fontSize: '11px',
            marginLeft: '2rem',
          }}
        >
          How does it WORK ?
        </Button>
        <Box
          sx={{
            position: 'relative',
            left: '65%',
            bottom: '45%',
          }}
        ></Box>
      </Box>
    </>
  );
};

export default Home;
