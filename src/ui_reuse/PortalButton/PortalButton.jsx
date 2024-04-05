import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { device } from '../../utils/index.js';
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

  @media ${device.untilTablet} {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }
`;

const CloseButton = styled(CloseRoundedIcon)`
  position: absolute;
  top: 25px;
  right: 16px;
  color: #33363f;
  cursor: pointer;
`;

export const PortalButton = ({ children, modalContent }) => {
  const bodyLink = document.getElementById('root').parentElement;
  const modalLink = document.getElementById('modal-root');

  const navigate = useNavigate();
  const location = useLocation();
  const isAuthModalParam = new URLSearchParams(location.search).get('auth_modal');

  /* P.S. we don't use any redux properties for open modal anymore */
  const openModal = () => {
    bodyLink.style.overflow = 'hidden';
  };

  const closeModal = () => {
    bodyLink.removeAttribute('style');

    navigate(location.pathname); // url params will be removed when we click on the close button or on the browser < (prev) button
  };

  /* modal will be open if url param has the "auth_modal=true" property */
  useEffect(() => {
    if (isAuthModalParam) {
      openModal();
    }
  }, [location]);

  return (
    <>
      {/* "navigate" adds a url param for open modal */}
      <div style={{ cursor: 'pointer' }} onClick={() => navigate('?auth_modal=true')}>
        {children}
      </div>

      {/* modal shows if only url params has "auth_modal=true" property */}
      {isAuthModalParam
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
