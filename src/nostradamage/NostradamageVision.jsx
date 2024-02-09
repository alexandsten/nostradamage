import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NostradamageVision() {
  return (
    <>
        <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold', marginTop: '25px' }}>
                An upcoming tool to predict fights with the help of AI
            </Typography> 
        </Box>
        <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold', marginTop: '25px' }}>
                Our product will allow the user to play around with their fantasy matchups and see our fight predictions.
            </Typography> 
        </Box>

        <Box sx={{ marginTop: '25px', justifyContent: 'center', display: 'flex', alignItems: 'center'}}>   
            <img
                src='https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2021/11/07/cf3fa970-3f77-11ec-a1b3-e785d5c8830c_image_hires_130910.jpg?itok=JLuZcr6M&v=1636261758'
                alt='Smaller Image'
                style={{ height: '50%', width: '50%' }}
            />       
        </Box>
        <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold', marginTop: '25px' }}>
            How it works...
        </Typography> 
    </>
  )
}
