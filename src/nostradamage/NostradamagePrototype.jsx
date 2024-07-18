import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery} from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, goOffline, goOnline } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import static2 from './img/static4.gif';
import black from './img/A_black_image.jpg';
import staticBackground from './img/static3.gif';
import staticBackground2 from './img/static1.webp';
import fight from './img/fight.webp';
import fighterLogo from './img/fighter1.png'
import pixelBackground1 from './img/pixBack3.gif';
import pixelBackground2 from './img/pixBack4.gif';
import staticFilm from './img/staticFilm.webp';
import monitorTexture from './img/textureCracked.jpg';
import pulse from 'react-animations/lib/pulse';
import flash from 'react-animations/lib/flash';
import jello from 'react-animations/lib/tada';
import styled, { keyframes } from 'styled-components';

export default function NostradamagePrototype() {
  const [data, setData] = useState({});
  const [toFetch, setToFetch] = useState(['UFC 302', 'UFC 303', 'UFC Fight Night Namajunas vs Cortez', 'UFC Fight Night Lemos vs Jandiroba']);
  const [expanded, setExpanded] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const isSocialScreen = useMediaQuery('(max-width:1000px)');

  const flashAnimation = keyframes`${flash}`;

  const FlashDiv = styled.div`
    animation: 3s ${flashAnimation} infinite;
  `;

  const jelloAnimation = keyframes`${jello}`;

  const JelloDiv = styled.div`
    animation: 1s ${jelloAnimation};
  `;
  const pulseAnimation = keyframes`${pulse}`;

  const PulseDiv = styled.div`
    animation: 2s ${pulseAnimation} infinite;
  `;

  const firebaseConfig = {
    apiKey: "AIzaSyBFK9TBeGAkS-5-9zOS4HJog4n_EfITLKI",
    authDomain: "nostradamage-backend-01.firebaseapp.com",
    projectId: "nostradamage-backend-01",
    storageBucket: "nostradamage-backend-01.appspot.com",
    messagingSenderId: "381854619282",
    appId: "1:381854619282:web:2b2c211d9613baf52bf84b",
    databaseURL: 'https://nostradamage-backend-01-default-rtdb.europe-west1.firebasedatabase.app/', 
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);
  const auth = getAuth(firebaseApp);

  const handleButtonClick = async (event) => {
    setExpanded(event);
    if (!data[event]) {
      try {
        await signInWithEmailAndPassword(auth, 'alex.andsten@gmail.com', 'jagvetiS11');
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

  return (
    <>
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
              backgroundImage: expanded 
                ? `linear-gradient(rgba(0, 0, 10, 0.9), rgba(0, 0, 0, 0.9)), url(${pixelBackground1})` 
                : `linear-gradient(rgba(0, 0, 10, 0.9), rgba(0, 0, 0, 0.9)), url(${pixelBackground2})`,
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
              
                <Stack direction='row' gap={2} alignItems='flex-start' justifyContent='center' m={3}>
                  {/* <img style={{ height: '4em', width: '4em', borderRadius: '50%'}} src={fighterLogo}/>  */}
                  <h2>Nostradamage</h2>            
                </Stack>
              

              <FlashDiv>
                {!expanded && <Typography className='data' style={{ color: 'white', fontSize: '20px', fontFamily: 'VT323'}}>Press to predict</Typography>}
              </FlashDiv>
              {expanded ? (
                <>
                  <Button variant="contained" onClick={resetView} sx={{ marginBottom: '1em', maxWidth: '18em', fontFamily: "Pixelify Sans", fontSize: '1.3em' }}>
                    Reset
                  </Button>
                  {data[expanded] ? (
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
                        {expanded && <Typography className='data' style={{ color: 'white', fontSize: '20px', fontFamily: 'VT323'}}>Press to predict</Typography>}
                      </FlashDiv>
                      <Box
                        sx={{
                          width: '40vw',
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'wrap', // Add flexWrap to allow items to wrap
                          gap: '1em', // Add gap between items
                        }}
                      >
                        {Object.keys(data[expanded]).map((matchupName, index) => (
                          <Box
                          onClick={() => toggleVisibility(matchupName)}
                          key={index}
                          sx={{
                            backgroundImage: visiblePulseDivs[matchupName] ? `url(${staticFilm})` : `url(${staticBackground2})`,
                            cursor: "pointer",
                            backgroundSize: 'cover', 
                            padding: '12px',
                            paddingLeft: '16px',
                            margin: '4px',
                            marginTop: '2em',
                            minWidth: '8em',
                            maxWidth: '17em',
                            flex: '1 1 30%',
                            borderRadius: '15px',
                            border: '3px solid white',
                            transition: 'background-image 1.8s', // Add transition for smooth effect
                            // height: visiblePulseDivs[matchupName] ? '100%' : '4em'
                          }}
                          >
                           
                            <Stack>
                                <Typography className='data' sx={{ fontSize: '18px', color: 'white', fontFamily: 'VT323' }}>
                                  {matchupName}
                                </Typography>
                            </Stack>
                            <Stack>
                              {Object.entries(data[expanded][matchupName]).map(([fighter, fighterData], idx) => (
                                <Stack key={idx} flexDirection={isSmallScreen ? 'column' : 'row'} gap={2}>
                                  <Typography className='data' sx={{ fontSize: '20px', color: 'white', fontFamily: 'VT323' }}>
                                    {fighter}:
                                  </Typography>
                                  {visiblePulseDivs[matchupName] && (
                                    <>
                                      {latestClick == matchupName ? (
                                        <JelloDiv>
                                          <PulseDiv>
                                            <Typography className='data' sx={{ fontSize: '20px', color: 'white', fontFamily: 'VT323' }}>
                                              {JSON.stringify(fighterData)}
                                            </Typography>
                                          </PulseDiv>
                                        </JelloDiv>
                                      ) : (
                                        <PulseDiv>
                                          <Typography className='data' sx={{ fontSize: '20px', color: 'white', fontFamily: 'VT323' }}>
                                            {JSON.stringify(fighterData)}
                                          </Typography>
                                        </PulseDiv>
                                      )}
                                    </>
                                  )}
                                </Stack>
                              ))}
                            </Stack>

                           
                          </Box>

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
                  <Button
                    key={index}
                    variant="contained"
                    onClick={() => handleButtonClick(event)}
                    sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans" }}
                  >
                   
                    {event}
                     
                  </Button>
                ))
              )}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
