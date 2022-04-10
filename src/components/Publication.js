import React, {Component} from 'react'
import "../styles/Publication.css"
import ManifoldComputing from "../resources/MCT.png"
import OpenMined from "../resources/openmined.png"

class Publication extends Component {

    render() {
        let imgSrc = OpenMined;
        let imgLink = "https://www.openmined.org/";
        if (this.props.affiliation === "Manifold") {
            imgSrc = ManifoldComputing;
            imgLink = "https://manifoldcomputing.com/";
        }

        return (
            <div
                key={this.props.keyVal}
                className="card"
                onClick={() => window.open(this.props.url)}
            >

                <div className='information'>
                    <div className='header'>
                        <p className='name'>{this.props.name}</p>
                    </div>
                    <p><span>Authors: </span>{this.props.authors}</p>
                    <p><span>Published: </span>{this.props.published_date}</p>
                    <p style={{display: this.props.conference === "" ? 'none': 'block'}}><span>Conference: </span>{this.props.conference}</p>
                    <p style={{display: this.props.publisher === "" ? 'none': 'block'}}><span>Publisher: </span>{this.props.publisher}</p>

                </div>
                <img src={imgSrc} alt={this.props.affiliation} onClick={() => window.open(imgLink)}/>
            </div>

        )
    }
}

export default Publication;