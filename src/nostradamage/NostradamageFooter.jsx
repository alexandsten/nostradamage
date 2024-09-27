import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import goldBg from './img/goldBg.jpg';
import silverBg from './img/silverBg.jpg';
import { Grid, Stack } from '@mui/material';

export default function NostradamageFooter() {
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
              padding: '1em 0',
            }}
            gap={1}
          >
            <Typography variant="body2">
              &copy; 2024 Nostradamage. All rights reserved.
            </Typography>
            <Typography variant="body2">
              Contact us: <a href="mailto:info@nostradamage.com" style={{ color: 'inherit' }}>nostradmg@gmail.com</a>, 1234 Nostradamage Lane, Imaginary City, 56789
            </Typography>
            <Typography sx={{ color: 'white', fontFamily: "Gotu", fontSize: '9px' }}>
                Background images Designed by Freepik, picture created by Craiyon, gifs by giphy.com
            </Typography>
          </Stack>
    </>
  );
}
