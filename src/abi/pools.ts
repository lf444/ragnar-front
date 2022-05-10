import usdc from "../assets/poolsImages/usdc.png";
import usdt from "../assets/poolsImages/usdt.png";
import avax from "../assets/poolsImages/avax.png";
import joe from "../assets/poolsImages/joe.png";
import linke from "../assets/poolsImages/linke.png";
import mim from "../assets/poolsImages/mim.png";
import bnb from "../assets/poolsImages/bnb.png";
import wbtce from "../assets/poolsImages/wbtce.png";
import weth from "../assets/poolsImages/weth.png";

export interface Pools {
  pairName1: string;
  pairName2: string;
  address: string;
  pairAddress1: string;
  pairAddress2: string;
  logo1: string;
  logo2: string;
}

export const stablePoolAddress: Pools[] = [
  {
    pairName1: "JOE",
    pairName2: "USDC",
    address: "0x3bc40d4307cd946157447cd55d70ee7495ba6140",
    pairAddress1: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    pairAddress2: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    logo1: joe,
    logo2: usdc,
  },
  {
    pairName1: "USDC",
    pairName2: "USDCe",
    address: "0x2a8a315e82f85d1f0658c5d66a452bbdd9356783",
    pairAddress1: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    pairAddress2: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
    logo1: usdc,
    logo2: usdc,
  },
  {
    pairName1: "USDT",
    pairName2: "USDTe",
    address: "0x74b651eff97871ea99fcc14423e611d85eb0ea93",
    pairAddress1: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    pairAddress2: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    logo1: usdt,
    logo2: usdt,
  },
];

export const avaxStablePoolAddress: Pools[] = [
  {
    pairName1: "AVAX",
    pairName2: "USDTe",
    address: "0xed8cbd9f0ce3c6986b22002f03c6475ceb7a6256",
    pairAddress1: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    pairAddress2: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    logo1: avax,
    logo2: usdt,
  },
  {
    pairName1: "AVAX",
    pairName2: "USDCe",
    address: "0xa389f9430876455c36478deea9769b7ca4e3ddb1",
    pairAddress1: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    pairAddress2: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
    logo1: avax,
    logo2: usdc,
  },
  {
    pairName1: "AVAX",
    pairName2: "USDC",
    address: "0xf4003f4efbe8691b60249e6afbd307abe7758adb",
    pairAddress1: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    pairAddress2: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    logo1: avax,
    logo2: usdc,
  },
];

export const avaxAltPoolAddress: Pools[] = [
  {
    pairName1: "AVAX",
    pairName2: "LINKe",
    address: "0x6f3a0c89f611ef5dc9d96650324ac633d02265d3",
    pairAddress1: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    pairAddress2: "0x5947BB275c521040051D82396192181b413227A3",
    logo1: avax,
    logo2: linke,
  },
  {
    pairName1: "AVAX",
    pairName2: "BNB",
    address: "0xeb8eb6300c53c3addbb7382ff6c6fbc4165b0742",
    pairAddress1: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    pairAddress2: "0x442F7f22b1EE2c842bEAFf52880d4573E9201158",
    logo1: avax,
    logo2: bnb,
  },
  {
    pairName1: "AVAX",
    pairName2: "MIM",
    address: "0x781655d802670bba3c89aebaaea59d3182fd755d",
    pairAddress1: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    pairAddress2: "0x130966628846BFd36ff31a822705796e8cb8C18D",
    logo1: avax,
    logo2: mim,
  },
  {
    pairName1: "AVAX",
    pairName2: "WBTCe",
    address: "0xd5a37dc5c9a396a03dd1136fc76a1a02b1c88ffa",
    pairAddress1: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    pairAddress2: "0x50b7545627a5162F82A992c33b87aDc75187B218",
    logo1: avax,
    logo2: wbtce,
  },
  {
    pairName1: "AVAX",
    pairName2: "JOE",
    address: "0x454e67025631c065d3cfad6d71e6892f74487a15",
    pairAddress1: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    pairAddress2: "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd",
    logo1: avax,
    logo2: joe,
  },
];

export const otherPoolAddress: Pools[] = [
  {
    pairName1: "WETH",
    pairName2: "AVAX",
    address: "0xfe15c2695f1f920da45c30aae47d11de51007af9",
    pairAddress1: "0x8b82A291F83ca07Af22120ABa21632088fC92931",
    pairAddress2: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    logo1: weth,
    logo2: avax,
  },
];
