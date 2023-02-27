import React from 'react'

function TestCards({ rating, name, imageSrc, review }) {
    return (
        <article className='testCard'>
            <section id='testCardRating'>
                <h3>{rating}</h3>
                <section id='testCardMid'>
                    <img src={imageSrc} alt="" />
                    <h3 id='testCardName'>{name}</h3>
                </section>
                <section id='testCardReview'></section>
                <p>{review}</p>
            </section>
        </article>
    )
}

export default TestCards