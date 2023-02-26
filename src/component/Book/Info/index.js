import { Grid, Typography } from '@mui/material'
import React from 'react';
import { Box } from '@mui/material';
import { Container, fontSize } from '@mui/system';

const Info = () => {
    return (
        <Box sx={{ my:3, textAlign: "center", backgroundColor: "#f5f5f5", color: "#263238" }}>
            <Container>
                <Box py={3}>
                    <Typography variant='h3' fontWeight={600} fontSize={"2rem"} >
                        Why book your monthly stay on Universe.com
                    </Typography>
                </Box>
                <Grid container spacing={2} py={4}>
                    <Grid item xs={12} md={4} lg={4}>
                        <Typography variant='h4' fontWeight={600}>Save more by staying longer</Typography>
                        <Typography>Some properties on Booking.com now offer reductions on monthly stays, meaning you can save more when you stay longer.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                    <Typography variant='h4' fontWeight={600}>Flexible stays</Typography>
                        <Typography>Travel plans change – so can your bookings. Enjoy peace of mind when you book a property with free cancellation and flexible check-in</Typography>

                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                    <Typography variant='h4' fontWeight={600}>Over 900,000 properties</Typography>
                        <Typography>
Choose from homes, hotels, and everything in between. Rely on verified guest reviews to pick a place you can call home.</Typography>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Info