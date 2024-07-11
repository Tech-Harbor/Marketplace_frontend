import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { device } from '../../../utils';

import Nice from '../../../assets/images/Nice.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 67px;

  @media ${device.tablet} {
    margin-top: 40px;
    margin-bottom: 50px;
  }
`;

export const Title = styled.p`
  font-family: Gilroy-SemiBold, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;

  @media ${device.tablet} {
    font-family: Gilroy-Medium, sans-serif;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
  }
`;

export const SuccessMessage = styled.p`
  margin-top: 44px;
  font-family: Gilroy-Regular, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Image = styled.img.attrs({
  src: Nice,
  alt: 'Photo of an orange that shows that everything is cool',
})`
  margin-top: 32px;
  width: 221px;
  height: 216px;

  @media ${device.tablet} {
    margin-top: 27px;
  }
`;

export const AddAnnouncement = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  width: 328px;
  height: 36px;
  font-family: Gilroy-SemiBold, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  background: var(--color-primary-active);
  color: var(--color-btn-text);
  border-radius: 5px;

  @media ${device.tablet} {
    margin-top: 57px;
    width: 353px;
    height: 42px;
  }
`;

export const LinkOnMyAnnouncement = styled(AddAnnouncement)`
  margin-top: 16px;
  background: var(--color-btn-text);
  color: var(--color-primary-active);

  @media ${device.tablet} {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 39px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    margin-top: 50px;
  }
`;

export const Text = styled.span`
  font-family: Gilroy-Medium, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  @media ${device.tablet} {
    font-family: Gilroy-SemiBold, sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const PlacementLink = styled(AddAnnouncement)`
  margin-top: 26px;
  width: 208px;
  background: var(--color-btn-text);
  color: var(--color-primary-active);
  border: 1px solid var(--color-primary-active);

  @media ${device.tablet} {
    margin-left: 140px;
    min-width: 230px;
  }
`;
