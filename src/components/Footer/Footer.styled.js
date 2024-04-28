import styled from 'styled-components';
import Oranger from '../../assets/svg/Oranger.svg?react';

const levelChangeSize = '(max-width: 580px)';

export const Container = styled.footer`
  width: 100%;
  height: 100%;
  background-color: var(--color-label);
  padding: 88px 16px 50px 16px;

  @media ${levelChangeSize} {
    padding: 6px 16px 26px 16px;
  }
`;

export const DropDownMenuList = styled.ul`
  max-width: 840px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const DropDownMenuItem = styled.li`
  :first-child {
    margin-bottom: 16px;
  }

  @media ${levelChangeSize} {
    width: 100%;

    :first-child {
      margin-bottom: 0;
    }
  }
`;

export const InformativeLink = styled.a`
  display: block;
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--color-btn-text);

  @media ${levelChangeSize} {
    font-family: 'Gilroy-Medium', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    padding: 20px 7px;
    border-bottom: 1px solid #6c727533;
  }
`;

export const ContainerIconLink = styled.div`
  text-align: center;
  margin-top: 88px;

  & > * {
    margin: 0 auto;
  }

  @media ${levelChangeSize} {
    margin-top: 33px;
  }
`;

export const ContainerSocialNetworks = styled.div`
  width: fit-content;
  display: flex;
  column-gap: 25px;
`;

export const StyledOranger = styled(Oranger)`
  margin: 30px 0 29px 0;

  @media ${levelChangeSize} {
    margin: 27px 0;
  }
`;

export const TextRights = styled.span`
  display: block;
  width: fit-content;
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #b8b9be;
`;
