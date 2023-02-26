import React from "react";
import { Box, Container } from "@mui/system";
import ImgCard from "../../component/ImgCard";
import { Button, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import Offers from "../../component/Offrers";
import Service from "../../component/Services";
import Packages from "../../component/Packages";
import Banner from "../../component/Banner";
const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("/img/hero.png")`,
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
        <Typography variant="h2" fontWeight={500}>
          Explore {}
          <span style={{ color: "orange", fontWeight: "600" }}>
            <Typewriter
              words={["The World", "Your tour", "Our expreince"]}
              loop={false}
            />
          </span>
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ my: 3, fontWeight: 600 }}
        >
          Get in touch
        </Button>
        <Banner/>
      </Box>
      <Container>
        <ImgCard />
        <Offers />
        <Service />
        <Packages />
      </Container>
    </>
  );
};

export default Home;
