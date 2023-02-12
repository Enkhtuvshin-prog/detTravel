import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GradeIcon from '@mui/icons-material/Grade';
import { service } from './data';
const Service = () => {
    return (
        <Box sx={{textAlign: "center", margin:1}}>
        <Box>
            <Typography variant='h3'>Our Services</Typography>
        </Box>
            <Grid container spacing={1} justifyContent= "center" marginY={2}>
                {
                    service.map((x) =>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card sx={{ minWidth: 275, margin: "auto", padding:1 }}>
                            <GradeIcon sx={{color: "#009688"}}/>
                                <CardContent>
                                    <Typography variant='h3' sx={{ fontSize: "1.5rem" }}  >
                                      {x.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                    Our unique matching system lets you find just the tour you want for your next holiday.
                                    </Typography>                            
                                </CardContent>
                                
                            </Card>

                        </Grid>
                    )
                }
                

            </Grid>

        </Box>
    )
}

export default Service