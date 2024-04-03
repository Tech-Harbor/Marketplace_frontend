import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './typeForms/Login.jsx';
import { ResetPassword } from './typeForms/ResetPassword.jsx';
import { Registration } from './typeForms/Registration.jsx';
import { PAGE } from '../../constants/index.js';
import { showAuthModal, showTypeForm } from '../../redux/auth/slices.js';
import {
  StyledCloseButton,
  StyledContentWrapper,
  StyledIconProfile,
  StyledModal,
} from './AuthForm.styled.js';
import { typeFormSelector } from '../../redux/auth/selectors.js';

const bodyLink = document.getElementById('root').parentElement;
const modalLink = document.getElementById('modal-root');

const AuthForm = () => {
  const dispatch = useDispatch();
  const typeForm = useSelector(typeFormSelector);
  const isShowModal = useSelector(state => state.auth.isShowModal);

  const openModal = () => {
    bodyLink.style.overflow = 'hidden';
    dispatch(showAuthModal(true));
    dispatch(showTypeForm(PAGE.LOGIN));
  };

  const closeModal = () => {
    bodyLink.removeAttribute('style');
    dispatch(showAuthModal(false));
    dispatch(showTypeForm(null));
  };
  return (
    <>
      <StyledIconProfile onClick={openModal} />

      {isShowModal
        ? createPortal(
            <StyledModal>
              <StyledContentWrapper>
                <StyledCloseButton onClick={closeModal} />
                {typeForm === PAGE.REGISTER && <Registration />}
                {typeForm === PAGE.LOGIN && <Login />}
                {typeForm === PAGE.RESET_PSW && <ResetPassword />}
              </StyledContentWrapper>
            </StyledModal>,
            modalLink
          )
        : null}
    </>
  );
};

export default AuthForm;
