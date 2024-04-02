import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './modalPages/Login.jsx';
import { ResetPassword } from './modalPages/ResetPassword.jsx';
import { Registration } from './modalPages/Registration.jsx';
import { PAGE } from '../../constants/constants.js';
import { showAuthModal, showAuthPage } from '../../redux/auth/slices.js';
import {
  StyledCloseButton,
  StyledContentWrapper,
  StyledIconProfile,
  StyledModal,
} from './AuthForm.styled.js';
import { showPageSelector } from '../../redux/auth/selectors.js';

const bodyLink = document.getElementById('root').parentElement;
const modalLink = document.getElementById('modal-root');

const AuthForm = () => {
  const dispatch = useDispatch();
  const showPage = useSelector(showPageSelector);
  const isShowModal = useSelector(state => state.auth.isShowModal);

  const openModal = () => {
    bodyLink.style.overflow = 'hidden';
    dispatch(showAuthModal(true));
    dispatch(showAuthPage(PAGE.REGISTER));
  };

  const closeModal = () => {
    bodyLink.removeAttribute('style');
    dispatch(showAuthModal(false));
    dispatch(showAuthPage(null));
  };
  return (
    <>
      <StyledIconProfile onClick={openModal} />

      {isShowModal
        ? createPortal(
            <StyledModal>
              <StyledContentWrapper>
                <StyledCloseButton onClick={closeModal} />
                {showPage === PAGE.REGISTER && <Registration />}
                {showPage === PAGE.LOGIN && <Login />}
                {showPage === PAGE.RESET_PSW && <ResetPassword />}
              </StyledContentWrapper>
            </StyledModal>,
            modalLink
          )
        : null}
    </>
  );
};

export default AuthForm;
