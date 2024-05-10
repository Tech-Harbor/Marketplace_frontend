import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
// import Loader from '../Loader/Loader.jsx';
// import Slider from '../../ui_reuse/slider/Slider.jsx';
// import CardProduct from '../CardProduct/CardProduct.jsx';

// import useGetData from '../../hooks/useGetData.js';

const MainLayout = () => {
  // const { data } = useGetData('products');

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      {/*{!data && <Loader />}*/}

      {/*{data && (*/}
      {/*  <Slider*/}
      {/*    settings={{ type: 'carousel', startAt: 0, perView: 4, gap: 100 }}*/}
      {/*    title="Новинки"*/}
      {/*    slideArray={data.map(i => (*/}
      {/*      <CardProduct key={i.id} name={i.name} price={i.price} image={i.image[0]} />*/}
      {/*    ))}*/}
      {/*  />*/}
      {/*)}*/}

      <Footer />
    </>
  );
};

export default MainLayout;
