import React, {Component} from "react";
import '../styles/Research.css'
import {researchAreasOfInterest} from "../helpers/Information";
import Publication from "./Publication";
import publications from "../helpers/publications.json"

class Research extends Component {
    render() {
        const data = publications;
        return (
            <div className='research'>
                <div className='research-areas'>
                    <h1>Areas of Interest</h1>
                    <p>{researchAreasOfInterest}</p>
                </div>
                <hr/>
                <div className='research-publications'>
                    <h1>Publications</h1>
                    <div className='card-container'>
                        {data.map(pubItem => {
                            return (
                                <Publication
                                    keyVal={pubItem.key}
                                    name={pubItem.name}
                                    authors={pubItem.authors}
                                    published_date={pubItem.published_date}
                                    conference={pubItem.conference}
                                    publisher={pubItem.publisher}
                                    affiliation={pubItem.affiliation}
                                    url={pubItem.url}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Research;
