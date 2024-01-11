import styles from './Slider.module.css';
import "../baseCss/width_limiter.css";

import { useEffect } from 'react';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Glide from '@glidejs/glide';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const Slider = (props) => {

   useEffect(() => {
      const glide = new Glide('.glide', props.settings);
      glide.mount();
   }, []);

   return (
      <div className={`${styles.container} width_limiter`}>
         <div className={`glide ${styles.slider}`}>
            <div className={styles.title}>{props.title}</div>
            <div className="glide__track" data-glide-el="track">
               <ul className="glide__slides">
                  {props.slideSArray.map((e, index) => <li className="glide__slide" key={index}>{e}</li>)}
               </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
               <ArrowBackIosNewRoundedIcon
                  className={`glide__arrow glide__arrow--left ${styles.arrow} ${styles.arrow_left}`} data-glide-dir="<"
                  fontSize='string' />
               <ArrowBackIosNewRoundedIcon
                  className={`glide__arrow glide__arrow--right ${styles.arrow} ${styles.arrow_right}`} data-glide-dir=">"
                  fontSize='string' />
            </div>
         </div>
      </div>
   );
};

export default Slider;