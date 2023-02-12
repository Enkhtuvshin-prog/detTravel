import { Typography, Grid } from '@mui/material'
import React from 'react';
import { info } from './data';

const Info = () => {
  return (
    <>
        { info.map((x)=>
    <Grid container spacing={1} sx={{color: "gray", m: 2}} >
        <Grid Item xs={12} sm={4} md={4} lg={4}>
            <Typography variant='h5' >{x.title}</Typography>
        </Grid>
        <Grid Item xs={12} sm={8} md={7} lg={8}>
            <Typography> {x.text} </Typography>
        </Grid>
    </Grid>
        )}


    </>
  )
}

export default Info