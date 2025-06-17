import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    return (
    <div className='flex item-center justify-betweeen text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className = 'w-44 cursor-pointer'src={assets.logo} alt=''/>
      <ul className='hidden md:flex items-start gap-font-medium'>
        <NavLink to="/">
            <li>HOME</li>
                <hr />
        </NavLink>
        <NavLink to="/doctors">
            <li>ALL DOCTORS</li>
                <hr />
        </NavLink>
        <NavLink to="/aboutus">
            <li>ABOUT US</li>
                <hr />
        </NavLink>
        <NavLink to="/contact">
            <li>CONTACT</li>
                <hr />
        </NavLink>
        </ul>
        <div>
            <button>
                Create account
            </button>
        </div>
    </div>
  )
}

export default Navbar

