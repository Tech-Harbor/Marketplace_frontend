import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

import ProductCard from '../../components/ProductCard/ProductCard';
import SideBar from '../../components/SideBar/SideBar';
import Slider from '../../ui_reuse/slider/Slider';
import CardList from '../../components/CardList/CardList';
import { getTitleAndDataByPath } from '../../ui_reuse/utils/getTitleAndDataByPath';

import styles from './SecondPage.module.css';

const SecondCPage = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const [title, setTitle] = useState('');
  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    const { title, dataToShow } = getTitleAndDataByPath(currentPage);
    setTitle(title);
    setDataToShow(dataToShow);
  }, [currentPage]);

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
        slideSArray={[
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
        ]}
      />
    </>
  );
};

export default SecondCPage;
