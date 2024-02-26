import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainMenu from './menu/MainMenu';
import NostradamageVision from './NostradamageVision';
import NostradamageHome from './NostradamageHome';
import NostradamageDemo from './NostradamageDemo';
import NostradamagePrototype from './NostradamagePrototype';
import NostradamageAbout from './NostradamageAbout';

export default function NostradamageView() {
  /// menu states
  const [selectedItem, setSelectedItem] = useState('Home');

  return (
    <>
      <Box sx={{ width: '100%', minHeight: '550px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '200px'}}>

        
      <MainMenu
        setSelectedItem = {setSelectedItem}
      />

        {selectedItem == 'Home' ? <NostradamageHome /> : null}
        {selectedItem == 'Vision' ? <NostradamageVision /> : null}
        {selectedItem == 'Prototype' ? <NostradamagePrototype /> : null}
        {selectedItem == 'About' ? <NostradamageAbout /> : null}
        {selectedItem == 'Demo' ? <NostradamageDemo /> : null}
      </Box>
    </>
  )
}
