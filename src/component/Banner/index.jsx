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
            <Grid container spacing={2}   paddingLeft={0} paddingTop={0}   sx={{ width: "85vw", margin: "0 auto",  backgroundColor:"#fff", alignItems:"center", textAlign: "center" ,  padding:0 }} >
                <Grid item xs={12} md={4} lg={4} paddingLeft={0} paddingTop={0}  sx={{
                     border: "2px orange solid",
                     textAlign: "center",
                     padding: 0
                }}>
                  <GoogleMaps/>
                </Grid>
                <Grid item xs={12} md={4} lg={3}  paddingLeft={0} paddingTop={0}   sx={{
                     border: "2px orange solid",
                     padding: 0
                }}>
                    <Box sx={{display: "flex"}} >
                    <CalendarMonthIcon sx={{color:"#000"}} />
                     <DatePicker/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={2} lg={3}  paddingLeft={0} paddingTop={0}  sx={{
                     border: "2px orange solid",
                     color: "#000",
                     textAlign: "center",
                     display: "flex",
                     
                }}>
                    <span><PermIdentityIcon  /></span><Typography  >adult - children - rooms </Typography>
                </Grid>

                <Grid item xs={12} md={2} lg={2}  paddingLeft={0} paddingTop={0}  sx={{
                     border: "2px orange solid",
                     width:"100%"
                }}>
                    <Button variant='contained' width={"100%"}  sx={{display:"block"}} >Search</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Banner