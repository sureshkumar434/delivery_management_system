import React, { useState } from 'react';
import axios from 'axios';

const VehicleRegistrationForm = () => {
  const [regNumber, setRegNumber] = useState('');
  const [model, setModel] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/vehicels/', {
        reg_number: regNumber,
        model
      });
      console.log('Vehicle registered:', response.data);
      // Clear form or handle success
      setRegNumber('');
      setModel('');
    } catch (error) {
      console.error('Error registering vehicle:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Vehicle Registration</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="regNumber">Registration Number:</label>
          <input
            type="text"
            id="regNumber"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Register Vehicle</button>
      </form>
    </div>
  );
};

export default VehicleRegistrationForm;
