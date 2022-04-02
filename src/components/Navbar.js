import '../styles/Navbar.css'
import React, {Component} from "react";
import BrandTransparent from "../resources/brand-transparent.png"

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <img className="navbar-brand" src={BrandTransparent}/>
                    <p className="navbar-name">Ayush Manish Agrawal</p>
                </div>

                <div className="navbar-right">]
                    <ul className="navbar-routes">
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Research</li>
                        <li>About</li>
                    </ul>

                </div>

            </div>
        )
    }
}

export default Navbar