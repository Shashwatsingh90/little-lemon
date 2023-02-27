import React from 'react'
import aboutImage from '../icons_assets/restaurant chef B.jpg'

function About() {
    return (
        <section>
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </article>
            <article>
                <img src={aboutImage} alt="" />
            </article>
        </section>
    )
}

export default About