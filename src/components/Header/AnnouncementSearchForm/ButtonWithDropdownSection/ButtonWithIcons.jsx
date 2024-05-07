import PropTypes from 'prop-types';
import { StyledButtonSection, StyledIconWrapper } from './ButtonWithIcons.styled.js';

const ButtonWithIcons = ({
  text,
  iconLeftSide,
  iconRightSide,
  className,
  onClick,
  isOpenDropDown,
}) => {
  return (
    <StyledButtonSection className={className} onClick={onClick}>
      <img src={iconLeftSide} alt={`icon-for-${text}`} />
      {text}
      {iconRightSide && (
        <StyledIconWrapper $isOpenDropDown={isOpenDropDown}>
          <img src={iconRightSide} alt={`icon-for-${text}`} />
        </StyledIconWrapper>
      )}
    </StyledButtonSection>
  );
};

ButtonWithIcons.propTypes = {
  text: PropTypes.string.isRequired,
  iconLeftSide: PropTypes.any.isRequired, // TODO нічого крім any не працює, пошукай інші варіанти
  iconRightSide: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isOpenDropDown: PropTypes.bool,
};

export default ButtonWithIcons;
