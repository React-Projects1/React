import React, { useState } from 'react';
import './line.scss';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useLocation } from 'react-router-dom';

const LineChartComponent = ({ title, dataByDate, defaultDate }) => {
    const [selectedDate, setSelectedDate] = useState(defaultDate);
    const [chartData, setChartData] = useState(dataByDate[defaultDate]);
    const location = useLocation()

    const handleDateChange = (event) => {
        const date = event.target.value;
        setSelectedDate(date);
        setChartData(dataByDate[date]);
    };

    return (
        <div className="lineChartContainer">
            {location.pathname !== '/reportsGraphLine' && (
                <div className="info d-flex justify-content-between align-items-center mb-4 ms-3">
                    <h4 className="m-0">{title}</h4>
                    <select value={selectedDate} onChange={handleDateChange}>
                        {Object.keys(dataByDate).map((date) => (
                            <option key={date} value={date}>
                                {date}
                            </option>
                        ))}
                    </select>
                </div>
            )}


            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData} margin={{ top: 5, right: 8, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E3E2E0" />
                    <XAxis dataKey="name" />
                    <YAxis ticks={[100, 150, 200, 250, 300, 350]} domain={[100, 350]} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#B22222"
                        strokeWidth={2}
                        dot={{ r: 3 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartComponent;


