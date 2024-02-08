import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NostradamageVision() {
  return (
    <>
        <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold', marginTop: '25px' }}>
                An upcoming tool to predict fights with the help of AI
            </Typography> 
        </Box>
        <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold', marginTop: '25px' }}>
                Our product will allow the user to play around with their fantasy matchups and see our fight predictions.
            </Typography> 
        </Box>

        <Box sx={{ marginTop: '25px'}}>
 {/*         <iframe
            title="Video Player"
            width="560"
            height="315"
            src={'https://packaged-media.redd.it/pks2bvh79tfc1/pb/m2-res_1920p.mp4?m=DASHPlaylist.mpd&v=1&e=1706853600&s=4559f86a7aef579621e9b723f2fb03ff82e0afad#t=0'}
            frameBorder="0"
            allowFullScreen
        >
        </iframe>  */}   
            <img
                src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FMMAFighting%2Fstatus%2F1591677157927002112&psig=AOvVaw3mlhVRcseSdkaFXKRY-iMg&ust=1707518122302000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIDCuurmnIQDFQAAAAAdAAAAABAU'
                alt='Smaller Image'
                style={{ height: '50%', width: '50%' }}
            />       
        </Box>
        <Typography sx={{ fontSize: '16px', fontWeight: 'semiBold', marginTop: '25px' }}>
            How it works...
        </Typography> 
    </>
  )
}
