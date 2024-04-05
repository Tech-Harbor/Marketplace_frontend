import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './typeForms/Login.jsx';
import { RequestEmail } from './typeForms/RequestEmail.jsx';
import { Registration } from './typeForms/Registration.jsx';
import { ResetPassword } from './typeForms/ResetPassword.jsx';
import { typeFormSelector } from '../../redux/auth/selectors.js';
import { showTypeForm } from '../../redux/auth/authSlice.js';
import { PAGE } from '../../constants/index.js';
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

  const openModal = () => {
    bodyLink.style.overflow = 'hidden';
    dispatch(showTypeForm(PAGE.LOGIN));
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

  useEffect(() => {
    window.addEventListener('keydown', handleCloseEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseEsc);
    };
  }, [closeModal]);

  return (
    <>
      <StyledIconProfile onClick={openModal} />

      {typeForm
        ? createPortal(
            <StyledModal>
              <StyledContentWrapper>
                <StyledCloseButton onClick={closeModal} />
                {typeForm === PAGE.REGISTER && <Registration />}
                {typeForm === PAGE.LOGIN && <Login />}
                {typeForm === PAGE.RESET_PSW && <ResetPassword />}
                {typeForm === PAGE.REQUEST_EMAIL && <RequestEmail />}

                {/*ВИДАЛИТИ*/}
                {/*{typeForm === PAGE.REQUEST_EMAIL && <ResetPassword />}*/}
              </StyledContentWrapper>
            </StyledModal>,
            modalLink
          )
        : null}
    </>
  );
};

export default AuthForm;
