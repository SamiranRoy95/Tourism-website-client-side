import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact__us">
            <div className="contact__text">
            <h2>Contact Us</h2>
            <p>You can contact with us for getting any kind of information.
                Our has separate support Team.You can know brodly any kind of particular service.

            </p>
            <h3>Address:Hathazari,Chittagon,Bangladesh</h3>
            <h3>Phone:01855539876</h3>
            <h3>Email:abc@gamil.com</h3>
            </div>
            <div className="contact__form">
                
                <input type="text" name="name" placeholder="Name"/>
                <br/>
                <input type="text" name="email" placeholder="Email"/>
                <br/>
                <textarea>

                </textarea>
                <br/>
                <br/>
                <br/>
                <button className="contact__btn">
                    Send message
                </button>
            </div>
        </div>
    )
}

export default Contact
