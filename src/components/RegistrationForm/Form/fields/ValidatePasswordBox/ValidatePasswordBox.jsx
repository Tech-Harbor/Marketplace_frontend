import PropTypes from 'prop-types';
import { StyledIcon, StyledItem, StyledValidatePasswordBox } from './ValidatePasswordBox.styled.js';

const ValidatePasswordBox = ({ validationPasswordResults }) => {
  return (
    <StyledValidatePasswordBox>
      {Object.entries(validationPasswordResults).map(
        ([requirement, isValid]) =>
          !isValid && (
            <StyledItem key={requirement}>
              <StyledIcon />
              {requirement}
            </StyledItem>
          )
      )}
    </StyledValidatePasswordBox>
  );
};

ValidatePasswordBox.propTypes = {
  validationPasswordResults: PropTypes.object.isRequired,
};

export default ValidatePasswordBox;
