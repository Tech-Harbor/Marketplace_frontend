import SideBar from '../../components/SideBar/SideBar';
import CustomArrows from '../../components/Slide/Slide';
import Slider from '../../ui_reuse/slider/Slider';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loader from '../../components/Loader/Loader.jsx';

import styles from './Home.module.css';

import useGetData from '../../hooks/useGetData.js';

const Home = () => {
  const { data } = useGetData('products');

  return (
    <>
      <div className={styles.mainContainer}>
        <SideBar />
        <CustomArrows />
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

export default Home;
