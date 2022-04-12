import React from "react";
import '../styles/Contact.css'
import Socials from "./Socials";
import {contactCollaboration} from "../helpers/Information";

function Contact() {
    return (
        <div className='contact'>
            <div className='contact-social'>
                <h1>Here are my Socials...</h1>
                <Socials />
            </div>
            <hr/>
            <div className='contact-form'>
                <p>{contactCollaboration}</p>
                <h2>Let's Connect!</h2>
            </div>
        </div>
    )
}

export default Contact;