import styles from "./Footer.module.css";
import "../../ui_reuse/baseCss/width_limiter.css"

import logo from "../../assets/svg/Th.svg";

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

function Footer() {

   return (
      <div className={styles.footer}>
         <div className={`${styles.container} width_limiter`} >
            <div className={styles.social_networks}>
               <img src={logo} alt="Logo" />
               <InstagramIcon className={styles.icon} fontSize="string" />
               <TelegramIcon className={styles.icon} fontSize="string" />
               <FacebookIcon className={styles.icon} fontSize="string" />
            </div>
            <div className={styles.call_center}>
               <LocalPhoneOutlinedIcon className={styles.icon} fontSize="string" />
               <div className={styles.number}>
                  <span>Call-центр</span><br />
                  <span>0-800-80-80-80</span>
               </div>
               <div className={styles.days_work}>
                  <span>ПН-ПТ</span><br />
                  <span>8:00 - 22:00</span>
               </div>
            </div>
            <div className={styles.mail}>
               <span>E-mail:</span><br />
               <span>techhaven@gmail.com</span>
            </div>
            <div className={styles.delivery}>
               <AirportShuttleIcon className={styles.icon} fontSize="string" />
               <span>Доставка: Укр. Пошта, Нова Пошта</span>
            </div>
         </div>
      </div>
   )
}

export default Footer;

