import { CITIES } from '../../../constants';
import PropTypes from 'prop-types';
import { SelectWrapper, StyledLabel, StyledSelect } from './Select.styled.js';

const Select = ({ label, validation, ...rest }) => {
  return (
    <SelectWrapper>
      <StyledLabel htmlFor="custom-select">{label}</StyledLabel>
      <StyledSelect {...validation} {...rest}>
        {CITIES.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
};

export default Select;
