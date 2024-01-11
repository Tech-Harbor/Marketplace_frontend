import Slider from 'react-slick';

import { Arrow } from '../Arrow/Arrow.jsx';
import image1 from '../../assets/slide1.jpg';
import image2 from '../../assets/slide2.jpg';
import image3 from '../../assets/slide3.jpg';

import styles from './Slide.module.css';

export default function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow type={'next'} />,
    prevArrow: <Arrow type={'prev'} />,
  };

  return (
    <div className={styles.slide}>
      <h2 className={styles.slide__title}>ТОП продажів</h2>
      <Slider className={styles.slide__slider} {...settings}>
        <div className={styles.slide__container}>
          <img className={styles.slide__img} src={image1} alt={'slide one'} />
        </div>
        <div className={styles.slide__container}>
          <img className={styles.slide__img} src={image2} alt={'slide two'} />
        </div>
        <div className={styles.slide__container}>
          <img className={styles.slide__img} src={image3} alt={'slide three'} />
        </div>
      </Slider>
    </div>
  );
}
