import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SinglePost from './post/singlePost';

export default function NostradamageHome() {
  return (
    <>
        <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold', marginTop: '25px' }}>
                Predictions have never been this gnarly...
            </Typography> 
        </Box>

        <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold', marginTop: '25px' }}>
                Bite down your mouthpiece and check out Nostradamage!
            </Typography> 
        </Box>

        <Box sx={{ marginTop: '20px', marginBottom: '20px', justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
           <SinglePost  postTitle="Titel" 
                        postContent="Content" 
            />

            <SinglePost postTitle="Titel" 
                        postContent="Content" 
            />
        </Box>
        
        
    </>
  )
}
