// NostradamageHome.jsx
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';


export default function NostradamageHome() {
  const [data, setData] = useState([]);

  const firebaseConfig = {

    apiKey: "AIzaSyBFK9TBeGAkS-5-9zOS4HJog4n_EfITLKI",
  
    authDomain: "nostradamage-backend-01.firebaseapp.com",
  
    projectId: "nostradamage-backend-01",
  
    storageBucket: "nostradamage-backend-01.appspot.com",
  
    messagingSenderId: "381854619282",
  
    appId: "1:381854619282:web:2b2c211d9613baf52bf84b",

    databaseURL: 'https://nostradamage-backend-01-default-rtdb.europe-west1.firebasedatabase.app/', // Update this line

  
  };
  
  

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);

  const [fighterNames, setFighterNames] = useState("");


  const onClickFighter = async () => {
    console.log('click')
    try {
      const snapshot = await get(ref(database, 'Fighter1'));
      const fighterData = snapshot.val();
      if (fighterData) {
        setData(fighterData);
        setFighterNames(fighterData.Name)
      }
      console.log(fighterNames)

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <Box
        onClick={onClickFighter}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '33%',
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '8px',
        }}
      >
       
     {fighterNames}

      </Box>

      {/* Display the fetched data */}
      {data && (
        <Box sx={{ marginTop: '20px', marginBottom: '20px', justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          {/* <SinglePost postTitle={data.title} postContent={data.content} /> */}
        </Box>
      )}

      {/* Add more SinglePost components or modify as needed */}
    </>
  );
}
