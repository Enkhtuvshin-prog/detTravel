import * as React from 'react';
import {Button, Grid} from '@mui/material';
import TextField from '@mui/material/TextField';

export default function ContactText() {
  return (
    <Grid container spacing={1}
      component="form"
      sx={{
        justifyContent: "center",
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <Grid item xs={12} sm={12} md={6} lg={5}>
      <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width: "100%"}} />
    </Grid>
    <Grid item xs={12} sm={12} md={5} lg={5}>
      <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width: "100%"}} />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={5}>
      <TextField id="outlined-basic" label="Phone" variant="outlined" sx={{width: "100%"}} />
    </Grid>
    <Grid item xs={12} sm={12} md={3} lg={3}>
      <TextField id="outlined-basic" label="From" variant="outlined" sx={{width: "100%"}} />
    </Grid>
    <Grid item xs={12} sm={12} md={2} lg={2}>
      <TextField id="outlined-basic" label="To" variant="outlined" sx={{width: "100%"}} />
    </Grid>
    <Button variant='contained' sx={{alignItems: "start"}} >Send Request</Button>
    </Grid>
  );
}

