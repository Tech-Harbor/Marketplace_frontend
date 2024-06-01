import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';

import CardProduct from '../CardProduct/CardProduct.jsx';

import { PRODUCT_LIST } from '../../constants';

import { CategoryContainer, Title, CardContainer } from './SectionProduct.styled.js';

export const SectionProduct = ({ title, request }) => {
  const {
    loading,
    error,
    data: { getAllAdvertisement: cardProductData } = { getAllAdvertisement: [] },
  } = useQuery(gql(request));

  // TODO: Це тимчасово, поки бекенд не буде повертати досить даних, для їх використання
  console.log(cardProductData);

  return (
    <CategoryContainer>
      <Title>{title}</Title>

      <CardContainer>
        {loading && <p>Loading...</p>}

        {!error && !loading && !cardProductData.length && <p>Немає оголошень, вийди розбійник</p>}

        {!loading &&
          !!cardProductData.length &&
          PRODUCT_LIST.map(({ id, image, name, location, price }) => (
            <CardProduct key={id} image={image} price={price} name={name} location={location} />
          ))}

        {error && <p>Виникла помилка: {error.message}</p>}
      </CardContainer>
    </CategoryContainer>
  );
};

SectionProduct.propTypes = {
  title: PropTypes.string.isRequired,
  request: PropTypes.string.isRequired,
};
