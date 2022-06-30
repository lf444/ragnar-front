import '@rainbow-me/rainbowkit/styles.css';
import { Chain, connectorsForWallets, wallet } from '@rainbow-me/rainbowkit';
import { configureChains } from 'wagmi';
import { createClient } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const avalancheChain: Chain = {
  id: 43_114,
  name: 'Avalanche',
  network: 'avalanche',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Avalanche',
    symbol: 'AVAX',
  },
  rpcUrls: {
    default: 'https://api.avax.network/ext/bc/C/rpc',
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  testnet: false,
};

// testnet
const avalancheChainTestnet: Chain = {
  id: 43_113,
  name: 'Avalanche FUJI C-Chain',
  network: 'Avalanche FUJI C-Chain',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Avalanche',
    symbol: 'AVAX',
  },
  rpcUrls: {
    default: 'https://api.avax-test.network/ext/bc/C/rpc',
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io/' },
    etherscan: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io/' },
  },
  testnet: false,
};

export const { chains, provider } = configureChains(
  [avalancheChainTestnet],
  [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      wallet.rainbow({ chains }),
      wallet.metaMask({ chains }),
      wallet.coinbase({ appName: 'Ragnar Finance', chains }),
    ],
  },
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
