import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Toolbar,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useAddress, useConnect } from '@service/wallet';

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [isAddressAvailable, setIsAddressAvailable] = useState('');
  const account = useConnect();
  const { data: address, refetch } = useAddress();
  useEffect(() => {
    if (typeof ethereum !== 'undefined') {
      refetch();
    } else {
      setOpen(true);
    }

    setIsAddressAvailable(account.data);
  }, [account.data, refetch]);

  const handleClose = () => {
    setOpen(false);
  };

  const connectWallet = () => {
    account.refetch();
  };

  return (
    <>
      <div data-testid='e'>welcome</div>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button color='inherit' onClick={connectWallet}>
            {isAddressAvailable || address
              ? isAddressAvailable || address
              : 'connect wallet'}
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          Have You installed a Metamask?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Please first install the Metamask extension or activate it and
            refresh the page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
