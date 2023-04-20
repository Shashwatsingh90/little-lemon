import React from 'react';
import logo from '../icons_assets/Logo.svg'
import { NavLink, Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='nav'>
            <img src={logo} alt="" />
            <ul>
                <li><Link to='/'>Home Page</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><NavLink to='/booking'>Reservations</NavLink></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/order'>Order Online</Link></li>
                <li><Link to='/design'>Design</Link></li>
            </ul>
        </nav>
    )
}

export default Nav