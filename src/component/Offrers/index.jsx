import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import CardItem from "./CardItem";
import { data } from "./data";

const Offers = () => {
  return (
    <Box my={7}>
      <Typography variant="h4" fontWeight="600">
        Offers
      </Typography>
      <Grid container>
        <Box  sx={{
            display: "flex",
            marginTop: "5%",
            gap: "30px",
            overflowX: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }} >
        {/* <Slider {...settings}> */}
          {data.map((x) => (
            <CardItem title={x.title} img={x.img} p={x.p} text={x.text} />
          ))}
          </Box>
        {/* </Slider> */}
      </Grid>
    </Box>
  );
};

export default Offers;
