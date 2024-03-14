import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainMenu from './menu/MainMenu';
import NostradamageVision from './NostradamageVision';
import NostradamageHome from './NostradamageHome';
import NostradamageDemo from './NostradamageDemo';
import NostradamagePrototype from './NostradamagePrototype';
import NostradamageAbout from './NostradamageAbout';
import bgImage from './img/bg1.jpg';


export default function NostradamageView() {
  /// menu states
  const [selectedItem, setSelectedItem] = useState('Home');

  return (
    <> 
      <MainMenu
        setSelectedItem = {setSelectedItem}
      />
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover', // Adjust as needed
            // width: '100%',
            // minHeight: '850px'
          }}
        >
        <Box sx={{ width: '100%', minHeight: '550px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>


         

            {selectedItem == 'Home' ? <NostradamageHome /> : null}
            {selectedItem == 'Vision' ? <NostradamageVision /> : null}
            {selectedItem == 'Prototype' ? <NostradamagePrototype /> : null}
            {selectedItem == 'About' ? <NostradamageAbout /> : null}
            {selectedItem == 'Demo' ? <NostradamageDemo /> : null}
          
        </Box>
      </div>
    </>
  )
}
