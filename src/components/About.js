import React, {Component} from "react";
import '../styles/About.css'
import {getRandomHeaderImage, getRandomQuote, experienceDisplay} from "../helpers/RandomFunctions";
import {aboutExperience} from "../helpers/Information"

class About extends Component {
    constructor(props) {
        super(props);
        this.randomImageToDisplay = getRandomHeaderImage();
        this.randomQuoteToDisplay = getRandomQuote();
    }
    render() {
        return (
            <div className='about'>
                <div className='about-image'>
                    <img src={this.randomImageToDisplay} alt="Ayush"/>
                </div>

                <div className='about-intro'>
                    <h2>{this.randomQuoteToDisplay[0]} -  <span style={{color: '#f6a231'}}>{this.randomQuoteToDisplay[1]}</span></h2>
                </div>

                <div className='about-experience'>
                    {aboutExperience.map(experienceDisplay)}
                </div>

            </div>
        )
    }
}

export default About;