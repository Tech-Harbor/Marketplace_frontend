import PropTypes from 'prop-types';
import { StyledSeparator, StyledText } from './Separator.styled.js';

const Separator = ({ className }) => {
  return (
    <StyledSeparator className={className}>
      <StyledText> або </StyledText>
    </StyledSeparator>
  );
};

Separator.propTypes = {
  className: PropTypes.string,
};

export default Separator;
