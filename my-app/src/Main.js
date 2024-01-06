import React from 'react';
import "./style.css"
import { Link } from "react-router-dom";
function Main(){
    return(
       <div className='front-page'>
       <div className='bg'></div>
       <div className='slogan'>
           <div>
            <h5><marquee direction="left" height="100px">इहेमाविन्द्र सं नुद चक्रवाकेव दम्पती ।
                प्रजयौनौ स्वस्तकौ विस्वमायुर्व्यऽशनुताम् ||</marquee></h5>
            <h1>Your Wedding, Your Plan!</h1>
            </div>
           <div>
            <select className='vendor' placeholder='Select vendor type'>
            <option value="" disabled selected hidden>Choose Vendor</option>
              <option value="Venues">Venues</option>
              <option value="Decorators">Decorations</option>
              <option value="Caterers">Caterers</option>
              <option value="Dhol">Dhol</option>
              <option value="Cards">Wedding Cards</option>
              <option value="DJ">DJ</option>
              <option value="Make-Up">Make-Up</option>
            </select>
            </div>
            <div>
            <select className='city'>
            <option value="" disabled selected hidden>Choose city</option>
              <option value="Delhi">Delhi</option>
              <option value="Ghaziabad">Ghaziabad</option>
              <option value="Meerut">Meerut</option>
              <option value="Ballia">Ballia</option>
              <option value="Bulandshahr">Bulandshahr</option>
              <option value="Prayagraj">Prayagraj</option>
              <option value="Lucknow">Lucknow</option>
            </select>
            </div>
            <Link to="/main2">
          <button variant="outlined">
            Get Started
          </button>
        </Link>
       </div>
       </div>
    )
}
export default Main;