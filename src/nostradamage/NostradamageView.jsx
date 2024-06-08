import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MainMenu from './menu/MainMenu';
import NostradamageVision from './NostradamageVision';
import NostradamageHome from './NostradamageHome';
import NostradamageDemo from './NostradamageDemo';
import NostradamagePrototype from './NostradamagePrototype';
import NostradamageAbout from './NostradamageAbout';
import bgImage from './img/texture2.jpg';
import { GlobalStyles, Typography } from '@mui/material';

export default function NostradamageView() {
  /// menu states
  const [selectedItem, setSelectedItem] = useState('Home');

  return (
    <>
     <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            background: '#ed652b',
          },
          html: {
            margin: 0,
            padding: 0,
          }
        }}
      />
      <Stack
        sx={{
          width: '100%'
        }}
      >
        <MainMenu setSelectedItem={setSelectedItem} />
        <Stack
          sx={{
            // backgroundImage: `linear-gradient(rgba(0, 0, 150, 0.1), rgba(11, 21, 74, 0.6)), url(${bgImage})`,
            // backgroundSize: 'cover', 
            // backgroundColor: '#ed652b',
            minHeight: '850px',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              background: 'radial-gradient(circle, rgba(255,185,0,1) 0%, #ed652b 60%)',
              alignItems: 'center',
            }}
          >
            {selectedItem === 'Home' && <NostradamageHome />}
            {selectedItem === 'Vision' && <NostradamageVision />}
            {selectedItem === 'Prototype' && <NostradamagePrototype />}
            {selectedItem === 'About' && <NostradamageAbout />}
            {selectedItem === 'Demo' && <NostradamageDemo />}
          </Box>
        </Stack>
        <Box
        component="footer"
        sx={{
          width: '100%',
          backgroundColor: '#161c1c',
          color: 'white',
          textAlign: 'center',
          padding: '1em 0',
        }}
      >
        <Typography variant="body2">
          &copy; 2024 Nostradamage. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Dummy text for footer - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>
      </Stack>
    </>
  );
}
