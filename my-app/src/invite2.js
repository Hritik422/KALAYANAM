import React from 'react';
import './invite.css'
import { Link } from "react-router-dom";
export default function Invitation(props){
    return(
        <div>
            <Link to={'/edit/'+props.items.id}> 
            <div className='pics1' id='same'>
              <div className='zoom-img' draggable='true'><img src={'../images/'+props.items.img} alt='Unavailable'></img></div>
               <div><h1>{props.items.price}</h1></div> 
               <div style={{color:'red'}}>Talk with our designers</div>
            </div>
            <hr></hr>
            </Link>
        </div>
    )
}