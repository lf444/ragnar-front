import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { FunctionComponent } from "react";

// Mui
import { Button, ListItem } from "@mui/material";

type NavItemProps = {
  pageURL: string;
  title: string;
};

const NavItem: FunctionComponent<NavItemProps> = ({ pageURL, title }) => {
  const location = useLocation();
  return (
    <ListItem sx={{ display: "flex" }} disableGutters>
      <Button
        component={RouterLink}
        sx={{
          marginRight: "10px",
          color: location.pathname === pageURL ? "#3a4149" : "#627F91",
          justifyContent: "flex-start",
          /*  left: "-16px", */
          py: 1.25,
          textTransform: "none",
          width: "fit-content",
          fontSize: { xs: "1em", sm: "20px" },
          fontWeight: "700",
          lineHeight: "24px",
        }}
        title={title}
        to={pageURL}
      >
        <span>{title}</span>
      </Button>
    </ListItem>
  );
};

export default NavItem;
