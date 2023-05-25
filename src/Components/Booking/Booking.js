import React ,{useState,useEffect}from 'react'
import { useHistory } from 'react-router-dom';
import UseContext from '../ReactContext/UseContext'

const Booking = () => {
const [orders,setOrders]=useState([])
const {user}=UseContext();
const history=useHistory();

useEffect(()=>{
    fetch(`https://tourism-server-side-website.onrender.com/myorders?email=${user.email}`)

    
    
.then(res=>res.json())
    .then(data=>{
        console.log(data)
       
        setOrders(data)
    })
    
    
    },[])
    const handleDeleteUser=id=>{
        fetch(`https://tourism-server-side-website.onrender.com/myorders${id}`,{
            method:"DELETE"
            
        })
        .then(res=>res.json())
        .then(data=>{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        if(data.deletedCount>0){
            alert("succesfully delete")
            const remainingBooking=orders.filter(b=>b._id!==id)
            setOrders(remainingBooking)
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
                orders.map(b=><div className='single__booking'>
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
