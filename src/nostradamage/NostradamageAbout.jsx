import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from '@mui/material';

export default function NostradamageAbout() {
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
            minHeight: '50vh'
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
                  Jonathan
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Co-creator
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Data Scientist
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Stack direction='column' alignItems='center'>
                
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Alex
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Co-creator
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Frontend / fullstack
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
    </>
  );
}
