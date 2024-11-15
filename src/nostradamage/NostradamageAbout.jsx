import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { GlobalStyles, Typography, styled as muiStyled } from '@mui/material';
import texture2 from './img/texture2.jpg';
import AlexPixel from './img/AlexPixel1.webp';
import JonathanPixel from './img/JonathanPixel1.webp';
import MainMenu from './menu/MainMenu';
import { Grid, Stack } from '@mui/material';
import NostradamageFooter from './NostradamageFooter';

export default function NostradamageAbout() {

  const Text = muiStyled(Typography)({
    fontSize: '1.8em',
    fontFamily: 'VT323',
    color: 'white'
  });

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
                    <Stack direction='column' alignItems='center' gap={2}>
                      
                      <Text>
                        Jonathan
                      </Text>
                      <Text>
                        Co-creator
                      </Text>
                      <Text>
                        Data Scientist
                      </Text>
                      <div className="image-container">
                        <img 
                          className="fighterImage" 
                          src={JonathanPixel} 
                          style={{ 
                            width: '20em', 
                            height: '20em', 
                            borderRadius: '50%', 
                            alignSelf: 'center' 
                          }} 
                          alt='fighter' 
                        />
                      </div>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack direction='column' alignItems='center' gap={2}>
                      
                      <Text>
                        Alex
                      </Text>
                      <Text>
                        Co-creator
                      </Text>
                      <Text>
                        Frontend / Fullstack
                      </Text>
                      <div className="image-container">
                        <img 
                          className="fighterImage" 
                          src={AlexPixel} 
                          style={{ 
                            width: '20em', 
                            height: '20em', 
                            borderRadius: '50%', 
                            alignSelf: 'center' 
                          }} 
                          alt='fighter' 
                        />
                      </div>
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
