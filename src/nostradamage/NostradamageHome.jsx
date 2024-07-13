import React from 'react';
import { useTransition, animated } from '@react-spring/web'
import { useState, useCallback, useRef, useEffect } from 'react'
import styles from '../styles.module.css'
import Box from '@mui/material/Box';
import { Typography, Stack, Grid, useMediaQuery } from '@mui/material';
import '../../src/fonts/fonts.css';
import './styles.css';
import fighter1 from './img/fighter1.png';
import texture2 from './img/texture2.jpg';
import static2 from './img/static2.webp';

export default function NostradamageHome({setView}) {

  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#0d31d1',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#ed652b' },
      { transform: 'perspective(600px) rotateX(0deg)', color: '#0d31d1' },
    ],
    leave: [{ color: '#0d31d1' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#ed652b' },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(['NOSTRA', 'PREDICTIONS', 'DAMAGE']), 2000));
    ref.current.push(setTimeout(() => set(['NOSTRA', 'DAMAGE']), 5000));
    ref.current.push(setTimeout(() => set(['NOSTRADAMAGE', 'THE FUTURE', 'THE FUTURE OF PREDICTIONS - ']), 8000));
  }, []);

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
       {!isSmallScreen && (
        <Stack alignContent={'start'} alignItems={'flex-start'}   
              sx={{ marginTop: '6em', maxHeight: '20vh', width: '100%', marginLeft: '10%'}}
        >
          <div className={styles.container}>
            <div className={styles.main}>
              {transitions(({ innerHeight, ...rest }, item) => (
                <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
                  <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                </animated.div>
              ))}
            </div>
          </div>
        </Stack>
       )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Stack
          sx={{
            width: '100vw',
            minHeight: '90vh',
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
                textAlign: 'center' 
              }}
            >
              <h3>Click to try now!</h3>
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
          pt={3}
          sx={{
            background: 'radial-gradient(circle, rgba(0, 0, 150, 1) 35%, rgba(0, 0, 90, 1) 40%, rgba(0, 0, 30, 1) 40%)',
            backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.7), rgba(0, 0, 0, 0.9)), url(${texture2})`,
            backgroundSize: 'cover', 
            width: '100vw',
            minHeight: '100vh'
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
