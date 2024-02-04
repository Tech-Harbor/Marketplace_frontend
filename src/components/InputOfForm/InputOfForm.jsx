import PropTypes from 'prop-types';
import { Container, Input, Label } from './InputOfForm.style.js';
const InputOfForm = ({ name, type }) => {
  return (
    <Container>
      <Label>{name}</Label>
      <Input type={type} />
    </Container>
  );
};

InputOfForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default InputOfForm;
