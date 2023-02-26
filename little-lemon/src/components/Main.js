import React from 'react';
import Button from './Button';
import salad from '../icons_assets/greek salad.jpg'
import bruschetta from '../icons_assets/bruchetta.svg'
import dessert from '../icons_assets/lemon dessert.jpg'
import Card from './Card';

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

    // const specialsMap = specials.map((special) => {

    //     const specialTitle = special.title
    //     const specialImg = special.imageSrc
    //     const specialBlurb = special.blurb
    //     return <Card
    //         title={specialTitle}
    //         imageSrc={specialImg}
    //         blurb={specialBlurb}
    //     ></Card>
    // })
    return (
        <main className='main'>
            <section className='mainTop'>
                <h2>Specials</h2>
                <Button>See Specials</Button>
            </section>
            <div className='specialsCards'>
                {specials.map((special) => (
                    <Card
                        key={special.title}
                        title={special.title}
                        blurb={special.blurb}
                        imageSrc={special.imageSrc}
                        price={special.price}
                    />
                ))}
            </div>
        </main>
    )
}

export default Main