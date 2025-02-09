import './nestedList.scss';
import React, { useState } from 'react';

const NestedList = () => {
    const [show, setShow] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    let timeoutId;

    const handleMouseEnter = (id) => {
        clearTimeout(timeoutId);
        setActiveItem(id);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setActiveItem(null);
        }, 100); 
    };

    const menuData = [
        {
            id: 1,
            title: 'Wallet History',
            subItems: ['Wallet History 1', 'Wallet History 2', 'Wallet History 3'],
        },
        {
            id: 2,
            title: 'Users Wallets',
            subItems: ['Users Wallets 1', 'Users Wallets 2', 'Users Wallets 3'],
        },
        {
            id: 3,
            title: 'Users Withdraw Requests',
            subItems: ['Users Withdraw Requests 1', 'Users Withdraw Requests 2', 'Users Withdraw Requests 3'],
        },
    ];

    return (
        <div className="nestedList mt-4">
            <div
                className="menu"
                onMouseEnter={()=> setShow(true)}
                onMouseLeave={()=> setShow(false)}>
                <div className="menu-title">
                    <span>Finances</span>
                </div>
                <div className="submenu">
                    <ul
                        className="list-unstyled ms-3 mt-2 py-2 px-3 me-1"
                        style={show ? { display: 'block' } : { display: 'none' }}>
                        {menuData.map((item) => (
                            <li
                                key={item.id}
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}>
                                <span>{item.title}</span>
                                <ul
                                    className="subul list-unstyled py-2 px-3"
                                    style={{
                                        display: activeItem === item.id ? 'block' : 'none',
                                    }}>
                                    {item.subItems.map((subItem, index) => (
                                        <li key={index}>{subItem}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NestedList;
