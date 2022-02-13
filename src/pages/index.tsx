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
import { useAddress, useConnect } from '@service/wallet';
import { useEffect, useState } from 'react';

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
      <div>wlcome</div>
      <div dir='ltr'>
        <TextField label='Name' variant='standard' />
      </div>
    </>
  );
}
