import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { GlobalStyles, Typography } from '@mui/material';
import texture2 from './img/texture2.jpg';
import MainMenu from './menu/MainMenu';
import { Grid, Stack } from '@mui/material';
import NostradamageFooter from './NostradamageFooter';

export default function NostradamageAbout() {

  const [selectedItem, setSelectedItem] = useState('About');

  return (
    <>
      <GlobalStyles
          styles={{
            body: {
              margin: 0,
              padding: 0,
              background: 'black',
              overflowX: 'hidden',
            },
            html: {
              margin: 0,
              padding: 0,
            }
          }}
        />
        <Stack
          sx={{
            width: '100%'
          }}
        >
          <MainMenu setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
            <Stack
              sx={{
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  background: 'radial-gradient(circle, rgba(255,185,0,1) 0%, #ed652b 60%)',
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${texture2})`,
                  backgroundSize: 'cover',
                  alignItems: 'center',
                  padding: '0px',
                  margin: '0px',
                }}
              >
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
              </Box>
            </Stack>
          <NostradamageFooter />
        </Stack>
        
    </>
  );
}
