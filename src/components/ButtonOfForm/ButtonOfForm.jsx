import PropTypes from 'prop-types';
import { Button } from './ButtonOfForm.style.js';
const ButtonOfForm = ({ children }) => {
  return <Button>{children}</Button>;
};

ButtonOfForm.propTypes = {
  children: PropTypes.string,
};
export default ButtonOfForm;
