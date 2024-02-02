import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NostradamageView() {
  return (
      <Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Typography sx={{ fontSize: '22px', fontWeight: 'semiBold' }}>
                Nostradamage
            </Typography>
        </Box>
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
      </Box>
  )
}
