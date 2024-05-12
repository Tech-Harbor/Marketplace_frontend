import styled from 'styled-components';
import { device } from '../../utils/index.js';
import advertising from '../../assets/imges/advertising.jpg';

const ContainerImage = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
    width: 100%;
    height: 219px;
    margin-bottom: 58px;
  }
`;

const AdvertisingImage = styled.img.attrs({
  alt: 'AdvertisingImage',
  src: advertising,
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Advertising = () => {
  return (
    <ContainerImage>
      <AdvertisingImage />
    </ContainerImage>
  );
};
