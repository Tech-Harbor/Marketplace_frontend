import styled from 'styled-components';

import advertisement from '../../assets/images/Advertisement.jpg';

import { device } from '../../utils/index.js';

export const ContainerImage = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 58px;
  width: 100%;
  height: 219px;

  @media ${device.laptop} {
    display: flex;
  }
`;

export const AdvertisementImage = styled.img.attrs({
  alt: 'AdvertisementImage',
  src: advertisement,
})`
  object-fit: fill;
  width: 100%;
  height: 100%;
`;
