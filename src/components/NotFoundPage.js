import React, {Component} from "react";
import NotFound from "../resources/404.gif";
import {Link} from "@mui/material";
import "../styles/NotFoundPage.css";

class NotFoundPage extends Component {
    render() {
        return (
            <div className="not-found">
                <img className="not-found-img" src={NotFound} alt="Not Found 404"/>
                <div className="home-button">
                    <h1 style={{textAlign:"center"}}>
                        <Link to="/about">Go to About </Link>
                    </h1>
                </div>
            </div>
        )
    }
}

export default NotFoundPage