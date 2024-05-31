import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export default function NostradamagePrototype() {
  const [data, setData] = useState({});
  const [toFetch, setToFetch] = useState(['UFC 300', 'UFC 301', 'UFC 302']);
  const [expanded, setExpanded] = useState(false);

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

  const handleAccordionChange = (panel) => async (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    if (isExpanded && !data[panel]) {
      try {
        const snapshot = await get(ref(database, panel));
        const fighterData = snapshot.val();
        if (fighterData) {
          setData((prevData) => ({ ...prevData, [panel]: fighterData }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '33%',
          borderRadius: '12px',
          padding: '8px',
          marginTop: '3em',
          marginBottom: '3em',
          minHeight: '300px'
        }}
      >
        <Stack direction='column'>
          <h2>Nostradamage prototype</h2>
          <p className='menu'>Click to open fight predictions</p>
          {toFetch.map((event, index) => (
            <Accordion
              key={index}
              expanded={expanded === event}
              onChange={handleAccordionChange(event)}
            >
              <AccordionSummary
                expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 630 700"><path fill="currentColor" d="M622 106L311 417L0 106l65-65l246 245L556 41z"/></svg>}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography sx={{ fontSize: '18px', fontWeight: 'semiBold', margin: '1em', fontFamily: "Roboto Mono", color: 'black' }}>
                  {event}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {data[event] ? (
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
                    <Box>
                      {Object.keys(data[event]).map((matchupName, index2) => (
                        <Box
                          key={index2}
                          sx={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '8px',
                            margin: '4px',
                            marginTop: '2em'
                          }}
                        >
                          <div>
                            <b>
                              <p className='data'>
                                {matchupName}
                              </p>
                            </b>
                          </div>
                          <div>
                            {Object.entries(data[event][matchupName]).map(([fighter, fighterData], idx) => (
                              <div key={idx}>
                                <p className='data'>{fighter} {JSON.stringify(fighterData)}</p>
                              </div>
                            ))}
                          </div>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ) : (
                  <Typography>Loading...</Typography>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Box>
    </>
  );
}
