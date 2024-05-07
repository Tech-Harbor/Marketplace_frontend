import PropTypes from 'prop-types';
import {
  StyledCategories,
  StyledDropDown,
  StyledDropDownWrapper,
  StyledListCategories,
  StyledTitleCategories,
} from './CategoriesDropDown.styled.js';

const Categories = [
  { categoryId: 'goods', categoryName: 'Одяг та аксесуари' },
  { categoryId: 'gardening', categoryName: 'Садівництво' },
  { categoryId: 'auto', categoryName: 'Авто та комплектуючі' },
  { categoryId: 'households', categoryName: 'Побутова техніка' },
  { categoryId: 'desktops', categoryName: 'Десктопи' },
  { categoryId: 'sport', categoryName: 'Спорт та аксесуари' },
  { categoryId: 'children', categoryName: 'Дитячі аксесуари' },
  { categoryId: 'climate', categoryName: 'Кліматичне обладнання' },
  { categoryId: 'estate', categoryName: 'Нерухомість' },
  { categoryId: 'beauty', categoryName: 'Краса та здоров’я' },
];

const CategoriesDropDown = ({ handleCategoryClick }) => {
  return (
    <StyledDropDownWrapper>
      <StyledDropDown>
        <StyledListCategories>
          {Categories.map(({ categoryId, categoryName }) => (
            <StyledCategories onClick={() => handleCategoryClick(categoryId)} key={categoryId}>
              <StyledTitleCategories>{categoryName}</StyledTitleCategories>
            </StyledCategories>
          ))}
        </StyledListCategories>
      </StyledDropDown>
    </StyledDropDownWrapper>
  );
};

CategoriesDropDown.propTypes = {
  handleCategoryClick: PropTypes.func.isRequired,
};

export default CategoriesDropDown;
