import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from '@mui/material';



export default function NostradamageDemo() {



  return (
    <>
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            margin: '0px',
            borderRadius: '12px',
            padding: '2em',
            flexDirection: 'row',
            minHeight: '80vh'
          }}
        >
          <Grid 
            container 
            justifyContent='center' 
            alignItems='top' 
            spacing={4} 
            gap={3}
            sx={{ maxWidth: 'lg' }}
          >
            <Grid item xs={12} md={4}
             direction='column' alignItems='top' justifyContent='center'
             sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#d4af37', borderRadius: '15px' }}
             >
              <Stack direction='column' alignItems='center'>
                <Typography sx={{ margin: '1em', fontSize: '22px', fontWeight: 'bold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  Monthly membership
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  All inclusive - monthly fee
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'bold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  Includes: 
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  Predictions for early prelims 
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  Predictions for prelims 
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  Predictions for main card 
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  Fighter data statistics 
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} direction='column' justifyContent='center' alignItems='top' 
              sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#C0C0C0', borderRadius: '15px' }}
            >
              <Stack direction='column' alignItems='center'>
                <Typography sx={{ margin: '1em', fontSize: '22px', fontWeight: 'bold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  One time fee
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  Pay per fightcard
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'bold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  Includes: 
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  Predictions for early prelims 
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  Predictions for prelims 
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans", color: 'black' }}>
                  Predictions for main card 
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
    </>
  )
}
