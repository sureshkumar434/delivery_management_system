import React, { useState } from 'react';
import axios from 'axios';

const ComponentRegistration = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [repairCost, setRepairCost] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8000/api/components/', {
          name,
          description,
          price,
          repair_cost: repairCost
        });
        console.log('Component created:', response.data);
        // Clear form or handle success
      } catch (error) {
        console.error('Error creating component:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Price:</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            step="0.01" 
            required 
          />
        </div>
        <button type="submit">Create Component</button>
      </form>
    );
  };
export default ComponentRegistration;
