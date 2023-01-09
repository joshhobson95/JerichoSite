import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>

    <img className="logo" src='https://www.jerichonursery.com/wp-content/uploads/2020/12/WideLogoGlow-1920x482-1.png' alt='widelogo'/>
    {/* <img src='https://www.jerichonursery.com/wp-content/uploads/2023/01/2022-BOC-Top5x320.png ' alt='bestof' /> */}

        <div className='links'>
            <p className='homelink'>Home</p>
            <p className='specials'>Specials</p>
            <p className='products'>Products</p>
            <p className='blog'>Blog</p>
            <p className='gallery'>Gallery</p>
            <p className='aboutus'>About Us</p>
        </div>
 
    </div>
  )
}

export default Header