import Loader from '../../components/Loader/Loader.jsx';
import ProductCardList from '../../components/ProductCardList/ProductCardList.jsx';

import useGetData from '../../hooks/useGetData.js';

import s from './ProductsPage.module.scss';

const ProductsPage = () => {
  const { data } = useGetData('products');

  return (
    <div className={s.productListPage_contentContainer}>
      <div className={s.productListPage_filter}>There could be filter here</div>
      <div className={s.productListPage_productCard}>
        {!data && <Loader />}

        {data && <ProductCardList data={data} />}
      </div>
    </div>
  );
};

export default ProductsPage;
