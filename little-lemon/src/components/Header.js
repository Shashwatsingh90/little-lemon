import React from 'react';
import headerImage from "../icons_assets/restauranfood.jpg";
import Button from './Button';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className='header'>
            <div className='header-left'>
                <h1>Little Lemon</h1>
                <h2 id='headerH2'>Chicago</h2>
                <h3 align='left'>This is a hand-crafted site built as a Capstone Project by T.C. Cox for Meta's Front-End Developer Professional Certification.</h3>
                <p>Some of the pages are skeletons to demonstrate the structure of a restaurant site.</p>
                <Link to='/booking'><Button>Reserve Now!</Button></Link>
            </div>
            <div className='header-right'>
                <img src={headerImage} alt="" />
            </div>
        </header>
    )
}

export default Header