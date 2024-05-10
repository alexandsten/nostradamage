import React, { useState, useEffect } from 'react';
import { Grid, Typography, Avatar, IconButton, Drawer, Stack, useMediaQuery} from '@mui/material';
// import { Menu as MenuIcon } from '@mui/icons-material';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/instagram'
import 'react-social-icons/discord'
import 'react-social-icons/x'
import 'react-social-icons/tiktok'
import nostraLogoColor from '../img/nostraLogoColor.png'

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
      <Grid
        container
        spacing={2}
        sx={{
          position: 'sticky',
          top: 0,
          maxWidth: '100vw', // Set a maximum width
          width: '100%', // Take full width on smaller screens
          padding: '20px',
          
          paddingRight: '50px',
          zIndex: 5000,
          overflow: 'hidden',
          '@media (min-width: 1100px)': {
            maxWidth: 'calc(100% - 50px)', // Adjust width for larger screens
          },
        }}
      >
        <Grid item xs={12} sm={1} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'row' }}>
          <Avatar sx={{ width: '110px', height: '110px', marginTop: '-1.5em'}} src={nostraLogoColor} />
          <Typography sx={{ fontSize: '22px', fontWeight: 'bold', fontFamily: "Roboto Mono" }}>
            Nostradamage
          </Typography> 
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
          <Grid item>
            <Typography
             sx={{
              fontSize: '28px',
              fontWeight: 'semiBold',
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' },
              fontFamily: "Fira Sans",
              color: 'white', // Set text color to white
              textShadow: '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black', // Add black border (stroke)
            }}
              onClick={() => props.setSelectedItem('Home')}
            >
              Home
            </Typography>
          </Grid>
          )}
            {!isSmallScreen && (
          <Grid item>
              <Typography
                  sx={{
                  fontSize: '28px',
                  fontWeight: 'semiBold',
                  cursor: 'pointer',
                  '&:hover': { textDecoration: 'underline' },
                  fontFamily: "Fira Sans",
                  color: 'white', // Set text color to white
                  textShadow: '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black', // Add black border (stroke)
                }}
                onClick={() => props.setSelectedItem('Prototype')}
              >
                Prototype
              </Typography>
            </Grid>
             )}
              {!isSmallScreen && (
            <Grid item>
              <Typography
                sx={{
                fontSize: '28px',
                fontWeight: 'semiBold',
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' },
                fontFamily: "Fira Sans",
                color: 'white', // Set text color to white
                textShadow: '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black', // Add black border (stroke)
              }}
                onClick={() => props.setSelectedItem('About')}
              >
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
          }} item>
            <IconButton onClick={toggleDrawer(true)} sx={{ paddingRight: '1em'}} >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="black" d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"/></svg>
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
        <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Grid container direction="column" spacing={2} sx={{ padding: '20px' }}>
            <Grid item>
              <Typography
                sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Fira Sans" }}
                onClick={() => props.setSelectedItem('Home')}
              >
                Home
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Fira Sans" }}
                onClick={() => props.setSelectedItem('Prototype')}
              >
                Prototype
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontSize: '20px', fontWeight: 'semiBold', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontFamily: "Fira Sans" }}
                onClick={() => props.setSelectedItem('About')}
              >
                About us
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Drawer>
    </>
  );
}

    

