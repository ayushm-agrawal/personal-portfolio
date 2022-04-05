import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Socials.css";
import GoogleScholar from "../resources/google-scholar.svg";
import Outlook from "../resources/outlook.png";
import {socialUrls} from "../helpers/Information";

class Socials extends Component {
    render() {
        return (
            <div className="social-container">
                <a href={socialUrls.twitter} target="_blank" rel="noopener noreferrer" className="social-button twitter">
                    <FontAwesomeIcon className="fa" icon={faTwitter} size='3x'/>
                </a>
                <a href={socialUrls.instagram} target="_blank" rel="noopener noreferrer" className="social-button instagram">
                    <FontAwesomeIcon className="fa" icon={faInstagram} size='3x'/>
                </a>
                <a href={socialUrls.linkedin} target="_blank" rel="noopener noreferrer" className="social-button linkedin">
                    <FontAwesomeIcon className="fa" icon={faLinkedin} size='3x'/>
                </a>
                <a href={socialUrls.github} target="_blank" rel="noopener noreferrer" className="social-button github">
                    <FontAwesomeIcon className="fa" icon={faGithub} size='3x'/>
                </a>
                <a href={socialUrls.scholar} target="_blank" rel="noopener noreferrer" className="social-button scholar">
                    <img src={GoogleScholar} alt='Google Scholar'/>
                </a>
                <a href={socialUrls.mail} target="_blank" rel="noopener noreferrer" className="social-button mail">
                    <img src={Outlook} alt='Outlook'/>
                </a>
            </div>
        )
    }
}

export default Socials