

import React, { useState, useEffect } from 'react'
import ServiceIItem from '../ServiceItem/ServiceIItem'
import "./Home.css"
import Banner from '../Banner/Banner'
import { Link } from 'react-router-dom'
import RecentVisit from '../RecentVisit/RecentVisit'
import OurTeam from '../OurTeam/OurTeam'

const Home = () => {
    const [services, setServices] = useState([])
    const [addservice, setAddservice] = useState([])


    useEffect(() => {

        fetch("http://aqueous-savannah-68908.herokuapp.com/homeservice")
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])


    useEffect(() => {

        fetch("http://aqueous-savannah-68908.herokuapp.com/addnewservice")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAddservice(data)
                console.log(setAddservice(data))
            }

            )
    }, [])








    return (
        <div className='services'>
            <Banner />
            <h2 className='our__service__title'>Our Service</h2>
            <div className='services__wrapper' >
                {
                    services.map(service => <ServiceIItem
                        service={service}

                    />)
                }

                {/* This is dynamically add service*/}
               


                {
                    addservice.map(add =>
                        <div key={add._id} className='single__item__add__home'>
                            <img className='singleadd__img' src={add.image} alt='' />
                            <p>{add.place}</p>
                            <p>{add.price}</p>
                            <p>{add.description}</p>
                            <Link className='link__title' to={`/post/${add._id}`} >
                                <p className='book__btn'>Buy Now</p>
                            </Link>
                        </div>


                    )
                }



            </div>



<RecentVisit/>
<OurTeam/>

        </div>
    )
}

export default Home


