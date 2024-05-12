import { Categories } from '../../components/Categories/Categories.jsx';
import { SectionProduct } from '../../components/SectionProduct/SectionProduct.jsx';
import { Advertising } from '../../components/Advertising/Advertising.jsx';
import { REQUESTS_FOR_PRODUCT_DATA } from '../../constants/requests.js';

const HomePage = () => {
  return (
    <div>
      <Categories />
      {REQUESTS_FOR_PRODUCT_DATA.map(({ id, title, request }) => {
        return title ? (
          <SectionProduct key={id} request={request} title={title} />
        ) : (
          <Advertising key={id} />
        );
      })}
    </div>
  );
};

export default HomePage;
