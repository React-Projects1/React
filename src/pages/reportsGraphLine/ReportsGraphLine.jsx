import React, { useContext, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';
import LineChartComponent from '../../components/charts/line/Line';
import { lineChartData } from '../../chartsData';
import './reportsGraphLine.scss'
import DropdownInGraph from '../../components/dropdownInGraph/DropdownInGraph';

const ReportsGraphLine = () => {
    const { navbarHeight = 0 } = useContext(NavbarHeightContext);

    return (
        <div className="reportsGraphLine">
            <div className="wrapper">
                <div className="sidebarContainer">
                    <Sidebar />
                </div>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className="content py-3" style={{ marginTop: `${navbarHeight + 12}px` }}>
                    <DropdownInGraph type='Line' />

                    <div className='row d-flex flex-column justify-content-center align-items-center my-5'>
                        <div className='col-3'>
                            <p className='fs-4'>Reports Jan-Jun</p>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <div style={{ width: "750px" }}>
                                <LineChartComponent
                                    title="Sales Growth"
                                    dataByDate={lineChartData}
                                    defaultDate="1-6/2024" />
                            </div>
                        </div>
                    </div>

                    <div className='row d-flex flex-column justify-content-center align-items-center my-5'>
                        <div className='col-3'>
                            <p className='fs-4'>Reports Jul-Dec</p>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <div style={{ width: "750px" }}>
                                <LineChartComponent
                                    title="Sales Growth"
                                    dataByDate={lineChartData}
                                    defaultDate="7-12/2024" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsGraphLine;
