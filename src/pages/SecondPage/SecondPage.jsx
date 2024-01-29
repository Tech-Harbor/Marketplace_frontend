import SideBar from '../../components/SideBar/SideBar';
import Slider from '../../ui_reuse/slider/Slider';
import CardList from '../../components/CardList/CardList';
import Loader from '../../components/Loader/Loader.jsx';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';

import { useDataByPath } from '../../hooks/useDataByPath.js';
import useGetData from '../../hooks/useGetData.js';

import styles from './SecondPage.module.css';

const SecondCPage = () => {
  const [title, dataToShow] = useDataByPath();
  const { data } = useGetData('products');

  return (
    <>
      <div className={styles.item__container}>
        <SideBar />
        <div className={styles.item__content}>
          <h2 className={styles.item__title}>{title}</h2>
          <CardList data={dataToShow} />
        </div>
      </div>

      {!data && <Loader />}

      {data && (
        <Slider
          settings={{ type: 'carousel', startAt: 0, perView: 4, gap: 100 }}
          title="Новинки"
          slideArray={data.map(i => (
            <ProductCard key={i.id} name={i.name} price={i.price} image={i.image[0]} />
          ))}
        />
      )}
    </>
  );
};

export default SecondCPage;
