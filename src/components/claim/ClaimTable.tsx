import { Box, Tabs, Tab } from "@mui/material";
import { useState, FunctionComponent } from "react";
import ClaimPool from "./ClaimPool";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1, boder: "1px solid red" }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface ClaimTableProps {
  pool1: string;
  pool2: string;
  apr1: number;
  apr2: number;
  deposit1: number;
  deposit2: number;
  tvl1: number;
  tvl2: number;
  isLoading: boolean;
}

const ClaimTable: FunctionComponent<ClaimTableProps> = ({
  pool1,
  pool2,
  apr1,
  apr2,
  deposit1,
  deposit2,
  tvl1,
  tvl2,
  isLoading,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            centered
            aria-label="basic tabs example"
          >
            <Tab
              label={pool1}
              {...a11yProps(0)}
              style={{
                color: value === 0 ? "#ddeaf2" : "#929ea6",
                textTransform: "none",
              }}
            />
            <Tab
              label={pool2}
              {...a11yProps(1)}
              style={{
                color: value === 1 ? "#ddeaf2" : "#929ea6",
                textTransform: "none",
              }}
            />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <ClaimPool
            pool={pool1}
            apr={apr1}
            deposit={deposit1}
            tvl={tvl1}
            isLoading={isLoading}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ClaimPool
            pool={pool2}
            apr={apr2}
            deposit={deposit2}
            tvl={tvl2}
            isLoading={isLoading}
          />
        </TabPanel>
      </Box>
    </>
  );
};

export default ClaimTable;
