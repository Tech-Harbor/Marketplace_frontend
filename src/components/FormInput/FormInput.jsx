import PropTypes from 'prop-types';
import { Container, Input, Label, Icon } from './FormInput.styled.js';

const FormInput = ({ name, type, icon, click, inputValue }) => {
  return (
    <Container>
      <Label>{name}</Label>
      <Input type={type} onChange={e => inputValue(e.target.value)} />
      <Icon onClick={click}>{icon}</Icon>
    </Container>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.any,
  click: PropTypes.func,
  inputValue: PropTypes.func,
};
export default FormInput;
