import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SideBar from '../SideBar/SideBar';
import { getButtonText } from '../../ui_reuse/utils/getButtonText';

import styles from './NavigationsButtons.module.css';

const customStyles = {
  sideBar__list: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40px',
    marginLeft: '13px',
  },
  sideBar: {
    minWidth: '400px',
    height: '631px',
    borderRadius: '20px 20px 20px 20px',
    backgroundColor: 'rgba(40, 97, 200, 1)',
    position: 'absolute',
    top: '38px',
    left: '0',
  },
};

const NavigationButtons = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const { pathname } = location;
  const urlParts = pathname.split('/').filter(Boolean);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const navigationButtons = urlParts.map((part, index) => (
    <>
      <NavLink
        to={`/${urlParts.slice(0, index + 1).join('/')}`}
        className={styles['btnNav_route' + (index + 1)]}
      >
        {getButtonText(part)}
      </NavLink>
      {index < urlParts.length - 1 && (
        <ArrowForwardIosIcon fontSize="large" className={styles.btnNav_arrow} />
      )}
    </>
  ));

  return (
    <div className={styles.btnNav}>
      <div className={styles.btnNav_wraper}>
        <Link className={styles.btnNav_catalog} onClick={handleSidebarToggle}>
          Каталог
        </Link>
        {isSidebarOpen && <SideBar customStyles={customStyles} />}
      </div>
      <ArrowForwardIosIcon fontSize="large" className={styles.btnNav_arrow} />
      {navigationButtons}
    </div>
  );
};

export default NavigationButtons;
