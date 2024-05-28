import PropTypes from 'prop-types';
import {
  StyledInput,
  StyledLabel,
  StyledToggleSwitch,
  StyledText,
  Wrapper,
} from './NegotiablePriceSection.styled.js';

const NegotiablePriceSection = ({ validation, ...rest }) => {
  return (
    <Wrapper>
      <StyledText>{'Можливий торг'}</StyledText>
      <StyledLabel>
        <StyledInput type="checkbox" {...validation} {...rest} defaultChecked={true} />
        <StyledToggleSwitch />
      </StyledLabel>
    </Wrapper>
  );
};

NegotiablePriceSection.propTypes = {
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
};

export default NegotiablePriceSection;
