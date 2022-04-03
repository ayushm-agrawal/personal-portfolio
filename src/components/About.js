import React, {Component} from "react";
import '../styles/About.css'
import {getRandomHeaderImage, getRandomQuote} from "../events/RandomFunctions";
import UniversityLogo from "../resources/university-of-nebraska.png"
import ManifoldLogo from "../resources/manifold-computing.jpeg"
import OpenMinedLogo from "../resources/openmined.png"

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
                    <div className='item'>
                        <div className='item-image'>
                            <img src={UniversityLogo} alt="University of Nebraska"/>
                        </div>

                        <p><span style={{color: "#90e190"}}>(Current)</span> Software Developer at University of Nebraska</p>
                    </div>
                    <div className='item'>
                        <div className='item-image'>
                            <img src={ManifoldLogo} alt="Manifold Computing"/>
                        </div>
                        <p><span style={{color: "#90e190"}}>(Current)</span> Independent Researcher at Manifold Computing</p>

                    </div>
                    <div className='item'>

                        <div className='item-image'>
                            <img src={OpenMinedLogo} alt="OpenMined"/>
                        </div>
                        <p><span style={{color: "crimson"}}>(Previous)</span> Independent Research Engineer at OpenMined</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;