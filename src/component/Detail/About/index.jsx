import { Grid, Typography, Box } from "@mui/material";
import React from "react";
 
const About =()=>{
return (
    < Box sx={{display: "block", marginTop: "50px"}}>
    <Box>
        <Typography variant="h3">About</Typography>
    </Box>
    <hr />
    <Grid container spacing={2}>
        <Grid item xs={6}>
            <Box>
                <Typography variant="h2"> 4.0</Typography>
            </Box>
            <Typography>
            A space designed for you all to enjoy an unforgettable holiday, with exclusive facilities and services for every single member of your family.Our facilities include a water theme park with slides, a brand new children’s recreation area, a children’s club, entertainment and activities for the whole family, an exclusive snack bar and a pool bar.
            </Typography>

        </Grid>

    </Grid>

    </Box>
)
}
export default About;