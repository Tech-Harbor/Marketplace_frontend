import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  resetPasswordTokenSelector,
  typeFormSelector,
  setTokenFromEmailLink,
  showTypeForm,
} from '../../redux/auth';
import { TYPE_FORM } from '../../constants';
import { Login, Registration, RequestEmail, ResetPassword } from './typeForms';
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
  const resetPasswordToken = useSelector(resetPasswordTokenSelector);

  const navigate = useNavigate();
  const location = useLocation();
  const isShowModal = new URLSearchParams(location.search).get('auth_modal');

  const openModal = () => {
    bodyLink.style.overflow = 'hidden';
    dispatch(showTypeForm(TYPE_FORM.LOGIN));
    window.addEventListener('keydown', handleCloseByKeyPress);
  };

  const closeModal = () => {
    bodyLink.removeAttribute('style');
    navigate(location.pathname); // url params will be removed when we click on the close button or on the browser < (prev) button
    dispatch(showTypeForm(null));
    window.removeEventListener('keydown', handleCloseByKeyPress);
  };

  const handleCloseByKeyPress = event => {
    const { type: eventType = '', key: pressedKey = '' } = event;
    const isPressKeyEscape = eventType === 'keydown' && pressedKey === 'Escape';

    if (isPressKeyEscape) {
      closeModal();
    }
  };

  /* Possible events: close by click on background or by close button. */
  const handleCloseByOnClick = event => {
    const {
      target: {
        id: targetID = '',
        parentElement: { id: parentTargetID = '' },
      },
    } = event; /* Destructuring and getting needed values from 'event' object.
     * If we click on the close button the 'targetID' can be children, so we check its parentElement.
     */
    const isClickOnBackground = targetID === 'background';
    const isClickOnButton = (targetID || parentTargetID) === 'close-button';

    if (isClickOnBackground || isClickOnButton) {
      closeModal();
    }
  };

  const openModalByAddQueryParam = () => {
    navigate('?auth_modal=true'); // 'navigate' adds a url param to open modal
    setTokenFromEmailLink(null);
  };

  /* modal will be open if url param has the "auth_modal=true" property */
  useEffect(() => {
    if (isShowModal) {
      openModal();
    }
  }, [location, isShowModal]);

  return (
    <>
      <StyledIconProfile onClick={openModalByAddQueryParam} />

      {isShowModal
        ? createPortal(
            /*
            Important note: don't remove or change 'background' and 'close-button' id`s.
            They are needed for correctly work of close modal handler!
            */
            <StyledModal id={'background'} onClick={handleCloseByOnClick}>
              <StyledContentWrapper>
                <StyledCloseButton id={'close-button'} />

                {resetPasswordToken && <ResetPassword />}
                {!resetPasswordToken && (
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
