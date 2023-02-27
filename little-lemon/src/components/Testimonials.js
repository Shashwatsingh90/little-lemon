import React from 'react';
import recent from '../icons_assets/Recent.svg'
import TestCards from './TestCards';


const testimonials = [{
    id: 1,
    name: "Joe",
    rating: 5,
    imageSrc: recent,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat exercitationem quam saepe iste beatae sit excepturi?'
},
{
    id: 2,
    name: "Sally",
    rating: 5,
    imageSrc: recent,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat exercitationem quam saepe iste beatae sit excepturi?'
},
{
    id: 4,
    name: "Jack Skellington",
    rating: 5,
    imageSrc: recent,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat exercitationem quam saepe iste beatae sit excepturi?'
},
{
    id: 2,
    name: "T-800",
    rating: 5,
    imageSrc: recent,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat exercitationem quam saepe iste beatae sit excepturi?'
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