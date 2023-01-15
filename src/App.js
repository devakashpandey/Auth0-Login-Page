import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Nav from './NavBar Auth0/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './NavBar Auth0/Home';
import About from './NavBar Auth0/About';
import Courses from './NavBar Auth0/Courses';
import Contact from './NavBar Auth0/Contact';
import Login from './NavBar Auth0/Login';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {

  let {user} = useAuth0();  // METHOD OF useAuth0

  return (
     <>
      <div className='main-div'>

      { !user ? <Login/> :
      
      <BrowserRouter>
      <Nav/>

      <div className='route-body'>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/courses" element={<Courses/>}/>
           <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>

 </BrowserRouter>
 
      }
      </div>
     </>
  )
}

export default App;
