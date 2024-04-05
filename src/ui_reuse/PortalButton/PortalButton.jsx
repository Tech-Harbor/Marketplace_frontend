import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeShowMode } from '../../redux/auth/modalSlice.js';
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

  @media ${device.beforeTablet} {
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
  const showModal = useSelector(state => state.showModal.check);

  const dispatch = useDispatch();

  const bodyLink = document.getElementById('root').parentElement;
  const modalLink = document.getElementById('modal-root');

  const openModal = () => {
    bodyLink.style.overflow = 'hidden';
    dispatch(changeShowMode(true));
  };

  const closeModal = () => {
    bodyLink.removeAttribute('style');
    dispatch(changeShowMode(false));
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
  children: PropTypes.element.isRequired,
  modalContent: PropTypes.element.isRequired,
};
