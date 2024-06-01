import { useQuery, gql } from '@apollo/client';

import { categories } from '../../constants';

import { CategoryContainer, Category, ImageContainer, Text } from './Categories.styled.js';

export const Categories = () => {
  const {
    loading,
    error,
    data: { getAllCategory: categoriesData } = { getAllCategory: [] },
  } = useQuery(
    gql(`
      query {
        getAllCategory {
          name
          image
        }
      }
    `)
  );

  // TODO: Це тимчасово, поки бекенд не буде повертати досить даних, для їх використання
  console.log(categoriesData);

  return (
    <CategoryContainer>
      {loading && <p>Loading...</p>}

      {!error && !loading && !categoriesData.length && <p>Немає категорій, вийди розбійник</p>}

      {!loading &&
        !!categoriesData.length &&
        categories.map(({ categoryId, categoryName, categoryImage }) => (
          <Category key={categoryId}>
            <ImageContainer>
              <img src={categoryImage} alt={categoryName} />
            </ImageContainer>

            <Text>{categoryName}</Text>
          </Category>
        ))}

      {error && <p>Виникла помилка: {error.message}</p>}
    </CategoryContainer>
  );
};
