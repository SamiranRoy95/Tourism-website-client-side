import React ,{useState,useEffect}from 'react'
import UseContext from '../ReactContext/UseContext'

const Booking = () => {
const [booking,setBooking]=useState([])
const {user}=UseContext();

useEffect(()=>{
    fetch(`https://fathomless-forest-96543.herokuapp.com/myorders?name=${user.email}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
       
        setBooking(data)
    })
    
    
    },[])
    const handleDeleteUser=id=>{
        fetch(`https://fathomless-forest-96543.herokuapp.com/myorders${id}`,{
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
        <div>
            <div className='my__booking__com'>
            <h2 className='mybooking__title'> My  Booking</h2>
            <div>{user.email}</div>
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

            
        </div>
    )
}

export default Booking
