import rgn from "../assets/poolsImages/rgn.png";
import curve from "../assets/poolsImages/curve.png";
import yeti from "../assets/poolsImages/yeti.png";
import yusd from "../assets/poolsImages/yusd.png";




export interface Pools {
  pairName1: string;
  addressPool: string;
  pairAddress1: string;
  logo1: string;
}

export const mainPool: Pools[] = [
  {
    pairName1: "RGN",
    addressPool: "0x7969c5eD335650692Bc04293B07F5BF2e7A673C0",
    pairAddress1: "0x2bdCC0de6bE1f7D2ee689a0342D76F52E8EFABa3",
    logo1: rgn,
  },
  {
    pairName1: "Yeti",
    addressPool: "0x7969c5eD335650692Bc04293B07F5BF2e7A673C0",
    pairAddress1: "0x77777777777d4554c39223C354A05825b2E8Faa3",
    logo1: yeti,
  },
];

export const yetiPool: Pools[] = [
  
  {
    pairName1: "YUSD",
    addressPool: "0x7bc06c482DEAd17c0e297aFbC32f6e63d3846650",
    pairAddress1: "0x111111111111ed1D73f860F57b2798b683f2d325",
    logo1: yusd,
  },
  {
    pairName1: "Lp Curve",
    addressPool: "0x7bc06c482DEAd17c0e297aFbC32f6e63d3846650",
    pairAddress1: "0xD8A4AA01D54C8Fdd104EAC28B9C975f0663E75D8",
    logo1: curve,
  },
];

