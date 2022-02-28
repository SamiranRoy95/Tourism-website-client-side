import React, { useState, useEffect } from 'react'
import "./OurTeam.css"

const OurTeam = () => {
    const [team, setTeam] = useState([])
    useEffect(() => {

        const url = "https://aqueous-savannah-68908.herokuapp.com/team"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTeam(data)
            })
    })
    return (
        <div className='team'>
            <h1 className='team__title'>Our Team Member</h1>
            <div className='team__wrapper'>
                {
                    team.map(t => 
                        <div className='team__item'>
                            <img src={t.image} alt='' />
                            <p> Name:{t.name}</p>
                            <p>Role:{t.post}</p>
                        </div>


                    )
                }


            </div>

        </div>
    )
}

export default OurTeam
