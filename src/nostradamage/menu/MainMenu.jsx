import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/discord'
import 'react-social-icons/x'
import 'react-social-icons/tiktok'

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" />



export default function MainMenu(props) {
  return (
    <Grid container spacing={2} sx={{ position: 'absolute', top: 0, width: '100%', padding: '20px', backgroundColor: 'white' }}>
      <Grid item xs={12} sm={1} sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: '22px', fontWeight: 'bold', fontFamily: "Roboto Mono" }}>
          Nostradamage
        </Typography> 
      </Grid>

      <Grid container item xs={12} sm={11} spacing={2} justifyContent={'flex-end'}>
      <Grid item >
          <SocialIcon url="https://www.tiktok.com" />
        </Grid>
        <Grid item >
          <SocialIcon url="https://www.instagram.com" />
        </Grid>
        <Grid item >
          <SocialIcon url="https://www.x.com" />
        </Grid>
        <Grid item sx={{ marginRight: '5%'}}>
          <SocialIcon url="https://www.discord.com" />
        </Grid>
        <Grid item>
          <Typography
            sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Fira Sans" }}
            onClick={() => props.setSelectedItem('Home')}
          >
            Home
          </Typography>
        </Grid>

        {/* <Grid item>
          <Typography
            sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Fira Sans" }}
            onClick={() => props.setSelectedItem('Vision')}
          >
            Our vision
          </Typography>
        </Grid> */}

        <Grid item>
          <Typography
            sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Fira Sans" }}
            onClick={() => props.setSelectedItem('Prototype')}
          >
            Prototype
          </Typography>
        </Grid>

        {/* Uncomment the next lines when needed */}
        <Grid item>
          <Typography
            sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
            onClick={() => props.setSelectedItem('About')}
          >
            About us
          </Typography>
        </Grid>

        {/* <Grid item>
          <Typography
            sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Fira Sans" }}
            onClick={() => props.setSelectedItem('Demo')}
          >
            Demo
          </Typography>
        </Grid> */}
      </Grid>
    </Grid>
  );
}

    

