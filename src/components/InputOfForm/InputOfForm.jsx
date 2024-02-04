import PropTypes from 'prop-types';
import { Container, Input, Label, Icon } from './InputOfForm.style.js';
const InputOfForm = ({ name, type, icon, click }) => {
  return (
    <Container>
      <Label>{name}</Label>
      <Input type={type} />
      <Icon onClick={click}>{icon}</Icon>
    </Container>
  );
};

InputOfForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.any,
  click: PropTypes.func,
};
export default InputOfForm;
