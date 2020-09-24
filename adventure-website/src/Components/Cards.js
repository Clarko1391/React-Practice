import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='images/img-2.jpg'
                            text='Travel through the islands of Bali in a private cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/img-3.jpg'
                            text='Witness amazing marine wildlife on a boat tour of the Atlantic'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='images/img-4.jpg'
                            text='Soccer on an island?! You best believe it!'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='images/img-5.jpg'
                            text='Take in some culture at the Royal Theatre in New York'
                            label='Culture'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
