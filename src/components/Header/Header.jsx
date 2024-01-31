import { NavLink } from 'react-router-dom';

import SvgIcon from '@mui/material/SvgIcon';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import SelectLang from '../SelectLang/SelectLang';
import Logo from '../../assets/svg/logo.svg';

import s from './Header.module.scss';

const Header = () => {
  const hrefLink = '/';

  return (
    <div className={s.header}>
      <div className={`${s.header__wrapper} width_limiter`}>
        <div className={s.logo}>
          <NavLink className={s.logo__link} to={hrefLink}>
            <img alt={'Logo'} src={Logo} className={s.logo__svg} />
            <span className={s.logo__text}>TechHaven</span>
          </NavLink>
        </div>

        <div className={s.header__nav}>
          <div className={s.header__inputLabel}>
            <input
              className={s.header__input}
              type="text"
              autoComplete="off"
              placeholder="Пошук товару..."
            />

            <button className={s.header__inputBtn} type="submit">
              <SvgIcon sx={{ width: 27, height: 23 }}>
                <SearchOutlinedIcon />
              </SvgIcon>
            </button>
          </div>

          <SelectLang className={s.header__selectLang} />

          <NavLink className={s.header__basket} to={hrefLink}>
            <SvgIcon sx={{ width: 34, height: 34 }}>
              <ShoppingCartOutlinedIcon />
            </SvgIcon>
          </NavLink>
          <NavLink className={s.header__account} to={hrefLink}>
            <SvgIcon sx={{ width: 34, height: 34 }}>
              <AccountCircleOutlinedIcon />
            </SvgIcon>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
