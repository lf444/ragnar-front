import { Box, Grid, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import LockRGN from "./LockRGN";
import ThreeMonthClean from "../../assets/images/NFT/ThreeMonthClean.svg";
import SvgThreeMonth from "./svg/SvgThreeMonth";
import SvgThreeYears from "./svg/SvgThreeYears";
import SvgTwoYears from "./svg/SvgTwoYears";
import SvgOneYears from "./svg/SvgOneYears";
import SvgSixMonth from "./svg/SvgSixMonth";

interface LockPoolComponenttProps {
  logo1: string;
  handleRefetchDeposit: () => void;
}

const LockPool: FunctionComponent<LockPoolComponenttProps> = ({
  logo1,
  handleRefetchDeposit,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(3);
  const [amountToStake, setAmountToStake] = useState(0);
  const handleChangeAmount = (newValue: number) => {
    setAmountToStake(newValue);
  };

  function padTo2Digits(num: any) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date: any) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }

  const getReleaseDate = (numberOfMonth: number): string => {
    let d = new Date();
    d.setMonth(d.getMonth() + numberOfMonth);
    return formatDate(d);
  };
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
      <Grid container justifyContent="space-between">
        <Grid
          item
          container
          justifyContent="flex-start"
          alignItems="center"
          xs={12}
          sm={8}
          sx={{ marginBottom: "25px" }}
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
              Lock your RGN into the NFT to stake them
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={"space-between"}
            sx={{
              pt: "1rem",
            }}
          >
            {" "}
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
              1 Month
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
              12 Months
            </Grid>
            <Grid
              item
              onClick={() => setSelectedIndex(18)}
              sx={{
                cursor: "pointer",
                color: selectedIndex === 18 ? "#ddeaf2" : "#929ea6",
                borderBottom: selectedIndex === 18 ? 2 : 0,
                borderColor: selectedIndex === 18 ? "#ddeaf2" : "#929ea6",
              }}
            >
              {" "}
              18 Months
            </Grid>
          </Grid>
          <LockRGN
            selectedIndex={selectedIndex}
            handleRefetchDeposit={handleRefetchDeposit}
            amountToStake={amountToStake}
            handleChangeAmount={handleChangeAmount}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={3}
        >
          {selectedIndex === 18 ? (
            <SvgThreeYears
              numberOfRGN={amountToStake}
              releaseDate={getReleaseDate(18)}
            />
          ) : selectedIndex === 12 ? (
            <SvgTwoYears
              numberOfRGN={amountToStake}
              releaseDate={getReleaseDate(12)}
            />
          ) : selectedIndex === 6 ? (
            <SvgOneYears
              numberOfRGN={amountToStake}
              releaseDate={getReleaseDate(6)}
            />
          ) : selectedIndex === 3 ? (
            <SvgSixMonth
              numberOfRGN={amountToStake}
              releaseDate={getReleaseDate(3)}
            />
          ) : (
            <SvgThreeMonth
              numberOfRGN={amountToStake}
              releaseDate={getReleaseDate(1)}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default LockPool;
