<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Rgn from "../assets/poolsImages/rgn.png";
import Yeti from "../assets/poolsImages/yeti.png";
import Yusd from "../assets/poolsImages/yusd.png";
import LpCurve from "../assets/poolsImages/curve.png";
import { contractAddress } from "./address";

export const rgnPool = {
  pairName: "Rgn",
  logo: Rgn,
  addressPool: contractAddress.masterchefAddress,
  pairAddress: contractAddress.rgnAddress,
  info: "Stake RGN on Ragnar Finance to earn a portion of the platform's revenue, distributed as Yeti and RGN.",
};
export const YetiPool = {
  pairName: "Yeti",
  logo: Yeti,
  addressPool: contractAddress.masterchefAddress,
  pairAddress: contractAddress.yetiAddres,
  info: "",
};
export const YusdPool = {
  pairName: "Yusd",
  logo: Yusd,
  addressPool: contractAddress.mainstakingAddress,
  pairAddress: contractAddress.yusdAddress,
  info: "Deposit your YUSD to enjoy the veYeti boost and receive bonus RGN !",
};
export const LpCurvePool = {
  pairName: "LpCurve",
  logo: LpCurve,
  addressPool: contractAddress.mainstakingAddress,
  pairAddress: contractAddress.lpCurveAddress,
  info: "Deposit your LP Curve to enjoy the veYeti boost and receive bonus RGN !",
};
=======
=======
>>>>>>> 8d90050 (dev: reduce req call)
import Rgn from '../assets/poolsImages/rgn.png'
import Yeti from '../assets/poolsImages/yeti.png'
import Yusd from '../assets/poolsImages/yusd.png'
import LpCurve from '../assets/poolsImages/curve.png'
=======
import rgn from '../assets/images/pools/rgn.png'
import yeti from '../assets/images/pools/yeti.png'
import yusd from '../assets/images/pools/yusd.png'
import curve from '../assets/images/pools/curve.png'
>>>>>>> 7de0762 (dev: rebase finish)
import { contractAddress } from './address'
=======
import rgn from "../assets/images/pools/rgn.png";
import yeti from "../assets/images/pools/yeti.png";
import yusd from "../assets/images/pools/yusd.png";
import curve from "../assets/images/pools/curve.png";
import { contractAddress } from "./address";
>>>>>>> d1d8a1a (dev: rename component)

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    pairName: "LpCurve",
    logo: curve,
    addressPool: contractAddress.mainstakingAddress,
    pairAddress: contractAddress.lpCurveAddress,
    info: "Deposit your LP Curve to enjoy the veYeti boost and receive bonus RGN !"
}
>>>>>>> 7449a99 (all data + all function)
=======
  pairName: "LpCurve",
=======
  pairName: "lpcurve",
>>>>>>> 4c8ce80 (dev: removed rgn boolean from poolComponent)
=======
  pairName: "Curve LP",
>>>>>>> 46eca83 (dev : add nft preview on select lock)
  logo: curve,
  addressPool: contractAddress.mainstakingAddress,
  pairAddress: contractAddress.lpCurveAddress,
  fakeAddress: contractAddress.fakeLpCurveAddress,
  info: "Deposit your Curve LP to enjoy the veYETI boost and receive bonus RGN !",
  isMasterchef: false,
};
>>>>>>> d1d8a1a (dev: rename component)
