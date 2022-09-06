import { Box, Grid, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 1, sm: 3 }}
        py={{ xs: 7, sm: 8.5 }}
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          color: (theme) => theme.palette.text.primary,
          marginTop: "500px"
        }}
      >
        <Grid
          container
          sx={{
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Grid
            item
            container
            xs={12}
            sm={7}
            alignItems="center"
            sx={{ pl: "4rem", marginBottom: { xs: "1rem", sm: 0 } }}
          >
            {" "}
            <img height="40" src={logo} alt="Ragnar Logo" />
            <Typography
              sx={{
                marginLeft: "2rem",
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
          <Grid item container direction={"row"} xs={12} sm={5} sx={{ marginLeft: {xs: "10px", md: "0", sm: "0"} }}>
            <Grid item container xs direction="column">
              <Typography sx={{ fontSize: "1.25rem" }}>
                Explore
              </Typography>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Home
                </Typography>
              </Link>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Borrow
                </Typography>
              </Link>
              <Link to="/farm" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Farm
                </Typography>
              </Link>
              <Link to="/claim" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Claim
                </Typography>
              </Link>
              <Link to="/lock" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Lock
                </Typography>
              </Link>
            </Grid>
            <Grid item container xs direction="column">
              <Typography sx={{ fontSize: "1.25rem" }}>Docs</Typography>
              <a
                href="https://ragnarfinance.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Medium
                </Typography>
              </a>
              <a
                href="https://ragnarfinance.gitbook.io/ragnar-finance/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Gitbook
                </Typography>
              </a>
            </Grid>
            <Grid item container xs direction="column">
              {" "}
              <Typography sx={{ fontSize: "1.25rem" }}>Social</Typography>
              <a
                href="https://twitter.com/RagnarProtocol"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Twitter
                </Typography>
              </a>
              <a
                href="https://discord.com/invite/MHHEYWTFyq"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Discord
                </Typography>
              </a>
            </Grid>
            <Grid item container xs direction="column">
              <Typography sx={{ fontSize: "1.25rem" }}>Help</Typography>
              <a
                href="https://ragnarfinance.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Help Center
                </Typography>
              </a>
              <a
                href="https://ragnarfinance.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Contact us
                </Typography>{" "}
              </a>
            </Grid>
            <Grid item container xs direction="column">
              {" "}
              <Typography sx={{ fontSize: "1.25rem" }}>Legal</Typography>
              <a
                href="https://ragnarfinance.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Terms
                </Typography>{" "}
              </a>
              <a
                href="https://ragnarfinance.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontWeight: "200",
                  }}
                >
                  Privacy
                </Typography>{" "}
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}
