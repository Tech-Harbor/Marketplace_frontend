import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideocamIcon from '@mui/icons-material/Videocam';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MouseIcon from '@mui/icons-material/Mouse';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import ComputerIcon from '@mui/icons-material/Computer';
import BlenderIcon from '@mui/icons-material/Blender';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HandymanIcon from '@mui/icons-material/Handyman';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <ul className={styles.sideBar__list}>
        <li className={styles.sideBar__item}>
          <NavLink
            to="/mobiles"
            className={({ isActive }) =>
              isActive ? styles.sideBar__link__activeLink : styles.sideBar__link
            }
          >
            <PhoneIphoneIcon className={styles.sideBar__icon} />
            Телефони та аксесуари
          </NavLink>
        </li>
        <li className={styles.sideBar__item}>
          <NavLink
            to="/desktops"
            className={({ isActive }) =>
              isActive ? styles.sideBar__link__activeLink : styles.sideBar__link
            }
          >
            <PersonalVideoIcon className={styles.sideBar__icon} />
            Комп’ютери та комплектуючі
          </NavLink>
        </li>
        <li className={styles.sideBar__item}>
          <NavLink
            to="/foto"
            className={({ isActive }) =>
              isActive ? styles.sideBar__link__activeLink : styles.sideBar__link
            }
          >
            <PhotoCameraIcon className={styles.sideBar__icon} />
            Фото та відео
          </NavLink>
        </li>
        <li className={styles.sideBar__item}>
          <NavLink
            to="/tvs"
            className={({ isActive }) =>
              isActive ? styles.sideBar__link__activeLink : styles.sideBar__link
            }
          >
            <VideocamIcon className={styles.sideBar__icon} />
            ТВ та відеотехніка
          </NavLink>
        </li>
        <li className={styles.sideBar__item}>
          <NavLink
            to="/audio"
            className={({ isActive }) =>
              isActive ? styles.sideBar__link__activeLink : styles.sideBar__link
            }
          >
            <HeadphonesIcon className={styles.sideBar__icon} />
            Аудіотехніка
          </NavLink>
        </li>
        <li className={styles.sideBar__item}>
          <NavLink
            to="/games"
            className={({ isActive }) =>
              isActive ? styles.sideBar__link__activeLink : styles.sideBar__link
            }
          >
            <MouseIcon className={styles.sideBar__icon} />
            Ігри та ігрові приставки
          </NavLink>
        </li>
        <li className={styles.sideBar__item}>
          <NavLink
            to="/tablets"
            className={({ isActive }) =>
              isActive ? styles.sideBar__link__activeLink : styles.sideBar__link
            }
          >
            <TabletMacIcon className={styles.sideBar__icon} />
            Планшети та електронні книги
          </NavLink>
        </li>
        <li className={styles.sideBar__item}>
          <NavLink
            to="/laptops"
            className={({ isActive }) =>
              isActive ? styles.sideBar__link__activeLink : styles.sideBar__link
            }
          >
            <ComputerIcon className={styles.sideBar__icon} />
            Ноутбуки та аксесуари
          </NavLink>
        </li>
        <li className={styles.sideBar__item}>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? styles.sideBar__link__activeLink : styles.sideBar__link
            }
          >
            <HandymanIcon className={styles.sideBar__icon} />
            Техніка для дому
          </NavLink>
        </li>
        <li className={styles.sideBar__item}>
          <NavLink
            to="/kitchen"
            className={({ isActive }) =>
              isActive ? styles.sideBar__link__activeLink : styles.sideBar__link
            }
          >
            <BlenderIcon className={styles.sideBar__icon} />
            Техніка для кухні
          </NavLink>
        </li>
        <li className={styles.sideBar__item}>
          <NavLink
            to="/climate"
            className={({ isActive }) =>
              isActive ? styles.sideBar__link__activeLink : styles.sideBar__link
            }
          >
            <AcUnitIcon className={styles.sideBar__icon} />
            Кліматичне обладнання
          </NavLink>
        </li>
        <li className={styles.sideBar__item}>
          <NavLink
            to="/charging_stations"
            className={({ isActive }) =>
              isActive ? styles.sideBar__link__activeLink : styles.sideBar__link
            }
          >
            <HourglassEmptyIcon className={styles.sideBar__icon} />
            Зарядні станції
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
