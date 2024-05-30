import PropTypes from 'prop-types';
import { SelectWrapper, StyledLabel, StyledSelect } from './Select.styled.js';

const Select = ({ label, validation, array, ...rest }) => {
  return (
    <SelectWrapper>
      <StyledLabel htmlFor="custom-select">{label}</StyledLabel>
      <StyledSelect defaultValue="" {...validation} {...rest}>
        <option value="">Select</option>
        {array.map(({ itemId, itemName }) => (
          <option key={itemId} value={itemId}>
            {itemName}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
};

export default Select;
