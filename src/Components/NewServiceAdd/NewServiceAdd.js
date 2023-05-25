import React, { useState, useEffect, useRef } from 'react';

import "./NewServiceAdd.css"

const NewServiceAdd = () => {
    const [addservice, setAddservice] = useState([])
    useEffect(() => {

        fetch("https://aqueous-savannah-68908.herokuapp.com/addnewservice")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAddservice(data)
                console.log(setAddservice(data))
            }
            )
    }, [])

    const placeRef = useRef()
    const imageRef = useRef()
    const priceRef = useRef()
    const descriptionRef = useRef()

    const handleAddNewService = (e) => {
        e.preventDefault();
        const place = placeRef.current.value;
        const image = imageRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const newBooking = { place, price, image, description }

        fetch("https://aqueous-savannah-68908.herokuapp.com/addnewservice", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("successfully post")
                    e.target.reset()
                }
            })
    }

    return (
        <div className='new__service__add'>

            <div className='new__service'>

                {
                    addservice.map(add =>

                        <div key={add._id} className='single__item__add'>
                            <img className='singleadd__img' src={add.image} alt='' />
                            <h2>{add.place}</h2>
                            <h3>{add.price}</h3>
                            <p>{add.description}</p>
                        </div>

                    )
                }
            </div>

This is a from for taking input from user or to add new post 

            <div className='sidebar__add__service'>
                <h2 className='add__title'>Add New Service</h2>
                <form onSubmit={handleAddNewService} className='post__form'>
                    <div>
                        <input className='post__input' type="file" ref={imageRef} placeholder='place image' />
                    </div>
                    <div>
                        <input className='post__input' type="text" ref={placeRef} placeholder='Place name' />
                    </div>
                    <div>
                        <input className='post__input' type="number" id="price" ref={priceRef} placeholder='price of booking' />
                    </div>

                    <div>
                        <textarea className='post__input' id="description" ref={descriptionRef} placeholder='Your description' />
                    </div>
                    <input className='post__input' type="submit" value="Add Service" />


                </form>

            </div>
        </div>
    )
}

export default NewServiceAdd
