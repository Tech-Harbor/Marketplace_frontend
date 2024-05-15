import { useQuery, gql } from '@apollo/client';
import PropTypes from 'prop-types';
import CardProduct from '../CardProduct/CardProduct.jsx';
import { CategoryContainer, Title, CardContainer } from './SectionProduct.styled.js';

export const SectionProduct = ({ title, request }) => {
  const {
    loading,
    error,
    data: { getAllAdvertisement } = { getAllAdvertisement: [] },
  } = useQuery(gql(request));

  return (
    <CategoryContainer>
      <Title>{title}</Title>

      <CardContainer>
        {loading && <p>Loading...</p>}

        {!loading && !getAllAdvertisement.length && <p>Немає оголошень, вийди розбійник</p>}

        {!!getAllAdvertisement.length &&
          Array.from({ length: 10 }).map((_, index) => (
            <CardProduct
              key={index}
              images={getAllAdvertisement[0].images}
              name={getAllAdvertisement[0].name}
              location={getAllAdvertisement[0].location}
              price={getAllAdvertisement[0].price}
            />
          ))}

        {error && <p>Виникла помилка: {error}</p>}
      </CardContainer>
    </CategoryContainer>
  );
};

SectionProduct.propTypes = {
  title: PropTypes.string.isRequired,
  request: PropTypes.string.isRequired,
};
