import React from 'react'

const Navbar = () => {
  return (
    <div className='navContainer'>
        <div className='logoContainer'>
          <img className='pic' src='/pictures/pic.png'/>
        </div>
        <div className="menuContainer">
          <ul>
              <li>Home</li>
              <li>about</li>
              <li>offer</li>
              <li>menu</li>
              <li>team</li>
              <li>gallery</li>
              <li>blog</li>
              <li>contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar