import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.css"
import UseContext from '../ReactContext/UseContext'


const Header = () => {
     const {user,logOut}=UseContext()
    return (
        <div className='header'>
            <div className='header__logo'>
                <Link className='header__logo__link' to="/home">
                <h2>ভ্রমন বাসী</h2>
                </Link>
                
            </div>
            <div>
            <Link  className='header__link' to="/home">
            Home
            </Link>
            <Link className='header__link' to="/services">
            Services
            </Link>
            <Link  className='header__link' to="/mybooking">
            All Booking
            </Link>
            <Link to="/booking">
            My Booking
            </Link>
            <Link  className='header__link' to="/addservice">
            Add Service
            </Link   >
            
            <Link className='header__link' to="/contact">
            Contact Us
            </Link>
            {user?.email?
            <button onClick={logOut}>Logout</button>:
            
            <Link className='header__link' to="/login">
            Login
            </Link>
        } 
         <span>{user?.displayName}</span>
            
            
            </div>
        </div>
    )
}

export default Header


























