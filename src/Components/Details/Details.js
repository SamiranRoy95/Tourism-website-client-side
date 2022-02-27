import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const [post,setPost]=useState({})
    const {id}=useParams()

    useEffect(() => {
        fetch(`http://aqueous-savannah-68908.herokuapp.com/addnewservice/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // 
                
                setPost(data)
                // console.log(setAdd)
            })

    },[])

    return (
        <div>
          
            <img src={post.image}/>
            <p>{post.place}</p>
            <p>{post.price}</p>
            <p>{post.description}</p>
            
        </div>
    )
}

export default Details
