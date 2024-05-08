import { useQuery, gql } from '@apollo/client';

import CardProduct from '../../components/CardProduct/CardProduct.jsx';

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
    <div>
      {loading && <p>Loading...</p>}

      {getAllAdvertisement.map(({ images, name, location, price }) => (
        <CardProduct key={name} images={images} name={name} location={location} price={price} />
      ))}

      {error && <p>Виникла помилка: {error}</p>}
    </div>
  );
};

export default HomePage;
