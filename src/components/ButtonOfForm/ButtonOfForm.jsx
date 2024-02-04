import PropTypes from 'prop-types';
import { Button } from './ButtonOfForm.style.js';
const ButtonOfForm = ({ color, children }) => {
  return <Button $backgroundcolor={color}>{children}</Button>;
};

ButtonOfForm.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
};
export default ButtonOfForm;
