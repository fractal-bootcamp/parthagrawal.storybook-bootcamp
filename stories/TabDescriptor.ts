import React, { useState } from "react";
import './tabDescriptorCard.css';


//I create the dummy data array

export const card = [
    {
        name: "Nicki",
        image: "Image",
        description: "WA 28-year-old software engineer who loves AI, hiking, and sci-fi novels. Enjoys traveling and trying new recipes.",
    },
    {
        name: "Jake",
        title: "Image",
        description: "A 35-year-old graphic designer who creates digital art, plays guitar, and practices yoga. Tech and gaming enthusiast.",
    },
    {
        name: "Akame",
        title: "Image",
        description: "Akame loves dogs, etc blablabla",
    },
  ];


//component Card, takes card props and deploy them in html format.

const Card = ({image, name, description}) => {
    return (
        <div className='Card'>
            <div className="image-cropper">
                <img className='image-card' src={card.image} alt={card.name} />
            </div>
            <h2 className='text-card'>{card.description}</h2>
        </div>
    );
}


//the component TabDescriptor

const TabDescriptor = (card) => {
    const [cards, setSelectedCard] = useState(card[0]);

    const displayCard = (index) => {
        setSelectedCard(card[index]);
    };

    return (
        <div>
            <nav className='display-row'>
                {cards.map((card, index) => (
                    <button key={index} onClick={() => displayCard(index)}>{card.name}</button>
                ))}
            </nav>
            <Card card={selectedCard} />
        </div>
    );
};

export default TabDescriptor;
