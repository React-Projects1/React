import React, { useState, useContext } from 'react'
import './items.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Tabs from '../../components/tabs/Tabs'
import plus from '../../assets/icons/plus.png';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Items = () => {
  const [t, i18n] = useTranslation();
  const { navbarHeight = 0 } = useContext(NavbarHeightContext);
  const [selectCategory, setSelectCategory] = useState('allProducts')
  const [labelCategory, setLabelCategory] = useState('All Products')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleShowMessage = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleSelect = (selected, label) => {
    setSelectCategory(selected)
    setLabelCategory(label)
  }

  return (
    <div className='items'>
      <div className='wrapper'>

        <div className='sidebarContainer'>
          <Sidebar />
        </div>

        <div className='navbarContainer'>
          <Navbar />
        </div>

        {showSuccessMessage && (
          <div className="alert message alert-success d-flex justify-content-center gap-2 align-items-center text-success" style={{ width: '35%' }} role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Success:">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            <div>
              The element was added to the basket successfully
            </div>
          </div>
        )}

        <div className='content' style={{ marginTop: `${navbarHeight + 12}px` }}>

          <div className='row d-flex align-items-center justify-content-between py-3'>

            <div className='col-5 col-md-4 col-lg-4 addItem d-flex align-items-center px-0'>
              <img src={plus} alt="Plus Icon" width="18px"
                className={`${i18n.language !== 'ar' ? 'me-2' : 'ms-2'}`} />
              <NavLink to='addItem' className='mb-0 fs-5'>{t('addItem')}</NavLink>
            </div>

            <div className="col-6 col-md-4 col-lg-3 dropdown px-0 allProductsMenu ">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span>{labelCategory}</span>
                <FontAwesomeIcon icon={faChevronDown} size="1x" style={{ color: '#979797' }} />
              </button>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                <li>
                  <button className="dropdown-item" onClick={() => handleSelect('allProducts', 'All Products')} >{t('allProducts')}</button>
                </li>

                <li>
                  <button className="dropdown-item" onClick={() => handleSelect('sales', 'Sale')} >
                    {t('sales')}</button>
                </li>

                <li>
                  <button className="dropdown-item" onClick={() => handleSelect('bouquets', 'Bouquets')}>
                    {t('bouquets')}</button>
                </li>

                <li>
                  <button className="dropdown-item" onClick={() => handleSelect('plants', 'Plants')}>
                    {t('indoorPlants')}</button>
                </li>

              </ul>
            </div>

          </div>

          <div className='row d-flex justify-content-sm-center justify-content-lg-start'>
            <div className="searchInput col-sm-6 col-md-5 col-lg-3 d-flex align-items-center justify-content-between">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" color="#979797" className='searchIcon ps-2' />
              <input type="text" className="form-control" placeholder={t('search')} />
            </div>
          </div>

          <div>
            <Tabs category={selectCategory} onItemAdded={handleShowMessage} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Items
