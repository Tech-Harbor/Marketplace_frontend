import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { showTypeForm } from '../../../redux/auth';
import { StyledButton, StyledText } from './AuthTextLink.styled.js';

export const AuthTextLink = ({ description = '', textAsLink, linkTo, className }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(showTypeForm(linkTo));

  return (
    <StyledText>
      {description}

      <StyledButton onClick={handleClick} className={className}>
        {textAsLink}
      </StyledButton>
    </StyledText>
  );
};

AuthTextLink.propTypes = {
  description: PropTypes.string,
  textAsLink: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  className: PropTypes.string,
};
