import { useQuery, gql } from '@apollo/client';
import PropTypes from 'prop-types';
import CardProduct from '../CardProduct/CardProduct.jsx';
import { CategoryContainer, Title, CardContainer } from './SectionProduct.styled.js';

export const SectionProduct = ({ title, request }) => {
  const {
    loading,
    error,
    data: { getAllAdvertisement: dataCardProduct } = { getAllAdvertisement: [] },
  } = useQuery(gql(request));

  const cardProductList = [];
  for (let i = 1; i <= 10; i++) {
    const [{ images = [], name = '', location = '', price = 0 } = {}] = dataCardProduct;

    cardProductList.push(
      <CardProduct key={i} images={images} price={price} name={name} location={location} />
    );
  }

  return (
    <CategoryContainer>
      <Title>{title}</Title>

      <CardContainer>
        {loading && <p>Loading...</p>}

        {!loading && !dataCardProduct.length && <p>Немає оголошень, вийди розбійник</p>}

        {!loading && !!dataCardProduct.length && cardProductList}

        {error && <p>Виникла помилка: {error?.message}</p>}
      </CardContainer>
    </CategoryContainer>
  );
};

SectionProduct.propTypes = {
  title: PropTypes.string.isRequired,
  request: PropTypes.string.isRequired,
};
