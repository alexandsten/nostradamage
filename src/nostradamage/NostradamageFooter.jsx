import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import goldBg from './img/goldBg.jpg';
import silverBg from './img/silverBg.jpg';
import { Grid, Stack, styled as muiStyled, IconButton } from '@mui/material';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/instagram'
import 'react-social-icons/discord'
import 'react-social-icons/x'
import 'react-social-icons/tiktok'

export default function NostradamageFooter() {

  const Text = muiStyled(Typography)({
    fontSize: '1.2em',
    fontFamily: 'VT323',
    color: 'white'
  });

  return (
    <>
        <Stack
            component="footer"
            sx={{
              width: '100%',
              backgroundColor: 'black',
              borderTop: '#ed652b solid 1px',
              boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)',
              color: 'white',
              textAlign: 'center',
              padding: '4em 0',
            }}
            gap={5}
          >
             <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton 
                component="a" 
                href="https://www.instagram.com/nostradmg/" 
                target="_blank" 
                rel="noopener noreferrer" 
                sx={{ color: "white" }}
              >
                <SocialIcon url="https://www.instagram.com/nostradmg/" target="_blank" rel="noopener noreferrer" />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://www.youtube.com/@NostraDamage-n4r" 
                target="_blank" 
                rel="noopener noreferrer" 
                sx={{ color: "white" }}
              >
                <SocialIcon url="https://www.youtube.com/@NostraDamage-n4r" target="_blank" rel="noopener noreferrer" />
              </IconButton>
            </Stack>
            <Text>
              &copy; 2024 Nostradamage. All rights reserved.
            </Text>
            <Text>
              Contact us: <a href="mailto:nostradmg@gmail.com" style={{ color: 'inherit' }}>nostradmg@gmail.com</a>
            </Text>
            <Typography sx={{ color: 'white', fontFamily: "VT323", fontSize: '0.8em' }}>
                Background images Designed by Freepik, picture created by Craiyon, gifs by giphy.com
            </Typography>
          </Stack>
    </>
  );
}
