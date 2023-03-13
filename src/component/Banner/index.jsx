import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import "./style.scss";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import GoogleMaps from './GoogleMap';
import DatePicker from './Calendar';



const Banner = () => {
    return (
        <Box >
            <Grid container spacing={0} sx={{ width: "85vw", margin: "0 auto",  backgroundColor:"#fff", alignItems:"center", textAlign: "center"   }} >
                <Grid item xs={12} md={4} lg={4}   sx={{
                     border: "3px orange solid",
                     height: "10vh"
                }}>
                  <GoogleMaps  />
                </Grid>
                <Grid item xs={12} md={4} lg={3}  sx={{
                     border: "3px orange solid",
                     height: "10vh"
                }}>
                    <Box sx={{display: "flex"}} p={"10px"} >
                    <CalendarMonthIcon sx={{color:"#000"}} />
                     <DatePicker/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={2} lg={3}   sx={{
                     border: "3px orange solid",
                     color: "#000", 
                     height:"10vh"                           
                }}>
                    <Box
                    p={"10px"}
                    sx={{
                     display: "flex", 
                     
                    }}>

                    <span><PermIdentityIcon /></span><Typography  >adult - children - rooms </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={2} lg={2}   sx={{
                     border: "3px orange solid",
                     height: "10vh",
                     width:"100%"
                }}>
                    <Button variant='contained'  width={"100%"}  display={"inline"}>Search</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Banner