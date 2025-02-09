import './navbar.scss'
import notifications from '../../assets/icons/notifications.png';
import user2 from '../../assets/icons/user2.png';
import React, { useRef, useEffect, useContext, useState } from 'react';
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [t, i18n] = useTranslation();
    const elementRef = useRef();
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const { setNavbarHeight } = useContext(NavbarHeightContext);
    const cartItems = useSelector(state => state.cart.items);
    const [numberElements, setNumberElements] = useState(0)


    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    const updateHeight = () => {
        if (elementRef.current) {
            setNavbarHeight(elementRef.current.offsetHeight);
        }
    };

    useEffect(() => {
        setNumberElements(cartItems.length)
    }, [cartItems]);

    const getNavText = () => {
        switch (location.pathname) {
            case '/':
                return t('home');

            case '/items':
                return t('items');

            case '/items/addItem':
                return t('addItem');

            case '/reports':
                return t('reports');

            case '/users':
                return t('users');

            case '/orders':
                return t('orders');

            case '/reportsGraphLine':
                return t('orders');

            case '/cart':
                return t('cart');

            default:
                break;
        }
    }

    useEffect(() => {

        handleScroll()
        updateHeight();

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', updateHeight);
        };

    }, []);


    return (

        <nav className={` p-3 ${scrolled ? "navbar navScroll" : "navbar navTransparent"}`} ref={elementRef}>
            <div className="container-fluid">
                <a className="navbar-brand fs-4" href='#'>{getNavText()}</a>
                <div className='col-7 col-sm-8 col-md-3  mt-1 left d-flex gap-4 justify-content-end align-items-center'>

                    <div className='cart'>
                        <NavLink to='/cart'>
                            <span>{numberElements}</span>
                            <ShoppingCartOutlinedIcon width="22px" />
                        </NavLink>
                    </div>
                    <div className='notifications'>
                        <span></span>
                        <img src={notifications} alt="Notifications Icon" width="22px" />
                    </div>

                    <div className="dropdown">
                        <FontAwesomeIcon
                            icon={faGlobeAmericas}
                            className="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            data-bs-offset="0,10"
                            aria-expanded="false"
                            width="22px" />
                        <ul className={`dropdown-menu mt-3 ${i18n.language !== 'ar' ? 'dropdown-menu-end'
                            : 'dropdown-menu-start'}`} aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" onClick={() => changeLanguage('ar')}>Arabic</a></li>
                            <li><a className="dropdown-item" onClick={() => changeLanguage('en')}>English</a></li>
                            <li><a className="dropdown-item" onClick={() => changeLanguage('es')}>Spanish</a></li>
                            <li><a className="dropdown-item" onClick={() => changeLanguage('de')}>German</a></li>
                            <li><a className="dropdown-item" onClick={() => changeLanguage('fr')}>French</a></li>
                        </ul>
                    </div>

                    <div className='user bg-dark-subtle'>
                        <img src={user2} alt="User Icon" width="22px" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
