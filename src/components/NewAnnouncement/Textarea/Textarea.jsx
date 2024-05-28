import { forwardRef, useId } from 'react';
import { TextareaWrapper, StyledLabel, StyledTextarea } from './Textarea.styled.js';
import PropTypes from 'prop-types';

const Textarea = forwardRef(({ label, className, ...rest }, ref) => {
  const id = useId();

  return (
    <TextareaWrapper className={className}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledTextarea {...rest} id={id} ref={ref} />
    </TextareaWrapper>
  );
});

Textarea.displayName = 'Textarea'; // TODO рішення помилки: при виконанні "git commit" отримав наступну помилку "Component definition is missing display name  react/display-name"

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Textarea;
