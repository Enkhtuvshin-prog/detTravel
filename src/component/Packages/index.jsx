import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MediaCard from '../../component/CardItem';


const Packages = () => {
  return (
    <Box sx={{my: 5, textAlign: "center"}}>
    <Typography variant='h2' fontWeight={600} >Packages</Typography>
    <MediaCard/>
    
    </Box>
  )
}

export default Packages