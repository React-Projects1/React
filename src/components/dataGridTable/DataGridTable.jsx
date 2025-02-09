import './dataGridTable.scss'
import { Pagination } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const DataGridTable = ({ rows, setRows, defaultRows, columns, selectedRow, setSelectedRow, keyLocalStorage, modalId }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const paginateItems = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return items.slice(startIndex, startIndex + itemsPerPage)
  }
  const totalPages = Math.ceil(rows.length / itemsPerPage)

  const handleDelete = (row) => {
    const updatedRow = rows.filter(item => item.id !== row.id)
    const reindexedRows = updatedRow.map((item, index) => ({ ...item, id: index + 1 }))
    localStorage.setItem(keyLocalStorage, JSON.stringify(reindexedRows))
    return setRows(reindexedRows)
  }


  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(keyLocalStorage));
    if (localData && localData.length > 0) {
      setRows(localData);
    } else {
      const initialRows = [...defaultRows];
      localStorage.setItem(keyLocalStorage, JSON.stringify(initialRows));
      setRows(initialRows);
    }
  }, []);


  const actionColumn = {
    field: 'action', headerName: 'Action', flex: 1, renderCell: (params) => (
      <div className='actionBtn d-flex align-items-center gap-3 h-100'>
        <EditOutlinedIcon
          className='text-success'
          data-bs-toggle="modal"
          data-bs-target={modalId}
          onClick={() => setSelectedRow(params.row)}
        />
        <DeleteOutlineOutlinedIcon
          className='text-danger'
          onClick={() => handleDelete(params.row)} />
      </div>
    )
  }

  return (
    <div className='table'>
      <DataGrid
        rows={paginateItems(rows)}
        columns={columns.concat(actionColumn)}
        pageSize={itemsPerPage}
        getRowId={(row) => row.id}
        disablePagination
        checkboxSelection
        disableRowSelectionOnClick

      />

      <div className=" my-2 d-flex justify-content-center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          shape="rounded"
        />
      </div>

    </div>

  )
}

export default DataGridTable