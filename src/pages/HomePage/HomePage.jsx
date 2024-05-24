import { Categories } from '../../components/Categories/Categories.jsx';
import { SectionProduct } from '../../components/SectionProduct/SectionProduct.jsx';
import { REQUESTS_FOR_PRODUCT_DATA } from '../../constants/index.js';

const HomePage = () => {
  return (
    <>
      <Categories />

      <SectionProduct request={REQUESTS_FOR_PRODUCT_DATA[0]} title="Найновіші" />

      <SectionProduct request={REQUESTS_FOR_PRODUCT_DATA[1]} title="VIP оголошення" />
    </>
  );
};

export default HomePage;
