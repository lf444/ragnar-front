import { Typography, Grid, Button, Modal } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { FunctionComponent } from 'react';
import { connectors } from './connector';

interface WalletModalProps {
  open: boolean;
  handleClose: () => void;
}

const WalletModal: FunctionComponent<WalletModalProps> = ({
  open,
  handleClose,
}) => {
  const { activate } = useWeb3React();
  const setProvider = (type: any) => {
    window.localStorage.setItem('provider', type);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          width: '100%',
          maxWidth: '300px',
          height: '100%',
          maxHeight: '200px',
          backgroundColor: (theme) => theme.palette.primary.main,
          borderRadius: '10px',
        }}
      >
        <>
          <Typography
            variant='h6'
            sx={{
              postion: 'relative',
              marginTop: '5px',
              marginRight: '10px',
              marginLeft: '10px',
            }}
          >
            Select Wallet
          </Typography>
          <Button
            onClick={() => {
              activate(connectors.injected);
              setProvider('injected');
              handleClose();
            }}
            variant='contained'
            sx={{
              width: '65%',
              height: '20%',
              marginBottom: '10px',
              fontSize: { xs: '0.95em', sm: '0.95em' },
              borderRadius: '10px',
              fontWeight: 'bold',
              backgroundColor: (theme) => theme.palette.primary.light,
              color: (theme) => theme.palette.text.primary,
              textTransform: 'none',
              boxShadow: 'none',
            }}
          >
            Metamask
          </Button>
          <Button
            onClick={() => {
              activate(connectors.walletConnect);
              setProvider('walletConnect');
              handleClose();
            }}
            variant='contained'
            sx={{
              width: '65%',
              height: '20%',
              fontSize: { xs: '0.95em', sm: '0.95em' },
              borderRadius: '10px',
              fontWeight: 'bold',
              backgroundColor: (theme) => theme.palette.primary.light,
              color: (theme) => theme.palette.text.primary,
              textTransform: 'none',
              boxShadow: 'none',
            }}
          >
            {' '}
            Wallet Connect
          </Button>
        </>
      </Modal>
    </>
  );
};

export default WalletModal;
