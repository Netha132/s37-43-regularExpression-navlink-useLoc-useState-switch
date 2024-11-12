import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='navBar'>
    <NavLink className='navLink' to='/home'>Home</NavLink>
    <NavLink className='navLink' to='/services'>Services</NavLink>
    <NavLink className='navLink' to='/support'>Support</NavLink>
    <NavLink className='navLink' to='/'>Logout</NavLink>
  
</nav>
  )
}

export default Navigation
