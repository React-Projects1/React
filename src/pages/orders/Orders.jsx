import React, { useContext, useEffect, useState } from 'react'
import './orders.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { NavbarHeightContext } from '../../Context/NavbarHeightContext'
import DataGridTable from '../../components/dataGridTable/DataGridTable'
import EditModal from '../../components/modals/editModal/EditModal';
import AddModal from '../../components/modals/addModal/AddModal';
import plus from '../../assets/icons/plus.png';
import { ordersRows, ordersColumns } from '../../dataGridTable'

const Orders = () => {
    const { navbarHeight = 0 } = useContext(NavbarHeightContext);
    const [rows, setRows] = useState(ordersRows)
    const [selectedRow, setSelectedRow] = useState(null)

    return (
        <div>
            <div className='wrapper'>
                <div className='sidebarContainer'>
                    <Sidebar />
                </div>
                <div className='navbarContainer'>
                    <Navbar />
                </div>
                <div className='content py-3' style={{ marginTop: `${navbarHeight + 12}px` }}>
                    <div className='row mb-3'>
                        <div className='col-5 col-md-4 col-lg-4 addItem d-flex align-items-center gap-1'>
                            <img src={plus} alt="Plus Icon" width="18px" className='d-flex' />
                            <p className='mb-0 btn' data-bs-toggle="modal" data-bs-target="#addOrder">Add Order</p>
                        </div>
                    </div>

                    <DataGridTable
                        rows={rows}
                        setRows={setRows}
                        columns={ordersColumns}
                        defaultRows={ordersRows}
                        selectedRow={selectedRow}
                        setSelectedRow={setSelectedRow}
                        keyLocalStorage={'orders'}
                        modalId="#orderModal" />
                </div>
                <EditModal
                    modalId="orderModal"
                    rows={rows}
                    setRows={setRows}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                    keyLocalStorage={'orders'}
                />
                <AddModal
                    modalId="addOrder"
                    rows={rows}
                    setRows={setRows}
                    keyLocalStorage={'orders'}
                />
            </div>
        </div>
    )
}




export default Orders
