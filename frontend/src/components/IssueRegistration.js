import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IssueRegistration = () => {
  const [vehicles, setVehicles] = useState([]);
  const [components, setComponents] = useState([]);
  const [vehicle, setVehicle] = useState('');
  const [component, setComponent] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [repairOrReplace, setRepairOrReplace] = useState('repair');
  const [dateResolved, setDateResolved] = useState('');
  const [repairPrice, setRepairPrice] = useState('')

  useEffect(() => {
    // Fetch vehicles
    axios.get('http://localhost:8000/api/vehicels/')
      .then(response => setVehicles(response.data))
      .catch(error => console.error('Error fetching vehicles:', error));

    // Fetch components
    axios.get('http://localhost:8000/api/components/')
      .then(response => setComponents(response.data))
      .catch(error => console.error('Error fetching components:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/issues/', {
        vehicle,
        component,
        issue: issueDescription,
        repair_or_replace: repairOrReplace,
        date_resolved: dateResolved,
        repair_price: repairPrice
      });
      console.log('Issue created:', response.data);
      // Clear form or handle success
    } catch (error) {
      console.error('Error creating issue:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Vehicle:</label>
        <select 
          value={vehicle} 
          onChange={(e) => setVehicle(e.target.value)} 
          required
        >
          <option value="">Select a vehicle</option>
          {vehicles.map(v => (
            <option key={v.id} value={v.id}>
              {v.registration_number} - {v.model}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Component:</label>
        <select 
          value={component} 
          onChange={(e) => setComponent(e.target.value)} 
          required
        >
          <option value="">Select a component</option>
          {components.map(c => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Issue Description:</label>
        <textarea 
          value={issueDescription} 
          onChange={(e) => setIssueDescription(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Repair or Replace:</label>
        <select 
          value={repairOrReplace} 
          onChange={(e) => setRepairOrReplace(e.target.value)} 
          required
        >
          <option value="repair">Repair</option>
          <option value="replace">Replace</option>
        </select>
      </div>
      <div>
        <label>Repair price:</label>
        <input 
          type="number" 
          value={repairPrice} 
          onChange={(e) => setRepairPrice(e.target.value)} 
        />
      </div>
      <div>
        <label>Date Resolved:</label>
        <input 
          type="date" 
          value={dateResolved} 
          onChange={(e) => setDateResolved(e.target.value)} 
        />
      </div>
      <button type="submit">Create Issue</button>
    </form>
  );
};

export default IssueRegistration;
