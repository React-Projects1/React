import React, { useEffect, useState } from 'react'
import './addModal.scss'
import { reportField, userField, ordersField } from '../../../dataGridTable'

const AddModal = ({ modalId, rows, setRows, keyLocalStorage }) => {
    const [addRow, setAddRow] = useState({})

    const handleSave = () => {
        const localData = JSON.parse(localStorage.getItem(keyLocalStorage))
        const updateRows = localData.concat(addRow)
        const newRows = updateRows.map((item, index) => ({ ...item, id: index + 1 }))
        localStorage.setItem(keyLocalStorage, JSON.stringify(newRows))
        setRows(newRows);
    }

    const handleInput = () => {
        switch (keyLocalStorage) {
            case 'users':
                return (
                    userField.map((input, index) => (
                        <div key={index} className="col-6 mb-3">
                            <label htmlFor={input.name} className="col-form-label">{input.label}:</label>
                            <input
                                type={input.type}
                                className="form-control"
                                id={input.name}
                                onChange={(e) =>
                                    setAddRow({ ...addRow, [input.name]: e.target.value })
                                }
                            />
                        </div>
                    ))
                )

            case 'reports':
                return (
                    <>
                        {reportField.map((input, index) => (
                            <div key={index} className="col-6 mb-3">
                                <label htmlFor={input.name} className="col-form-label">{input.label}:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={input.name}
                                    onChange={(e) =>
                                        setAddRow({ ...addRow, [input.name]: e.target.value })
                                    } />
                            </div>
                        ))}

                        <div className="col-12 mb-3" >
                            <label htmlFor="notes" className="col-form-label">Notes:</label>
                            <textarea className="form-control" id="notes"
                                onChange={(e) => setAddRow({ ...addRow, notes: e.target.value })}></textarea>
                        </div>
                    </>

                )
            case 'orders':
                return (
                    <>
                        {ordersField.map((input, index) => (
                            <div key={index} className="col-6 mb-3">
                                <label htmlFor={input.name} className="col-form-label">{input.label}:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={input.name}
                                    onChange={(e) =>
                                        setAddRow({ ...addRow, [input.name]: e.target.value })
                                    } />
                            </div>
                        ))}
                    </>

                )

            default:
                break;
        }
    }
    return (
        <div className='addModal'>
            <div className="modal fade" id={modalId} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body px-3">
                            <form className="row d-flex justify-content-center ">
                                {handleInput()}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                onClick={() => handleSave()}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddModal