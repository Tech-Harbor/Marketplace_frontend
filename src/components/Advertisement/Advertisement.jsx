import styled from 'styled-components';
import { device } from '../../utils/index.js';
import advertising from '../../assets/images/Advertisement.jpg';

const ContainerImage = styled.div`
  width: 100%;
  height: 219px;
  margin-bottom: 58px;
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

const AdvertisementImage = styled.img.attrs({
  alt: 'AdvertisementImage',
  src: advertising,
})`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const Advertisement = () => {
  return (
    <ContainerImage>
      <AdvertisementImage />
    </ContainerImage>
  );
};
