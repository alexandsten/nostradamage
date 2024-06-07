import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import bgImage from './img/bg5gif.gif';
import staticBackground from './img/static3.gif';
import monitorTexture from './img/textureCracked.jpg';

export default function NostradamagePrototype() {
  const [data, setData] = useState({});
  const [toFetch, setToFetch] = useState(['UFC 300', 'UFC 301', 'UFC 302']);
  const [expanded, setExpanded] = useState(null);

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

  useEffect(() => {
    const signInUser = async () => {
      try {
        await signInWithEmailAndPassword(auth, 'alex.andsten@gmail.com', 'jagvetiS11');
        console.log('User signed in successfully');
      } catch (error) {
        console.error('Authentication error:', error);
      }
    };

    signInUser(); // Automatically sign in when the component mounts
  }, [auth]);

  const handleButtonClick = async (event) => {
    setExpanded(event);
    if (!data[event]) {
      try {
        const snapshot = await get(ref(database, event));
        const fighterData = snapshot.val();
        if (fighterData) {
          setData((prevData) => ({ ...prevData, [event]: fighterData }));
          // Sign the user out after fetching the data
          await signOut(auth);
          console.log('User signed out successfully');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const resetView = () => {
    setExpanded(null);
  };

  return (
    <>
      <Stack
        sx={{
          padding: '1em',
          backgroundImage: `linear-gradient(rgba(0, 0, 150, 0.1), rgba(11, 21, 74, 0.6)), url(${monitorTexture})`,
          backgroundSize: 'cover', 
          border: '1px solid rgba(0, 0, 50, 1)', 
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '50vw',
          borderRadius: '25px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${staticBackground})`,
            backgroundSize: 'cover', 
            justifyContent: 'center',
            width: '30vw',
            borderRadius: '12px',
            padding: '4em',
            marginTop: '3em',
            marginBottom: '3em',
            minHeight: '50vh',
            minWidth: '40vw',
            maxHeight: '50vh',
            overflowY: 'auto', 
            overflowX: 'hidden',
            border: '8px solid black', 
          }}
        >
          <Stack direction='column'>
            <h2>Nostradamage prototype</h2>
            {!expanded && <p className='data' style={{ color: 'white', fontSize: '20px'}}>Click to open fight predictions</p>}
            {expanded ? (
              <>
                <Button variant="contained" onClick={resetView} sx={{ marginBottom: '1em', maxWidth: '18em', fontFamily: "Pixelify Sans" }}>
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
                          key={index}
                          sx={{
                            backgroundColor: '#b5e1ff',
                            padding: '8px',
                            margin: '4px',
                            marginTop: '2em',
                            minWidth: '100px',
                            flex: '1 1 30%',
                            border: '8px solid #8fb2c9',
                            transition: 'background-color 0.3s', // Add transition for smooth effect
                            '&:hover': {
                              backgroundColor: '#94c7f2', // Darker color on hover
                            },
                          }}
                        >
                          <div>
                            <b>
                              <p className='data' style={{ fontSize: '18px' }}>
                                {matchupName}
                              </p>
                            </b>
                          </div>
                          <div>
                            {Object.entries(data[expanded][matchupName]).map(([fighter, fighterData], idx) => (
                              <div key={idx}>
                                <p className='data' style={{ fontSize: '20px' }}>{fighter} {JSON.stringify(fighterData)}</p>
                              </div>
                            ))}
                          </div>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ) : (
                <p style={{ fontSize: '20px' }}>Loading...</p>  
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
    </>
  );
}
