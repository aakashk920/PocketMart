import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import Register from './Register';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    // outline: None,
    boxShadow: '24px', // Added units to boxShadow property
    p: 4,
};

const AuthModal = ({ handleClose, open }) => {
    const location = useLocation();
    // Destructured props here
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {location.pathname === "/LoginForm" ? <LoginForm /> : <Register />}
                </Box>
            </Modal>
        </div>
    );
};

export default AuthModal;