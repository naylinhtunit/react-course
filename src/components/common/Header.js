import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='flex gap-4'>
            <NavLink className='link' to="/">Home</NavLink>
            <NavLink className='link' to="/about">About</NavLink>
        </nav>
    )
}

export default Header