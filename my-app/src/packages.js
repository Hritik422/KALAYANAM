import React, { useState } from 'react';
import Nav from './Navbar';
import './PackagesPage.css'; // Import a separate CSS file for styling

const PackagesPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelection = (packageType) => {
    setSelectedPackage(packageType);
  };

  return (
    <div><Nav />
    <div className="packages-page">
      <h1>Choose Your Package</h1>
      <div className="package-container">
        <div
          className={`package ${selectedPackage === 'diamond' ? 'selected' : ''}`}
          onClick={() => handlePackageSelection('diamond')}
        >
          <h2>Diamond Package</h2>
          <ul>
            <li>Top Most Venue</li>
            <li>Pre-Wedding Shoots</li>
            <li>Decorations for haldi, mehandi and wedding</li>
            <li>Destination Wedding Options</li>
            <li>Top Caterers of the Country</li>
            <p>..view more</p>
          </ul>
          <div className='Price'>
             <h1>Rs 1000K-3000K</h1>
          </div>
        </div>
        <div
          className={`package ${selectedPackage === 'platinum' ? 'selected' : ''}`}
          onClick={() => handlePackageSelection('platinum')}
        >
          <h2>Platinum Package</h2>
          <ul>
            <li>Good Venues</li>
            <li>Great Management</li>
            <li>Dcorations for wedding</li>
            <li>Music and DJ</li>
            <li>Good Catering Services</li>
            <p>..view more</p>
          </ul>
          <div className='Price'>
             <h1>Rs 600K-900K</h1>
          </div>
        </div>
        <div
          className={`package ${selectedPackage === 'gold' ? 'selected' : ''}`}
          onClick={() => handlePackageSelection('gold')}
        >
          <h2>Gold Package</h2>
          <ul>
            <li>Cheaper Venues</li>
            <li>Wedding Photography</li>
            <li>24 X 7 Availability of a Manager</li>
            <li>Firecrackers</li>
            <li>Good Catering Services</li>
            <p>..view more</p>
          </ul>
          <div className='Price'>
             <h1>Rs 200K to 400K</h1>
          </div>
        </div>
      </div>
      {selectedPackage && (
        <div className="selected-package-info">
          <h2>Selected Package: {selectedPackage}</h2>
          {/* Additional information about the selected package can be displayed here */}
        </div>
      )}
    </div>
    </div>
  );
};

export default PackagesPage;
