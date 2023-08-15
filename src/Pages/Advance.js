import React from 'react'
import "../CSS/Advance.css";
import brand from "../images/icon-brand-recognition.svg";
import record from "../images/icon-detailed-records.svg"
import fully from "../images/icon-fully-customizable.svg";



const Advance = () => {
  return (
    <div className='advance'>

            <h1>Advance Statistics</h1>
            <div className='center'>
            <p className='para'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>



        <div className='cards'>
            <div className='one card'>
                <div className='img'>
                    <img src={brand} alt='brand' />
                </div>
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
            </div>
            <div className='two card'>
            <div className='img'>
                    <img src={record} alt='brand' />
                </div>
                <h3>Detailed Records</h3>
                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions..</p>
            </div>
            <div className='three card'>
                <div className='img'>
                <img src={fully} alt='fully' />
                </div>
                <h3>Fullu Customizable</h3>
                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
        </div>
    </div>
  )
}

export default Advance ;