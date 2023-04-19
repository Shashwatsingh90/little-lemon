import React from 'react';
import headerImage from "../icons_assets/restauranfood.jpg";
import Button from './Button';


function Header() {
    return (
        <header className='header'>
            <div className='header-left'>
                <h1>Little Lemon</h1>
                <h2 id='headerH2'>Chicago</h2>
                <p align='left'>This is a hand-crafted site built as a Capstone Project by T.C. Cox for Meta's Front-End Developer Professional Certification.</p>
                <p>Some of the pages are simply skeletons to demonstrate the structure of a restaurant site.</p>
                <Button>Reserve Now!</Button>
            </div>
            <div className='header-right'>
                <img src={headerImage} alt="" />
            </div>
        </header>
    )
}

export default Header