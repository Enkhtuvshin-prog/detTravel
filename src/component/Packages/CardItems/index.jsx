import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link,Grid, Box, CardActionArea, CardActions } from '@mui/material';
// import { cards } from './data';
import axios from 'axios';

const CardItems = () => {
  const [isTravel, setIsTravel] = useState([]);
  const getTravels =async()=>{
    try{

      const res = await axios("http://localhost:8003/travel")
      console.log("getTravel:", res.data.data.travel );
      setIsTravel(res.data.data.travel)
    }catch(err){
      console.log(err);
    }
  }
  getTravels();
  return (
    <Box>
      <Grid container spacing={1}>
        {
          isTravel.map((x) =>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={x.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     {x.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {x.text}
                    </Typography>
                    <Typography>{x.price}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href='/Detail'  size="small" color="primary">
                    {x.btn}
                  </Link>
                </CardActions>
              </Card>

            </Grid>)
        }

      </Grid>
    </Box>
  )
}

export default CardItems