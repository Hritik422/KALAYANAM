import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom'
import Nav from './Navbar'
import "./edit-style.css"
const ECardEditor = (props) => {
  const x=useParams().id
  const image=props.images[x].img;
  const [formData, setFormData] = useState({
    recipientName: '',
    message: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Submitted Successfully");
    console.log('Form submitted with data:', formData);
  };
  return (
    <div>
      <Nav />
        <div className='editing'>
            <div class="container">
              <img src={'../images/'+image} style={{height:600+'px',width:500+'px'}} alt='Unavailable'></img>
              <div class="text-block">
               <h4>{formData.recipientName}</h4>
               <p>{formData.message}</p>
               </div>
            </div>
        <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="recipientName">Recipient Name:</label>
          <textarea
            type="text"
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleInputChange}
            style={{height:216+'px',width:750+'px'}}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label><br></br>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{height:216+'px',width:750+'px'}}
          />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
      <button>download</button>
      </div>
    </div>
    </div>
  );
};

export default ECardEditor;
