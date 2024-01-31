import { NavLink } from 'react-router-dom';

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideoCamIcon from '@mui/icons-material/Videocam';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MouseIcon from '@mui/icons-material/Mouse';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import ComputerIcon from '@mui/icons-material/Computer';
import BlenderIcon from '@mui/icons-material/Blender';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HandymanIcon from '@mui/icons-material/Handyman';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

import s from './SideBar.module.scss';

const SideBar = () => {
  return (
    <div className={s.sideBar}>
      <ul className={s.sideBar__list}>
        <li className={s.sideBar__item}>
          <NavLink
            to="/category/mobiles"
            className={({ isActive }) => (isActive ? s.sideBar__link__activeLink : s.sideBar__link)}
          >
            <PhoneIphoneIcon className={s.sideBar__icon} />
            Телефони та аксесуари
          </NavLink>
        </li>
        <li className={s.sideBar__item}>
          <NavLink
            to="/category/desktops"
            className={({ isActive }) => (isActive ? s.sideBar__link__activeLink : s.sideBar__link)}
          >
            <PersonalVideoIcon className={s.sideBar__icon} />
            Комп’ютери та комплектуючі
          </NavLink>
        </li>
        <li className={s.sideBar__item}>
          <NavLink
            to="/category/photo"
            className={({ isActive }) => (isActive ? s.sideBar__link__activeLink : s.sideBar__link)}
          >
            <PhotoCameraIcon className={s.sideBar__icon} />
            Фото та відео
          </NavLink>
        </li>
        <li className={s.sideBar__item}>
          <NavLink
            to="/category/tvs"
            className={({ isActive }) => (isActive ? s.sideBar__link__activeLink : s.sideBar__link)}
          >
            <VideoCamIcon className={s.sideBar__icon} />
            ТВ та відеотехніка
          </NavLink>
        </li>
        <li className={s.sideBar__item}>
          <NavLink
            to="/category/audio"
            className={({ isActive }) => (isActive ? s.sideBar__link__activeLink : s.sideBar__link)}
          >
            <HeadphonesIcon className={s.sideBar__icon} />
            Аудіотехніка
          </NavLink>
        </li>
        <li className={s.sideBar__item}>
          <NavLink
            to="/category/games"
            className={({ isActive }) => (isActive ? s.sideBar__link__activeLink : s.sideBar__link)}
          >
            <MouseIcon className={s.sideBar__icon} />
            Ігри та ігрові приставки
          </NavLink>
        </li>
        <li className={s.sideBar__item}>
          <NavLink
            to="/category/tablets"
            className={({ isActive }) => (isActive ? s.sideBar__link__activeLink : s.sideBar__link)}
          >
            <TabletMacIcon className={s.sideBar__icon} />
            Планшети та електронні книги
          </NavLink>
        </li>
        <li className={s.sideBar__item}>
          <NavLink
            to="/category/laptops"
            className={({ isActive }) => (isActive ? s.sideBar__link__activeLink : s.sideBar__link)}
          >
            <ComputerIcon className={s.sideBar__icon} />
            Ноутбуки та аксесуари
          </NavLink>
        </li>
        <li className={s.sideBar__item}>
          <NavLink
            to="/category/home"
            className={({ isActive }) => (isActive ? s.sideBar__link__activeLink : s.sideBar__link)}
          >
            <HandymanIcon className={s.sideBar__icon} />
            Техніка для дому
          </NavLink>
        </li>
        <li className={s.sideBar__item}>
          <NavLink
            to="/category/kitchen"
            className={({ isActive }) => (isActive ? s.sideBar__link__activeLink : s.sideBar__link)}
          >
            <BlenderIcon className={s.sideBar__icon} />
            Техніка для кухні
          </NavLink>
        </li>
        <li className={s.sideBar__item}>
          <NavLink
            to="/category/climate"
            className={({ isActive }) => (isActive ? s.sideBar__link__activeLink : s.sideBar__link)}
          >
            <AcUnitIcon className={s.sideBar__icon} />
            Кліматичне обладнання
          </NavLink>
        </li>
        <li className={s.sideBar__item}>
          <NavLink
            to="/category/charging_stations"
            className={({ isActive }) => (isActive ? s.sideBar__link__activeLink : s.sideBar__link)}
          >
            <HourglassEmptyIcon className={s.sideBar__icon} />
            Зарядні станції
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
