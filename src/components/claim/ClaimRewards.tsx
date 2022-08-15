import { Button, Grid, Tooltip, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { formatPrice } from "../../utils/method";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

interface ClaimRewardsProps {
  claim: () => void;
  price1: number;
  price2: number;
  price3: number;
  title: string;
  title2: string;
  text1: string;
  text2: string;
  isLoading: boolean;
}
interface ClaimRewardsProps2 {
  claim: () => void;
  price1: number;
  price2: number;
  title: string;
  text1: string;
  isLoading: boolean;
}

export const ClaimRewards: FunctionComponent<ClaimRewardsProps> = ({
  claim,
  title,
  title2,
  text1,
  text2,
  price1,
  price2,
  price3,
  isLoading,
}) => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          height: "60px",
          borderRadius: "5px 5px 0px 0px",
          marginLeft: "15px",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Grid
          item
          xs={10}
          md={8}
          lg={12}
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "12px", md: "16px" },
            textAlign: "left",
            marginTop: "22px",
            color: (theme) => theme.palette.text.primary,
            marginLeft: "19px",
          }}
        >
          Your Rewards
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="row"
        sx={{
          p: 1,
          borderRadius: "0px 0px 5px 5px",
          backgroundColor: (theme) => theme.palette.secondary.main,
          height: "100%",
          marginLeft: "15px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            marginLeft: "15px",
            color: (theme) => theme.palette.text.primary,
            fontWeight: "bold",
            fontSize: { md: "13px", xs: "8px" },
            marginTop: "15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ marginRight: "0.5em" }}>{text1}</Typography>
          {!isLoading ? (
            <>
              {formatPrice(price1, "USD")}
              <Tooltip title={title}>
                <InfoRoundedIcon
                  sx={{
                    color: (theme) => theme.palette.background.default,
                    width: "20px",
                    marginLeft: "10px"
                  }}
                />
              </Tooltip>
            </>
          ) : (
            <LinearProgress
              color="inherit"
              sx={{
                width: "1.5rem",
              }}
            />
          )}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            borderBottom: 2,
            borderColor: "divider",
            marginLeft: "15px",
            color: (theme) => theme.palette.text.primary,
            fontWeight: "bold",
            fontSize: { md: "13px", xs: "8px" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ marginRight: "0.5em" }}>{text2}</Typography>
          {!isLoading ? (
            <>
              {formatPrice(price2, "USD")}
              <Tooltip title={title2}>
                <InfoRoundedIcon
                  sx={{
                    color: (theme) => theme.palette.background.default,
                    width: "20px",
                    marginLeft: "10px"
                  }}
                />
              </Tooltip>
            </>
          ) : (
            <LinearProgress
              color="inherit"
              sx={{
                width: "1rem",
              }}
            />
          )}
        </Grid>
        <Grid container sx={{ height: "60px" }}>
          <Grid
            item
            xs={4}
            sx={{
              marginTop: { xs: "15px", md: "20px" },
              marginLeft: "15px",
            }}
          >
            <Button
              onClick={claim}
              sx={{
                variant: "contained",
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.text.primary,
                width: { lg: "150px", xs: "100px" },
                fontWeight: "bold",
                fontSize: "12px",
                marginBottom: "20px",
              }}
            >
              Claim (
              {!isLoading ? (
                formatPrice(price3, "USD")
              ) : (
                <LinearProgress
                  color="inherit"
                  sx={{
                    width: "1rem",
                  }}
                />
              )}
              )
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export const ClaimRewards2: FunctionComponent<ClaimRewardsProps2> = ({
  claim,
  title,
  text1,
  price1,
  price2,
  isLoading,
}) => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          height: "60px",
          borderRadius: "5px 5px 0px 0px",
          marginLeft: "15px",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Grid
          item
          xs={10}
          md={8}
          lg={12}
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "12px", md: "16px" },
            textAlign: "left",
            marginTop: "22px",
            color: (theme) => theme.palette.text.primary,
            marginLeft: "19px",
          }}
        >
          Your Rewards
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="row"
        sx={{
          p: 1,
          borderRadius: "0px 0px 5px 5px",
          backgroundColor: (theme) => theme.palette.secondary.main,
          height: "100%",
          marginLeft: "15px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            marginLeft: "15px",
            color: (theme) => theme.palette.text.primary,
            fontWeight: "bold",
            fontSize: { md: "13px", xs: "8px" },
            marginTop: "15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ marginRight: "0.5em" }}>{text1}</Typography>
          {!isLoading ? (
            <>
              {formatPrice(price1, "USD")}
              <Tooltip title={title}>
                <InfoRoundedIcon
                  sx={{
                    color: (theme) => theme.palette.background.default,
                    width: "20px",
                    marginLeft: "10px"
                  }}
                />
              </Tooltip>
            </>
          ) : (
            <LinearProgress
              color="inherit"
              sx={{
                width: "1.5rem",
              }}
            />
          )}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            borderBottom: 2,
            borderColor: "divider",
            marginLeft: "15px",
            color: (theme) => theme.palette.text.primary,
            fontWeight: "bold",
            fontSize: { md: "13px", xs: "8px" },
            display: "flex",
            alignItems: "center",
          }}
        >
        </Grid>
        <Grid container sx={{ height: "60px" }}>
          <Grid
            item
            xs={4}
            sx={{
              marginTop: { xs: "15px", md: "20px" },
              marginLeft: "15px",
            }}
          >
            <Button
              onClick={claim}
              sx={{
                variant: "contained",
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.text.primary,
                width: { lg: "150px", xs: "100px" },
                fontWeight: "bold",
                fontSize: "12px",
                marginBottom: "20px",
              }}
            >
              Claim (
              {!isLoading ? (
                formatPrice(price2, "USD")
              ) : (
                <LinearProgress
                  color="inherit"
                  sx={{
                    width: "1rem",
                  }}
                />
              )}
              )
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

