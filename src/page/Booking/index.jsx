import React from 'react';
import { Typography, Button } from '@mui/material';
import { Box, Container  } from '@mui/system';
import Banner from '../../component/Banner';
import Discover from '../../component/Book/Discover';
import Info from '../../component/Book/Info';
import CardItems from '../../component/Packages/CardItems';
const Booking = () => {
  return (
    <Box id="Booking">
    <Box
        sx={{
          backgroundImage: `url("/img/kolll.avif")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // height: "calc(100vh - 100px)",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          fill: "linearGradient rgba(255, 255, 255, 0)",
          height: "90vh",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          color: "#fff",
          fontSize: "2rem",
        }}
      >
        <Typography variant="h4">
          A Team of professional travel expert
        </Typography>
        <Button
          variant="contained"
          sx={{ my: 3, fontWeight: 600 }}
        >
          Get in touch
        </Button>
        <Banner/>
      </Box>
        <Discover/>
        <Info/>
        <Container sx={{my:3}} >
          <Typography  variant='h4' py={2} >Discover somewhere new</Typography>
        <CardItems/>
        </Container>
    </Box>
  )
}

export default Booking