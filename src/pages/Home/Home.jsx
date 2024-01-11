import SideBar from '../../components/SideBar/SideBar';
import CustomArrows from '../../components/Slide/Slide';
import Slider from '../../ui_reuse/slider/Slider';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <SideBar />
        <CustomArrows />
      </div>

      <Slider
        settings={{ type: 'carousel', startAt: 0, perView: 4, gap: 100 }}
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

export default Home;
