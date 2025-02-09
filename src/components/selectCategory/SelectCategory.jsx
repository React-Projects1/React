import './selectCategory.scss';
import arrow2 from '../../assets/icons/arrow2.png'
import { useTranslation } from 'react-i18next';

const SelectCategory = () => {
    const [t, i18n] = useTranslation();

    return (
        <div className="dropdown" id='selectCategory'>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close='outside'>
                {t('chooseCategory')}
                <img src={arrow2} width='24' alt='arrow icon' />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className='dropend'>
                    <button className="dropdown-item dropdown-toggle" data-bs-toggle='dropdown'>
                        {t('sales')}
                        <img src={arrow2} width='24' alt='arrow icon'
                        className={`${i18n.language !== 'ar' ? 'arrowRight' : 'arrowLeft'}`} />
                    </button>
                    <ul className='dropdown-menu'>
                        <li><button className="dropdown-item">{t('discount10%')}</button></li>
                        <li><button className="dropdown-item">{t('discount20%')}</button></li>
                        <li><button className="dropdown-item">{t('discount30%')}</button></li>
                    </ul>
                </li>

                <li className='dropend'>
                    <button className="dropdown-item dropdown-toggle" data-bs-toggle='dropdown'>
                        {t('bouquets')}
                        <img src={arrow2} width='24' alt='arrow icon'
                        className={`${i18n.language !== 'ar' ? 'arrowRight' : 'arrowLeft'}`} />
                    </button>
                    <ul className='dropdown-menu'>
                        <li><button className="dropdown-item">{t('romantic')}</button></li>
                        <li><button className="dropdown-item">{t('sympathy')}</button></li>
                        <li><button className="dropdown-item">{t('congratulations')}</button></li>
                    </ul>
                </li>

                <li className='dropend'>
                    <button className="dropdown-item dropdown-toggle" data-bs-toggle='dropdown'>
                        {t('indoorPlants')}
                        <img src={arrow2} width='24' alt='arrow icon' 
                        className={`${i18n.language !== 'ar' ? 'arrowRight' : 'arrowLeft'}`} />
                    </button>
                    <ul className='dropdown-menu'>
                        <li><button className="dropdown-item">{t('succulents')}</button></li>
                        <li><button className="dropdown-item">{t('low-Light')}</button></li>
                        <li><button className="dropdown-item">{t('pet-Friendly')}</button></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SelectCategory;
