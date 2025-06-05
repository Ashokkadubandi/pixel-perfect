import React from 'react'
import { FaCamera } from "react-icons/fa6";
import '../styles/home.css'

const Home = () => {
  return (
    <div className='layout'>
      <div className='home-container'>
        <p className='home-settings-header'>Account settings</p>
        <div className='profile-intro-card'>
          <div className='profile-short-desc-con'>
            <div className='profile-container'>
              <img className='profile-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s'/>
              <p className='profile-img-upload'>
                <FaCamera/>
              </p>
            </div>
            <div className='profile-text-container'>
              <h3>John Doe</h3>
              <p>John@Gmail.com</p>
            </div>
          </div>
          <p className='profile-desc-home'>Pixel to pixel is a precision-driven visual project designed to 
            replicate and manipulate imagery at the individual pixel level.
          </p>
          <hr className='hr-dashed'/>
          <hr className='hr-dashed hr-dashed-bottom'/>
        </div>
      </div>
    </div>
  )
}

export default Home
