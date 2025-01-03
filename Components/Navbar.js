import React from 'react'
import { LOGO } from '../Constant/Logo'

const Navbar = () => {
  return (
 
      <nav>
       <img src={LOGO} alt="" />
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
