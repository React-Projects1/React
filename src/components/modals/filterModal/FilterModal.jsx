import React, { useEffect, useState } from 'react'
import './filterModal.scss'
import { reportField } from '../../../dataGridTable.js'

const FilterModal = ({ modalId, rows, setRows, filterRows, setFilterRows, keyLocalStorage }) => {
    const localData = JSON.parse(localStorage.getItem(keyLocalStorage))
    const [selectedColumn, setSelectedColumn] = useState("")
    const [selectedOperator, setSelectedOperator] = useState("")
    const [selectedValue, setSelectedValue] = useState("")

    const handleSave = () => {
        let filteredData = null;
        switch (selectedOperator) {
            case 'contains':
                filteredData = rows.filter(item =>
                    item[selectedColumn]?.toLowerCase().includes(selectedValue.toLowerCase())
                );
                break;

            case 'equals':
                filteredData = rows.filter(item =>
                    item[selectedColumn]?.toLowerCase() === selectedValue.toLowerCase()
                );
                break;

            case 'startsWith':
                filteredData = rows.filter(item =>
                    item[selectedColumn]?.toLowerCase().startsWith(selectedValue.toLowerCase())
                );
                break;

            default:
                break;
        }

        setFilterRows(filteredData);
        setRows(filteredData);
    };

    const handleClose = () => {
        setRows(localData)
        setSelectedColumn("")
        setSelectedOperator("")
        setSelectedValue("")
        setFilterRows(null)
    }


    return (
        <div className='filterModal'>
            <div className="modal fade" id={modalId} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body px-3">
                            <div className='row d-flex justify-content-end'>
                                {filterRows ? (
                                    <button
                                        type="button"
                                        className="btn-close mt-3 me-2 col-3"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={handleClose}
                                    ></button>
                                ) : null}
                            </div>

                            <form className="row mt-2 mb-4 d-flex justify-content-around ">
                                <div className='col-4'>
                                    <select className="form-select" aria-label=".form-select example"
                                        onChange={(e) => setSelectedColumn(e.target.value)} value={selectedColumn}>
                                        <option selected hidden>Columns</option>
                                        {reportField.map((item, index) => (
                                            <option key={index} value={item.name}>{item.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className='col-4'>
                                    <select className="form-select" aria-label=".form-select example"
                                        onChange={(e) => setSelectedOperator(e.target.value)} value={selectedOperator}>
                                        <option selected hidden>Operator</option>
                                        <option value="contains">Contains</option>
                                        <option value="equals">Equals</option>
                                        <option value="startsWith">Starts with</option>
                                    </select>
                                </div>

                                <div className='col-4'>
                                    <input type="text" className="form-control" placeholder="Value"
                                        onChange={(e) => setSelectedValue(e.target.value)} value={selectedValue} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSave}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterModal
