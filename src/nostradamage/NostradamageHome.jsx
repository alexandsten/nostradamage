import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Typography, Grid, Container, Stack } from '@mui/material';
import '../../src/fonts/fonts.css';
import './styles.css'
import fighter1 from './img/fighter1.png';
import machine1 from './img/machine1.png';

export default function NostradamageHome() {

  return (
<>
    {/* 
        <Typography sx={{ fontSize: '22px', color: 'white', margin: '3em', fontFamily: "Press Start 2P" }}>
          Nostradamage - MMA fight predictor
        </Typography> 
    */}

      <Stack
        sx={{
          background: 'radial-gradient(circle, rgba(255,185,0,1) 0%, #ed652b 45%)',
          width: '100vw',
          height: '100vh'
        }}
        align="center"
        justifyContent="center"
        flexDirection="column"
      >
      <h1>Nostradamage</h1>
      <h3>The predictor of the octagon</h3>
      <img src={fighter1} style={{ width: '300px', height: '300px', borderRadius: '50%', alignSelf: 'center' }} alt='fighter'/>
    </Stack>
   
    <Stack
        height={800}
        mt={3}
        sx={{
          background: 'radial-gradient(circle, rgba(0, 0, 139, 1) 0%, rgba(0, 0, 90, 1) 100%)',
          width: '100vw',
        }}
        align="center"
        justifyContent="center"
        flexDirection="column"
      >
      <h1>Our predictions</h1>
      <h3>70% correct picks last 6 months</h3>
      <img src={machine1} style={{ width: '300px', height: '300px', borderRadius: '50%', alignSelf: 'center' }} alt='fighter'/>
      <p>Our algorithm is always improving</p>
    </Stack>
   
  </>

  );
}
