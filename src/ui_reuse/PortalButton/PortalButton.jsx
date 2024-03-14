import { createPortal } from 'react-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled from 'styled-components';

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
  top: 64px;
  right: 20px;
  color: #33363f;
  cursor: pointer;
`;

export const PortalButton = ({ children, modalContent }) => {
  const [showModal, setShowModal] = useState(false);

  const bodyLink = document.getElementById('root').parentElement;
  const modalLink = document.getElementById('modal-root');

  const openModal = () => {
    bodyLink.style.overflow = 'hidden';
    setShowModal(true);
  };

  const closeModal = () => {
    bodyLink.removeAttribute('style');
    setShowModal(false);
  };

  return (
    <>
      <div style={{ cursor: 'pointer' }} onClick={openModal}>
        {children}
      </div>

      {showModal
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
  children: PropTypes.elementType.isRequired,
  modalContent: PropTypes.element.isRequired,
};
