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
            alignItems='center' 
            spacing={4} 
            sx={{ maxWidth: 'lg' }}
          >
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Stack direction='column' alignItems='center'>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Monthly membership
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Monthly fee
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Includes: 
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Stack direction='column' alignItems='center'>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  One time fee
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Per fightcard
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Includes: 
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
    </>
  )
}
