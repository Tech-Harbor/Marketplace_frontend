import { useQuery, gql } from '@apollo/client';
import { CategoryContainer, Category, Image, Text } from './Categories.styled.js';

export const Categories = () => {
  const {
    loading,
    error,
    data: { getAllAdvertisement } = { getAllAdvertisement: [] },
  } = useQuery(
    gql(`
    query {
      getAllAdvertisement {
        name
        images {
          imageUrl
        }
      }
    }
  `)
  );

  return (
    <CategoryContainer>
      {loading && <p>Loading...</p>}

      {!!getAllAdvertisement.length &&
        Array.from({ length: 9 }).map((_, index) => (
          <Category key={index}>
            <Image src={getAllAdvertisement[0].images[0].imageUrl} />

            <Text>{getAllAdvertisement[0].name}</Text>
          </Category>
        ))}

      {error && <p>Виникла помилка: {error}</p>}
    </CategoryContainer>
  );
};
