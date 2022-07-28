import { Box, Grid, Link, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 3 }}
        py={{ xs: 5, sm: 5 }}
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          color: (theme) => theme.palette.text.primary,
        }}
      >
        <Grid container>
          <Grid
            item
            container
            xs={2}
            sm={4}
            lg={8}
            alignItems="center"
            sx={{ pl: "4rem" }}
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
          <Grid item container direction={"row"} xs={8} sm={4}>
            <Grid item container xs direction="column">
              <Typography sx={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                Explore
              </Typography>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Home
              </Link>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Borrow
              </Link>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Farm
              </Link>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Claim
              </Link>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Lock
              </Link>
            </Grid>
            <Grid item container xs direction="column">
              <Typography sx={{ fontSize: "1.25rem" }}>Docs</Typography>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Medium
              </Link>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Gitbook
              </Link>
            </Grid>
            <Grid item container xs direction="column">
              {" "}
              <Typography sx={{ fontSize: "1.25rem" }}>Social</Typography>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Twitter
              </Link>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Discord
              </Link>
            </Grid>
            <Grid item container xs direction="column">
              <Typography sx={{ fontSize: "1.25rem" }}>Help</Typography>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Help Center
              </Link>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Contact us
              </Link>
            </Grid>
            <Grid item container xs direction="column">
              {" "}
              <Typography sx={{ fontSize: "1.25rem" }}>Legal</Typography>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Terms
              </Link>
              <Link
                underline="none"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontWeight: "200",
                }}
              >
                Privacy
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}
