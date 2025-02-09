import React, { useState, useContext } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import NestedList from '../../components/nestedList/NestedList'
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';
import NestedList2 from '../../components/nestedList 2/NestedList-2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';



const Test = () => {
    const { navbarHeight = 0 } = useContext(NavbarHeightContext);
    const [selected, setSelected] = useState([]);

    return (
        <div className='home'>
            <div className="wrapper">
                <div className="sidebarContainer">
                    <Sidebar />
                </div>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className="content ps-4" style={{ marginTop: `${navbarHeight + 12}px` }}>
                    <div className='d-flex gap-4'>
                        <NestedList />
                        <NestedList2 selected={selected} setSelected={setSelected} />
                    </div>
                    <div className='mt-3'>
                        <h4>Options Selected</h4>
                        {selected.map((item, index) => (
                            <div className='d-flex align-items-center gap-5 my-2' key={item}>
                                <p className='mb-0'>{item}</p>
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    className='text-danger'
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setSelected(selected.filter((selectItem, i) =>
                                        i !== index))}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test
