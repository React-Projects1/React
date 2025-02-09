import React, { useContext } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';
import BarChartComponent from '../../components/charts/bar/Bar';
import { barChartData } from '../../chartsData';
import './reportsGraphBar.scss'
import DropdownInGraph from '../../components/dropdownInGraph/DropdownInGraph';

const ReportsGraphBar = () => {
    const { navbarHeight = 0 } = useContext(NavbarHeightContext);

    return (
        <div className="reportsGraphBar">
            <div className="wrapper">
                <div className="sidebarContainer">
                    <Sidebar />
                </div>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className="content py-3" style={{ marginTop: `${navbarHeight + 12}px` }}>
                    <DropdownInGraph type='Bar chart' />

                    <div className='row d-flex flex-column justify-content-center align-items-center my-5'>
                        <div className='col-3'>
                            <p className='fs-4'>Reports Jan-Jun</p>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <div style={{ width: "750px" }}>
                                <BarChartComponent
                                    dataByDate={barChartData}
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
                                <BarChartComponent
                                    dataByDate={barChartData}
                                    defaultDate="7-12/2024" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsGraphBar;
