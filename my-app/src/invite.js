import React from 'react';
import arr from "./invitation-cards"
import "./invite.css"
import Invitation from './invite2'
import Nav from './Navbar'
const dat=arr.map(arr=>{
  return <Invitation
  items={arr}
  />
})
export default function Invite(){
    return(
        <div>
            <Nav />
            <div className='boxess'>
              {dat}
            </div>

        </div>
    )
}