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
            background: 'radial-gradient(circle, rgba(255,185,0,1) 0%, #ed652b 33%)',
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
                <img style={{ height: '250px', width: '200px', borderRadius: '10px'}} src='https://m.media-amazon.com/images/M/MV5BMjYxOTE3MzEyNF5BMl5BanBnXkFtZTYwNTM5MjUz._V1_FMjpg_UX1000_.jpg' />
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Jonathan
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Co-creator
                </Typography>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}>
                  Data Scientist / Engineer
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Stack direction='column' alignItems='center'>
                <img style={{ height: '250px', width: '200px', borderRadius: '10px'}} src='https://m.media-amazon.com/images/M/MV5BMTc3NTM4MDQwNl5BMl5BanBnXkFtZTYwNDY0MjY1._V1_FMjpg_UX1000_.jpg' />
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
