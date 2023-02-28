import React from 'react'
import aboutImage from '../icons_assets/restaurant chef B.jpg'
import aboutImageTwo from '../icons_assets/Mario and Adrian A.jpg'

function About() {
    return (
        <section id='about'>
            <article id='aboutLeft'>
                <h1 id='aboutTitle'>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </article>
            <article id='aboutMid'>
                <img id='aboutImgOne' src={aboutImage} alt="" />

            </article>
            <article id='aboutRight'>
                <img id='aboutImgTwo' src={aboutImageTwo} alt="" />
            </article>
        </section>
    )
}

export default About