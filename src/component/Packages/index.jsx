import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CategoryList from './Category';
import MediaCard from '../../component/CardItem';


const Packages = () => {
  return (
    <Box sx={{my: 5, textAlign: "center"}}>
    <Typography variant='h2' fontWeight={600} >Packages</Typography>
    <CategoryList/>
    <MediaCard/>
    
    </Box>
  )
}

export default Packages