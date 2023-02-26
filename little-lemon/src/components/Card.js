import React from 'react'


function Card({ title, blurb, imageSrc, price }) {
    return (
        <article className='card'>
            <img src={imageSrc} alt="" />
            <section className='cardText'>
                <article className='cardLabel'>
                    <h3>{title}</h3>
                    <h3 id='price'>{price}</h3>
                </article>
                <p>{blurb}</p>
            </section>
        </article>
    )
}

export default Card