import { Grid, Typography, Box, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
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
    <Container>
    <Box sx={{ marginTop: -20,  }}>
      <Typography variant="h3" sx={{color: "white", fontWeight: "600", m:2}} >Top vacation</Typography>


      <Grid  sx={{ gap: "15px", justifyContent: "center" }} >
        <Box sx={{
          display: "flex",
          gap: "30px",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}>
          {
            data.map((data) =>
              // <Grid item xs={12} sm={12} md={4} lg={3} sx={{ position: "relative", mx: "20px", textAlign:"center",  }}>
              <Box>
                <Box>
                  <img
                    src={data.img}
                    style={{ height: 350 }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                    position: "absolute",
                    bottom: "10px",
                    textAlign: "center",
                    ml: 5,
                  }}
                >
                  {data.title}
                </Typography>
              </Box>
              // </Grid>
            )
          }
        </Box>

      </Grid>
    </Box>
    </Container>
  );
};

export default index;
