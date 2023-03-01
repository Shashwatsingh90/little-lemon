import React from 'react';
import testImg from '../icons_assets/Mario and Adrian A.jpg'
import TestCards from './TestCards';


const testimonials = [{
    id: 1,
    name: "Joe",
    rating: 5,
    imageSrc: testImg,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
},
{
    id: 2,
    name: "Sally",
    rating: 5,
    imageSrc: testImg,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
},
{
    id: 4,
    name: "Jack",
    rating: 5,
    imageSrc: testImg,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
},
{
    id: 5,
    name: "T-800",
    rating: 5,
    imageSrc: testImg,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
}
]

function Testimonials() {
    return (
        <section id='testimonials'>
            {testimonials.map((testimonial) => (
                <TestCards
                    key={testimonial.id}
                    rating={testimonial.rating}
                    imageSrc={testimonial.imageSrc}
                    name={testimonial.name}
                    review={testimonial.review}
                />
            ))}
        </section>
    )
}

export default Testimonials