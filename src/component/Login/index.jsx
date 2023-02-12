import { Box } from '@mui/system';
import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Login = (  ) => {
    const [isSignIn, setIsSignIn]= useState(true)
  return (
   <>
   <Box sx={{ backgroundColor: "#fff", width: 400, height: 600, top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', position: 'absolute', }} >
        {
            isSignIn ? (<SignIn setIsSignIn={setIsSignIn} /> ) : ( <SignUp setIsSignIn={setIsSignIn}  /> )
        }
   </Box>
   </>

 
  )
}

export default Login
//{handleClose, setUser}