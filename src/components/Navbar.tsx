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
    {
      menuTitle: "Borrow",
      pageURL: "/borrow",
    },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "transparent",
        borderBottom: "solid 2px #7F98AC",
        height: {
          sx: "5%",
          sm: "8%",
          md: "9%",
          lg: "8%",
          xl:"7%",
        },
      }}
    >
      <Toolbar disableGutters>
        <Grid container direction="row" alignItems="center">
          <Box
            sx={{
              position: "relative",
              left: "70px",
            }}
          >
            <img height="80" src={logo} alt="Ragnar Logo" />
          </Box>

          <Grid item xs={2}>
            {" "}
            <Typography
              sx={{
                marginLeft: "50px",
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
          <Grid item xs={2}>
            <List
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: 0,
                marginLeft: "182px",
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
          <Grid item xs={4}></Grid>
          <Grid xs={3} item container direction={"row"} alignItems="center">
            <Box>
              <img height="15" src={frame} alt="Ragnar Logo" />
            </Box>
            <Typography
              sx={{ marginRight: "10px", fontSize: "11", fontWeight: "500" }}
              color="textPrimary"
            >
              {" "}
              00.00$
            </Typography>
            <Box>
              <img height="15" src={frame} alt="Ragnar Logo" />
            </Box>
            <Typography
              sx={{ marginRight: "10px", fontSize: "11", fontWeight: "500" }}
              color="textPrimary"
            >
              {" "}
              00.00$
            </Typography>
            <Box>
              <img height="15" src={frame} alt="Ragnar Logo" />
            </Box>

            <Typography
              sx={{ fontSize: "11", fontWeight: "500" }}
              color="textPrimary"
            >
              {" "}
              00.00$
            </Typography>
            <ConnectWalletButton />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
