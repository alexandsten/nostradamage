import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Typography, Grid, Container, Stack } from '@mui/material';
import '../../src/fonts/fonts.css';
import './styles.css'


export default function NostradamageHome() {
  const [data, setData] = useState([]);
  const [toFetch, setToFetch] = useState(['Brandon Moreno_dict']);
  const [fighterNames, setFighterNames] = useState([]);

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
      setFighterNames(fightersData.map((fighter) => fighter.Stance));
      console.log(database);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
<>
    {/* 
        <Typography sx={{ fontSize: '22px', color: 'white', margin: '3em', fontFamily: "Press Start 2P" }}>
          Nostradamage - MMA fight predictor
        </Typography> 
    */}

     <Stack
      height={800}
      mt={3}
      sx={{ backgroundColor: 'orange', width: '100vw'}}
      align="center"
      justifyContent="center"
      flexDirection="column"
    > 
      <h1>Nostradamage</h1>
      <h3>The predictor of the octagon</h3>
    </Stack>
   
    <Stack
      height={800}
      mt={3}
      sx={{ backgroundColor: 'blue', width: '100vw'}}
      align="center"
      justifyContent="center"
      flexDirection="column"
    > 
      <h1>Nostradamage</h1>
      <h3>The predictor of the octagon</h3>
    </Stack>
   
  </>

  );
}
