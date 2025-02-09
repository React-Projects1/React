import React, { useState, useEffect, useContext } from 'react';
import './AddItem.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import star from '../../assets/icons/star.png';
import upload from '../../assets/icons/upload.png';
import SelectColors from '../../components/selectColors/SelectColors';
import SelectCategory from '../../components/selectCategory/SelectCategory.jsx';
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';
import { useTranslation } from 'react-i18next';

const AddItem = () => {
    const [t, i18n] = useTranslation();
    const { navbarHeight = 0 } = useContext(NavbarHeightContext);
    const [showImg, setShowImg] = useState(false);
    const [urlImg, setUrlImg] = useState('');
    const [srcImg, setsrcImg] = useState('');
    const [selectedColors, setSelectedColors] = useState([]);

    const handelImg = (e) => {
        setShowImg(true);
        setUrlImg(e.target.files[0]);
    };

    useEffect(() => {
        if (urlImg) {
            if (urlImg.type?.startsWith('image/')) {
                setsrcImg(URL.createObjectURL(urlImg));
            } else {
                alert('Enter Image');
            }
        }
    }, [urlImg]);

    return (
        <div className='AddItem'>
            <div className="wrapper">
                <div className="sidebarContainer">
                    <Sidebar />
                </div>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className="content px-0 px-md-3 px-lg-4 pb-4"
                    style={{ marginTop: `${navbarHeight + 12}px` }}>
                    <h4 className=' mb-lg-0'>{t('addNewItem')}</h4>

                    <form className="row g-4 m-0 d-flex justify-content-between align-items-center px-lg-5 mx-lg-5 ">
                        <div className="col-12 col-md-6 col-lg-5">
                            <label htmlFor="inputName" className="form-label">{t('itemName')}
                                <img src={star} alt='Star Icon' width='10px' /> </label>
                            <input type="text" className="form-control" id="inputName" 
                            placeholder={t('expTulips')} />
                        </div>

                        <div className="col-12 col-md-6 col-lg-5">
                            <label htmlFor="inputPrice" className="form-label">{t('itemPrice')}
                                <img src={star} alt='Star Icon' width='10px' /></label>
                            <input type="text" className="form-control" id="inputPrice" 
                            placeholder={t('exp10')} />
                        </div>

                        <div className="col-12 col-md-6 col-lg-5">
                            <SelectCategory />
                        </div>

                        <div className="col-12 col-md-6 col-lg-5">

                            <SelectColors selectedColors={selectedColors} setSelectedColors={setSelectedColors} />
                        </div>

                        <div className="col-12 d-flex gap-3 mt-2 colors">
                            {selectedColors.map((color, index) => (
                                <span
                                    key={index}
                                    style={{
                                        backgroundColor: color.value,
                                    }}
                                    title={color.label}
                                ></span>
                            ))}
                        </div>

                        <div className="col-md-5 mb-0 mt-2">
                            <label htmlFor="inputFile" className="form-label">{t('uploadItemPhoto')}
                                <img src={upload} alt='Star Icon' width='20px' className='d-inline-block ms-3' /></label>
                            <input type="file" className="form-control " id="inputFile" style={{ display: 'none' }} onChange={handelImg} />
                        </div>

                        <div className="col-12 d-flex justify-content-center mt-0 ">
                            <div className='imgContainer d-flex justify-content-center'>
                                <img src={srcImg} className="rounded" alt="plant-1" style={showImg ? { visibility: 'visible' } : { visibility: 'hidden' }} />
                            </div>
                        </div>

                        <div className="col-12 d-flex justify-content-center ">
                            <button type="submit" className="btn ">{t('save')}</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;
