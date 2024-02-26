import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function SinglePost({ postTitle, postContent }) {
  return (
    <Grid container spacing={1} sx={{ marginTop: '25px', width: '500px'}}>
      <Grid item xs={8} sx={{ borderRadius: '12px', textAlign: 'center', width: '100%' }}>
        <Typography sx={{ fontSize: '22px', fontWeight: 'semiBold', marginTop: '25px', fontFamily: "Assistant" }}>
          {postTitle}
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ backgroundColor: '#f2f0f0', borderRadius: '13px' }}>
        <Typography sx={{ fontSize: '13px', marginTop: '25px', fontFamily: "Assistant" }}>
          {postContent}
        </Typography>
      </Grid>
    </Grid>
  );
}
