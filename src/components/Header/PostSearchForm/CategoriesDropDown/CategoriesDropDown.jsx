import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { categories } from '../../../../constants';
import {
  StyledCategories,
  StyledDropDown,
  StyledDropDownWrapper,
  StyledListCategories,
  StyledTitleCategories,
} from './CategoriesDropDown.styled.js';
import { useRef } from 'react';

const CategoriesDropDown = ({ handleCategoryClick, isOpenDropDown }) => {
  const nodeRef = useRef(null);

  return (
    <StyledDropDownWrapper>
      <CSSTransition
        in={isOpenDropDown}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <StyledDropDown ref={nodeRef}>
          <StyledListCategories>
            {categories.map(({ itemId, itemName }) => (
              <StyledCategories onClick={() => handleCategoryClick(itemId)} key={itemId}>
                <StyledTitleCategories>{itemName}</StyledTitleCategories>
              </StyledCategories>
            ))}
          </StyledListCategories>
        </StyledDropDown>
      </CSSTransition>
    </StyledDropDownWrapper>
  );
};

CategoriesDropDown.propTypes = {
  handleCategoryClick: PropTypes.func.isRequired,
  isOpenDropDown: PropTypes.bool.isRequired,
};

export default CategoriesDropDown;
