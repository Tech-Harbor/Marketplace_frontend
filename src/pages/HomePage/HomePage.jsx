import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import { device } from '../../utils/index.js';
import CardProduct from '../../components/CardProduct/CardProduct.jsx';

const Container = styled.div`
  max-width: 1240px;
  margin: 58px 100px;

  @media ${device.untilLaptop} {
    margin: 30px 16px;
  }
`;

const HomePage = () => {
  const {
    loading,
    error,
    data: { getAllAdvertisement } = { getAllAdvertisement: [] },
  } = useQuery(
    gql(`
    query {
      getAllAdvertisement {
        name
        price
        location
        images {
          imageUrl
        }
      }
    }
  `)
  );

  return (
    <Container>
      {loading && <p>Loading...</p>}

      {getAllAdvertisement.map(({ images, name, location, price }) => (
        <CardProduct key={name} images={images} name={name} location={location} price={price} />
      ))}

      {error && <p>Виникла помилка: {error}</p>}
    </Container>
  );
};

export default HomePage;
