import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsDisplay = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    return <p>No data to display.</p>;
  }

  return (
    <div>
      <h2>Submitted Details:</h2>
      <p>First Name: {state.firstName}</p>
      <p>Last Name: {state.lastName}</p>
      <p>Username: {state.username}</p>
      <p>Email: {state.email}</p>
      <p>Phone Number: {state.countryCode} {state.phoneNumber}</p>
      <p>Country: {state.country}</p>
      <p>City: {state.city}</p>
      <p>Pan Number: {state.panNumber}</p>
      <p>Aadhar Number: {state.aadharNumber}</p>
    </div>
  );
};

export default DetailsDisplay;
