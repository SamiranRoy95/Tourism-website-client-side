import React, { useState, useEffect , useRef} from 'react'
import { useParams } from 'react-router'

import "./SinglePost.css"

const SinglePost = () => {
    const nameRef=useRef()
    const addresRef=useRef()
    const phoneRef=useRef()
    const opinionRef=useRef()

    const [post, setPost] = useState({})
    
    
    const { singlepostid } = useParams()
    useEffect(() => {
        fetch("http://localhost:5000/homeservice")
            .then(res => res.json())
            .then(data => {
               
                const singleData = data.find(post => post._id == singlepostid)
                setPost(singleData)
            })

    },[])





    

    const handleAdd=(e)=>{
        e.preventDefault();
        const name=nameRef.current.value;
        const addres=addresRef.current.value;
        const phone=phoneRef.current.value;
        const opinion=opinionRef.current.value;
        const newBooking={name,addres,phone,opinion}

        fetch("http://localhost:5000/myorders",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newBooking)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("successfully post")
                e.target.reset()
            }
        })


    }
    
    return (
        <div className='single__post_com'>




            <div className='single__post'>
                <img className='singlepost__img' src={post.image} alt='' />
                <h2>{post.place}</h2>
                <h3>{post.price}</h3>
                <p>{post.description}</p>
            </div>
            

            <div className='sidebar__for__booking'>
                <h2 className='order__title'>Please Book Now</h2>
                <form onSubmit={handleAdd} className='post__form'>
                    <div>
                        <input className='post__input' type="text" ref={nameRef} placeholder='Your name' />
                    </div>
                    <div>
                        <input className='post__input' type="number" id="phone" ref={phoneRef} placeholder='Your mobile number' />
                    </div>
                    <div>
                        <input className='post__input' type="text" id='addres' ref={addresRef} placeholder='Your addres' />
                    </div>
                    <div>
                        <textarea className='post__input' id="description" ref={opinionRef} placeholder='Your opinion' />
                    </div>
                    <input className='post__input' type="submit" value="Book now" />





                </form>

            </div>
        </div>
    )
}

export default SinglePost
