import { Box } from '@mui/system';
import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Login = ( {handleClose, setUser} ) => {
    const [isSignIn, setIsSignIn]= useState(true)
  return (
   <>
   <Box sx={{ backgroundColor: "#fff", width: 400, height: 600, top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', position: 'absolute', }} >
        {
            isSignIn ? (<SignIn setIsSignIn={setIsSignIn} setUser={setUser} handleClose={handleClose} /> ) : ( <SignUp setIsSignIn={setIsSignIn}  setUser={setUser} /> )
        }
   </Box>
   </>

 
  )
}

export default Login