import { useQuery, gql } from '@apollo/client';
import { CategoryContainer, Category, Image, Text } from './Categories.styled.js';

export const Categories = () => {
  const {
    loading,
    error,
    data: { getAllCategory: dataCategories } = { getAllCategory: [] },
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
  for (let i = 1; i <= 10; i++) {
    const [{ image = '', categoryName = '' } = {}] = dataCategories;

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

      {!loading && !dataCategories.length && <p>Немає категорій, вийди розбійник</p>}

      {!loading && !!dataCategories.length && categoryList}

      {error && <p>Виникла помилка: {error.message}</p>}
    </CategoryContainer>
  );
};
