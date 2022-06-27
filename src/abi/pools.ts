import Rgn from '../assets/poolsImages/rgn.png'
import Yeti from '../assets/poolsImages/yeti.png'
import Yusd from '../assets/poolsImages/yusd.png'
import LpCurve from '../assets/poolsImages/curve.png'
import { contractAddress } from './address'

export const rgnPool = {
    pairName: "Rgn",
    logo: Rgn,
    addressPool: contractAddress.masterchefAddress,
    pairAddress: contractAddress.rgnAddress,
    info: "Stake RGN on Ragnar Finance to earn a portion of the platform's revenue, distributed as Yeti and RGN."
}
export const YetiPool = {
    pairName: "Yeti",
    logo: Yeti,
    addressPool: contractAddress.masterchefAddress,
    pairAddress: contractAddress.yetiAddres,
    info: ""
}
export const YusdPool = {
    pairName: "Yusd",
    logo: Yusd,
    addressPool: contractAddress.mainstakingAddress,
    pairAddress: contractAddress.yusdAddress,
    info: "Deposit your YUSD to enjoy the veYeti boost and receive bonus RGN !"
}
export const LpCurvePool = {
    pairName: "LpCurve",
    logo: LpCurve,
    addressPool: contractAddress.mainstakingAddress,
    pairAddress: contractAddress.lpCurveAddress,
    info: "Deposit your LP Curve to enjoy the veYeti boost and receive bonus RGN !"
}