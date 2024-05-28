import { useId } from 'react';
import PropTypes from 'prop-types';
import { TextareaWrapper, StyledLabel, StyledTextarea } from './Textarea.styled.js';

const Textarea = ({ label, validation, ...rest }) => {
  const id = useId();

  return (
    <TextareaWrapper {...rest}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledTextarea id={id} {...validation} {...rest} />
    </TextareaWrapper>
  );
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
};

export default Textarea;
