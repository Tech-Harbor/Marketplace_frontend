import { forwardRef } from 'react';
import { CITIES } from '../../../constants';
import { SelectWrapper, StyledLabel, StyledSelect } from './Select.styled.js';
import PropTypes from 'prop-types';

const Select = forwardRef(({ label, ...rest }, ref) => {
  return (
    <SelectWrapper>
      <StyledLabel htmlFor="custom-select">{label}</StyledLabel>
      <StyledSelect {...rest} ref={ref}>
        {CITIES.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
});

Select.displayName = 'Select'; // TODO рішення помилки: при виконанні "git commit" отримав наступну помилку "Component definition is missing display name  react/display-name"

Select.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Select;
