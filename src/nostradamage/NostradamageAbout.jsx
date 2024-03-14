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
            width: '33%',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '8px',
            flexDirection: 'row',
            margin: '12px'
          }}
        >
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold', marginTop: '25px' }}>
                We are undefeated and undisputed
            </Typography> 
        </Box>
    </>
  )
}
