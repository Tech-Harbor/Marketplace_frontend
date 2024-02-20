import PropTypes from 'prop-types';
import { StyledIcon, StyledItem, StyledValidateErrors } from './ValidationErrors.styled.js';

const ValidationErrors = ({ validationPasswordResults }) => {
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

ValidationErrors.propTypes = {
  validationPasswordResults: PropTypes.object.isRequired,
};

export default ValidationErrors;
