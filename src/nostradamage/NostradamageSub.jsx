import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { GlobalStyles, Typography, styled as muiStyled } from '@mui/material';
import texture2 from './img/texture2.jpg';
import goldBg from './img/goldBg.jpg';
import silverBg from './img/silverBg.jpg';
import { Grid, Stack } from '@mui/material';
import MainMenu from './menu/MainMenu';
import NostradamageFooter from './NostradamageFooter';

export default function NostradamageSub() {

  const Text = muiStyled(Typography)({
    margin: '1em', 
    fontSize: '18px', 
    fontWeight: 'semibold', 
    fontFamily: "Pixelify Sans", 
    color: 'black'
  });

  const TextBold = muiStyled(Typography)({
    margin: '1em', 
    fontSize: '18px', 
    fontWeight: 'bold', 
    fontFamily: "Pixelify Sans", 
    color: 'black'
  });

  const TitleText = muiStyled(Typography)({
    margin: '1em', 
    fontSize: '22px', 
    fontWeight: 'bold', 
    fontFamily: "Pixelify Sans", 
    color: 'black'
  });

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
                <h3>
                  The Subsription model is in development.
                </h3>
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
                      <TitleText>
                        Monthly membership
                      </TitleText>
                      <Text>
                        All inclusive - monthly fee
                      </Text>
                      <TextBold>
                        Includes: 
                      </TextBold>
                      <Text>
                        Predictions for early prelims 
                      </Text>
                      <Text>
                        Predictions for prelims 
                      </Text>
                      <Text>
                        Predictions for main card 
                      </Text>
                      <Text>
                        Fighter data statistics 
                      </Text>
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
                      <TitleText>
                        One time fee
                      </TitleText>
                      <Text>
                        Pay per fightcard
                      </Text>
                      <TextBold>
                        Includes: 
                      </TextBold>
                      <Text>
                        Predictions for early prelims 
                      </Text>
                      <Text>
                        Predictions for prelims 
                      </Text>
                      <Text>
                        Predictions for main card 
                      </Text>
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
