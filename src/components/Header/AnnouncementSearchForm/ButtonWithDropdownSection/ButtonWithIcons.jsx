import PropTypes from 'prop-types';
import { StyledButtonSection, StyledIconWrapper } from './ButtonWithIcons.styled.js';

const ButtonWithIcons = ({
  text,
  iconLeftSide: IconLeftSide,
  iconRightSide: IconRightSide,
  className,
  onClick,
  isOpenDropDown,
}) => {
  return (
    <StyledButtonSection className={className} onClick={onClick}>
      <IconLeftSide />
      {text}
      {IconRightSide && (
        <StyledIconWrapper $isOpenDropDown={isOpenDropDown}>
          <IconRightSide />
        </StyledIconWrapper>
      )}
    </StyledButtonSection>
  );
};

ButtonWithIcons.propTypes = {
  text: PropTypes.string.isRequired,
  iconLeftSide: PropTypes.elementType.isRequired,
  iconRightSide: PropTypes.elementType,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isOpenDropDown: PropTypes.bool,
};

export default ButtonWithIcons;
