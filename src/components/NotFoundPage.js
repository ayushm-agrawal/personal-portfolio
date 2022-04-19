import React from "react";
import NotFound from "../resources/404.gif";
import "../styles/NotFoundPage.css";
import {Link, useNavigate} from "react-router-dom";

function NotFoundPage() {

    const navigate = useNavigate();

    return (
        <div className="not-found">
            <img className="not-found-img" src={NotFound} alt="Not Found 404"/>
            <div className="home-button" onClick={() => navigate("/")}>
                <h1 style={{textAlign:"center"}}>
                    <Link to="/home">Go to Home </Link>
                </h1>
            </div>
        </div>
    )
}

export default NotFoundPage