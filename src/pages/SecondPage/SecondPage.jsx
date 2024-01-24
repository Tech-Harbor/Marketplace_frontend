// import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import SideBar from '../../components/SideBar/SideBar';
import Slider from '../../ui_reuse/slider/Slider';
import CardList from '../../components/CardList/CardList';
import { useDataByPath } from './useDataByPath.js';

import styles from './SecondPage.module.css';

const SecondCPage = () => {
  const [title, dataToShow] = useDataByPath();

  return (
    <>
      <div className={styles.item__container}>
        <SideBar />
        <div className={styles.item__content}>
          <h2 className={styles.item__title}>{title}</h2>
          <CardList data={dataToShow} />
        </div>
      </div>

      <Slider
        settings={{ type: 'carousel', startAt: 0, perView: 5 }}
        title="Новинки"
        slideArray={[]}
      />
    </>
  );
};

export default SecondCPage;
