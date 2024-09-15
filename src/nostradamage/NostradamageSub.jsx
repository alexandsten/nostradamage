import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { GlobalStyles, Typography } from '@mui/material';
import texture2 from './img/texture2.jpg';
import goldBg from './img/goldBg.jpg';
import silverBg from './img/silverBg.jpg';
import { Grid, Stack } from '@mui/material';
import MainMenu from './menu/MainMenu';
import NostradamageFooter from './NostradamageFooter';

export default function NostradamageSub() {

  const [selectedItem, setSelectedItem] = useState('Sub');

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
                  flexDirection: 'column',
                  minHeight: '80vh',
                }}
                gap={2}
              >
                <h2>Subsription model</h2>
                <Typography sx={{ margin: '1em', fontSize: '18px', fontWeight: 'bold', fontFamily: "Pixelify Sans" }}>
                  The Subsription model is in development.
                </Typography>
                <Grid 
                  container 
                  justifyContent='center' 
                  alignItems='stretch' 
                  spacing={4} 
                  gap={3} 
                  width={'80%'}
                  sx={{ maxWidth: 'lg', flexDirection: 'row', marginTop: '1em' }}
                >
                  <Grid 
                    item xs={12} md={4} 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'flex-start', 
                      backgroundImage: `url(${goldBg})`, 
                      backgroundSize: 'cover',
                      borderRadius: '15px' 
                    }}
                  >
                    <Stack direction='column' alignItems='flex-start' justifyContent='center' sx={{ height: '100%' }}>
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

                  <Grid 
                    item xs={12} md={4} 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'flex-start', 
                      backgroundImage: `url(${silverBg})`, 
                      backgroundSize: 'cover',
                      borderRadius: '15px',
                    }}
                  >
                    <Stack direction='column' alignItems='flex-start' justifyContent='flex-start' sx={{ height: '100%' }}>
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
            </Box>
          </Stack>
        <NostradamageFooter />
      </Stack>
      
    </>
  );
}
