import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {

  let { loginWithRedirect } = useAuth0() // EXTRACT THE useAuth0 METHOD/FUNC

  return (
    <>
    <div className='home-div'>
    
    <h1>THIS IS <span>LOGIN</span> SECTION</h1>
    <h2>Login Here</h2>
    <button className='loginbtn' onClick={() => loginWithRedirect() }>LOG IN</button>
    </div>
    </>
  )
}

export default Login;
