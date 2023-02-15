import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { UserContext } from "../../../App";

export default function SignUp({ setIsSignIn }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [message, setMessage] = useState("");
  const [isAlert, setAlert] = useState("");
  const [status, setStatus] = useState("error");
  // const { setUser } = React.useContext(UserContext);
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeRePassword = (e) => {
    setRePassword(e.target.value);
  };
  const signup = async () => {
    if (!email || !name || !password || !rePassword) {
      setMessage("Мэдээллийг бүрэн бөглөнө үү");
      setAlert(true);
      return;
    }
    if (password !== rePassword) {
      setMessage("Нууц үг хоорондоо таарахгүй байна!!!");
      setAlert(true);
      return;
    }
    try {
      const res = await axios.post("http://localhost:8003/signup", {
        name,
        email,
        password,
      });
      setMessage(res.data.message);
      setStatus("success");
      setAlert(true);
      setIsSignIn(true);
    } catch (error) {
      setStatus("error");
      setAlert(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar
        open={isAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={() => {
          setAlert(false);
        }}
      >
        <Alert severity={status}>{message}</Alert>
      </Snackbar>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={changeName}
                // autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={changeEmail}
                // autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={changePassword}
                // autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="repassword"
                label="Password"
                type="password"
                id="password"
                onChange={changeRePassword}
                // autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              /> */}
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={signup}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                variant="text"
                onClick={() => {
                  setIsSignIn(true);
                }}
              >
                Already have an account? Sign in
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
