import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Link } from "@mui/material";

export default function Itmes(props) {
  return (
    <Grid container gap={1} columns={12} justifyContent="space-between">
      <Card sx={{ width: "500px", display: "flex" }}>
        <img
          src={props.img}
          style={{ width: "150px", padding: "10px", borderRadius: "20px" }}
        />
        <CardContent>
          <Typography variant="h5" color="text.secondary" fontSize={".5rem"}>
            {props.p}
          </Typography>
          <Typography
            variant="h3"
            fontSize={"1rem"}
            sx={{ my: 2, fontWeight: "600" }}
          >
            {props.title}
          </Typography>
          <Typography variant="body2">{props.text}</Typography>

          <Link href="Booking" underline="none" sx={{ m: 1 }}>
           <Button variant="contained" sx={{ m: 1 }} >Book now</Button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
}
