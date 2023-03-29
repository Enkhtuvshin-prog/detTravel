import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link, Grid, Box, CardActionArea, CardActions, Button } from "@mui/material";
// import { cards } from './data';
import axios from "axios";
import HalfRating from "../../Rating";
const CardItems = () => {
  const [isTravel, setIsTravel] = useState([]);
  const getTravels = async () => {
    try {
      const res = await axios.get("http://localhost:8000/travel");
      console.log("getTravel===", res.data.travel);
      setIsTravel(res.data.travel);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("Worked");
    getTravels();
  }, []);
  return (
    <Box>
      <Grid container spacing={1} >
        {isTravel.map((x) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, height: 420 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={x.images}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {x.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {x.detail}
                  </Typography>
                  <Typography>{x.price}</Typography>
                </CardContent>
              </CardActionArea>
              <Box sx={{display:"flex", justifyContent:"flex-end", p:1}}>
                <HalfRating/>
                <Typography>4.7</Typography>
              </Box>
              <CardActions sx={{display: "flex", justifyContent:"space-between"}}>
                <Link href="/Detail" size="small" color="primary">
                  READ MORE
                </Link>
                <Button>+Add</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardItems;
