import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NostradamageHome() {
  return (
    <>
         <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold', marginTop: '25px' }}>
                Predictions have never been this gnarly...
            </Typography> 
        </Box>

        <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold', marginTop: '25px' }}>
                Bite down the mouthpiece and check out Nostradamage!
            </Typography> 
        </Box>

        <Box sx={{ marginTop: '20px', marginBottom: '20px', justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
            <img
                src='https://cdn.vox-cdn.com/thumbor/faAICdb2TpLSg6b5WkOZxNCRZBQ=/0x0:4368x3081/900x600/filters:focal(1848x448:2546x1146):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71995771/1441093129.0.jpg'
                alt='Smaller Image'
                style={{ height: '50%', width: '50%' }}
            />
        </Box>
        
        
    </>
  )
}
