import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Registration } from './typeForms/Registration.jsx';
import { Login } from './typeForms/Login.jsx';
import { RequestEmail } from './typeForms/RequestEmail.jsx';
import { ResetPassword } from './typeForms/ResetPassword.jsx';
import { resetPasswordTokenSelector, typeFormSelector } from '../../redux/auth/selectors.js';
import { setTokenFromEmailLink, showTypeForm } from '../../redux/auth/authSlice.js';
import { TYPE_FORM } from '../../constants/index.js';
import {
  StyledCloseButton,
  StyledContentWrapper,
  StyledIconProfile,
  StyledModal,
} from './AuthForm.styled.js';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';

const bodyLink = document.getElementById('root').parentElement;
const modalLink = document.getElementById('modal-root');

const AuthForm = () => {
  const dispatch = useDispatch();
  const typeForm = useSelector(typeFormSelector);
  const resetPasswordToken = useSelector(resetPasswordTokenSelector);

  const navigate = useNavigate();
  const location = useLocation();
  const isAuthModalParam = new URLSearchParams(location.search).get('auth_modal');

  const openModal = () => {
    bodyLink.style.overflow = 'hidden';
    dispatch(showTypeForm(TYPE_FORM.LOGIN));
    window.addEventListener('keydown', handleCloseEsc);
    document.addEventListener('click', handleClickOnOutsideModal);
  };

  const closeModal = () => {
    bodyLink.removeAttribute('style');
    navigate(location.pathname); // url params will be removed when we click on the close button or on the browser < (prev) button
    dispatch(showTypeForm(null));
    dispatch(setTokenFromEmailLink(null));
    window.removeEventListener('keydown', handleCloseEsc);
    document.removeEventListener('click', handleClickOnOutsideModal);
  };

  const handleCloseEsc = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleClickOnOutsideModal = event => {
    if (event.target.id === 'modal') {
      closeModal();
    }
  };
  const handleAuthModalNavigation = () => {
    navigate('?auth_modal=true');
    setTokenFromEmailLink(null);
  };

  /* modal will be open if url param has the "auth_modal=true" property */
  useEffect(() => {
    if (isAuthModalParam) {
      openModal();
    }
  }, [location]);

  return (
    <>
      <StyledIconProfile onClick={handleAuthModalNavigation} />

      {isAuthModalParam
        ? createPortal(
            <StyledModal id={'modal'} onClick={handleClickOnOutsideModal}>
              <StyledContentWrapper>
                <StyledCloseButton onClick={closeModal} />
                {resetPasswordToken ? (
                  <ResetPassword />
                ) : (
                  <>
                    {typeForm === TYPE_FORM.REGISTER && <Registration />}
                    {typeForm === TYPE_FORM.LOGIN && <Login />}
                    {typeForm === TYPE_FORM.REQUEST_EMAIL && <RequestEmail />}
                  </>
                )}
              </StyledContentWrapper>
            </StyledModal>,
            modalLink
          )
        : null}
    </>
  );
};

export default AuthForm;
