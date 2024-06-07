import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Stack } from '@mui/material';
import '../../src/fonts/fonts.css';
import './styles.css';
import fighter1 from './img/fighter1.png';
import machine1 from './img/machine1.png';
import static2 from './img/static2.webp';

export default function NostradamageHome() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Stack
          sx={{
            width: '100vw',
            height: '75vh'
          }}
          align="center"
          justifyContent="center"
          flexDirection="column"
        >
          <h1>Nostradamage</h1>
          <h3>The predictor of the octagon</h3>
          <img src={fighter1} style={{ width: '300px', height: '300px', borderRadius: '50%', alignSelf: 'center' }} alt='fighter' />
        </Stack>

        <Stack
          mt={3}
          sx={{
            background: 'radial-gradient(circle, rgba(0, 0, 150, 1) 35%, rgba(0, 0, 90, 1) 40%, rgba(0, 0, 30, 1) 40%)',


            width: '100vw',
            height: '100vh'
          }}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <h1>Our predictions</h1>
          <h3>70% correct picks last 6 months</h3>
          <Stack
            sx={{
              height: '15em',
              width: '50%',
              backgroundColor: 'black',
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${static2})`,
              backgroundSize: 'cover', 
              border: '8px solid black',
              borderRadius: '2em'
            }}
            p={5}
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <p style={{ fontSize: '1.3em' }}>Our algorithm is always improving</p>
          </Stack>
        </Stack>
      </Box>


    </Box>
  );
}
