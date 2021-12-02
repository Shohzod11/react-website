import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Img9 from '../images/img-9.jpg'
import Img2 from '../images/img-2.jpg'
import Img3 from '../images/img-3.jpg'
import Img4 from '../images/img-4.jpg'
import Img8 from '../images/img-8.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container' >
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem  
                            src={Img9}
                            text='Explore the hidden waterfall deep insidenthe Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem  
                            src={Img2}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem  
                            src={Img3}
                            text='Explore the hidden waterfall deep insidenthe Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem  
                            src={Img4}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem  
                            src={Img8}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;