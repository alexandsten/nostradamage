import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Typography from '@mui/material/Typography';

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
  <Typography sx={{ fontSize: '22px', fontWeight: 'semiBold', color: 'white', margin: '3em', fontFamily: "Roboto Mono" }}>
    Nostradamage - MMA fight predictor
  </Typography>
  <Stack
    direction={{ base: 'column', sm: 'row' }}
    sx={{ width: { sm: '100%', xs: '80%' } }} // Adjusted width for xs
    align="center"
    justifyContent="center"
  >
    <Box
      sx={{
        display: 'flex',
        justifySelf: 'center',
        width: { sm: '33%', xs: '80%' }, // Adjusted width for xs
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1em',
        flexDirection: 'column',
        margin: '12px'
      }}
    >
      <Typography sx={{ fontSize: '18px', fontWeight: 'semiBold', margin: '1em', fontFamily: "Roboto Mono" }}>
        MMA fight predictor
      </Typography>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit minima nemo aliquid distinctio fuga eius repellendus facere reiciendis, quas, nobis cumque unde quam commodi rem consequuntur optio maiores. Eius, iure!
    </Box>
    <Box
      sx={{
        display: 'flex',
        // justifySelf: 'center',
        width: { sm: '33%', xs: '80%' }, // Adjusted width for xs
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1em',
        flexDirection: 'column',
        margin: '12px'
      }}
    >
      <Typography sx={{ fontSize: '18px', fontWeight: 'semiBold', margin: '1em', fontFamily: "Roboto Mono" }}>
        Technology behind our product
      </Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis minima, mollitia voluptates voluptate, consectetur sequi a aspernatur illum optio nulla laboriosam placeat doloribus quos pariatur enim. Totam, aliquid accusantium!
    </Box>
  </Stack>
  <Stack direction="row" sx={{ backgroundColor: 'black', height: '5%', width: '80%', color: 'white', marginTop: '3em', padding: '2em', borderRadius: '10px', opacity: '90%' }}
    align="center" justifyContent="center"
  >
    <Box sx={{ padding: '3%' }}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere quia natus unde impedit enim maiores debitis hic, dignissimos nemo quas quisquam omnis cumque in totam similique quod reprehenderit deserunt.

    </Box>
    <Box sx={{ padding: '3%' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perspiciatis repudiandae? Deleniti quod quam voluptas velit aspernatur ipsum fuga, earum laboriosam, libero necessitatibus ut culpa veritatis delectus quas accusantium similique.
    </Box>
  </Stack>
  <Stack
    direction={{ base: 'column', sm: 'row' }} // Set direction based on screen size
    sx={{ width: '80%', marginTop: '3em' }}
    align="center"
    justifyContent="center"
  >
    <Box
      sx={{
        display: 'flex',
        // justifyContent: 'center',
        width: {sm:'33%', xs: '80'},
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1em',
        flexDirection: 'column',
        margin: '12px'
      }}
    >
      <Typography sx={{ fontSize: '18px', fontWeight: 'semiBold', margin: '1em', fontFamily: "Roboto Mono" }}>
        Functionality
      </Typography>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus fugiat rerum, asperiores nulla voluptatum, corporis possimus eos ipsa illum quae placeat id cupiditate quibusdam, fuga nobis quis. Odit, quam. Necessitatibus.
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: {sm:'33%', xs: '80'},
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1em',
        flexDirection: 'column',
        margin: '12px'
      }}
    >
      <Typography sx={{ fontSize: '18px', fontWeight: 'semiBold', margin: '1em', fontFamily: "Roboto Mono" }}>
        Why use Nostradamage?
      </Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum exercitationem dignissimos laudantium quaerat molestias perspiciatis amet, autem culpa! Sunt veniam libero, sed tempora provident veritatis explicabo porro beatae illo labore.
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: {sm:'33%', xs: '80'},
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1em',
        flexDirection: 'column',
        margin: '12px'
      }}
    >
      <Typography sx={{ fontSize: '18px', fontWeight: 'semiBold', margin: '1em', fontFamily: "Roboto Mono" }}>
        Our community
      </Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam id facilis sequi iure cumque totam ex voluptatem voluptas reiciendis commodi maxime nostrum, quis eaque quasi nisi, minus tenetur architecto.
    </Box>
  </Stack>
</>

  );
}
