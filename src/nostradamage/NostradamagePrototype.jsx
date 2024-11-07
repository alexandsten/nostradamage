import React, { useState, useEffect } from 'react';
import { fetchHelloWorld } from '../../src/api/api';
import Box from '@mui/material/Box';
import texture2 from './img/texture2.jpg';
import { useMediaQuery} from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, goOffline, goOnline } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Button from '@mui/material/Button';
import { GlobalStyles, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import staticBackground2 from './img/static1.webp';
import MainMenu from './menu/MainMenu';
import fight from './img/fight.webp';
import pixelBackground1 from './img/pixBack3.gif';
import blackImage from './img/black.jpg';
import pixelBackground2 from './img/pixBack4.gif';
import staticFilm from './img/staticFilm.webp';
import monitorTexture from './img/orangeBack.jpg';
import pulse from 'react-animations/lib/pulse';
import flash from 'react-animations/lib/flash';
import fadeIn from 'react-animations/lib/fade-in';
import styled, { keyframes } from 'styled-components';
import slideInRight from 'react-animations/lib/slide-in-right';
import slideInLeft from 'react-animations/lib/slide-in-left';
import NostradamageFooter from './NostradamageFooter';

export default function NostradamagePrototype() {
  const [data, setData] = useState({});
  const USER = import.meta.env.VITE_API_USER;
  const WORD = import.meta.env.VITE_API_WORD;

  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHelloWorld = async () => {
      try {
        const data = await fetchHelloWorld();
        setMessage(data);
        console.log(data);
      } catch (err) {
        setError(err);
      }
    };
  
    getHelloWorld();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(message)

  const [toFetch, setToFetch] = useState([ 
   'UFC Fight Night Royval vs Taira','UFC 307 Pereira vs Rountree Jr ', 'UFC 306 Noche', 'UFC 305', 'UFC 304', 'UFC 303', 'UFC 302', 'UFC Fight Night Moicano vs Saint Denis ', 'UFC Fight Night Burns vs Brady', 'UFC Fight Night Namajunas vs Cortez', 'UFC Fight Night Lemos vs Jandiroba', 'UFC on ABC Sandhagen vs Nurmagomedov', 'UFC Fight Night Cannonier vs Borralho']);
  const [expandedEvent, setExpanded] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const isSmallScreen = useMediaQuery('(max-width:1200px)');
  const isSocialScreen = useMediaQuery('(max-width:1400px)');

  const SlideInRightAnimation = keyframes`${slideInRight}`;

  const SlideInRightDiv = styled.div`
    animation: 2s ${SlideInRightAnimation};
  `;

  const SlideInLeftAnimation = keyframes`${slideInLeft}`;

  const SlideInLeftDiv = styled.div`
    animation: 2s ${SlideInLeftAnimation};
  `;

  const flashAnimation = keyframes`${flash}`;

  const FlashDiv = styled.div`
    animation: 3s ${flashAnimation} infinite;`;

  const fadeAnimation = keyframes`${fadeIn}`;

  const FadeDiv = styled.div`
    animation: 1.5s ${fadeAnimation};`;

  const pulseAnimation = keyframes`${pulse}`;

  const PulseDiv = styled.div`
    animation: 2s ${pulseAnimation}; `;

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_API_DOM,
    projectId: import.meta.env.VITE_API_ID,
    storageBucket: import.meta.env.VITE_API_BUCKET,
    messagingSenderId: import.meta.env.VITE_API_MSGID,
    appId: import.meta.env.VITE_API_APPID,
    databaseURL: import.meta.env.VITE_API_URL, 
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);
  const auth = getAuth(firebaseApp);

  const handleButtonClick = async (event) => {
    setExpanded(event);
    if (!data[event]) {
      try {
        await signInWithEmailAndPassword(auth, USER, WORD);
        console.log('User signed in successfully');

        goOnline(database);
        setIsConnected(true); // Mark connection as active

        const snapshot = await get(ref(database, event));
        const fighterData = snapshot.val();
        if (fighterData) {
          setData((prevData) => ({ ...prevData, [event]: fighterData }));
        }

        await signOut(auth);
        goOffline(database);
        setIsConnected(false); // Mark connection as inactive
        console.log('User signed out and disconnected from database successfully');
      } catch (error) {
        console.error('Error fetching data:', error);
        if (isConnected) {
          goOffline(database);
          setIsConnected(false);
        }
      }
    }
  };

  const resetView = () => {
    setExpanded(null);
  };

  // Ensure cleanup on unmount
  useEffect(() => {
    return () => {
      if (isConnected) {
        goOffline(database);
      }
    };
  }, [isConnected]);

  const [visiblePulseDivs, setVisiblePulseDivs] = useState({});
  const [latestClick, setLatestClick] = useState({});

  // const changeClickedItem = (idx) => {
  //   setLatestClick(idx)
  // };

  // Toggle visibility of the PulseDiv when a Stack is clicked
  const toggleVisibility = (idx) => {
    setVisiblePulseDivs((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
    setLatestClick(idx)
  };

  const [selectedItem, setSelectedItem] = useState('Prototype');

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
              <Box sx={{ minHeight: '78vh'}}>
                <Stack
                  sx={{
                    padding: '1em',
                    backgroundImage: `linear-gradient(rgba(0, 0, 150, 0.1), rgba(11, 21, 74, 0.6)), url(${monitorTexture})`,
                    backgroundSize: 'cover', 
                    border: '1px solid rgba(0, 0, 50, 1)', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '50vw',
                    borderRadius: '25px',
                    margin: '2em',
                    marginTop: '2em',
                    minHeight: '65vh',
                    maxHeight: '65vh'
                  }}
                >
          
                  <Box
                    sx={{
                      display: 'flex',
                      backgroundImage: expandedEvent
                        ? `linear-gradient(rgba(0, 0, 10, 0.9), rgba(0, 0, 0, 0.6)), url(${pixelBackground1})` 
                        : `linear-gradient(rgba(0, 0, 10, 0.9), rgba(0, 0, 0, 0.6)), url(${pixelBackground2})`,
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center bottom',
                      justifyContent: 'center',
                      width: '60vw',
                      borderRadius: '12px',
                      padding: '1em',
                      marginTop: '3em',
                      marginBottom: '3em',
                      minHeight: '50vh',
                      minWidth: '30vw',
                      maxHeight: '50vh',
                      overflowY: 'auto', 
                      overflowX: 'hidden',
                      border: '8px solid black',
                    }}
                  >
            

                    
                    <Stack direction='column' justifyContent='center' alignItems='center' 
                      sx={{ height: '100%', borderRadius: '10px', width: '100%'
                      }}
                    >
                      
                        <Stack direction='row' gap={1} alignItems='flex-start' justifyContent='center' m={3}>
                          {
                            expandedEvent ? (
                                <>
                                  <Typography className='data' 
                                    style={{ color: 'white', fontSize:  isSmallScreen ? '1.5em' : '4em', fontFamily: 'Pixelify Sans'}}>
                                      Nostra
                                    </Typography>
                                
                                  <Typography className='data' 
                                    style={{ color: 'white', fontSize:  isSmallScreen ? '1.5em' : '4em', fontFamily: 'Pixelify Sans'}}>
                                      damage
                                    </Typography>
                                </>
                            ) : (
                              <>
                                <SlideInLeftDiv>
                                  <Typography className='data' 
                                    style={{ color: 'white', fontSize:  isSmallScreen ? '1.5em' : '4em', fontFamily: 'Pixelify Sans'}}>
                                      Nostra
                                    </Typography>
                                </SlideInLeftDiv>
                                <SlideInRightDiv>
                                  <Typography className='data' 
                                    style={{ color: 'white', fontSize:  isSmallScreen ? '1.5em' : '4em', fontFamily: 'Pixelify Sans'}}>
                                      damage
                                    </Typography>
                                </SlideInRightDiv>
                              </>
                            )
                          }
                          
                            
                                  
                        </Stack>
                        <Stack direction='row' gap={1} alignItems='flex-start' justifyContent='center' m={3}>
                              <Typography className='data' sx={{ fontSize: '32px', color: 'white', fontFamily: 'VT323' }}>
                                {expandedEvent}
                              </Typography>
                          </Stack>

                      <FlashDiv>
                        {!expandedEvent && <Typography className='data' style={{ color: 'white', fontSize: '20px', fontFamily: 'VT323'}}>Press to predict</Typography>}
                      </FlashDiv>
                      {expandedEvent ? (
                        <>
                          <Button variant="contained" onClick={resetView} sx={{ marginBottom: '1em', maxWidth: '18em', fontFamily: "Pixelify Sans", fontSize: '1.3em', backgroundColor: '#ed652b',  '&:hover': {
                              backgroundColor: '#b6451a', 
                            }, }}>
                            Reset
                          </Button>
                          {data[expandedEvent] ? (
                            <Box
                              sx={{
                                marginTop: '20px',
                                marginBottom: '20px',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column'
                              }}
                            >
                              
                              <FlashDiv>
                                {expandedEvent && <Typography className='data' style={{ color: 'white', fontSize: '20px', fontFamily: 'VT323'}}>Press to predict</Typography>}
                              </FlashDiv>
                              <Box
                                sx={{
                                  width: '100%',
                                  display: 'flex',
                                  flexDirection: 'row',
                                  justifyContent: 'flex-start',
                                  alignItems: 'flex-start',
                                  flexWrap: 'wrap', // Add flexWrap to allow items to wrap
                                  gap: '1em', // Add gap between items
                                }}
                              >
                                {Object.keys(data[expandedEvent]).map((matchupName, index) => (
                                  <Stack
                                  onClick={() => toggleVisibility(matchupName)}
                                  key={index}
                                  sx={{
                                    // backgroundImage: visiblePulseDivs[matchupName] ? `url(${staticBackground2})` : `url(${blackImage})` ,
                                    cursor: "pointer",
                                    // backgroundSize: 'cover', 
                                    padding: '12px',
                                    paddingLeft: '16px',
                                    margin: '4px',
                                    marginTop: '2em',
                                    minWidth: '50%',
                                    backgroundColor: 'black',
                                    // maxWidth: isSmallScreen ? '12em' : isSocialScreen ? '14em' : '16em',
                                    flex: '1 1 30%',
                                    // borderRadius: '15px',
                                    border: visiblePulseDivs[matchupName] ? '0.5em solid #ed652b' : '0.5em solid white',
                                    transition: 'background-image 1.8s', // Add transition for smooth effect
                                    // height: visiblePulseDivs[matchupName] ? '100%' : '4em'
                                  }}
                                    gap={1}
                                  >
                                  
                                    <Stack width={'100%'} justifyContent={'center'} alignItems={'center'}>
                                      <Typography className='data' sx={{ fontSize: '24px', color: 'white', 
                                        fontFamily: 'VT323' }}>
                                        {matchupName}
                                      </Typography>
                                    </Stack>
                                    <Stack>
                                      {Object.entries(data[expandedEvent][matchupName]).map(([fighter, fighterData], idx) => (
                                        <Stack key={idx} flexDirection={isSmallScreen ? 'column' : 'row'} gap={2} mt={4} >
                                          {/* <Typography className='data' sx={{ fontSize: '20px', color: 'white', fontFamily: 'VT323' }}>
                                            {fighter}:
                                          </Typography> */}
                                          {visiblePulseDivs[matchupName] && (
                                            <Stack  width={'100%'} justifyContent={'center'} alignItems={'center'}>
                                              {latestClick == matchupName ? (
                                                <FadeDiv>
                                                  <PulseDiv>
                                                    <Typography className='data' sx={{ fontSize: '20px', color: 'white', fontFamily: 'VT323' }}>
                                                      {JSON.stringify(fighterData)}
                                                    </Typography>
                                                  </PulseDiv>
                                                </FadeDiv>
                                              ) : (
                                                  <Typography className='data' sx={{ fontSize: '20px', color: 'white', fontFamily: 'VT323' }}>
                                                    {JSON.stringify(fighterData)}
                                                  </Typography>
                                              )}
                                            </ Stack>
                                          )}
                                        </Stack>
                                      ))}
                                    </Stack>
                                  </Stack>
                                ))}
                              </Box>
                            </Box>
                          ) : (
                            <Stack direction='row' justifyContent='center' alignItems='center' gap={1}>
                              <Typography sx={{ fontSize: '2.4em', fontFamily: 'VT323' }}>Loading...</Typography>
                              <img style={{ height: '4em', width: '4em', borderRadius: '50%'}} src={fight}/>
                            </Stack>
                            
                          )}
                        </>
                      ) : (
                        toFetch.map((event, index) => (
                          <Stack mt={3} sx={{ backgroundColor: 'white', width: isSmallScreen ? '100%' : '50%',  
                            border: '5px solid black',  }}>
                            <Button
                              key={index}
                              variant="contained"
                              onClick={() => handleButtonClick(event)}
                              sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans", backgroundColor: '#ed652b',  '&:hover': {
                                backgroundColor: '#b6451a', 
                              }, }}
                            >
                            
                              {event}
                              
                            </Button> 
                          </Stack>
                        ))
                      )}
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        <NostradamageFooter />
      </Stack>
    </>
  );
}
