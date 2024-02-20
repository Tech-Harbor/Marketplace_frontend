import PropTypes from 'prop-types';
import { StyledIcon, StyledItem, StyledValidateErrors } from './ValidateErrors.styled.js';

const ValidateErrors = ({ validationPasswordResults }) => {
  return (
    <StyledValidateErrors>
      {Object.entries(validationPasswordResults).map(
        ([requirement, isValid]) =>
          !isValid && (
            <StyledItem key={requirement}>
              <StyledIcon />
              {requirement}
            </StyledItem>
          )
      )}
    </StyledValidateErrors>
  );
};

ValidateErrors.propTypes = {
  validationPasswordResults: PropTypes.object.isRequired,
};

export default ValidateErrors;
