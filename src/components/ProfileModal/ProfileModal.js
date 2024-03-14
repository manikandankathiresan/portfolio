import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import * as React from 'react'
import profile from './Manikandan.jpg'
import './profile.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: `400px`,
  height: `400px`,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '32px',
  //   display:'flex',
  //   justifyContent:'center',
  //   alignItems:'center',
  postition: 'relative !important',
}

export default function TransitionsModal({ open, setOpen }) {
  const handleClose = () => setOpen(false)

  return (
    <div className='modal_container'>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <img
              src={profile}
              alt='userimage'
              height={350}
              width={350}
              style={{ objectFit: 'cover', borderRadius: '32px' }}
              className='profile-image'
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
