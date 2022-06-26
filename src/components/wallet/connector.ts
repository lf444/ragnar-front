import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

const WalletConnect = new WalletConnectConnector({
  rpc: { 43113: 'https://api.avax-test.network/ext/bc/C/rpc' },
  supportedChainIds: [43113],
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds: [43113],
});

export const connectors = {
  injected: Injected,
  walletConnect: WalletConnect,
};