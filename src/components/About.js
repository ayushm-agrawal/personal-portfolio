import React, {useEffect, useState} from "react";
import "../styles/About.css";
import ReactPlayer from "react-player";
import {aboutHobbiesVideos, aboutHobbiesDesc} from "../helpers/Information";

function About() {
    const [isLoading, setIsLoading]  = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <div className="about">
            <div className="about-description">
                <p>I am a full-time <span>Software Engineer</span> at University of Nebraska developing applications in Spring Framework and ReactJS. </p>
                <p>While I develop efficient applications from 9 to 5, I spend my after work hours as an <span>Independent Researcher</span> working on various problems in Artificial Intelligence.</p>
                <p> Over the past year, I have grown a lot as a developer and researcher, and have published various papers</p>
            </div>
            <hr/>
            <div className="about-hobbies">
                <h1>Hobbies and Interests</h1>
                <p>{aboutHobbiesDesc}</p>
                <div className="videos">
                    {aboutHobbiesVideos.map((videoItem, index) => {
                        return(
                            <div key={index}>

                                <ReactPlayer
                                    className="react-player"
                                    playing={true}
                                    loop={true}
                                    volume={0}
                                    playsinline
                                    muted={true}
                                    controls={false}
                                    url={videoItem}
                                    style={isLoading ? {display: 'none'}: {}}
                                />
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default About