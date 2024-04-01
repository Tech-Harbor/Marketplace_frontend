import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled from 'styled-components';
import { showAuthModal, showAuthPage } from '../../redux/auth/slices.js';
import { PAGE } from '../../constants/constants.js';

const bodyLink = document.getElementById('root').parentElement;
const modalLink = document.getElementById('modal-root');

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ContentWrapper = styled.div`
  position: relative;
  padding: 7px;
  background-color: #d5c071;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled(CloseRoundedIcon)`
  position: absolute;
  top: 25px;
  right: 16px;
  color: #33363f;
  cursor: pointer;
`;

export const PortalButton = ({ children, modalContent }) => {
  const dispatch = useDispatch();
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
      <div style={{ cursor: 'pointer' }} onClick={openModal}>
        {children}
      </div>

      {isShowModal
        ? createPortal(
            <Modal className={'modal'}>
              <ContentWrapper>
                <CloseButton sx={{}} onClick={closeModal} />

                {modalContent}
              </ContentWrapper>
            </Modal>,
            modalLink
          )
        : null}
    </>
  );
};

PortalButton.propTypes = {
  children: PropTypes.element.isRequired,
  modalContent: PropTypes.element.isRequired,
};
