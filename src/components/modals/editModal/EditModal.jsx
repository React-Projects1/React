import React from 'react'
import './editModal.scss'
import { ordersField, reportField, userField } from '../../../dataGridTable'

const Modal = ({ modalId, rows, setRows, selectedRow, setSelectedRow, keyLocalStorage }) => {
    const handleSave = () => {
        const updateRow = rows.map((row) => (row.id === selectedRow.id ? selectedRow : row))
        localStorage.setItem(keyLocalStorage, JSON.stringify(updateRow))
        return setRows(updateRow)
    }
    const handleInput = () => {
        switch (keyLocalStorage) {
            case 'users':
                return (
                    userField.map((input, index) => (
                        <div key={index} className="col-6 mb-3">
                            <label htmlFor={input.for} className="col-form-label">{input.label}:</label>
                            <input
                                type={input.type}
                                className="form-control"
                                id={input.for}
                                value={selectedRow?.[input.name] || ''}
                                onChange={(e) =>
                                    setSelectedRow({ ...selectedRow, [input.name]: e.target.value })
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
                                    value={selectedRow?.[input.name] || ''}
                                    onChange={(e) =>
                                        setSelectedRow({ ...selectedRow, [input.name]: e.target.value })
                                    } />
                            </div>
                        ))}

                        <div className="col-12 mb-3" >
                            <label htmlFor="notes" className="col-form-label">Notes:</label>
                            <textarea className="form-control" id="notes"
                                value={selectedRow?.notes || ''}
                                onChange={(e) => setSelectedRow
                                    ({ ...selectedRow, notes: e.target.value })}></textarea>
                        </div>
                    </>

                )

            case 'orders':
                return (
                    ordersField.map((input, index) => (
                        <div key={index} className="col-6 mb-3">
                            <label htmlFor={input.for} className="col-form-label">{input.label}:</label>
                            <input
                                type={input.type}
                                className="form-control"
                                id={input.for}
                                value={selectedRow?.[input.name] || ''}
                                onChange={(e) =>
                                    setSelectedRow({ ...selectedRow, [input.name]: e.target.value })
                                }
                            />
                        </div>
                    ))
                )


            default:
                break;
        }
    }
    return (
        <div className='editModal'>
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

export default Modal
