import React from 'react';
import { useState, useEffect } from 'react';

import "./Services.css";


const Services = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // const singleData=data.find(post=>post.id==moreid)
                setPosts(data)
            })


    },[])

    return (
        <div>
            <h1 className='service__title'>Our other service</h1>

            <div className="whole__services">
                {
                    posts.map(post => <div>
                        <div className='service__item'>
                            <img className='service__img' src={post.image} alt=''/>
                            <p>Place:{post.place}</p>
                            <p> Price:{post.price}</p>
                            <p>Date:{post.date}</p>
                            <p>description{post.description}</p>
                            
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Services;
