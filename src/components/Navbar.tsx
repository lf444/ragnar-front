import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/images/logo.png";
import rgn from "../assets/images/pools/rgn.png";
import yeti from "../assets/images/pools/yeti.png";

import Button from "@mui/material/Button";
import { Box, Drawer, Grid, List, Typography, Modal } from "@mui/material";
import NavItem from "./NavItem";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import theme from "../theme";

const drawerWidth = 100;

const Navbar = ({
  tokensPrices,
}: {
  tokensPrices: {
    priceYeti: number;
    priceYusd: number;
    priceRgn: number;
    priceLpCurve: number;
    priceRgnYeti: number;
  };
}) => {
  const [openDrawer, SetOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    SetOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    SetOpenDrawer(false);
  };

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      menuTitle: "Farm",
<<<<<<< HEAD
      pageURL: "/stake",
=======
      pageURL: "/farm",
>>>>>>> ab5a614 (edev: minor change)
    },
    {
      menuTitle: "Claim",
      pageURL: "/claim",
    },
    {
      menuTitle: "Stake",
      pageURL: "/lock",
    },
    // SOMES CHANGES
    /*   {
      menuTitle: "Borrow",
      pageURL: "/borrow",
    }, */
  ];

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          height: {
            xs: "3.5rem",
            sm: "4rem",
          },
          marginBottom: "2rem",
          marginTop: "0.5rem",
          backgroundColor: "#2f343a",
        }}
      >
        <Toolbar disableGutters>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={0.2} sm={1.55}></Grid>
            <Grid
              item
              xs={2}
              sm={1}
              sx={{
                position: "relative",
                display: {
                  xs: "none",
                  sm: "flex",
                },
                left: {
                  xs: "2rem",
                  sm: "0rem",
                  md: "2rem",
                  lg: "3rem",
                  xl: "7rem",
                },
              }}
            >
              <img height="40" src={logo} alt="Ragnar Logo" />
            </Grid>
            <Grid
              item
              xs={2}
              sm={2}
              md={0}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
                position: "relative",
                left: {
                  xs: "-4rem",
                  sm: "-4rem",
                  md: "-4rem",
                  lg: "-2rem",
                  xl: "-0.5rem",
                },
              }}
            >
              {" "}
              <Typography
                sx={{
                  marginLeft: "5%",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: (theme) => theme.palette.text.primary,
                  lineHeight: "29px",
                }}
                variant="h6"
              >
                {" "}
                Ragnar
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: (theme) => theme.palette.text.secondary,
                  lineHeight: "29px",
                }}
                variant="h6"
                color="textPrimary"
              >
                {" "}
                Finance
              </Typography>{" "}
            </Grid>
            <Grid
              item
              xs={2}
              sm={0}
              sx={{
                display: {
                  xs: "flex",
                  sm: "none",
                },
                position: {
                  xs: "relative",
                  sm: "initial",
                },
                bot: { xs: "0" },
                left: {
                  xs: "1rem",
                },
              }}
            >
              <Button
                sx={{
                  color: (theme) => theme.palette.text.primary,
                }}
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </Button>
            </Grid>
            <Grid
              item
              xs={0}
              sm={3.5}
              md={2.5}
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                position: {
                  xs: "relative",
                  sm: "initial",
                },
                bot: { xs: "0" },
              }}
            >
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 1,
                  width: "100%",
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
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    color: open
                      ? (theme) => theme.palette.text.primary
                      : "#929ea6",
                    justifyContent: "flex-start",
                    py: 1.25,
                    textTransform: "none",
                    width: "fit-content",
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    left: "-10px",
                  }}
                >
                  More <KeyboardArrowDownIcon />
                </Button>
                <Button
                  sx={{
                    left: "25px",
                    fontSize: "20px",
                    fontWeight: "700",
                    textTransform: "none",
                    color: "#D0BA97",
                  }}
                  onClick={handleOpenModal}
                >
                  Mint
                </Button>
                <Modal
                  open={openModal}
                  onClose={handleCloseModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      width: "50%",
                      color: "#000000",
                      marginBottom: "25px",
                      alignContent: "center",
                      backgroundColor: theme.palette.background.default,
                      borderRadius: "5px 5px 5px 5px",
                      paddingTop: 1,
                      marginTop: "15%",
                      marginLeft: "25%",
                      paddingBottom: 1,
                      paddingLeft: 3,
                      paddingRight: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: (theme) => theme.palette.text.primary,
                        fontWeight: "bold",
                        borderBottom: 1,
                        borderColor: "divider",
                      }}
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      YETI Fuji Testnet Faucet
                    </Typography>
                    <Button
                      sx={{
                        width: "100%",
                        alignContent: "center",
                        marginTop: "25px",
                        color: (theme) => theme.palette.text.primary,
                      }}
                      onClick={() =>
                        window.open(
                          "https://faucet.avax-test.network/",
                          "_blank"
                        )
                      }
                      id="modal-modal-description"
                    >
                      Click here to mint native testnet AVAX to pay for gas fee.
                    </Button>
                    <Button
                      sx={{
                        width: "100%",
                        alignContent: "center",
                        color: (theme) => theme.palette.text.primary,
                      }}
                      onClick={() =>
                        window.open(
                          "https://faucet.avax-test.network/",
                          "_blank"
                        )
                      }
                      id="modal-modal-description"
                    >
                      Click here to mint RGN.
                    </Button>
                    <Button
                      sx={{
                        width: "100%",
                        alignContent: "center",
                        marginBottom: "25px",
                        color: (theme) => theme.palette.text.primary,
                      }}
                      onClick={() =>
                        window.open(
                          "https://faucet.avax-test.network/",
                          "_blank"
                        )
                      }
                      id="modal-modal-description"
                    >
                      Click here to mint LpCurve.
                    </Button>
                  </Box>
                </Modal>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "#2f343a",
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
              sm={1}
              md={2}
              lg={1.5}
              item
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Typography
                sx={{
                  marginRight: "2%",
                  fontSize: {
                    xs: "0.95em",
                    sm: "0.9em",
                    md: "0.9em",
                  },
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                }}
                color="textPrimary"
              >
                <Box
                  component={"img"}
                  sx={{
                    height: "22px",
                    marginRight: "8px",
                  }}
                  src={rgn}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  alt='Ragnar Logo'
                />{' '}
                0.00$
=======
                  alt="Ragnar Logo"
                />{" "}
<<<<<<< HEAD
                0.30$
>>>>>>> 96c243c (dev: reduce req call)
=======
                  alt='Ragnar Logo'
                />{' '}
<<<<<<< HEAD
                {priceRgn}
>>>>>>> 7449a99 (all data + all function)
=======
=======
                  alt="Ragnar Logo"
                />{" "}
>>>>>>> 57a5cf2 (dev trigger cio)
                {priceRgn.toFixed(3)}$
>>>>>>> 53dd8be (minor change)
=======
                {tokensPrices.priceRgn.toFixed(3)}$
>>>>>>> edf8c65 (dev: refactor rpc call)
              </Typography>

              <Typography
                sx={{
                  marginRight: "2%",
                  fontSize: {
                    xs: "0.9em",
                    sm: "0.9em",
                    md: "0.9em",
                  },
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                }}
                color="textPrimary"
              >
                <Box
                  component={"img"}
                  sx={{
                    height: "22px",
                    marginRight: "8px",
                  }}
                  src={yeti}
                  alt="YETI Logo"
                />{" "}
                {tokensPrices.priceYeti.toFixed(3)}$
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <div>
                <ConnectButton
                  label="Connect"
                  accountStatus="avatar"
                  showBalance={false}
                />
              </div>
            </Grid>
          </Grid>
          <Drawer
            variant="temporary"
            anchor="left"
            open={openDrawer}
            onClose={() => handleDrawerClose()}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
              "& .MuiPaper-root": {
                backgroundColor: "#2f343a",
              },
            }}
          >
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 1,
                width: "100%",
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
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  color: open
                    ? (theme) => theme.palette.text.primary
                    : "#929ea6",
                  justifyContent: "flex-start",
                  py: 1.25,
                  textTransform: "none",
                  width: "fit-content",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "24px",
                }}
              >
                More <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "#2f343a",
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
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
