import ReactDOM from "react-dom/client";
import React from 'react';
import { Routes, Route } from 'react-router';  // Corrected import
import data from './e-cards-data.js'
import Home from './home';
import Signup from './sign';
import Packages from './packages'
import Main2 from './main2'
import Invite from './invite'
import ECardEditor from './e-cards.js'
export default function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />  {/* Updated syntax */}
                <Route path='/signup' element={<Signup />} />  {/* Updated syntax */}
                <Route path='/packages' element={<Packages />} />
                <Route path='/main2' element={<Main2 />} />
                <Route path='/invite' element={<Invite />} />
                <Route path='/edit/:id' element={<ECardEditor images={data}/>}/> 
            </Routes>
        </div>
    );
}
