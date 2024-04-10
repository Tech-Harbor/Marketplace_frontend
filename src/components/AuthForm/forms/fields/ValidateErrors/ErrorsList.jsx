import PropTypes from 'prop-types';
import { StyledIcon, StyledItem, StyledValidateErrors } from './ValidationErrors.styled.js';

const ErrorsList = ({ errorMessageList }) => {
  return (
    <StyledValidateErrors>
      {errorMessageList.map(message => (
        <StyledItem key={message}>
          <StyledIcon />
          {message}
        </StyledItem>
      ))}
    </StyledValidateErrors>
  );
};

ErrorsList.propTypes = {
  errorMessageList: PropTypes.arrayOf(PropTypes.string),
};

export default ErrorsList;
