import React from 'react';
import logo from '../icons_assets/Logo.svg'
import { Link } from 'react-router-dom';
import BookingPage from './BookingPage';
import About from './About'
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import Login from './Login';

function Nav() {
    return (
        <nav className='nav'>
            <img src={logo} alt="" />
            <ul>
                <li><Link to='/'>Home Page</Link></li>
                <li><Link to={About}>About</Link></li>
                <li><Link to='/booking'>Reservations</Link></li>
                <li><Link to={Menu}>Menu</Link></li>
                <li><Link to={OrderOnline}>Order Online</Link></li>
                <li><Link to={Login}>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav