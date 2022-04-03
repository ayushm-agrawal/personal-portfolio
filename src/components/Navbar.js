import '../styles/Navbar.css'
import React, {Component} from "react";
import BrandTransparent from "../resources/brand-transparent.png"
import {handleNavClick,handleHamburgerClick} from "../events/Events";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import NavItems from "./NavItems";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleNavClick = handleNavClick.bind(this)
        this.handleHamburgerClick = handleHamburgerClick.bind(this)
    }
    render() {
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <img className="navbar-brand" src={BrandTransparent} alt="AMA-logo"/>
                    <p className="navbar-name">Ayush Manish Agrawal</p>
                </div>
                <div className="navbar-right">
                    <div className="navbar-routes">
                        <NavItems handleClick={this.handleNavClick}/>
                    </div>
                </div>
                <div className="hamburger-menu">
                    <FontAwesomeIcon className="bars" icon={faBars} size="2x" inverse onClick={this.handleHamburgerClick}/>
                    <FontAwesomeIcon className="cross" icon={faXmark} size="2x" inverse style={{display: 'none'}} />
                </div>
                <div className="nav-item-mobile fade-in" style={{display: 'none'}}>
                    <NavItems handleClick={this.handleNavClick} />
                </div>

            </div>
        )
    }
}

export default Navbar