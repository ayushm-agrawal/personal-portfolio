import '../styles/Navbar.css'
import React from "react";
import BrandTransparent from "../resources/brand-transparent.png"
import {handleNavClick,handleHamburgerClick} from "../helpers/Events";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import NavItems from "./NavItems";
import {useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="navbar-left" onClick={() => navigate("/")}>
                <img className="navbar-brand" src={BrandTransparent} alt="AMA-logo"/>
                <p className="navbar-name">Ayush Manish Agrawal</p>
            </div>
            <div className="navbar-right">
                <div className="navbar-routes">
                    <NavItems handleClick={handleNavClick}/>
                </div>
            </div>
            <div className="hamburger-menu">
                <FontAwesomeIcon className="bars" icon={faBars} size="2x" inverse onClick={handleHamburgerClick}/>
                <FontAwesomeIcon className="cross" icon={faXmark} size="2x" inverse onClick={handleHamburgerClick} style={{display: 'none'}} />
            </div>
            <div className="nav-item-mobile fade-in" style={{display: 'none'}}>
                <NavItems handleClick={handleNavClick} />
            </div>

        </div>
    )
}

export default Navbar