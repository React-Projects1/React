import React, { useContext, useEffect, useState } from 'react';
import './reports.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';
import DataGridTable from '../../components/dataGridTable/DataGridTable';
import EditModal from '../../components/modals/editModal/EditModal';
import AddModal from '../../components/modals/addModal/AddModal';
import { reportsColumns, reportsRows } from '../../dataGridTable';
import plus from '../../assets/icons/plus.png';
import graph from '../../assets/icons/graph.png'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import FilterModal from '../../components/modals/filterModal/FilterModal';
import { NavLink } from 'react-router-dom';


const Reports = () => {
    const localData = JSON.parse(localStorage.getItem('reports'))
    const { navbarHeight = 0 } = useContext(NavbarHeightContext);
    const [rows, setRows] = useState(localData)
    const [selectedRow, setSelectedRow] = useState(null)
    const [searchText, setSearchText] = useState("");
    const [filterRows, setFilterRows] = useState(null);


    const handleDeleteAll = () => {
        setRows([])
    }
    useEffect(() => {

        const fieldsToSearch = ["productName", "dateOfCreation", "price", "customerId", "notes"];

        const dataFilter = rows.filter((item) =>
            fieldsToSearch.some((field) =>
                item[field]?.toLowerCase().includes(searchText.toLowerCase())
            )
        );

        setRows(dataFilter)


    }, [searchText]);

    return (
        <div className='reports'>
            <div className='wrapper'>
                <div className='sidebarContainer'>
                    <Sidebar />
                </div>
                <div className='navbarContainer'>
                    <Navbar />
                </div>
                <div className='content py-3' style={{ marginTop: `${navbarHeight + 12}px` }}>
                    <div className='row mb-3 d-flex justify-content-between'>
                        <div class="col-5 d-flex gap-2">
                            <button type="button" class="btn d-flex align-items-center gap-1"
                                onClick={() => handleDeleteAll()}><DeleteOutlineIcon fontSize="small" />Delete</button>

                            <button type="button"
                                class={`btn d-flex align-items-center gap-1 
                                ${filterRows !== null ? 'filter' : ''}`} data-bs-toggle="modal" data-bs-target="#filterReport">
                                <FilterListIcon fontSize="small" />Filter</button>

                            <div className='search d-flex align-items-center'>
                                <SearchIcon fontSize="small" />
                                <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"
                                    onChange={(e) => e.target.value !== "" ? setSearchText(e.target.value) : setRows(localData)} />
                            </div>

                        </div>


                        <div className='col-5 col-md-4 col-lg-4 d-flex justify-content-end align-items-center gap-3 me-1'>
                            <div className='addItem d-flex align-items-center justify-content-end'>
                                <img src={plus} alt="Plus Icon" width="18px" className='d-flex me-2' />
                                <p className='mb-0' data-bs-toggle="modal" data-bs-target="#addReport">Add Report</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-end graph'>
                                <img src={graph} alt="Graph Icon" width="18px" className='d-flex me-2' />
                                <NavLink to='/reportsGraphLine'>Convert to graph</NavLink>
                            </div>
                        </div>


                    </div>
                    <DataGridTable
                        rows={rows}
                        setRows={setRows}
                        columns={reportsColumns}
                        defaultRows={reportsRows}
                        selectedRow={selectedRow}
                        setSelectedRow={setSelectedRow}
                        keyLocalStorage={'reports'}
                        modalId="#reportModal" />
                </div>
                <EditModal
                    modalId="reportModal"
                    rows={rows}
                    setRows={setRows}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                    keyLocalStorage={'reports'}
                />
                <AddModal
                    modalId="addReport"
                    rows={rows}
                    setRows={setRows}
                    keyLocalStorage={'reports'}
                />
                <FilterModal
                    modalId="filterReport"
                    rows={rows}
                    setRows={setRows}
                    filterRows={filterRows}
                    setFilterRows={setFilterRows}
                    keyLocalStorage={'reports'}
                />
            </div>
        </div>
    );
};

export default Reports;
