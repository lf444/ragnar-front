import { Box, Grid, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Fade from "@mui/material/Fade";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import RGNTable from "../stake/pools/tab/RGNTable";

interface LockPoolComponenttProps {
  pairName1: string;
  addressPool: string;
  logo1: string;
  type: "rgn" | "yeti";
  openForScreen: boolean;
}

const LockPool: FunctionComponent<LockPoolComponenttProps> = ({
  pairName1,
  addressPool,
  logo1,
  type,
  openForScreen,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: (theme) => theme.palette.secondary.main,
        borderRadius: "5px 5px 5px 5px",
        boxShadow: "none",
        pb: "1rem",
        pl: "1rem",
        pr: "1rem",
        pt: "1rem",
      }}
    >
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          width: "70%",
        }}
      >
        <Grid
          item
          container
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            textAlign: "center",
            pb: "10px",
            borderBottom: 3,
            borderColor: "divider",
          }}
        >
          <img height="45px" style={{}} src={logo1} alt={`${logo1} Logo`} />
          <Typography sx={{ textAlign: "center", ml: "0.5rem" }}>
            Lock RGN in a NFT
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent={"space-between"}
          sx={{
            pt: "1rem",
            borderBottom: 2,
            borderColor: "#929ea6",
          }}
        >
          {" "}
          <Grid
            item
            onClick={() => setSelectedIndex(0)}
            sx={{
              cursor: "pointer",
              color: selectedIndex === 0 ? "#ddeaf2" : "#929ea6",
              borderBottom: selectedIndex === 0 ? 2 : 0,
              borderColor: selectedIndex === 0 ? "#ddeaf2" : "#929ea6",
            }}
          >
            3 Months
          </Grid>
          <Grid
            item
            onClick={() => setSelectedIndex(1)}
            sx={{
              cursor: "pointer",
              color: selectedIndex === 1 ? "#ddeaf2" : "#929ea6",
              borderBottom: selectedIndex === 1 ? 2 : 0,
              borderColor: selectedIndex === 1 ? "#ddeaf2" : "#929ea6",
            }}
          >
            6 Months
          </Grid>
          <Grid
            item
            onClick={() => setSelectedIndex(2)}
            sx={{
              cursor: "pointer",
              color: selectedIndex === 2 ? "#ddeaf2" : "#929ea6",
              borderBottom: selectedIndex === 2 ? 2 : 0,
              borderColor: selectedIndex === 2 ? "#ddeaf2" : "#929ea6",
            }}
          >
            1 Year
          </Grid>
          <Grid
            item
            onClick={() => setSelectedIndex(3)}
            sx={{
              cursor: "pointer",
              color: selectedIndex === 3 ? "#ddeaf2" : "#929ea6",
              borderBottom: selectedIndex === 3 ? 2 : 0,
              borderColor: selectedIndex === 3 ? "#ddeaf2" : "#929ea6",
            }}
          >
            2 Years
          </Grid>
          <Grid
            item
            onClick={() => setSelectedIndex(4)}
            sx={{
              cursor: "pointer",
              color: selectedIndex === 4 ? "#ddeaf2" : "#929ea6",
              borderBottom: selectedIndex === 4 ? 2 : 0,
              borderColor: selectedIndex === 4 ? "#ddeaf2" : "#929ea6",
            }}
          >
            {" "}
            3 Years
          </Grid>
        </Grid>
        <RGNTable />
      </Grid>
    </Box>
  );
};
export default LockPool;
