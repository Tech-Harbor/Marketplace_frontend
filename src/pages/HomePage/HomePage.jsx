import { Categories } from '../../components/Categories/Categories.jsx';
import { SectionProduct } from '../../components/SectionProduct/SectionProduct.jsx';
import { Advertising } from '../../components/Advertising/Advertising.jsx';
import { REQUESTS_FOR_PRODUCT_DATA } from '../../constants/requests.js';

const HomePage = () => {
  return (
    <>
      <Advertising />

      <Categories />

      <SectionProduct request={REQUESTS_FOR_PRODUCT_DATA[0]} title="Найновіші" />

      <SectionProduct request={REQUESTS_FOR_PRODUCT_DATA[1]} title="VIP оголошення" />
    </>
  );
};

export default HomePage;
