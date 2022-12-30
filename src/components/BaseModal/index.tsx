import { Box, Button, Modal, Typography } from "@mui/material"
import React, { ReactNode } from "react";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

type ModalProps = {
  children: ReactNode
  title: string
  open: boolean
  handleClick: () => void
}

export const BaseModal = ({ children, title, open, handleClick }:ModalProps) => {
  return (
    <>
      <Modal open={open}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 3 }}>
            { title }
          </Typography>
          { children }
          <Button variant="contained" onClick={() => handleClick()} sx={{ mt: 3 }}>OK</Button>
        </Box>
      </Modal>
    </>
  )
}
