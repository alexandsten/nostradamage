import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Stack, Grid } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';
import tada from 'react-animations/lib/tada';
import flash from 'react-animations/lib/flash';
import '../../src/fonts/fonts.css';
import './styles.css';
import fighter1 from './img/fighter1.png';
import texture2 from './img/texture2.jpg';
import static2 from './img/static2.webp';

export default function NostradamageHome({setView}) {
  const fadeInAnimation = keyframes`${fadeIn}`;

 
  const FadeInDiv = styled.div`
    animation: 5s ${fadeInAnimation};
  `;

  const flashAnimation = keyframes`${flash}`;

  const FlashDiv = styled.div`
    animation: 3s ${flashAnimation} infinite;
  `;

  const tadaAnimation = keyframes`${tada}`;

  const TadaDiv = styled.div`
    animation: 1.8s ${tadaAnimation};
  `;
  return (
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
              <Typography sx={{fontSize: '1.2em', fontFamily: 'VT323' }}>
                Nostradamage is an innovative product designed to predict UFC MMA fight outcomes using advanced algorithms and machine learning. 
              </Typography>
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

              <TadaDiv>
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
              </TadaDiv>
            </Grid>
            <Grid item xs={12} sm={12} md={4} p={4}>
            <h3>
            Disclaimer
            </h3>
            <Typography sx={{fontSize: '1.2em', fontFamily: 'VT323' }}>
               We do not take responsibility for any bets placed based on our predictions. Enjoy the excitement of Nostradamage, but please gamble responsibly and at your own risk.
              </Typography>
            </Grid>
          </Grid>
          
        </Stack>

        <Stack
          mt={3}
          pt={50}
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 255, 0.7)), url(${texture2})`,

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
              // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${static2})`,
              backgroundSize: 'cover', 
              border: '8px solid black',
              borderRadius: '2em',
              marginTop: '2em'
            }}
            p={2}
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
           
            <iframe title="netflix2" width="100%" height="100%" src="https://app.powerbi.com/view?r=eyJrIjoiZTk2MzRmMzUtMzk3Yy00ZWZhLTlkMTktZjJkYWE5YTY0MDdlIiwidCI6ImY3NGUwNTA1LWMyODMtNDljZC04ODU5LWVkNDJjMmJmZDc5NCJ9" frameborder="0" allowFullScreen="true"></iframe>
          </Stack>
          <Stack m={3} justifyContent={'center'} alignItems={'center'}>
            <Typography sx={{fontSize: '1.3em', fontFamily: 'VT323' }}>66% success rate over the last 6 months</Typography>
            <Typography sx={{fontSize: '1.3em', fontFamily: 'VT323' }}>3/5 correct picks for the last main fight card</Typography>
          </Stack>
        </Stack>
      </Box>


    </Box>
    
  );
  
}
