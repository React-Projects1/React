import React, { useContext, useEffect, useState } from 'react'
import './users.scss'
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { usersColumns } from '../../dataGridTable'
import DataGridTable from '../../components/dataGridTable/DataGridTable';
import EditModal from '../../components/modals/editModal/EditModal';
import AddModal from '../../components/modals/addModal/AddModal';
import axios from 'axios';
import plus from '../../assets/icons/plus.png';


const Users = () => {
  let localData = JSON.parse(localStorage.getItem('users'))
  const { navbarHeight = 0 } = useContext(NavbarHeightContext);
  const [rows, setRows] = useState(localData)
  const [selectedRow, setSelectedRow] = useState(null)

  useEffect(() => {
    if (localData.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result) => {
          localStorage.setItem('users', JSON.stringify(result.data))
          setRows(result.data)
        })
        .catch((error) => { console.error(error) })
    }


  }, []);

  const handleInputChange = (field, value) => {
    return setSelectedRow({ ...selectedRow, [field]: value })
  }

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
              <p className='mb-0 btn' data-bs-toggle="modal" data-bs-target="#addUser">Add User</p>
            </div>
          </div>
          <DataGridTable
            rows={rows}
            setRows={setRows}
            defaultRows={rows}
            columns={usersColumns}
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            keyLocalStorage={'users'}
            modalId="#userModal" />
        </div>
        <EditModal
          modalId="userModal"
          rows={rows}
          setRows={setRows}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          keyLocalStorage={'users'}
          onchange={handleInputChange} />

        <AddModal
          modalId="addUser"
          rows={rows}
          setRows={setRows}
          keyLocalStorage={'users'}
        />
      </div>
    </div>
  )
}

export default Users
