import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import lea from './lg.png';
import { colors } from '@mui/material';

export default function About() {
  return (
    <Box className="about-section" id="About"
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'block',
          width: '1px',
          // bgcolor: 'warning.300',
          left: '500px',
          top: '-24px',
          bottom: '-24px',
          '&::before': {
            top: '4px',
            // content: '"vertical"',
            display: 'block',
            position: 'absolute',
            right: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
          '&::after': {
            top: '4px',
            // content: '"horizontal"',
            display: 'block',
            position: 'absolute',
            left: '0.5rem',
            // color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
        }}
      />
      <Card className="card"
        orientation="horizontal"
        sx={{
          width: '70%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          // make the card resizable for demo
          // overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <AspectRatio ratio="1" maxHeight={500} sx={{ minWidth: 182, flex: 1 }} className="cardAspect">
        <img src={lea} alt="profile" id="dp"></img>
        </AspectRatio>
        <CardContent>
          <div id="name">
            Lea Grace Tulaban
          </div>
          <div id="txt1">
          I am a designer & Full-stack web developer.
          </div>
          <div id="txt1">
          I work with LOVE.
          </div>

          <div id="txt2">
          About Me
          </div>
          <div id="txt3">
        My name is Lea, mother of a Tyrannosaurus rex baby. I love learning new things, 
        discover new places and meet new faces. 
        I am a designer and Full-stack web developer based on earth. 
        I can help you with your brands. *wink*
          </div>

          <div id='txt2'>
            Skills & Expertise
            </div>
            <div id="list">
              <ul>
                <li>Optimized coding skills & testing</li>
                <li>Time management skills</li>
                <li>Interpersonal skills</li>
                <li>Constantly learning and staying update</li>
              </ul>
              </div>
          
        </CardContent>
      </Card>
    </Box>
  );
}