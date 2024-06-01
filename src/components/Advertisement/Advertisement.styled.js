import styled from 'styled-components';

import advertisement from '../../assets/images/Advertisement.jpg';

import { device } from '../../utils/index.js';

export const ContainerImage = styled.div`
  width: 100%;
  height: 219px;
  margin-bottom: 58px;
  display: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media ${device.laptop} {
    display: flex;
  }
`;

export const AdvertisementImage = styled.img.attrs({
  alt: 'AdvertisementImage',
  src: advertisement,
})`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
