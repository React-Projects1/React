import './nestedList-2.scss';
import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { menuData } from '../../dataItems'

const NestedList2 = ({ selected, setSelected }) => {
    const [modalShow, setModalShow] = useState(false);
    const [subMenuShow, setSubMenuShow] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);
    let timeOut;

    const handleMouseEnter = (id) => {
        clearTimeout(timeOut)
        setSubMenuShow(true)
        setCurrentItem(id)
    }

    const handleMouseLeave = () => {
        timeOut = setTimeout(() => {
            setSubMenuShow(false)
        }, 100);
    }

    const handleMouseEnterSubMenu = () => {
        clearTimeout(timeOut)
        setSubMenuShow(true)
    }

    const handleTitleSubMenu = () => {
        if (currentItem !== 0) {
            let titleSubMenu = menuData.find((item) => item.id === currentItem)
            return titleSubMenu.title
        }
    }

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered animation={false}>
                <Modal.Body className='p-0 m-0 d-flex justify-content-center align-items-center gap-2'>
                    <ListGroup>
                        <ListGroup.Item disabled>Finances</ListGroup.Item>
                        {menuData.map((item) => (
                            <ListGroup.Item key={item.id}
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}>{item.title}</ListGroup.Item>
                        ))}

                    </ListGroup>

                    <ListGroup className='subMenu'
                        style={subMenuShow ? { display: 'block' } : { display: 'none' }}
                        onMouseEnter={handleMouseEnterSubMenu}
                        onMouseLeave={() => setSubMenuShow(false)}>

                        <ListGroup.Item disabled>{handleTitleSubMenu()}</ListGroup.Item>
                        {
                            menuData.map((item, index) => (
                                item.id === currentItem ? item.subItems.map((item2) => (
                                    <ListGroup.Item key={`${item2}-${index}`} onClick={() => setSelected([...selected, item2])}>{item2}</ListGroup.Item>
                                )) : ""
                            ))
                        }
                    </ListGroup>
                </Modal.Body>
            </Modal>
        );
    }

    return (
        <div className="nestedList mt-4">
            <Button onClick={() => setModalShow(true)}>
                Finances
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </div>
    );
};

export default NestedList2;
