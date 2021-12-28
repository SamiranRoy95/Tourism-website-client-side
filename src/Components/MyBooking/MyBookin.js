
import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./MyBooking.css"

const MyBooking = () => {
    const [booking,setBooking]=useState([])

useEffect(()=>{
fetch("http://localhost:5000/myorders")
.then(res=>res.json())
.then(data=>{
    setBooking(data)
})


},[])

const handleDeleteUser=id=>{
    fetch(`http://localhost:5000/myorders/${id}`,{
        method:"DELETE"
        
    })
    .then(res=>res.json())
    .then(data=>{
    if(data.deletedCount>0){
        alert("succesfully delete")
        const remainingBooking=booking.filter(b=>b._id!==id)
        setBooking(remainingBooking)
    }

    })
    
}


    return (
        <div className='my__booking__com'>
            <h2 className='mybooking__title'> My  Booking</h2>
            <div className='my__booking'>
            {
                booking.map(b=><div className='single__booking'>
                   <h3>Name:{b.name}</h3>
                   <h3>Addres:{b.addres}</h3>
                   <h3> Phone:{b.phone}</h3>
                   <h3>Opinion:{b.opinion}</h3>


                    {/* { <Link to={`/users/update/${b._id}`}>
                   <button>Update</button>
                   </Link> }
                     */}
                   <button onClick={()=>handleDeleteUser(b._id)}>Delete</button>
                   </div>
                   
                   )
            }
            </div>
            
        </div>
    );
};

export default MyBooking;