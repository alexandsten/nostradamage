import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainMenu from './menu/MainMenu';
import NostradamageVision from './NostradamageVision';

export default function NostradamageView() {
  /// menu booleans
  const [isHomeSelected, setHomeSelected] = useState(false);
  const [isVisionSelected, setVisionSelected] = useState(false);
  const [isPrototypeSelected, setPrototypeSelected] = useState(false);
  const [isAboutUsSelected, setAboutUsSelected] = useState(false);
  const [isDemoSelected, setDemoSelected] = useState(false);

  const [selectedItem, setSelectedItem] = useState('Home');

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '3%'}}>

        {/* Titel är här */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '5%'}}>
            <Typography sx={{ fontSize: '22px', fontWeight: 'semiBold' }}>
                Nostradamage
            </Typography>
        </Box>
        
      <MainMenu
        isHomeSelected = {isHomeSelected}
        setHomeSelected = {setHomeSelected}
        isVisionSelected = {isVisionSelected}
        setVisionSelected = {setVisionSelected}
        isPrototypeSelected = {isPrototypeSelected}
        setPrototypeSelected = {setPrototypeSelected}
        isAboutUsSelected = {isAboutUsSelected}
        setAboutUsSelected = {setAboutUsSelected}
        isDemoSelected = {isDemoSelected}
        setDemoSelected = {setDemoSelected}

        setSelectedItem = {setSelectedItem}
      />
        {/* Content för hem är här */}

        {selectedItem == 'Vision' ? <NostradamageVision /> : null}

      </Box>
    </>
  )
}
