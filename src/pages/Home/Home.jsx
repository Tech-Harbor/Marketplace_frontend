import SideBar from '../../components/SideBar/SideBar';
import CustomArrows from '../../components/Slide/Slide';
import Slider from '../../ui_reuse/slider/Slider';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Home.module.css';

import useGetDate from '../../hooks/useGetData.jsx';

const Home = () => {
  const [data] = useGetDate('products');

  //Я написав LOL спеціально, замість загрузки! Я попрошу дизайнера придумати загрузку, і заміню все!

  return (
    <>
      <div className={styles.mainContainer}>
        <SideBar />
        <CustomArrows />
      </div>
      {data.data === null ? <p>Даних в data.data немає!!!</p> : <Slider
        settings={{ type: 'carousel', startAt: 0, perView: 4, gap: 100 }}
        title="Новинки"
        slideSArray={
          data.data.map(e =>
            <ProductCard key={e.id} name={e.name} price={e.price}/>
          )
        }
      />}
    </>
  );
};

export default Home;
