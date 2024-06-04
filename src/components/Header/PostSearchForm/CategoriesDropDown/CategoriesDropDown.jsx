import { useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import {
  StyledCategories,
  StyledDropDown,
  StyledDropDownWrapper,
  StyledListCategories,
  StyledTitleCategories,
} from './CategoriesDropDown.styled.js';

const CategoriesDropDown = ({ items, handleClick, isOpenDropDown, className }) => {
  const nodeRef = useRef(null);

  return (
    <StyledDropDownWrapper className={className}>
      <CSSTransition
        in={isOpenDropDown}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <StyledDropDown ref={nodeRef} className={className}>
          <StyledListCategories>
            {items.map(({ itemId, itemName }) => (
              <StyledCategories onClick={() => handleClick({ itemId, itemName })} key={itemId}>
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
  items: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  isOpenDropDown: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default CategoriesDropDown;
