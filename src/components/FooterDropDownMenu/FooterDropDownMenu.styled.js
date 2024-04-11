import styled from 'styled-components';

import arrow from '../../assets/svg/arrow.svg';

export const DropDownMenu = styled.div`
  width: 100%;
  padding: 20px 7px ${props => (props.$show ? '0' : '20px')} 7px;
  border-bottom: ${props => (props.$show ? 'none' : '1px solid #6c727533')};
  color: var(--color-btn-text);
`;

export const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

export const TitleText = styled.span`
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

export const OpenArrow = styled.img.attrs({
  src: arrow,
  alt: 'Arrow',
})`
  transition-duration: 1s;
  rotate: ${props => (props.$show ? '180deg' : '0deg')};
  cursor: pointer;
`;

export const BottomBlock = styled.div`
  display: grid;
  gap: 15px;
  padding: 17px 0 16px 11px;
`;

export const InformativeLink = styled.a`
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: block;
`;
