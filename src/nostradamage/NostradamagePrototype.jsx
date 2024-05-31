import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Stack, Avatar } from '@mui/material';

export default function NostradamagePrototype() {
  const [data, setData] = useState([]);
  const [toFetch, setToFetch] = useState(['UFC 302']);
  const [fighterNames, setFighterNames] = useState([]);
  const [fightButtonBool, setFightButtonBool] = useState(true);

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

  const onClickFighter = async () => {
    console.log('click');
    try {
      // Ensure the user is signed in before attempting to fetch data

      const fightersData = [];

      for (const fighterName of toFetch) {
        const snapshot = await get(ref(database, fighterName));
        const fighterData = snapshot.val();

        if (fighterData) {
          fightersData.push(fighterData);
        }
      }

      setData(fightersData);
      setFighterNames(fightersData.map((fighter) => fighter));
      // console.log(database);
      // console.log(fighterNames);
      setFightButtonBool(false)
    } catch (error) {
      console.error('Error fetching data:', error);
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
          <Accordion >
            <AccordionSummary
              expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 630 700"><path fill="currentColor" d="M622 106L311 417L0 106l65-65l246 245L556 41z"/></svg>}
              aria-controls="panel1-content"
              id="panel1-header"
              onClick={onClickFighter}
            >
            <Typography sx={{ fontSize: '18px', fontWeight: 'semiBold', margin: '1em', fontFamily: "Roboto Mono", color: 'black' }}>
              UFC 302
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            {!fightButtonBool && (
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
              {fighterNames.length === 1 && (
                    <Box>
                        {Object.keys(fighterNames[0]).map((matchupName, index) => (
                            <Box
                                key={index}
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
                                    {Object.entries(fighterNames[0][matchupName]).map(([fighter, fighterData], idx) => (
                                        <div  key={idx}>
                                          <p className='data'>{fighter} {JSON.stringify(fighterData)}</p>
                                            
                                        </div>
                                    ))}
                                </div>
                            </Box>
                        ))}
                    </Box>
                )}
              </Box>
            )}
            </AccordionDetails>
          </Accordion>
        </Stack>

      </Box>
    </>
  );
}
