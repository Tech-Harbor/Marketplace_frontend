import PropTypes from 'prop-types';
import { StyledIcon, StyledItem, StyledValidateErrors } from './ErrorsList.styled.js';

export const ErrorsList = ({ errorMessageList }) => {
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
