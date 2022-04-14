import React from "react";
import '../styles/Home.css'
import {getRandomHeaderImage, getRandomQuote, experienceDisplay} from "../helpers/RandomFunctions";
import {homeExperience} from "../helpers/Information"

function Home(){

    const randomImage = getRandomHeaderImage()
    const randomQuote = getRandomQuote()
    const randomQuoteString = randomQuote[0]
    const randomQuoteAuthor = randomQuote[1]

    return (
        <div className='home'>
            <div className='home-image'>
                <img src={randomImage} alt="Ayush"/>
            </div>

            <div className='home-intro'>
                <h2>{randomQuoteString} -  <span style={{color: '#f6a231'}}>{randomQuoteAuthor}</span></h2>
            </div>

            <div className='home-experience'>
                {homeExperience.map(experienceDisplay)}
            </div>

        </div>
    )
}

export default Home;