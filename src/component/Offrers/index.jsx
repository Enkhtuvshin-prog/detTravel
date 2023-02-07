import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Itmes from "./Items";
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
          {data.map((x) => (
            <Itmes title={x.title} img={x.img} p={x.p} text={x.text} />
          ))}
          </Box>
      </Grid>
    </Box>
  );
};

export default Offers;
