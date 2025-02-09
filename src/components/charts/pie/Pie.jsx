import React from 'react';
import './pie.scss';
import { PieChart, Pie, Cell, Legend, Text, ResponsiveContainer } from 'recharts';

const PieChartComponent = () => {
    const data = [
        { name: 'Wedding Bouquet Sales', value: 50, color: '#f08c8c' },
        { name: 'Sales of offers', value: 30, color: '#f2a8f0' },
        { name: 'Sales of rare items', value: 20, color: '#80d8e5' },
    ];

    const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) / 2;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

        return (
            <Text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" fontSize="14px">
                {`${(percent * 100).toFixed(0)}%`}
            </Text>
        );
    };

    return (
        <div
            style={{
                padding: '15px',
                backgroundColor: '#fdfdfd',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginTop: '25px',
                height: '100%',
            }}
        >
            <h4 style={{ color: '#B22222', marginBottom: '10px' }}>Sales</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* المخطط الدائري */}
                <div style={{ width: '60%', height: '230px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius="95%" 
                                innerRadius="30%"
                                label={renderCustomLabel} 
                                labelLine={false}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* التسميات الجانبية */}
                <div style={{ marginLeft: '20px' }}>
                    {data.map((entry, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <div
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    backgroundColor: entry.color,
                                    marginRight: '10px',
                                    borderRadius: '50%',
                                }}
                            ></div>
                            <span style={{ fontSize: '14px', color: '#555' }}>{entry.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PieChartComponent;
