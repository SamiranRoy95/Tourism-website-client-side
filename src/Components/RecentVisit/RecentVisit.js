import React,{useState,useEffect} from 'react'
import "./Recentvisit.css"



const RecentVisit = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
const url="https://tourism-server-side-website.onrender.com/recentvisit"
fetch(url)
.then(res=>res.json())
.then(data=>{

    setData(data)
})

    })
    return (
        <div className='recent__visit'>
                    <h2 className='recent__tour__title'>Our Recent Tour</h2>
                <div className='recent__visit__wrapper'>
                {
                    data.map(d=><div className='recent__visit__item'>
                        <img className='recent__visit__img' src={d.image} alt=''/>
                        <p>Place:{d.name}</p>
                        <p>Description:{d.description}</p>
                        </div>
                    )}
                    </div>

               
               


                    
                
            
            
        </div>
    )
}

export default RecentVisit
