import PropTypes from 'prop-types';
import { StyledButton } from './ButtonAuth.styled.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showTypeForm } from '../../../redux/auth/index.js';
import { TYPE_FORM } from '../../../constants/index.js';

const ButtonAuth = ({ text }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openModalByAddQueryParam = () => {
    navigate('?auth_modal=true'); // 'navigate' adds a url param to open modal

    if (text === 'Зареєструватися') {
      dispatch(showTypeForm(TYPE_FORM.REGISTER));
    }
  };

  return <StyledButton onClick={openModalByAddQueryParam}>{text}</StyledButton>;
};

ButtonAuth.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonAuth;
