import React from 'react'
import { useNavigate  } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='d-flex flex-column align-items-center justify-content-center home'>
        <h4>Welcome to Home Page of Checker</h4>
        <button className='btn btn-primary' onClick={()=> navigate('/register')} >Log Out</button>
    </div>
  )
}
export default Home;
