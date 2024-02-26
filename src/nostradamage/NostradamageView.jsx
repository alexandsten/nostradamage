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
      <Box sx={{ width: '100%', minHeight: '550px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '200px', backgroundImage: 'url(./img/bg1.jpg)'}}>

      <div
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3745234/pexels-photo-3745234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            backgroundSize: 'cover', // Adjust as needed
            width: '100%',
            minHeight: '550px',
            position: 'absolute',
            zIndex: -1,
          }}
        ></div>
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
