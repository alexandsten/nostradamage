import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NostradamageAbout() {
  return (
    <>
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            background: 'radial-gradient(circle, rgba(255,185,0,1) 0%, #ed652b 33%)',
            margin: '0px',
            borderRadius: '12px',
            padding: '2em',
            flexDirection: 'row',
            minHeight: '80vh'
          }}
        >
            <p style={{ fontSize: '24px'}}>
                We are undefeated and undisputed
            </p> 
        </Box>
    </>
  )
}
