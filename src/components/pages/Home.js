import React from 'react'
import { Box, Typography } from '@mui/material';
import Particle from '../Particle';
import ReactRotatingText from 'react-rotating-text';
import SocialFollows from '../SocialFollows';
import './style.scss';


function Home() {
  return (
    
    <Box id="Home">
      <Box className="home-section">
      <Typography id="txt" variant="h4" align="center" >
        Hello, I'm Lea!
      </Typography>
      <Typography variant="h3" align="center" id="rtxt">
        <ReactRotatingText
          style={{ fontSize: '25px'}}
          items={[
            'Full Stack Web Developer',
            'UI & UX Designer',
            'AI Programmer',
            'Android Developer',
          ]}
        />
      </Typography>
      <SocialFollows/>
      <Particle/>
      </Box>


    </Box>
   
  );
}

export default Home;
