import { Grid, Typography, Box, ThemeProvider } from "@mui/material";
import React from "react";

// const theme = {
//   borderRadius: {
//     borderRadius: "20px",
//   },
// };
const data = [
  { title: "Ballon flights", img: "./img/ball.jpg" },
  { title: "Moutian Holiday", img: "/img/ool.jpg" },
  { title: "Beach Holidays", img: "/img/bbb.jpg" },
];
const index = () => {
  return (
    <Grid container spacing={1} sx={{marginTop: -20, gap:"15px", textAlign:"center"}} >
      {
        data.map((data)=>      
    <Grid item xs={12} sm={12} md={4} lg={3} sx={{ position: "relative", mx: "20px" }}>
      <Box sx={{
         display: "flex",
         gap: "30px",
            overflowX: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },}}>
      <Box>
        <img
          src={data.img}
          style={{ height: 350}}
        />
      </Box>
      <Typography
        variant="h5"
        sx={{
          color: "#fff",
          position: "absolute",
          bottom: "20px",
          textAlign: "center",
          ml: 5,
        }}
      >
        {data.title}
      </Typography>
      </Box>
    </Grid>
      )
    }
    </Grid>
  );
};

export default index;
