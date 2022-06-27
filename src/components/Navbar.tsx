import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/images/logo.png';
import rgn from '../assets/poolsImages/rgn.png'
import yusd from '../assets/poolsImages/yusd.png'
import yeti from '../assets/poolsImages/yeti.png'

import Button from '@mui/material/Button';
import { Box, Grid, List, Typography } from '@mui/material';
import NavItem from './NavItem';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ConnectWalletButton from './shared/ConnectWalletButton';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ConnectWallet from './wallet/ConnectWallet';
import { useEffect, useState } from 'react';
import { coinGeckoService } from '../services/coinGeckoService';
import { TOKEN_ID } from "../utils/constance";


const Navbar = () => {
  const [priceYeti, setPriceYeti] = useState(0);
  const [priceRgn, setPriceRgn] = useState(0);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    Price();
  }, [])

    
    async function Price() {
      setPriceYeti(await coinGeckoService.getPrice(TOKEN_ID.yeti));
      setPriceRgn(await coinGeckoService.getPrice(TOKEN_ID.yeti));
    }



  const menuItems = [
    {
      menuTitle: 'Stake',
      pageURL: '/stake',
    },
    {
      menuTitle: 'Claim',
      pageURL: '/claim',
    },
    {
      menuTitle: 'Lock',
      pageURL: '/lock',
    },
    /*   {
      menuTitle: "Borrow",
      pageURL: "/borrow",
    }, */
  ];

  return (
    <>
      <AppBar
        position='static'
        elevation={0}
        sx={{
          height: {
            xs: '3.5rem',
            sm: '4rem',
          },
          marginBottom: '2rem',
          marginTop: '0.5rem',
          backgroundColor: '#2f343a',
        }}
      >
        <Toolbar disableGutters>
          <Grid container direction='row' alignItems='center'>
            <Grid item xs={0.2} sm={1.55}></Grid>
            <Grid item xs={2} sm={1} sx={{
                position: 'relative',
                left: {
                  xs:'2rem',
                  sm:'0rem',
                  md:'2rem',
                  lg:'3rem',
                  xl:'7rem',
              },
              }}>
              <img height='40' src={logo} alt='Ragnar Logo' />
            </Grid>
            <Grid
              item
              xs={2}
              sm={2}
              md={0}
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'none',
                  lg: 'flex',
                  xl: 'flex',
                },
                position: 'relative',
                left: {
                  xs:'-4rem',
                  sm:'-4rem',
                  md:'-4rem',
                  lg:'-2rem',
                  xl:'-0.5rem',
              },
              }}
            >
              {' '}
              <Typography
                sx={{
                  marginLeft: '5%',
                  fontSize: '20px',
                  fontWeight: '700',
                  color: (theme) => theme.palette.text.primary,
                  lineHeight: '29px',
                }}
                variant='h6'
              >
                {' '}
                Ragnar
              </Typography>{' '}
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: '500',
                  color: (theme) => theme.palette.text.secondary,
                  lineHeight: '29px',
                }}
                variant='h6'
                color='textPrimary'
              >
                {' '}
                Finance
              </Typography>{' '}
            </Grid>
            <Grid
              item
              xs={0}
              sm={3.5}
              md={2.5}
              sx={{
                display: {
                  xs: 'none',
                  sm: 'flex',
                  md: 'flex',
                  lg: 'flex',
                  xl: 'flex',
                },
                position: {
                  xs: 'relative',
                  sm: 'initial',
                },
                bot: { xs: '0' },
              }}
            >
              <List
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: 1,
                  width: '100%',
                }}
              >
                {menuItems.map((item) => (
                  <NavItem
                    pageURL={item.pageURL}
                    key={item.menuTitle}
                    title={item.menuTitle}
                  />
                ))}
                <Button
                  id='fade-button'
                  aria-controls={open ? 'fade-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{
                    color: open
                      ? (theme) => theme.palette.text.primary
                      : '#929ea6',
                    justifyContent: 'flex-start',
                    py: 1.25,
                    textTransform: 'none',
                    width: 'fit-content',
                    fontSize: '20px',
                    fontWeight: '700',
                    lineHeight: '24px',
                  }}
                >
                  More <KeyboardArrowDownIcon />
                </Button>
                <Menu
                  id='fade-menu'
                  MenuListProps={{
                    'aria-labelledby': 'fade-button',
                  }}
                  sx={{
                    '& .MuiPaper-root': {
                      backgroundColor: '#2f343a',
                    },
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Docs</MenuItem>
                  <MenuItem onClick={handleClose}>Discord</MenuItem>
                  <MenuItem onClick={handleClose}>Medium</MenuItem>
                  <MenuItem onClick={handleClose}>Twitter</MenuItem>
                </Menu>
              </List>
            </Grid>
            <Grid item xs={0} sm={2} md={1.7} lg={0.8}></Grid>
            <Grid
              xs={7}
              sm={2.2}
              md={2}
              lg={1.5}
              item
              container
              direction='row'
              justifyContent='space-around'
              alignItems='center'
            >
              <Typography
                sx={{
                  marginRight: '2%',
                  fontSize: {
                    xs: '0.9em',
                    sm: '0.9em',
                    md: '0.9em',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '600',
                }}
                color='textPrimary'
              >
                <Box
                  component={'img'}
                  sx={{
                    height: '22px',
                    marginRight: '8px',
                  }}
                  src={rgn}
                  alt='Ragnar Logo'
                />{' '}
                0.00$
              </Typography>

              <Typography
                sx={{
                  marginRight: '2%',
                  fontSize: {
                    xs: '0.9em',
                    sm: '0.9em',
                    md: '0.9em',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '600',
                }}
                color='textPrimary'
              >
                <Box
                  component={'img'}
                  sx={{
                    height: '22px',
                    marginRight: '8px',
                  }}
                  src={yeti}
                  alt='YETI Logo'
                />{' '}
                {priceYeti.toFixed(3)}$
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1} md={1} lg={1}>
              <ConnectWallet />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: 'fixed',
          bottom: '0px',
          width: '100%',
          display: {
            xs: 'flex',
            sm: 'none',
          },
          backgroundColor: '#2f343a',
          zIndex: '1000',
          height: '5%',
        }}
      >
        <List
          sx={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 3,
            paddingRight: 3,
            width: '100%',
          }}
        >
          {menuItems.map((item) => (
            <NavItem
              pageURL={item.pageURL}
              key={item.menuTitle}
              title={item.menuTitle}
            />
          ))}
          <Button
            id='fade-button'
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              color: open ? (theme) => theme.palette.text.primary : '#929ea6',
              justifyContent: 'flex-start',
              py: 1.25,
              textTransform: 'none',
              width: 'fit-content',
              fontSize: { xs: '1em', sm: '20px' },
              fontWeight: '700',
              lineHeight: '24px',
            }}
          >
            More <ArrowDropUpIcon />
          </Button>
          <Menu
            id='fade-menu'
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: '#2f343a',
              },
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Docs</MenuItem>
            <MenuItem onClick={handleClose}>Discord</MenuItem>
            <MenuItem onClick={handleClose}>Medium</MenuItem>
            <MenuItem onClick={handleClose}>Twitter</MenuItem>
          </Menu>
        </List>
      </Box>
    </>
  );
};
export default Navbar;
