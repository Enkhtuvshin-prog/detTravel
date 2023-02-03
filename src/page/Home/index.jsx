import React from 'react';
import { Box } from '@mui/system';

const Home = () => {
  return (
    <>
    <Box  sx={{
      backgroundImage: `url("/img/hero.png")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // height: "calc(100vh - 100px)",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      fill: "linearGradient rgba(255, 255, 255, 0)",
      height: "90vh",
      with: "100%"
    }} >

    </Box>
   
    </>
  )
}

export default Home