import { Alert, Box, Button, Container, Grid, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    message: '',
  });

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleOnchange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const callBackEnd = async () => {
    try {
      const api = await fetch('http://localhost:1111/contact-form', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await api.json();
      console.log('result', result);
      return true;
    } catch (error) {
      console.log('error', error);
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name === '') {
      setErrorMessage('Name is required!');
      setHasError(true);
    } else if (formData.address === '') {
      setErrorMessage('Address is required!');
      setHasError(true);
    } else if (formData.email === '') {
      setErrorMessage('Email is required!');
      setHasError(true);
    } else if (formData.message === '') {
      setErrorMessage('Message is required!');
      setHasError(true);
    } else {
      setHasError(false);

      if (callBackEnd()) {
        setFormData({ name: '', address: '', email: '', message: '' });

        toast.success('Contact Form Successfully Saved!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    }

    console.log('Submit', formData);
  };

  return (
    <Container>
      <Box component="form">

        {hasError ? (
          <Alert severity="error" style={{ marginTop: '20px' }}>
            {errorMessage}
          </Alert>
        ) : (
          ''
        )}

        <Grid container spacing={4} style={{ marginTop: '10px' }}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Name"
              name="name"
              onChange={handleOnchange}
              value={formData.name}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Address"
              variant="outlined"
              name="address"
              onChange={handleOnchange}
              value={formData.address}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              name="email"
              id="outlined-required"
              label="Email"
              onChange={handleOnchange}
              value={formData.email}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Message"
              variant="outlined"
              name="message"
              onChange={handleOnchange}
              value={formData.message}
            />
          </Grid>
        </Grid>

        <Stack
          spacing={2}
          direction="row"
          style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        >
          <Button variant="contained" className="b1" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
        <ToastContainer />
      </Box>
    </Container>
  );
}
