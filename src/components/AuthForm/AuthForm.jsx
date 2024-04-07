import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Registration } from './typeForms/Registration.jsx';
import { Login } from './typeForms/Login.jsx';
import { RequestEmail } from './typeForms/RequestEmail.jsx';
import { ResetPassword } from './typeForms/ResetPassword.jsx';
import { typeFormSelector } from '../../redux/auth/selectors.js';
import { showTypeForm } from '../../redux/auth/authSlice.js';
import { TYPE_FORM } from '../../constants/index.js';
import {
  StyledCloseButton,
  StyledContentWrapper,
  StyledIconProfile,
  StyledModal,
} from './AuthForm.styled.js';

const bodyLink = document.getElementById('root').parentElement;
const modalLink = document.getElementById('modal-root');

const AuthForm = () => {
  const dispatch = useDispatch();
  const typeForm = useSelector(typeFormSelector);
  const modalRef = useRef();

  const openModal = () => {
    bodyLink.style.overflow = 'hidden';
    dispatch(showTypeForm(TYPE_FORM.LOGIN));
  };

  const closeModal = () => {
    bodyLink.removeAttribute('style');
    dispatch(showTypeForm(null));
  };

  const handleCloseEsc = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleCloseOutsideModal = event => {
    // modalRef.current?.contains(event.target) -> модалка буде закриватися при кліку навіть по ній
    // щоб запобігти закриттю при кліку по модалці я використав onClick={e => e.stopPropagation()} на <StyledContentWrapper>
    if (modalRef.current?.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseEsc);
    document.addEventListener('click', handleCloseOutsideModal);

    return () => {
      window.removeEventListener('keydown', handleCloseEsc);
      document.removeEventListener('click', handleCloseOutsideModal);
    };
  }, [closeModal, handleCloseEsc, handleCloseOutsideModal]);

  return (
    <>
      <StyledIconProfile onClick={openModal} />

      {typeForm
        ? createPortal(
            <StyledModal ref={modalRef}>
              <StyledContentWrapper onClick={e => e.stopPropagation()}>
                <StyledCloseButton onClick={closeModal} />
                {typeForm === TYPE_FORM.REGISTER && <Registration />}
                {typeForm === TYPE_FORM.LOGIN && <Login />}
                {typeForm === TYPE_FORM.REQUEST_EMAIL && <RequestEmail />}
                {typeForm === TYPE_FORM.RESET_PSW && <ResetPassword />}

                {/*ВИДАЛИТИ*/}
                {/*{typeForm === TYPE_FORM.REQUEST_EMAIL && <ResetPassword />}*/}
              </StyledContentWrapper>
            </StyledModal>,
            modalLink
          )
        : null}
    </>
  );
};

export default AuthForm;
