import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Discover = () => {
    return (
        <>
        <Container>
            <Grid container spacing={2} my={3} >
                <Grid item xs={12} md={6} lg={5} >
                    <Typography variant='h4' fontWeight={600} >Discover the world at your own pace</Typography>
                    <Typography>A monthly stay is perfect for working remotely, reuniting with family and friends, or just exploring the world again. <br/>
                    More properties are opening for monthly stays on Booking.com every day, so it’s easier than ever to get away for a while</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <img src='./img/intro.464cd011.jpg' style={{width: "100%"}}  />
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default Discover