import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { StyledButton, StyledText } from './AuthTextLink.styled.js';
import { showTypeForm } from '../../../redux/auth/authSlice.js';

export const AuthTextLink = ({ text, linkText, linkTo, className }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(showTypeForm(linkTo));

  return (
    <StyledText>
      {text}
      <StyledButton onClick={handleClick} className={className}>
        {linkText}
      </StyledButton>
    </StyledText>
  );
};

AuthTextLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  className: PropTypes.string,
};
