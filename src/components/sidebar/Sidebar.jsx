import React, { useState } from 'react';
import { Nav, Offcanvas, Button, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import dashboard from '../../assets/icons/dashboard.png';
import report from '../../assets/icons/report.png';
import item from '../../assets/icons/item.png';
import user from '../../assets/icons/user.png';
import order from '../../assets/icons/order.png';
import account from '../../assets/icons/account.png';
import logout from '../../assets/icons/logout.png';
import './sidebar.scss'
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const [t, i18n] = useTranslation();
  const [show, setShow] = useState(false);

  const routs = {
    dashboard: '/',
    items: '/items',
    test: '/test',
    reports: '/reports',
    users: '/users',
    orders: '/orders',
  }

  const toggleSidebar = () => setShow(!show);

  return (
    <div>
      <Button className="d-lg-none d-flex align-items-center ps-4 btnToggle" onClick={toggleSidebar}>
        <FaBars />
      </Button>

      <Offcanvas show={show} onHide={toggleSidebar} placement="start" className="d-lg-none">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <div className="d-flex flex-column h-100 sidebar">
            <div className="logo-section p-3 mb-4">
              <h4 className='mb-0'>{t('rosette')}</h4>
            </div>

            <div className="links-section">
              <Nav defaultActiveKey="/" className="links-section-nav flex-column gap-5 fs-3">

                <Nav.Link as={NavLink} to={routs.dashboard} >
                  <img src={dashboard} alt="Dashboard Icon" width="24px"
                    className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
                  <p className="mb-0">{t('dashboard')}</p>
                </Nav.Link>

                <Nav.Link as={NavLink} to={routs.test} >
                  <img src={dashboard} alt="Dashboard Icon" width="24px"
                    className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
                  <p className="mb-0">{t('test')}</p>
                </Nav.Link>

                <Nav.Link as={NavLink} to={routs.reports}>
                  <img src={report} alt="Dashboard Icon" width='24px'
                    className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
                  <p className="mb-0">{t('reports')}</p>
                </Nav.Link>

                <Nav.Link as={NavLink} to={routs.items}>
                  <img src={item} alt="Items Icon" width='24px'
                    className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
                  <p className="mb-0">{t('items')}</p>
                </Nav.Link>

                <Nav.Link as={NavLink} to={routs.users}>
                  <img src={user} alt="Users Icon" width='24px'
                    className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
                  <p className="mb-0">{t('users')}</p>
                </Nav.Link>

                <Nav.Link as={NavLink} to={routs.orders}>
                  <img src={order} alt="Orders Icon" width='24px'
                    className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
                  <p className="mb-0">{t('orders')}</p>
                </Nav.Link>

                <Nav.Link href="#pricing">
                  <img src={account} alt="Account Icon" width='24px'
                    className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
                  <p className="mb-0">{t('account')}</p>
                </Nav.Link>

              </Nav>
            </div>

            <div className="logout-section p-3 position-absolute bottom-0">
              <Nav defaultActiveKey="/" className="flex-column gap-4">
                <Nav.Link href="#home" >
                  <img src={logout} alt="Logout Icon" width="24px"
                    className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
                  <p className="mb-0">{t('logout')}</p>
                </Nav.Link>
              </Nav>
            </div>

          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="d-none d-lg-block sidebar" >

        <div className="logo-section p-2">
          <h4 className='mb-0 mt-1'>{t('rosette')}</h4>
        </div>

        <div className="links-section flex-grow-1 p-3">
          <Nav defaultActiveKey="/" className="flex-column gap-4 mt-4">

            <Nav.Link as={NavLink} to={routs.dashboard} >
              <img src={dashboard} alt="Dashboard Icon" width="24px"
                className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
              <p className="mb-0">{t('dashboard')}</p>
            </Nav.Link>

            <Nav.Link as={NavLink} to={routs.test} >
              <img src={dashboard} alt="Dashboard Icon" width="24px"
                className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
              <p className="mb-0">{t('test')}</p>
            </Nav.Link>

            <Nav.Link as={NavLink} to={routs.reports}>
              <img src={report} alt="Dashboard Icon" width='24px'
                className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
              <p className="mb-0">{t('reports')}</p>
            </Nav.Link>

            <Nav.Link as={NavLink} to={routs.items}>
              <img src={item} alt="Items Icon" width='24px'
                className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
              <p className="mb-0">{t('items')}</p>
            </Nav.Link>

            <Nav.Link as={NavLink} to={routs.users}>
              <img src={user} alt="Users Icon" width='24px'
                className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
              <p className="mb-0">{t('users')}</p>
            </Nav.Link>

            <Nav.Link as={NavLink} to={routs.orders}>
              <img src={order} alt="Orders Icon" width='24px'
                className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
              <p className="mb-0">{t('orders')}</p>
            </Nav.Link>

            <Nav.Link href="#pricing">
              <img src={account} alt="Account Icon" width='24px'
                className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
              <p className="mb-0">{t('account')}</p>
            </Nav.Link>

          </Nav>
        </div>

        <div className="logout-section p-3 position-absolute bottom-0">
          <Nav defaultActiveKey="/" className="flex-column gap-4">
            <Nav.Link href="#home" >
              <img src={logout} alt="Logout Icon" width="24px" className={`${i18n.language !== 'ar' ? 'me-3' : 'ms-3'}`} />
              <p className="mb-0">{t('logout')}</p>
            </Nav.Link>
          </Nav>
        </div>

      </div>

    </div>
  );
};

export default Sidebar;
