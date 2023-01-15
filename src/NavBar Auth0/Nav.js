import React from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css"
import { useAuth0 } from '@auth0/auth0-react';


const Nav = () => {

  let {logout,isAuthenticated,user} = useAuth0();  // CALL THE logout METHOD FROM useAuth0

  return (

    <>
     <div className='nav'>
        <Link className='navs' to="/">Home</Link>
        <Link className='navs' to="/about">About</Link>
        <Link className='navs' to="/courses">Courses</Link>
        <li className='name'>{isAuthenticated && <p>Welcome, {user.name}</p>}</li>
        <button className='navs logout' onClick={() => logout()}>Log out</button>
     </div>

    </>
  )
}

export default Nav;
