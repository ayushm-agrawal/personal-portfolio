import React, {Component} from "react";
import '../styles/Home.css'
import {getRandomHeaderImage, getRandomQuote, experienceDisplay} from "../helpers/RandomFunctions";
import {homeExperience} from "../helpers/Information"

class Home extends Component {
    constructor(props) {
        super(props);
        this.randomImageToDisplay = getRandomHeaderImage();
        this.randomQuoteToDisplay = getRandomQuote();
    }
    render() {
        return (
            <div className='home'>
                <div className='home-image'>
                    <img src={this.randomImageToDisplay} alt="Ayush"/>
                </div>

                <div className='home-intro'>
                    <h2>{this.randomQuoteToDisplay[0]} -  <span style={{color: '#f6a231'}}>{this.randomQuoteToDisplay[1]}</span></h2>
                </div>

                <div className='home-experience'>
                    {homeExperience.map(experienceDisplay)}
                </div>

            </div>
        )
    }
}

export default Home;