import React, { useState, useContext } from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';
import Widget from '../../components/widget/Widget';
import Line from '../../components/charts/line/Line';
import Bar from '../../components/charts/bar/Bar';
import Pie from '../../components/charts/pie/Pie';
import { lineChartData } from '../../chartsData';
import { barChartData } from '../../chartsData';

const Home = () => {
    const { navbarHeight = 0 } = useContext(NavbarHeightContext);

    return (
        <div className='home'>
            <div className="wrapper">
                <div className="sidebarContainer">
                    <Sidebar />
                </div>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className="content py-3" style={{ marginTop: `${navbarHeight + 12}px` }}>
                    <h3 className='mb-4'>Overview</h3>
                    <Widget />
                    <div className='row mt-3 d-flex justify-content-center align-items-center'>
                        <div className='col-12 col-md-6'>
                            <Line
                                title="Sales Growth"
                                dataByDate={lineChartData}
                                defaultDate="1-6/2024" />
                        </div>
                        <div className='col-12 col-md-6'>
                            <Bar title="Statistics"
                                dataByDate={barChartData}
                                defaultDate="1-6/2024" /> </div>
                        <div className='col-12 col-md-6'> <Pie /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
