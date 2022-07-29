import { Box, Grid, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import LockRGN from "./LockRGN";

interface LockPoolComponenttProps {
  logo1: string;
  handleRefetchDeposit: () => void;
}

const LockPool: FunctionComponent<LockPoolComponenttProps> = ({
  logo1,
  handleRefetchDeposit,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(3);

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
            onClick={() => setSelectedIndex(3)}
            sx={{
              cursor: "pointer",
              color: selectedIndex === 3 ? "#ddeaf2" : "#929ea6",
              borderBottom: selectedIndex === 3 ? 2 : 0,
              borderColor: selectedIndex === 3 ? "#ddeaf2" : "#929ea6",
            }}
          >
            3 Months
          </Grid>
          <Grid
            item
            onClick={() => setSelectedIndex(6)}
            sx={{
              cursor: "pointer",
              color: selectedIndex === 6 ? "#ddeaf2" : "#929ea6",
              borderBottom: selectedIndex === 6 ? 2 : 0,
              borderColor: selectedIndex === 6 ? "#ddeaf2" : "#929ea6",
            }}
          >
            6 Months
          </Grid>
          <Grid
            item
            onClick={() => setSelectedIndex(12)}
            sx={{
              cursor: "pointer",
              color: selectedIndex === 12 ? "#ddeaf2" : "#929ea6",
              borderBottom: selectedIndex === 12 ? 2 : 0,
              borderColor: selectedIndex === 12 ? "#ddeaf2" : "#929ea6",
            }}
          >
            1 Year
          </Grid>
          <Grid
            item
            onClick={() => setSelectedIndex(24)}
            sx={{
              cursor: "pointer",
              color: selectedIndex === 24 ? "#ddeaf2" : "#929ea6",
              borderBottom: selectedIndex === 24 ? 2 : 0,
              borderColor: selectedIndex === 24 ? "#ddeaf2" : "#929ea6",
            }}
          >
            2 Years
          </Grid>
          <Grid
            item
            onClick={() => setSelectedIndex(36)}
            sx={{
              cursor: "pointer",
              color: selectedIndex === 36 ? "#ddeaf2" : "#929ea6",
              borderBottom: selectedIndex === 36 ? 2 : 0,
              borderColor: selectedIndex === 36 ? "#ddeaf2" : "#929ea6",
            }}
          >
            {" "}
            3 Years
          </Grid>
        </Grid>
        <LockRGN
          selectedIndex={selectedIndex}
          handleRefetchDeposit={handleRefetchDeposit}
        />
      </Grid>
    </Box>
  );
};
export default LockPool;
