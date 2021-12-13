import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to="/" >Listings</Link>
            <Link to="/listing/create" >Add</Link>
            <Link to="/login" >Login</Link>
            <Link to="/logout" >Logout</Link>
        </div>
    );
}

export default Navigation;