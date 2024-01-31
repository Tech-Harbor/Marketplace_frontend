import logo from '../../assets/svg/Th.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

import '../../ui_reuse/baseCss/width_limiter.scss';
import s from './Footer.module.scss';

function Footer() {
  return (
    <div className={s.footer}>
      <div className={`${s.container} width_limiter`}>
        <div className={s.social_networks}>
          <img src={logo} alt="Logo" />
          <InstagramIcon className={s.icon} fontSize="string" />
          <TelegramIcon className={s.icon} fontSize="string" />
          <FacebookIcon className={s.icon} fontSize="string" />
        </div>
        <div className={s.call_center}>
          <LocalPhoneOutlinedIcon className={s.icon} fontSize="string" />
          <div className={s.number}>
            <span>Call-центр</span>
            <br />
            <span>0-800-80-80-80</span>
          </div>
          <div className={s.days_work}>
            <span>ПН-ПТ</span>
            <br />
            <span>8:00 - 22:00</span>
          </div>
        </div>
        <div className={s.mail}>
          <span>E-mail:</span>
          <br />
          <span>techhaven@gmail.com</span>
        </div>
        <div className={s.delivery}>
          <AirportShuttleIcon className={s.icon} fontSize="string" />
          <span>Доставка: Укр. Пошта, Нова Пошта</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
