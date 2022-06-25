import { Grid, Typography } from "@mui/material";

const FundSecondTabs = ({
  totalYeti,
  totalVeYeti,
  totalRGN,
  totalRGNLocked,
}: {
  totalYeti: number;
  totalVeYeti: number;
  totalRGN: number;
  totalRGNLocked: number;
}) => {
  return (
    <Grid container direction="row">
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
          RGN BURNED
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
          0
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
            color: "#bfcbd2",
          }}
        >
          {totalYeti}
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
          veYeti BALANCE
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
          {totalVeYeti}
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
          RGN CIRCUL SUPPLY
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
          {totalRGN}
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
          {totalRGNLocked}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FundSecondTabs;
