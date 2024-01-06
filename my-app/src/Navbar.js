import React from 'react';
import "./style.css"
import { Link } from "react-router-dom";
import img from "./shaadi-removebg-preview (1).png"
function Nav(){
    return(
        <nav>
            <img src={img}></img>
            <ul>
                <li>Venues</li>
                <li>Vendors</li>
                <li style={{color:'pink'}}>
                    <Link to="/invite">
                        E-Invites
                   </Link>
                </li>
                <li><Link to="/packages">
                        Packages
                    </Link></li>
                <li>Contact US</li>
                <li>
                <Link to="/signup">
                    Sign up
                </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;