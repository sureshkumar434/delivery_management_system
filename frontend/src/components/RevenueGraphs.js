import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const RevenueGraphs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/calculate_revenue')
            .then(response => setData(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    const graphData = [
        { name: 'Daily', revenue: data.daily_revenue },
        { name: 'Monthly', revenue: data.monthly_revenue },
        { name: 'Yearly', revenue: data.yearly_revenue },
    ];

    return (
        <div className='revenue-container'>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={graphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueGraphs;