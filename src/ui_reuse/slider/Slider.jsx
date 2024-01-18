import { useEffect } from 'react';
import PropTypes from 'prop-types';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '../baseCss/width_limiter.css';
import styles from './Slider.module.css';

const Slider = props => {
  useEffect(() => {
    const glide = new Glide('.glide', props.settings);
    glide.mount();
  }, [props.settings]);

  return (
    <div className={`${styles.container} width_limiter`}>
      <div className={`glide ${styles.slider}`}>
        <div className={styles.title}>{props.title}</div>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {props.slideSArray.map((e, index) => (
              <li className="glide__slide" key={index}>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <ArrowBackIosNewRoundedIcon
            className={`glide__arrow glide__arrow--left ${styles.arrow} ${styles.arrow_left}`}
            data-glide-dir="<"
            fontSize="string"
          />
          <ArrowBackIosNewRoundedIcon
            className={`glide__arrow glide__arrow--right ${styles.arrow} ${styles.arrow_right}`}
            data-glide-dir=">"
            fontSize="string"
          />
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  settings: PropTypes.exact({
    type: PropTypes.string,
    startAt: PropTypes.number,
    perView: PropTypes.number,
    gap: PropTypes.number,
  }).isRequired,
  title: PropTypes.string.isRequired,
  slideSArray: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default Slider;
