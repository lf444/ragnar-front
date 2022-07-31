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
      <Grid container>
        <Grid
          item
          container
          justifyContent="flex-start"
          alignItems="center"
          sm={9}
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
            amountToStake={amountToStake}
            handleChangeAmount={handleChangeAmount}
          />
        </Grid>
        <Grid item container justifyContent="center" sm={3}>
          {selectedIndex === 36 ? (
            <SvgThreeYears
              numberOfRGN={amountToStake}
              releaseDate={getReleaseDate(36)}
            />
          ) : selectedIndex === 24 ? (
            <SvgTwoYears
              numberOfRGN={amountToStake}
              releaseDate={getReleaseDate(24)}
            />
          ) : selectedIndex === 12 ? (
            <SvgOneYears
              numberOfRGN={amountToStake}
              releaseDate={getReleaseDate(12)}
            />
          ) : selectedIndex === 6 ? (
            <SvgSixMonth
              numberOfRGN={amountToStake}
              releaseDate={getReleaseDate(6)}
            />
          ) : (
            <SvgThreeMonth
              numberOfRGN={amountToStake}
              releaseDate={getReleaseDate(3)}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default LockPool;
