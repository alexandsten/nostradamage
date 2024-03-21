import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Button from '@mui/material/Button';

export default function NostradamagePrototype() {
  const [data, setData] = useState([]);
  const [toFetch, setToFetch] = useState(['Upcoming fightcard predictions']);
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
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '8px',
          marginTop: '3em',
          marginBottom: '3em',
          minHeight: '300px'
        }}
      >
        {
          fightButtonBool && (
            <Button
              sx={{
                backgroundColor: 'black',
                width: '150px',
                height: '60px',
                borderRadius: '15px',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'white',
                },
              }}
            onClick={onClickFighter}
            >
            Upcoming fightcard
          </Button>
          )
        }
      

        {!fightButtonBool && (
          <Box
            sx={{
              marginTop: '20px',
              marginBottom: '20px',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              marginBottom: '20px'
            }}
          >
            <Button
              sx={{
                backgroundColor: 'black',
                color: 'white',
                width: '120px',
                height: '50px',
                borderRadius: '15px',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'white',
                },
              }}
              onClick={() => setFightButtonBool(true)} 
            >
              Close
            </Button>
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
                                  {matchupName}
                                </b>
                        
                            </div>
                            <div>
                                {Object.entries(fighterNames[0][matchupName]).map(([fighter, fighterData], idx) => (
                                    <div key={idx}>
                                        {fighter} {JSON.stringify(fighterData)}
                                    </div>
                                ))}
                            </div>
                        </Box>
                    ))}
                </Box>
            )}
          </Box>
        )}
      </Box>
    </>
  );
}
