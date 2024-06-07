import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MainMenu from './menu/MainMenu';
import NostradamageVision from './NostradamageVision';
import NostradamageHome from './NostradamageHome';
import NostradamageDemo from './NostradamageDemo';
import NostradamagePrototype from './NostradamagePrototype';
import NostradamageAbout from './NostradamageAbout';
import bgImage from './img/bg5gif.gif';
import { GlobalStyles } from '@mui/material';

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
            // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${bgImage})`,
            // backgroundSize: 'cover', 
            backgroundColor: '#ed652b',
            minHeight: '850px',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
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
      </Stack>
    </>
  );
}
