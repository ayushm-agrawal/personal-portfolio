import {Link} from "react-router-dom";
import React from "react";

export default function NavItems(props) {
    return (
        <div>
            <Link className="link" onClick={props.handleClick} to="/blog">Blog</Link>
            <Link className="link" onClick={props.handleClick} to="/contact">Contact</Link>
            <Link className="link" onClick={props.handleClick} to="/research">Research</Link>
            <Link className="link active" onClick={props.handleClick} to="/">About</Link>
        </div>
    )
}