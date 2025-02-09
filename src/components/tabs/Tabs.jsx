import './tabs.scss';
import React, { useEffect, useState } from "react";
import { ButtonGroup, Button, Card, Row, Col, Pagination } from "react-bootstrap";
import { sales, bouquets, plants, allProducts } from '../../dataItems.js';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../Redux/Reduxs/cartSlice.jsx';

const Tabs = ({ category, onItemAdded }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleBuy = (item) => {
        const uniqueId = `${item.id}-${item.title.trim().toLowerCase().replace(/\s+/g, '')}`;
        const existingItem = cartItems.find(cartItem => cartItem.id === uniqueId);

        if (existingItem) {
            dispatch(addItem({ ...existingItem, quantity: existingItem.quantity + 1 }));
        } else {
            const modifiedItem = {
                ...item,
                id: uniqueId,
                quantity: 1,
            };
            dispatch(addItem(modifiedItem));
        }
        onItemAdded();
    };

    const renderButton = (item) => {
        const uniqueId = `${item.id}-${item.title.trim().toLowerCase().replace(/\s+/g, '')}`;
        const existingItem = cartItems.find(cartItem => cartItem.id === uniqueId);

        return (
            <button
                className="btn-buy w-100 mt-3 fw-bold"
                onClick={() => handleBuy(item)}
            >
                {existingItem ? `Quantity: ${existingItem.quantity}` : 'Buy'}
            </button>
        );
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const [activeSales, setActiveSales] = useState("10");
    const [activeBouquets, setActiveBouquets] = useState("romantic");
    const [activePlants, setActivePlants] = useState("succulents");

    const paginateItems = (items) => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return items.slice(indexOfFirstItem, indexOfLastItem);
    };

    const renderPagination = (totalItems) => {
        const totalPages = Math.ceil(totalItems.length / itemsPerPage);
        return (
            <div className="pagination mt-4 d-flex justify-content-center">
                <Pagination>
                    <Pagination.Prev
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    />
                    <Pagination.Next
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    />
                </Pagination>
            </div>
        );
    };

    const renderTabs = () => {
        switch (category) {
            case "allProducts":
                return (
                    <div className="tabs allProducts">
                        <Row className="mt-4 d-flex gap-5 justify-content-center align-items-center">
                            {paginateItems(allProducts).map((item) => (
                                <Col key={item.id} xs={10} sm={5} lg={3} className="mb-3">
                                    <Card>
                                        <img src={item.saleIcon} className='sale' alt='sale icon' style={item.saleIcon ? { display: 'block' } : { display: 'none' }} />
                                        <Card.Body className='pb-0'>

                                            <h5>{item.title}</h5>
                                            <p>{item.text}</p>

                                            <div className='imgContainer d-flex justify-content-center align-items-center'>
                                                <img src={item.img} alt={item.title} />
                                            </div>

                                            <div className='price mt-2 d-flex justify-content-between align-items-center'>
                                                <span className='fw-normal fs-6'>{item.category}</span>
                                                <span className='fw-bold fs-5'>${item.price}</span>
                                            </div>

                                            {renderButton(item)}

                                            <div className='colors'>
                                                <span className='color' style={{ backgroundColor: item.color1 }}></span>
                                                <span className='color' style={{ backgroundColor: item.color2 }}></span>
                                                <span className='color' style={{ backgroundColor: item.color3 }}></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        {renderPagination(allProducts)}
                    </div >
                );
            case "sales":
                return (
                    <div className="tabs sales">
                        <ButtonGroup className='d-flex justify-content-between gap-4'>
                            <Button className={activeSales === '10' ? 'active' : ''} onClick={() => { setActiveSales("10"); setCurrentPage(1); }} >
                                Discount 10%
                            </Button>
                            <Button onClick={() => { setActiveSales("20"); setCurrentPage(1); }} >
                                Discount 20%
                            </Button>
                            <Button onClick={() => { setActiveSales("30"); setCurrentPage(1); }} >
                                Discount 30%
                            </Button>
                        </ButtonGroup>

                        <Row className="mt-3 d-flex gap-5 justify-content-center align-items-center">
                            {paginateItems(sales[activeSales]).map((item) => (
                                <Col key={item.id} xs={8} sm={5} lg={3} className="mb-3">
                                    <Card>
                                        <Card.Body className='pb-0'>

                                            <h5>{item.title}</h5>
                                            <p>{item.text}</p>

                                            <div className='imgContainer d-flex justify-content-center align-items-center'>
                                                <img src={item.img} alt={item.title} />
                                            </div>

                                            <div className='price d-flex justify-content-between align-items-center'>
                                                <span className='fw-bold fs-5 oldPrice'>${item.oldPrice}</span>
                                                <span className='fw-bold fs-5'>${item.price}</span>
                                            </div>

                                            {renderButton(item)}

                                            <div className='colors'>
                                                <span className='color' style={{ backgroundColor: item.color1 }}></span>
                                                <span className='color' style={{ backgroundColor: item.color2 }}></span>
                                                <span className='color' style={{ backgroundColor: item.color3 }}></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        {renderPagination(sales[activeSales])}
                    </div>
                );
            case "bouquets":
                return (
                    <div className="tabs bouquets">
                        <ButtonGroup className='d-flex justify-content-between gap-4'>
                            <Button className={activeBouquets === 'romantic' ? 'active' : ''} onClick={() => { setActiveBouquets("romantic"); setCurrentPage(1); }} >
                                Romantic
                            </Button>
                            <Button onClick={() => { setActiveBouquets("sympathy"); setCurrentPage(1); }} >
                                Sympathy
                            </Button>
                            <Button onClick={() => { setActiveBouquets("congratulations"); setCurrentPage(1); }} >
                                Congratulations
                            </Button>
                        </ButtonGroup>

                        <Row className="mt-3 d-flex gap-5 justify-content-center align-items-center">
                            {paginateItems(bouquets[activeBouquets]).map((item) => (
                                <Col key={item.id} xs={8} sm={5} lg={3} className="mb-3">
                                    <Card>
                                        <Card.Body className='pb-0'>

                                            <h5>{item.title}</h5>

                                            <div className='imgContainer d-flex justify-content-center align-items-center'>
                                                <img src={item.img} alt={item.title} />
                                            </div>

                                            <div className='price d-flex justify-content-end align-items-center'>
                                                <span className='fw-bold fs-5'>${item.price}</span>
                                            </div>

                                            {renderButton(item)}

                                            <div className='colors'>
                                                <span className='color' style={{ backgroundColor: item.color1 }}></span>
                                                <span className='color' style={{ backgroundColor: item.color2 }}></span>
                                                <span className='color' style={{ backgroundColor: item.color3 }}></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        {renderPagination(bouquets[activeBouquets])}
                    </div>
                );
            case "plants":
                return (
                    <div className="tabs plants">
                        <ButtonGroup className='d-flex justify-content-between gap-4'>
                            <Button className={activePlants === 'succulents' ? 'active' : ''} onClick={() => { setActivePlants("succulents"); setCurrentPage(1); }} >
                                Succulents
                            </Button>
                            <Button onClick={() => { setActivePlants("lowLight"); setCurrentPage(1); }} >
                                Low-Light
                            </Button>
                            <Button onClick={() => { setActivePlants("petFriendly"); setCurrentPage(1); }} >
                                Pet-Friendly
                            </Button>
                        </ButtonGroup>

                        <Row className="mt-3 d-flex gap-5 justify-content-center align-items-center">
                            {paginateItems(plants[activePlants]).map((item) => (
                                <Col key={item.id} xs={8} sm={5} lg={3} className="mb-3">
                                    <Card>
                                        <Card.Body className='pb-0'>
                                            <h5>{item.title}</h5>

                                            <div className='imgContainer d-flex justify-content-center align-items-center'>
                                                <img src={item.img} alt={item.title} />
                                            </div>

                                            <div className='price d-flex justify-content-between align-items-center'>
                                                <span className='fw-bold fs-5'>${item.price}</span>
                                            </div>

                                            {renderButton(item)}

                                            <div className='colors'>
                                                <span className='color' style={{ backgroundColor: item.color1 }}></span>
                                                <span className='color' style={{ backgroundColor: item.color2 }}></span>
                                                <span className='color' style={{ backgroundColor: item.color3 }}></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        {renderPagination(plants[activePlants])}
                    </div>
                );
            default:
                return <p>Please select a valid category.</p>;
        }
    };

    return <>{renderTabs()}</>;
};

export default Tabs;
