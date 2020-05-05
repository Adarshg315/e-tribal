import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosHelper';

const LoginScreen = () => {
  const [open, setOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('verify', { number: mobileNumber });
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>Login</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            onChange={(e) =>
              setMobileNumber(
                'd{5}([- ]*)d{6}'.test(e.target.value)
                  ? (e.target.className = 'valid')
                  : (e.target.className = 'invalid')
              )
            }
            value={mobileNumber}
            pattern='\d{5}([- ]*)\d{6}'
            placeholder='ex 919876543210'
            margin='dense'
            id='mobileNumber'
            label='Enter Mobile Number With Country Code'
            type='textnhn'
            fullWidth
            className='form-control'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} type='submit' color='primary'>
            Login
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default LoginScreen;
