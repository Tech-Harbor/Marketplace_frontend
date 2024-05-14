import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showTypeForm } from '../../../redux/auth';
import { TYPE_FORM } from '../../../constants';
import { StyledButton } from './ButtonAuth.styled.js';

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
