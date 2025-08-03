import React from 'react';
import FlightDetails from './FlightDetails';

const UserPage = () => {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book your flight tickets.</p>
      <FlightDetails />
      <button>Book Now</button>
    </div>
  );
};

export default UserPage;