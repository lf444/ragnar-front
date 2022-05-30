import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/images/logo.png";
import frame from "../assets/images/frame.png";

import Button from "@mui/material/Button";
import { Box, Grid, List, Typography } from "@mui/material";
import NavItem from "./NavItem";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ConnectWalletButton from "./shared/ConnectWalletButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      menuTitle: "Stake",
      pageURL: "/stake",
    },
    {
      menuTitle: "Claim",
      pageURL: "/claim",
    },
    {
      menuTitle: "Lock",
      pageURL: "/lock",
    },
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
          background: "transparent",
          borderBottom: "solid 2px #7F98AC",
          height: {
            sx: "1%",
            sm: "9%",
            md: "7%",
            lg: "8%",
            xl: "7%",
          },
        }}
      >
        <Toolbar disableGutters>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={0.7}></Grid>
            <Grid item xs={2} sm={1}>
              <img height="80" src={logo} alt="Ragnar Logo" />
            </Grid>
            <Grid
              item
              xs={0}
              sm={1}
              md={2}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              {" "}
              <Typography
                sx={{
                  marginLeft: "-5%",
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#627F91",
                  lineHeight: "29px",
                }}
                variant="h6"
                color="textPrimary"
              >
                {" "}
                Ragnar Finance
              </Typography>{" "}
            </Grid>
            <Grid
              item
              xs={0}
              sm={3}
              md={3}
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                position: {
                  sx: "relative",
                  sm: "initial",
                },
                bot: { sx: "0" },
              }}
            >
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 0,
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
                    color: open ? "#3a4149" : "#627F91",
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
            <Grid item xs={0} sm={1} md={1} lg={1}></Grid>
            <Grid
              xs={7}
              sm={4}
              md={3}
              lg={3}
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
                    sx: "8px",
                    sm: "9px",
                    md: "11px",
                  },
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "500",
                }}
                color="textPrimary"
              >
                <Box
                  component={"img"}
                  sx={{
                    height: "18px",
                    marginRight: "3px",
                  }}
                  src={frame}
                  alt="Ragnar Logo"
                />{" "}
                0.00$
              </Typography>

              <Typography
                sx={{
                  marginRight: "2%",
                  fontSize: {
                    sx: "8px",
                    sm: "9px",
                    md: "11px",
                  },
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "500",
                }}
                color="textPrimary"
              >
                <Box
                  component={"img"}
                  sx={{
                    height: "18px",
                    marginRight: "3px",
                  }}
                  src={frame}
                  alt="Ragnar Logo"
                />{" "}
                0.00$
              </Typography>
              <Typography
                sx={{
                  marginRight: "2%",
                  fontSize: {
                    sx: "8px",
                    sm: "9px",
                    md: "11px",
                  },
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "500",
                }}
                color="textPrimary"
              >
                <Box
                  component={"img"}
                  sx={{
                    height: "18px",
                    marginRight: "3px",
                  }}
                  src={frame}
                  alt="Ragnar Logo"
                />{" "}
                0.00$
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1} md={1} lg={1}>
              <ConnectWalletButton />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: "fixed",
          bottom: "0px",
          width: "100%",
          display: {
            xs: "flex",
            sm: "none",
          },
          backgroundColor: "#DDEAF2",
          zIndex: "1000",
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 3,
            paddingRight: 3,
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
              color: open ? "#3a4149" : "#627F91",
              justifyContent: "flex-start",
              py: 1.25,
              textTransform: "none",
              width: "fit-content",
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "24px",
            }}
          >
            More <ArrowDropUpIcon />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
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
