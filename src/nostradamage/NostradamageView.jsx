import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainMenu from './menu/MainMenu';
import NostradamageVision from './NostradamageVision';
import NostradamageHome from './NostradamageHome';
import NostradamageDemo from './NostradamageDemo';
import NostradamagePrototype from './NostradamagePrototype';
import NostradamageAbout from './NostradamageAbout';
import bgImage from './img/bg5gif.gif';



export default function NostradamageView() {
  /// menu states
  const [selectedItem, setSelectedItem] = useState('Home');

  return (
    <> 
        <div
          style={{
            backgroundColor: 'orange',
          }}
        >
       <MainMenu
          setSelectedItem = {setSelectedItem}
          />
        <div
          style={{
            // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${bgImage})`,
            // backgroundSize: 'cover', // Adjust as needed
            
            backgroundColor: 'orange',
            minHeight: '850px',
            overflow: 'hidden'
          }}
        >
         
        <Box sx={{  minHeight: '550px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>


         

            {selectedItem == 'Home' ? <NostradamageHome /> : null}
            {selectedItem == 'Vision' ? <NostradamageVision /> : null}
            {selectedItem == 'Prototype' ? <NostradamagePrototype /> : null}
            {selectedItem == 'About' ? <NostradamageAbout /> : null}
            {selectedItem == 'Demo' ? <NostradamageDemo /> : null}
          
        </Box>
      </div></div>
    </>
  )
}
