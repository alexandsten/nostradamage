import React, { useState, useEffect } from 'react';
import { Grid, Typography, Avatar, IconButton, Drawer, Stack, useMediaQuery, GlobalStyles} from '@mui/material';
// import { Menu as MenuIcon } from '@mui/icons-material';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/instagram'
import 'react-social-icons/discord'
import 'react-social-icons/x'
import 'react-social-icons/tiktok'
import nostraLogoColor from '../img/NostraLogo3.png'

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" />



export default function MainMenu(props) {

  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const isSocialScreen = useMediaQuery('(max-width:1000px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
     <>
        {/* <GlobalStyles
        styles={{
          body: {
           
            overflowX: 'hidden', // Hide overflow on x-axis
          },
          html: {
           
            overflowX: 'hidden', // Hide overflow on x-axis
          }
        }}
      /> */}
      <Grid
        container
        spacing={2}
        sx={{
          position: 'sticky',
          top: 0,
          // width: '100vw', // Set a maximum width
          maxWidth: '100vw',
          padding: '10px',
          paddingBottom: '0px',
          margin: '0px',
          borderBottom: '3px solid #ed652b',
          paddingRight: '50px',
          zIndex: 5000,
          overflowX: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
          backgroundColor: 'black'
          // '@media (min-width: 1100px)': {
          //   maxWidth: 'calc(100% - 50px)', // Adjust width for larger screens
          // },
        }}
      >
        <Grid item xs={12} sm={1} p={0.2} onClick={() => props.setSelectedItem('Home')} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'row', cursor: "pointer", marginTop: '-1em' }}>
         
          <img style={{ width: '4em', height: '3em', marginRight: '2em' }} src={nostraLogoColor} />
          {!isSmallScreen && ( 
             <Grid onClick={() => props.setSelectedItem('Home')} sx={{  cursor: "pointer", zIndex: 99 }}>
              <p className='logo' >
                Nostradamage
              </p>
            </Grid>
          )}  
        </Grid>

        <Grid container item xs={12} sm={11} spacing={2} justifyContent={'flex-end'}>
        {/* {!isSocialScreen && (
          <Grid item >
            <SocialIcon url="https://www.tiktok.com" style={{ width: '40px', height: '40px' }}/>
          </Grid>
           )}
           {!isSocialScreen && (
          <Grid item >
            <SocialIcon url="https://www.instagram.com" style={{ width: '40px', height: '40px' }}/>
          </Grid>
           )}
           {!isSocialScreen && (
          <Grid item >
            <SocialIcon url="https://www.x.com" style={{ width: '40px', height: '40px' }}/>
          </Grid>
           )}
           {!isSocialScreen && (
          <Grid item sx={{ marginRight: '5%'}}>
            <SocialIcon url="https://www.discord.com" style={{ width: '40px', height: '40px' }}/>
          </Grid>
           )} */}
          {!isSmallScreen && (
            <Grid item onClick={() => props.setSelectedItem('Home')}>
              <Typography sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Pixelify Sans", color: 'white' }}>
                  Home
              </Typography>
            </Grid>
          )}
            {!isSmallScreen && (
              <Grid item onClick={() => props.setSelectedItem('Prototype')}>
                  <Typography sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Pixelify Sans", color: 'white' }}>
                    Predictions
                  </Typography>

                </Grid>
             )}
                {!isSmallScreen && (
                   <Grid item onClick={() => props.setSelectedItem('Sub')}>
                     <Typography sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Pixelify Sans", color: 'white' }}>
                       Subscription
                     </Typography>
                   </Grid>
                )}
              {!isSmallScreen && (
                <Grid item onClick={() => props.setSelectedItem('About')}>
                  <Typography sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Pixelify Sans", color: 'white' }}>
                    About us
                  </Typography>
                </Grid>
             )}
              {isSmallScreen && (
          <Grid  sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            marginTop: '20px', // Adjust margin as needed
            marginRight: '20px', // Adjust margin as needed
            overflowX: 'hidden',
          }} item>
            <IconButton onClick={toggleDrawer(true)} sx={{ paddingRight: '1em'}} >
            <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '-1.5em' }} width="1em" height="1em" viewBox="0 0 512 512"><path fill="white" d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"/></svg>
            </IconButton>
          </Grid>
           )}
        </Grid>
      </Grid>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ zIndex: 9999 }}
      >
        <Stack role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Grid container direction="column" spacing={2} sx={{ padding: '20px', backgroundColor: '#141414', height: '102vh', overflow: 'hidden' }}>
            <Grid item>
              <Typography
                sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Pixelify Sans", color: 'white' }}
                onClick={() => props.setSelectedItem('Home')}
              >
                Home
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Pixelify Sans", color: 'white' }}
                onClick={() => props.setSelectedItem('Prototype')}
              >
                Prototype
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Pixelify Sans", color: 'white' }}
                onClick={() => props.setSelectedItem('Sub')}
              >
                Subscription
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Pixelify Sans", color: 'white' }}
                onClick={() => props.setSelectedItem('About')}
              >
                About us
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Drawer>
    </>
  );
}

    

