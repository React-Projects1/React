import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import table from '../../assets/icons/table.png'
import arrow6 from '../../assets/icons/arrow6.png'
import './dropdownInGraph.scss'

const DropdownInGraph = ({ type }) => {
    const [selected, setSelected] = useState('')

    useEffect(() => {
        setSelected(type)
    }, [selected]);

    return (
        <div className='dropdownInGraph row d-flex justify-content-between align-items-center'>
            <div className='col-3'>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {selected}
                        <img src={arrow6} alt="Graph Icon" width="20px" className='d-flex ms-2' />
                    </button>
                    <ul className="dropdown-menu ps-3" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <NavLink to='/reportsGraphLine' className="dropdown-item">Line</NavLink>
                        </li>

                        <li>
                            <NavLink to='/reportsGraphBar' className="dropdown-item">Bar chart</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-4 d-flex justify-content-end align-items-center'>
                <img src={table} alt="Graph Icon" width="18px" className='d-flex me-2' />
                <NavLink to='/reports'>Return to table</NavLink>
            </div>
        </div>
    )
}

export default DropdownInGraph
