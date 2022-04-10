import {Link} from "react-router-dom";
import React from "react";
import "../styles/NavItem.css";

export default function NavItems(props) {
    return (
        <div>
            {/*<Link className="link" onClick={props.handleClick} to="/blog">Blog</Link>*/}
            <Link className="link" onClick={props.handleClick} to="/resume" replace>Resume</Link>
            <Link className="link" onClick={props.handleClick} to="/contact" replace>Contact</Link>
            <Link className="link" onClick={props.handleClick} to="/research" replace>Research</Link>
            <Link className="link" onClick={props.handleClick} to="/about" replace>About</Link>
            <Link className="link active" onClick={props.handleClick} to="/" replace>Home</Link>
        </div>
    )
}