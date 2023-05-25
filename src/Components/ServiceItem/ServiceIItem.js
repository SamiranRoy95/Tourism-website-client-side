import React from 'react'
import { Link } from 'react-router-dom';
import "./serviceItem.css";

const ServiceIItem = (props) => {
    const {_id, image, description, place, price } = props.service;
    return (
        <div>
            <div className='service__item'>
                <img className='service__img' src={image} alt='' />
                <p> Place:{place}</p>
                <p> Price:{price}</p>
                <p>{description}</p>
                <Link className='link__title' to={`/singlepost/${_id}`} >

                <p className='book__btn'>Book Now</p>
                </Link>
                
            </div>

        </div>
    )
}

export default ServiceIItem
