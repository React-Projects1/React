import React from 'react'
import './widget.scss'
import { Card, Col, Row } from 'react-bootstrap';
import { cardData } from '../../dataItems'
import arrow5 from '../../assets/icons/arrow5.png'
 
const Widget = () => {
    return (
        <div className='widget'>
            <Row>
                {cardData.map((item, index) => (
                    <Col key={index} xs={10} sm={5} md={5} lg={3} className='custom-card'>
                        <Card style={{
                            background: `linear-gradient(180deg, ${item.backgroundColor} 6%, 
                                     ${item.linearGradient} 89%)`
                        }}>
                            <Card.Body className='d-flex flex-column justify-content-between'>
                                <div className='top'>
                                    <div className='d-flex justify-content-between'>
                                        <p className='mb-0'>{item.title}</p>
                                        <div className='d-flex align-items-center'>
                                            <img src={item.icon} alt='Arrow Icon' width='16px' style={item.icon ?
                                                { display: 'flex' } :
                                                { display: 'none' }} />

                                            <span style={item.percentage >= 15 ?
                                                { color: 'green' } : { color: 'red' }}>
                                                {item.percentage ? `${item.percentage}%`
                                                    .replace('.', ',') : ''}
                                            </span>
                                        </div>
                                    </div>
                                    <p className='mb-0 text'>{item.text ? item.text : ""}</p>
                                </div>

                                <div className='center my-1'>
                                    <h3>{item.price}</h3>
                                </div>

                                <div className='bottom d-flex justify-content-between'>
                                    <span>Last month</span>
                                    <img src={arrow5} alt='Arrow Icon' width='20px' className='me-3' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Widget
