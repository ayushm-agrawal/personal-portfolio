import React, {Component} from "react";
import "../styles/About.css";
import {aboutDescription} from "../helpers/Information";

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="about-description">
                    <p>I am a full-time <span>Software Engineer</span> at University of Nebraska developing applications in Spring Framework and ReactJS. </p>
                    <p>While I develop efficient applications from 9 to 5, I spend my after work hours as an <span>Independent Researcher</span> working on various problems in Artificial Intelligence.</p>
                    <p> Over the past year, I have grown a lot as a developer and researcher, and have published various papers</p>
                </div>
            </div>
        )
    }
}

export default About