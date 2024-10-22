import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonStyles:any = {
    backgroundColor: '#7C9BC1',
    color: 'white',
    '&:hover': {
      backgroundColor: '#F08B21',
    }
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={buttonStyles}>Login/Create</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" >

        <Box sx={style}>
          <Button onClick={()=> {window.location.href = '/Dashboard'}} variant="contained" sx={buttonStyles}>Login</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default LoginModal;