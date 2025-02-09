import React, { useRef, useEffect, useState } from 'react';
import './bar.scss';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from 'recharts';
import { useLocation } from 'react-router-dom';

function BarChartComponent({ title, dataByDate, defaultDate }) {
    const [selectedPeriod, setSelectedPeriod] = useState(defaultDate);
    const [data, setData] = useState(dataByDate[defaultDate]);

    const [chartWidth, setChartWidth] = useState(0);
    const containerRef = useRef(null);
    const location = useLocation()


    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            if (containerRef.current) {
                setChartWidth(containerRef.current.offsetWidth);
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    const handlePeriodChange = (event) => {
        const period = event.target.value;
        setSelectedPeriod(period);
        setData(dataByDate[period]);
    };

    return (
        <div
            ref={containerRef}
            style={{
                padding: '15px',
                backgroundColor: '#fdfdfd',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '100%',
                marginTop: '25px',
            }}>

            {location.pathname !== '/reportsGraphBar' && (<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h4 style={{ margin: 0, color: '#B22222' }}>Reports</h4>
                <select
                    style={{
                        padding: '5px 10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                    value={selectedPeriod}
                    onChange={handlePeriodChange}
                >
                    <option value="1-6/2024">1-6/2024</option>
                    <option value="7-12/2024">7-12/2024</option>
                </select>
            </div>)}

            <BarChart
                width={chartWidth}
                height={250}
                data={data}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend
                    wrapperStyle={{
                        fontSize: '12px',
                        color: '#555',
                        marginTop: '-10px',
                    }}
                />
                
                {
                    location.pathname === '/reportsGraphBar' ? (
                        defaultDate === '1-6/2024' ? (
                            <Bar dataKey="revenue" fill="#f08c8c" name="Revenue" barSize={20} />
                        ) : (
                            <Bar dataKey="expenses" fill="#888888" name="Expenses" barSize={20} />
                        )
                    ) : (
                        <></>
                    )
                }


                {location.pathname !== '/reportsGraphBar' && (
                    <>
                        <Bar dataKey="revenue" fill="#f08c8c" name="Revenue" barSize={20} />
                        <Bar dataKey="expenses" fill="#888888" name="Expenses" barSize={20} />
                    </>
                )}


            </BarChart>
        </div>
    );
}

export default BarChartComponent;