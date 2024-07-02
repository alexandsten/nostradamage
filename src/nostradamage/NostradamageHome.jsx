import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Stack, Grid } from '@mui/material';
import '../../src/fonts/fonts.css';
import './styles.css';
import fighter1 from './img/fighter1.png';
import texture2 from './img/texture2.jpg';
import static2 from './img/static2.webp';

export default function NostradamageHome({setView}) {
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
          sx={{
            width: '100vw',
            minHeight: '85vh',
          }}
          align="center"
          justifyContent="center"
          flexDirection="column"
        >
          <h1>Nostradamage</h1>
          {/* <h3>The predictor of the octagon</h3> */}
          <Grid container>
            <Grid item xs={12} sm={12} md={4} p={4}>
              <h3>
                Revolutionizing UFC Predictions
              </h3>
              <Typography sx={{fontSize: '1.2em', fontFamily: 'VT323' }}>
                Nostradamage is an innovative product designed to predict UFC MMA fight outcomes using advanced algorithms and machine learning. As the popularity of UFC continues to surge globally, the demand for accurate fight predictions has never been higher. Nostradamage addresses this need by analyzing extensive data on fighter statistics, fight histories, and various influencing factors to deliver precise predictions.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} onClick={() => setView('Prototype')}
              sx={{ cursor: "pointer"}}>
                <h3>
                  Click to try now!
                </h3>
                <div className="image-container">
                  <img className="fighterImage" src={fighter1} style={{ width: '20em', height: '20em', borderRadius: '50%', alignSelf: 'center' }} alt='fighter' 
                />
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} p={4}>
            <h3>
            Disclaimer: For Entertainment Purposes Only
            </h3>
            <Typography sx={{fontSize: '1.2em', fontFamily: 'VT323' }}>
              Nostradamage is designed purely for entertainment and to enhance your enjoyment of UFC MMA events. While our algorithms provide detailed fight predictions, these are not intended for betting purposes. We do not take responsibility for any bets placed based on our predictions. Enjoy the excitement of UFC with Nostradamage, but please gamble responsibly and at your own risk.
              </Typography>
            </Grid>
          </Grid>
          
        </Stack>

        <Stack
          mt={3}
          sx={{
            background: 'radial-gradient(circle, rgba(0, 0, 150, 1) 35%, rgba(0, 0, 90, 1) 40%, rgba(0, 0, 30, 1) 40%)',
            backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.7), rgba(0, 0, 0, 0.9)), url(${texture2})`,
            backgroundSize: 'cover', 
            width: '100vw',
            height: '100vh'
          }}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <h1>Our predictions</h1>
          <h3>Our algorithm is always improving</h3>
          <Stack
            sx={{
              height: '15em',
              width: '50%',
              backgroundColor: 'black',
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${static2})`,
              backgroundSize: 'cover', 
              border: '8px solid black',
              borderRadius: '2em',
              marginTop: '2em'
            }}
            p={5}
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <Typography sx={{fontSize: '1.3em', fontFamily: 'VT323' }}>66% success rate over the last 6 months</Typography>
            <Typography sx={{fontSize: '1.3em', fontFamily: 'VT323' }}>3/5 correct picks for the last main fight card</Typography>
            <iframe title="netflix2" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZTk2MzRmMzUtMzk3Yy00ZWZhLTlkMTktZjJkYWE5YTY0MDdlIiwidCI6ImY3NGUwNTA1LWMyODMtNDljZC04ODU5LWVkNDJjMmJmZDc5NCJ9" frameborder="0" allowFullScreen="true"></iframe>
          </Stack>
        </Stack>
      </Box>


    </Box>
    
  );
  
}
