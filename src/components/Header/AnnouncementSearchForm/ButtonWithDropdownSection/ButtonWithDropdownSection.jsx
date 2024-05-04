import PropTypes from 'prop-types';
import { StyledButtonSection } from './ButtonWithDropdownSection.styled.js';

const ButtonWithDropdownSection = ({ text, iconLeftSide, iconRightSide, className }) => {
  return (
    <StyledButtonSection className={className}>
      <img src={iconLeftSide} alt={`left-side-icon-for-${text}`} />
      {text}
      {iconRightSide && <img src={iconRightSide} alt={`right-side-icon-for-${text}`} />}
    </StyledButtonSection>
  );
};

ButtonWithDropdownSection.propTypes = {
  text: PropTypes.string.isRequired,
  iconLeftSide: PropTypes.any.isRequired, // TODO нічого крім any не працює, пошукай інші варіанти
  iconRightSide: PropTypes.any,
  className: PropTypes.string,
};

export default ButtonWithDropdownSection;
