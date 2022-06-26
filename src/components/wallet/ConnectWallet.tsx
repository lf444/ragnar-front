import { Typography, Grid, Button } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { connectors } from './connector';
import WalletModal from './WalletModal';

const ConnectWallet = () => {
  const [open, setOpen] = useState(false);

  const {
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
  } = useWeb3React();

  const [signature, setSignature] = useState('');
  const [error, setError] = useState('');
  const [network, setNetwork] = useState('');

  const refreshState = () => {
    window.localStorage.setItem('provider', '');
    setNetwork('');
    setSignature('');
  };

  const disconnect = () => {
    refreshState();
    deactivate();
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const provider = window.localStorage.getItem('provider');
    // @ts-ignore
    if (provider) activate(connectors[provider]);
  }, []);

  return (
    <>
      {!active ? (
        <Button
          onClick={() => {
            setOpen(true);
          }}
          sx={{
            height: '2emx',
            borderRadius: '10px',
            backgroundColor: (theme) => theme.palette.primary.main,
            color: '#ffffff',
          }}
        >
          <AccountBalanceWalletIcon />
        </Button>
      ) : (
        <Button
          onClick={disconnect}
          sx={{
            height: '2emx',
            borderRadius: '10px',
            backgroundColor: (theme) => theme.palette.primary.main,
            color: '#ffffff',
          }}
        >
          Disconnect
        </Button>
      )}

      {open && <WalletModal open={open} handleClose={handleClose} />}
    </>
  );
};

export default ConnectWallet;