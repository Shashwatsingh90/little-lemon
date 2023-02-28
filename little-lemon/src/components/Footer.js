import React from 'react'
import footerImg from '../icons_assets/restaurant.jpg'

function Footer() {
    return (
        <footer className='footer'>
            <img src={footerImg} alt="" />
            <article>
                <h3>Navigation</h3>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservations</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </article>
            <article>
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </article>
            <article>
                <h3>Social Media</h3>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">LinkedIn</a></li>
                </ul>
            </article>
        </footer>
    )
}

export default Footer