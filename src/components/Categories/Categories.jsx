import { useQuery, gql } from '@apollo/client';
import { CategoryContainer, Category, Image, Text } from './Categories.styled.js';

export const Categories = () => {
  const {
    loading,
    error,
    data: { getAllCategory } = { getAllCategory: [] },
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

  return (
    <CategoryContainer>
      {loading && <p>Loading...</p>}

      {!loading && !getAllCategory.length && <p>Немає категорій, вийди розбійник</p>}

      {!!getAllCategory.length &&
        Array.from({ length: 9 }).map((_, index) => (
          <Category key={index}>
            <Image src={getAllCategory[0].image} />

            <Text>{getAllCategory[0].categoryName}</Text>
          </Category>
        ))}

      {error && <p>Виникла помилка: {error}</p>}
    </CategoryContainer>
  );
};
