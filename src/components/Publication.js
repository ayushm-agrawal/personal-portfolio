import React from 'react'
import "../styles/Publication.css"
import ManifoldComputing from "../resources/MCT.png"
import OpenMined from "../resources/openmined.png"

function Publication(props) {

        let imgSrc = OpenMined;
        let imgLink = "https://www.openmined.org/";
        const affiliation = props.affiliation;
        const url = props.url;
        const name = props.name;
        const authors = props.authors;
        const publisher = props.publisher;
        const published_date = props.published_date;
        const conference = props.conference;
        const keyVal = props.keyVal;

        if (affiliation === "Manifold") {
            imgSrc = ManifoldComputing;
            imgLink = "https://manifoldcomputing.com/";
        }
        
        

        return (
            <div
                key={keyVal}
                className="card"
                onClick={() => window.open(url)}
            >

                <div className='information'>
                    <div className='header'>
                        <p className='name'>{name}</p>
                    </div>
                    <p><span>Authors: </span>{authors}</p>
                    <p><span>Published: </span>{published_date}</p>
                    <p style={{display: conference === "" ? 'none': 'block'}}><span>Conference: </span>{conference}</p>
                    <p style={{display: publisher === "" ? 'none': 'block'}}><span>Publisher: </span>{publisher}</p>

                </div>
                <img src={imgSrc} alt={affiliation} onClick={() => window.open(imgLink)}/>
            </div>

        )
}

export default Publication;