import { useQuery, gql } from '@apollo/client';
import { CategoryContainer, Category, Image, Text } from './Categories.styled.js';

export const Categories = () => {
  const {
    loading,
    error,
    data: { getAllCategory: categoriesData } = { getAllCategory: [] },
  } = useQuery(
    gql(`
      query {
    getAllCategory {
        categoryName
        image
    }
}
    `)
  );

  const categoryList = [];
  const [{ image = '', categoryName = '' } = {}] = categoriesData;
  for (let i = 1; i <= 10; i++) {
    categoryList.push(
      <Category key={i}>
        <Image src={image} />

        <Text>{categoryName}</Text>
      </Category>
    );
  }

  return (
    <CategoryContainer>
      {loading && <p>Loading...</p>}

      {!error && !loading && !categoriesData.length && <p>Немає категорій, вийди розбійник</p>}

      {!loading && !!categoriesData.length && categoryList}

      {error && <p>Виникла помилка: {error.message}</p>}
    </CategoryContainer>
  );
};
