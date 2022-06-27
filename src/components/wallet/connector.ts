import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

const WalletConnect = new WalletConnectConnector({
  supportedChainIds: [43113],
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds: [43113],
});

export const connectors = {
  injected: Injected,
  walletConnect: WalletConnect,
};