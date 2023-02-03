import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Snackbar, Alert } from "@mui/material";

const theme = createTheme();

export default function SignIn({ setIsSignIn, handleClose, setUser }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isAlert, setAlert] = React.useState(false);
  const [status, setStatus] = React.useState("error");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const signin = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8003/signin", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      console.log("res:", res);
      setMessage(res.data.message);
      setStatus("success");
      setAlert(true);
      setTimeout(() => {
        handleClose();
      }, "3000");
      // handleClose();
    } catch (err) {
      console.log("err", err);
      setMessage(err.response.data.message);
      setStatus("error");
      setAlert(true);
    }
  };
  const clickLog = () => {
    if (email === "" || password === "") {
      setMessage(" Email eswel password hooson bna");
      return;
    }
    signin(email, password);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
            Sign in
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={changeEmail}
              // autoComplete="email"
              // autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={changePassword}
              // autoComplete="current-password"
            />

            <Button
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={clickLog}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  onClick={() => {
                    setIsSignIn(false);
                  }}
                >
                  Don't have an account? Sign Up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={isAlert}
          onClose={() => {
            setAlert(false);
          }}
          autoHideDuration={3000}
        >
          <Alert severity={status}>{message}</Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}
