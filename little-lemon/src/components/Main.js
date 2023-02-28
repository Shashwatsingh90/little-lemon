import React from 'react';
import Button from './Button';
import salad from '../icons_assets/greek salad.jpg'
import bruschetta from '../icons_assets/bruchetta.svg'
import dessert from '../icons_assets/lemon dessert.jpg'
import Card from './Card';
import Testimonials from './Testimonials';
import About from './About'

const specials = [
    {
        id: 1,
        title: "Greek Salad",
        imageSrc: salad,
        blurb: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "$12.99",
    },
    {
        id: 2,
        title: "Bruschetta",
        imageSrc: bruschetta,
        blurb: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "$12.99",
    },
    {
        id: 3,
        title: "Lemon Dessert",
        imageSrc: dessert,
        blurb: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "$12.99",
    }
]

function Main() {
    return (
        <main className='main'>
            <section className='mainTop'>
                <h2>Specials</h2>
                <Button id='specialsButton'>See Specials</Button>
            </section>
            <section className='specialsCards'>
                {specials.map((special) => (
                    <Card
                        key={special.title}
                        title={special.title}
                        blurb={special.blurb}
                        imageSrc={special.imageSrc}
                        price={special.price}
                    />
                ))}
            </section>
            <section className='testimonials'>
                <h2 id='testHeader'>Testimonials</h2>
                <Testimonials />
            </section>
            <section className='about'>
                <About />
            </section>

        </main>
    )
}

export default Main