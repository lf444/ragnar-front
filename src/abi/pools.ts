import rgn from "../assets/images/pools/rgn.png";
import yeti from "../assets/images/pools/yeti.png";
import yusd from "../assets/images/pools/yusd.png";
import curve from "../assets/images/pools/curve.png";
import { contractAddress } from "./address";

export interface Pool {
  pairName: string;
  logo: any;
  addressPool: any;
  pairAddress: any;
  fakeAddress: any;
  info: any;
  isMasterchef: boolean;
}

// NEVER CHANGE PAIR NAME PREFER TO USE TEXT TRANSFORM CSS PROPERTIES

export const rgnPool: Pool = {
  pairName: "rgn",
  logo: rgn,
  addressPool: contractAddress.masterchefAddress,
  pairAddress: contractAddress.rgnAddress,
  fakeAddress: "",
  info: "Stake RGN on Ragnar Finance to earn a portion of the platform's revenue, distributed as Yeti and RGN.",
  isMasterchef: true,
};
export const YetiPool = {
  pairName: "yeti",
  logo: yeti,
  addressPool: contractAddress.masterchefAddress,
  pairAddress: contractAddress.yetiAddres,
  fakeAddress: "",
  info: "",
  isMasterchef: true,
};
export const YusdPool = {
  pairName: "yusd",
  logo: yusd,
  addressPool: contractAddress.mainstakingAddress,
  pairAddress: contractAddress.yusdAddress,
  fakeAddress: contractAddress.fakeYusdAddress,
  info: "Deposit your YUSD to enjoy the veYETI boost and receive bonus RGN !",
  isMasterchef: false,
};
export const LpCurvePool = {
  pairName: "Curve LP",
  logo: curve,
  addressPool: contractAddress.mainstakingAddress,
  pairAddress: contractAddress.lpCurveAddress,
  fakeAddress: contractAddress.fakeLpCurveAddress,
  info: "Deposit your Curve LP to enjoy the veYETI boost and receive bonus RGN !",
  isMasterchef: false,
};
