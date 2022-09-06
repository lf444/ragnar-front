import {
  Collapse,
  Grid,
  IconButton,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@emotion/react";

const FundSecondTabs = ({
  totalYeti,
  totalVeYeti,
  totalRGN,
  totalRGNLocked,
  isLoading,
  priceRGN
}: {
  totalYeti: number;
  totalVeYeti: number;
  totalRGN: number;
  totalRGNLocked: number;
  isLoading: boolean;
  priceRGN: number;
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Grid
          item
          xs
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            borderRadius: "1px 0 0 1px",
            borderRight: "1px solid grey",

            textAlign: "center",
          }}
        >
          {" "}
          <Typography
            sx={{
              fontSize: {
                lg: "0.85em",
                md: "0.75em",
                sm: "0.65em",
                xs: "0.50rem",
              },
              marginTop: "5px",
              color: "#929ea6",
            }}
          >
            {" "}
            RGN SUPPLY
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "0.85em",
                md: "0.75em",
                sm: "0.65em",
                xs: "0.50rem",
              },
              fontWeight: "bold",
              color: "#bfcbd2",
            }}
          >
            {!isLoading ? (
              totalRGN.toLocaleString("en")
            ) : (
              <CircularProgress
                size="0.95em"
                color="inherit"
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid
          item
          xs
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            borderRight: "1px solid grey",

            textAlign: "center",
          }}
        >
          {" "}
          <Typography
            sx={{
              fontSize: {
                lg: "0.85em",
                md: "0.75em",
                sm: "0.65em",
                xs: "0.50rem",
              },
              marginTop: "5px",
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {" "}
            MARKET CAP
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "0.85em",
                md: "0.75em",
                sm: "0.65em",
                xs: "0.50rem",
              },
              fontWeight: "bold",
              color: "#bfcbd2",
            }}
          >
            {!isLoading ? (
              "$" + (totalRGN  * priceRGN).toLocaleString("eng") + "USD"
            ) : (
              <CircularProgress
                size="0.95em"
                color="inherit"
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid
          item
          xs
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            borderRight: "1px solid grey",

            textAlign: "center",
          }}
        >
          {" "}
          <Typography
            sx={{
              fontSize: {
                lg: "0.85em",
                md: "0.75em",
                sm: "0.65em",
                xs: "0.50rem",
              },
              marginTop: "5px",
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            TOTAL RGN LOCKED
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "0.85em",
                md: "0.75em",
                sm: "0.65em",
                xs: "0.50rem",
              },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {!isLoading ? (
              totalRGNLocked.toLocaleString("eng")
            ) : (
              <CircularProgress
                size="0.95em"
                color="inherit"
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid
          item
          xs
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            textAlign: "center",

            borderRight: "1px solid grey",
          }}
        >
          {" "}
          <Typography
            sx={{
              fontSize: {
                lg: "0.85em",
                md: "0.75em",
                sm: "0.65em",
                xs: "0.50rem",
              },
              marginTop: "5px",
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            TOTAL YETI CONVERTED
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "0.85em",
                md: "0.75em",
                sm: "0.65em",
                xs: "0.50rem",
              },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {!isLoading ? (
              totalYeti.toLocaleString("eng")
            ) : (
              <CircularProgress
                size="0.95em"
                color="inherit"
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid
          item
          xs
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            textAlign: "center",

            borderRadius: "0 1px 1px 0",
          }}
        >
          {" "}
          <Typography
            sx={{
              fontSize: {
                lg: "0.85em",
                md: "0.75em",
                sm: "0.65em",
                xs: "0.50rem",
              },
              marginTop: "5px",
              color: "#929ea6",
            }}
          >
            {" "}
            veYETI BALANCE
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "0.85em",
                md: "0.75em",
                sm: "0.65em",
                xs: "0.50rem",
              },
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {!isLoading ? (
              totalVeYeti.toLocaleString("en")
            ) : (
              <CircularProgress
                size="0.95em"
                color="inherit"
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            )}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRadius: "5px 5px 0 0",
          textAlign: "center",
          display: { xs: "flex", sm: "none" },
        }}
      >
        {" "}
        <Typography
          sx={{
            fontSize: {
              lg: "0.85em",
              md: "0.75em",
              sm: "0.75em",
              xs: "0.75em",
            },
            fontWeight: "bold",
            marginTop: "5px",
            color: (theme) => theme.palette.text.primary,
            padding: "0px 10px 0px 10px",
            display: { xs: "flex", sm: "none" },
          }}
        >
          {" "}
          Ragnar protocols infos
        </Typography>
        <IconButton onClick={handleDrawerOpen}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Grid>
      <Collapse
        in={open}
        orientation="vertical"
        style={{ transformOrigin: "0 0 0" }}
        {...(open ? { timeout: 1000 } : {})}
      >
        <Grid
          container
          direction="column"
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <>
            <Grid
              item
              xs
              justifyContent="space-between"
              alignItems="center"
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                display: "flex",
                textAlign: "center",
                padding: "0px 16px 0px 10px",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: "0.75em",
                  marginTop: "5px",
                  color: "#929ea6",
                }}
              >
                {" "}
                RAGNAR SUPPLY
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.75em",
                  fontWeight: "bold",
                  color: "#bfcbd2",
                }}
              >
                {!isLoading ? (
                  totalRGN.toLocaleString("en")
                ) : (
                  <CircularProgress
                    size="0.95em"
                    color="inherit"
                    sx={{
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                )}
              </Typography>
            </Grid>
            <Grid
              item
              xs
              justifyContent="space-between"
              alignItems="center"
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                display: "flex",
                textAlign: "center",
                padding: "0px 16px 0px 10px",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: "0.75em",
                  marginTop: "5px",
                  color: (theme) => theme.palette.text.secondary,
                }}
              >
                {" "}
                MARKET CAP
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.75em",
                  fontWeight: "bold",
                  color: "#bfcbd2",
                }}
              >
            {!isLoading ? (
              "$" + (totalRGN  * priceRGN).toLocaleString("eng") + "USD"
            ) : (
              <CircularProgress
                size="0.95em"
                color="inherit"
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            )}
              </Typography>
            </Grid>
            <Grid
              item
              xs
              justifyContent="space-between"
              alignItems="center"
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                display: "flex",
                textAlign: "center",
                padding: "0px 16px 0px 10px",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: "0.75em",
                  marginTop: "5px",
                  color: (theme) => theme.palette.text.secondary,
                }}
              >
                TOTAL RGN LOCKED
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.75em",
                  fontWeight: "bold",
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                {!isLoading ? (
                  totalRGNLocked.toLocaleString("en")
                ) : (
                  <CircularProgress
                    size="0.95em"
                    color="inherit"
                    sx={{
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                )}
              </Typography>
            </Grid>
            <Grid
              item
              justifyContent="space-between"
              alignItems="center"
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                display: "flex",
                textAlign: "center",
                padding: "0px 16px 0px 10px",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: "0.75em",
                  marginTop: "5px",
                  color: (theme) => theme.palette.text.secondary,
                }}
              >
                TOTAL YETI CONVERTED
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.75em",
                  fontWeight: "bold",
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                {!isLoading ? (
                  totalYeti.toLocaleString("en")
                ) : (
                  <CircularProgress
                    size="0.95em"
                    color="inherit"
                    sx={{
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                )}
              </Typography>
            </Grid>
            <Grid
              item
              justifyContent="space-between"
              alignItems="center"
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                display: "flex",
                textAlign: "center",
                padding: "0px 16px 10px 10px",
                borderRadius: "0px 0px 5px 5px",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: "0.75em",
                  marginTop: "5px",
                  color: "#929ea6",
                }}
              >
                {" "}
                veYETI BALANCE
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.75em",
                  fontWeight: "bold",
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                {!isLoading ? (
                  totalVeYeti.toLocaleString("en")
                ) : (
                  <CircularProgress
                    size="0.95em"
                    color="inherit"
                    sx={{
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                )}
              </Typography>
            </Grid>
          </>
        </Grid>
      </Collapse>
    </>
  );
};

export default FundSecondTabs;
