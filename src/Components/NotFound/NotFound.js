import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className='notfound__com' >
            <h2>404 - Not Found!</h2>
            <h2> this is not available</h2>
            <div>
                <Link to="/">
                    <h2>Go Home</h2>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;
