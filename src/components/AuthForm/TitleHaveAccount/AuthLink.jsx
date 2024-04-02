import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { StyledText } from './AuthLink.styled.js';
import { showTypeForm } from '../../../redux/auth/slices.js';

export const AuthLink = ({ text, linkText, linkTo }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(showTypeForm(linkTo));

  return (
    <StyledText className="text">
      {text}
      <button onClick={handleClick} className="text">
        {linkText}
      </button>
    </StyledText>
  );
};

AuthLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};
