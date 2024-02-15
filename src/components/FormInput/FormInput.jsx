import PropTypes from 'prop-types';
import { Container, Input, Label, Icon } from './FormInput.styled.js';

const FormInput = ({ title, name, type = 'text', icon, click, min = 0, max = 100, register }) => {
  return (
    <Container>
      <Label>{title}</Label>
      <Input type={type} maxLength={max} {...register(name, { required: true, minLength: min })} />
      <Icon onClick={click}>{icon}</Icon>
    </Container>
  );
};

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.element,
  click: PropTypes.func,
  min: PropTypes.number.isRequired,
  max: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
export default FormInput;
