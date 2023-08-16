import React from 'react'
import "../CSS/Home.css";
import desktop from "../images/illustration-working.svg"

const Home = () => {
  return (
    
    <div className='home'>
        <div className='left'>
            <h1>More than just shorter links</h1>
            <p>Build your brand recognition and get detailed insights on how your links are performing.</p>
            <button className='button'>Get Started</button>
        </div>
        <div className='right'>
            <img src={desktop} alt='' />
        </div>
    </div>
  )
}

export default Home ;
