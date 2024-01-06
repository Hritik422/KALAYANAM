import React from 'react';
import { Link } from "react-router-dom";
import Nav from "./Navbar"
import Main from "./Main"
export default function Home(){
    return(
        <div>
        <Nav />
        <Main />
        </div>
    )
}