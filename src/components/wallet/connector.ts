import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

const WalletConnect = new WalletConnectConnector({
  rpc: { 43114: 'https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc' },
  supportedChainIds: [43114],
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds: [43114],
});

export const connectors = {
  injected: Injected,
  walletConnect: WalletConnect,
};
