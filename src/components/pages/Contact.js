import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Form from './Form';

function Contact() {
  return (
    <Box className="contact-section" style={{ marginTop: '20px' }} id="Contact">
      <div className="contact-body">
      <Typography variant="h3">Let's get in touch!</Typography>
      <Divider className="divider" />
      <Form />
      </div>
    </Box>
  );
}

export default Contact;
