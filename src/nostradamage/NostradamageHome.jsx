import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, Stack, Grid, GlobalStyles, styled as muiStyled } from '@mui/material';
import MainMenu from './menu/MainMenu';
import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';
import tada from 'react-animations/lib/tada';
import pulse from 'react-animations/lib/pulse';
import flash from 'react-animations/lib/flash';
import '../../src/fonts/fonts.css';
import './styles.css';
import fighter1 from './img/poserNostra.webp';
import texture2 from './img/texture2.jpg';
import powerBiScreen from './img/2Fighters.webp';
import NostradamageFooter from './NostradamageFooter';
import { Link } from 'react-router-dom';

export default function NostradamageHome({setView}) {

  const Text = muiStyled(Typography)({
      fontSize: '1.2em',
      fontFamily: 'VT323',
      color: 'white'
  });

  const TextPowerBIHeader = muiStyled(Typography)({
      fontSize: '1.8em', 
      fontFamily: 'VT323', 
      color: 'white'
  });

  const TextPowerBI = muiStyled(Typography)({
      fontSize: '1.3em', 
      fontFamily: 'VT323',
      color: 'white'
});

  const [selectedItem, setSelectedItem] = useState('Home');

  const fadeInAnimation = keyframes`${fadeIn}`;

  const FadeInDiv = styled.div`
    animation: 5s ${fadeInAnimation};
  `;

  const pulseAnimation = keyframes`${pulse}`;

  const PulseDiv = styled.div`
  animation: 2s ${pulseAnimation} infinite; `;

  const flashAnimation = keyframes`${flash}`;

  const FlashDiv = styled.div`
    animation: 3s ${flashAnimation} infinite;
  `;

  const tadaAnimation = keyframes`${tada}`;

  const TadaDiv = styled.div`
    animation: 1.8s ${tadaAnimation};
  `;

  
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
                  flexDirection: 'column',
                  minHeight: '100vh',
                  
                }}
              >
                <Box
                  component="main"
                  sx={{
                    flexGrow: 1,
                    
                  }}
                >
                  <Stack
                    pt={5}
                    sx={{
                      width: '100vw',
                      minHeight: '40vh',
                      marginBottom: '-10em'
                    }}
                    alignItems="center"
                    justifyContent="center"

                    flexDirection="column"
                  >
                    <h1>Nostradamage</h1>
                    {/* <h3>The predictor of the octagon</h3> */}
                    <Grid container sx={{ width: '80%' }}>
                      <Grid item xs={12} sm={12} md={4} p={4}>
                        <h3>
                          Revolutionizing UFC Predictions
                        </h3>
                          <Text>
                            Nostradamage is an innovative product designed to predict UFC MMA fight outcomes using advanced algorithms and machine learning. 
                          </Text>
                        </Grid>
                      <Grid 
                        item 
                        xs={12} 
                        sm={12} 
                        md={4} 
                        onClick={() => setView('Prototype')}
                        sx={{ 
                          cursor: "pointer",
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center' ,
                          
                        }}
                      >
                        <FlashDiv>
                          <h3>Press to start!</h3>
                        </FlashDiv>

                        <PulseDiv>
                          <TadaDiv>
                            <Link to="/predictor" style={{ textDecoration: 'none' }}>
                              <div className="image-container">
                                <img 
                                  className="fighterImage" 
                                  src={fighter1} 
                                  style={{ 
                                    width: '20em', 
                                    height: '20em', 
                                    borderRadius: '50%', 
                                    alignSelf: 'center' 
                                  }} 
                                  alt='fighter' 
                                />
                              </div>
                            </Link>
                          </TadaDiv>
                        </PulseDiv>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} p={4}>
                        <h3>
                          Disclaimer
                        </h3>
                        <Text>
                          We do not take responsibility for any bets placed based on our predictions. Enjoy the excitement of Nostradamage, but please gamble responsibly and at your own risk.
                        </Text>
                      </Grid>
                    </Grid>
                    
                  </Stack>

                  <Stack
                    mt={3}
                    pt={50}
                    sx={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(255, 102, 0, 0.7)), url(${texture2})`,


                      backgroundSize: 'cover', 
                      width: '100vw',
                      minHeight: '100vh',
                      clipPath: 'polygon(0 30%, 50% 20%, 100% 10%, 100% 100%, 0 100%)',

                    }}
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                  >
                    <h1>Our predictions</h1>
                    <h3>Our algorithm is always improving</h3>
                    <Stack
                      sx={{
                        height: '35em',
                        width: '70%',
                        backgroundColor: 'white',
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${powerBiScreen})`,
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        border: '8px solid white',
                        borderRadius: '2em',
                        marginTop: '2em'
                      }}
                      p={2}
                      alignItems="center"
                      justifyContent="center"
                      direction="column"
                    >
                    
                      {/* <iframe title="netflix2" width="100%" height="100%" src="https://app.powerbi.com/view?r=eyJrIjoiZTk2MzRmMzUtMzk3Yy00ZWZhLTlkMTktZjJkYWE5YTY0MDdlIiwidCI6ImY3NGUwNTA1LWMyODMtNDljZC04ODU5LWVkNDJjMmJmZDc5NCJ9" frameborder="0" allowFullScreen="true"></iframe> */}
                      <TextPowerBIHeader>
                        Dynamic power BI stats coming soon
                      </TextPowerBIHeader>
                    </Stack>
                    <Stack m={3} justifyContent={'center'} alignItems={'center'}>
                      <TextPowerBI>66% success rate over the last 6 months</TextPowerBI>
                      <TextPowerBI>8/11 correct picks for the last fight card</TextPowerBI>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Stack>
          <NostradamageFooter />
        </Stack>
    </>
    
    
  );
  
}
