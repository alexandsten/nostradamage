import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function MainMenu( props ) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#f7f7f7', width: '100%', justifyContent: 'center'}}>

    {/* Meny är här */}
   
        <Box sx={{ margin: '8px', cursor: 'pointer'}} onClick={() => props.setSelectedItem('Home')}>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold','&:hover': { textDecoration: 'underline'} }}>
                Home
            </Typography>
        </Box>

        <Box sx={{ margin: '8px', cursor: 'pointer'}} onClick={() => props.setSelectedItem('Vision')}>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold','&:hover': { textDecoration: 'underline'} }}>
                Our vision
            </Typography>
        </Box>

        <Box sx={{ margin: '8px', cursor: 'pointer'}} onClick={() => props.setSelectedItem('Protoype')}>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold','&:hover': { textDecoration: 'underline'} }}>
                Prototype
            </Typography>
        </Box>

        <Box sx={{ margin: '8px', cursor: 'pointer'}} onClick={() => props.setSelectedItem('About')}>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold','&:hover': { textDecoration: 'underline'} }}>
                About us
            </Typography>
        </Box>

        <Box sx={{ margin: '8px', cursor: 'pointer'}} onClick={() => props.setSelectedItem('Demo')}>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold','&:hover': { textDecoration: 'underline'} }}>
                Demo
            </Typography>
        </Box>
        
    </Box>
    )
}
