import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

   let navigate = useNavigate()
   
   let goHome = () =>{
     navigate("/")
   }

  return (
     <>
      <div className='home-div'>
        <h1>WELCOME TO THE <span>CONTACT</span> SECTION</h1>
           <div className='boxes'>
           <h3>Contact </h3>
           <p>This is my contact page. Welcome</p>
           <a href="#">Read more</a>
           </div>

           <button onClick={goHome}>Go To Home</button>

        </div>
     </>
  )
}

export default Contact
