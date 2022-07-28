import { Typography, Grid, CardMedia, Box } from "@mui/material";
import "../../assets/styles/index.css";
import a_ragnar from "../../assets/images/home/a_ragnar.png";
import a_liqui from "../../assets/images/home/a_liqui.png";
import a_pool from "../../assets/images/home/a_pool.png";
import a_yeti from "../../assets/images/home/a_yeti.png";

const FourthLevel = () => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent="space-between"
      alignContent={"center"}
      alignItems={"center"}
      sx={{ pt: "3rem" }}
    >
      <Grid
        item
        xs={3}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        {" "}
        <CardMedia
          component="img"
          sx={{
            maxHeight: { xs: 175, md: 175 },
            maxWidth: { xs: 175, md: 175 },
          }}
          src={a_yeti}
        />{" "}
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {" "}
        <CardMedia
          component="img"
          sx={{
            maxHeight: { xs: 175, md: 175 },
            maxWidth: { xs: 175, md: 175 },
          }}
          src={a_ragnar}
        />
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
        }}
      >
        {" "}
        <CardMedia
          component="img"
          sx={{
            maxHeight: { xs: 175, md: 175 },
            maxWidth: { xs: 175, md: 175 },
          }}
          src={a_liqui}
        />
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
        }}
      >
        {" "}
        <CardMedia
          component="img"
          sx={{
            position: "relative",
            maxHeight: { xs: 175, md: 175 },
            maxWidth: { xs: 175, md: 175 },
          }}
          src={a_pool}
        />
      </Grid>
    </Grid>
  );
};

export default FourthLevel;
