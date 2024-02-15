import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';



export default function NostradamageDemo() {

  const [fighter1, setFighter1] = useState('');
  const [fighter2, setFighter2] = useState('');
  const [fightStartBoolean, setFightStartBoolean] = useState(false);

  const [fightResultText1, setFightResultText1] = useState('');

  const handleChangeFighter1 = (event) => {
    setFighter1(event.target.value);
  };

  const handleChangeFighter2 = (event) => {
    setFighter2(event.target.value);
  };

  const fightStart = () => {
    const results = [
      'After a long drawn out war. The winner is ' + fighter1 + ' by late stoppage!',
      'Round 1 stoppage via darce choke, by the winner ' + fighter2 + '!',
      'After a dominant beatdown, ' + fighter2 + ' finishes ' + fighter1 + ' by ground and pound!',
      'Upset alert! ' + fighter1 + ' shocked everyone and knocks out ' + fighter2 + ' in round 2, after taking a brutal beatdown in round one!'
    ];
  
    const randomResult = results[Math.floor(Math.random() * results.length)];
  
    setFightResultText1(randomResult);
    setFightStartBoolean(true);
  };

  const resetFight = () => {
    setFighter1('')
    setFighter2('')
    setFightStartBoolean(false)
  }

  return (
    <>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold' }}>
                This is a demostration of Nostradamage
            </Typography> 
            <Box sx={{ 
              borderRadius: '15px',
              border: '2px solid #f0f0f0',  
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginTop: '20px',
              padding: '25px'
            }}
            >
              <FormControl fullWidth sx={{ marginBottom: '30px'}}>
                <InputLabel id="demo-simple-select-label">
                  Fighter 1
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={fighter1}
                  label="Age"
                  onChange={handleChangeFighter1}
                >
                  <MenuItem value={'Ian Garry'}>
                    Ian Garry
                  </MenuItem>
                  <MenuItem value={'Alexander Volkanovski'}>
                    Alexander Volkanovski
                  </MenuItem>
                  <MenuItem value={'Henry Cejudo'}>
                    Henry Cejudo
                  </MenuItem>
                  <MenuItem value={'Robert Whittaker'}>
                    Robert Whittaker
                  </MenuItem>
                  </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Fighter 2
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={fighter2}
                  label="Age"
                  onChange={handleChangeFighter2}
                >
                  <MenuItem value={'Geoff Neal'}>
                    Geoff Neal
                  </MenuItem>
                  <MenuItem value={'Illia Tuporia'}>
                    Illia Tuporia
                  </MenuItem>
                  <MenuItem value={'Merab Dvalishvili'}>
                    Merab Dvalishvili
                  </MenuItem>
                  <MenuItem value={'Paulo Costa'}>
                    Paulo Costa
                  </MenuItem>
                  </Select>
              </FormControl>

              <Button variant="contained"
                  onClick={fightStart}
                  sx={{ 
                    marginTop: '30px', 
                    marginBottom: '10px', 
                    marginTop: '25px',
                    pointerEvents: (fighter1 !== '' && fighter2 !== '') ? 'auto' : 'none', 
                    opacity: (fighter1 !== '' && fighter2 !== '') ? 1 : 0.5, 
                  }}
              >
                Fight!
              </Button>
            </Box>
        </Box>

        {
          fightStartBoolean?(

            <> 
              <Box sx={{ 
                    marginTop: '40px', 
                    borderRadius: '15px',
                    border: '2px solid #f0f0f0',  
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginTop: '20px',
                    padding: '25px'}} >
                      <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold' }}>
                        {fightResultText1}
                      </Typography>

                      
              </Box>
              <Button 
                variant="contained"
                onClick={resetFight}
                sx={{ 
                  marginTop: '30px', 
                  marginBottom: '10px', 
                  marginTop: '25px',
                }}
              >
                Fight again!
              </Button>
        </>
          ) : null
        }
        
    </>
  )
}
