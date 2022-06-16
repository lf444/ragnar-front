export function appLogger(
  tag: string,
  message: string,
  ...object: any[]
): void {
  const DEBUG = process.env.NODE_ENV === 'development';
  if (DEBUG) {
    // eslint-disable-next-line no-console
    console.group();
    // eslint-disable-next-line no-console
    console.log(`[${tag.toUpperCase()}] ${message}`, ...object);
    // eslint-disable-next-line no-console
    console.groupEnd();
  }
}

export const networkParams = {
  '0x63564c40': {
    chainId: '0x63564c40',
    rpcUrls: ['https://api.harmony.one'],
    chainName: 'Harmony Mainnet',
    nativeCurrency: { name: 'ONE', decimals: 18, symbol: 'ONE' },
    blockExplorerUrls: ['https://explorer.harmony.one'],
    iconUrls: ['https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png'],
  },
};

export const truncateAddress = (address: string) => {
  if (!address) return 'No Account';
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const toHex = (num: any) => {
  const val = Number(num);
  return '0x' + val.toString(16);
};
