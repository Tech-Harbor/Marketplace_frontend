import PropTypes from 'prop-types';
import { Container, Input, Label, Icon } from './FormInput.styled.js';

const FormInput = ({ title, name, type = 'text', icon, click, inputValue, min = 0, max = 100 }) => {
  return (
    <Container>
      <Label>{title}</Label>
      <Input
        type={type}
        name={name}
        onChange={e => inputValue(e.target.value)}
        minLength={min}
        maxLength={max}
      />
      <Icon onClick={click}>{icon}</Icon>
    </Container>
  );
};

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.any,
  click: PropTypes.func,
  inputValue: PropTypes.func,
  min: PropTypes.number.isRequired,
  max: PropTypes.string.isRequired,
};
export default FormInput;
