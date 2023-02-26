import React from 'react';
import headerImage from "../icons_assets/restauranfood.jpg";
import Button from './Button';


function Header() {
    return (
        <header className='header'>
            <div className='header-left'>
                <h1>Little Lemon</h1>
                <h2 id='headerH2'>Chicago</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button>Reserve Now!</Button>
            </div>
            <div className='header-right'>
                <img src={headerImage} alt="" />
            </div>
        </header>
    )
}

export default Header