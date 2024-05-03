import styled from 'styled-components';

import { Link } from 'react-router-dom';

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

export const FooterMenu = styled.div`
  max-width: 840px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
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
  margin-bottom: 27px;
`;

export const OrangerLink = styled(Link)`
  display: inline-block;
  margin-bottom: 27px;
`;

export const TextAboutRights = styled.span`
  display: block;
  width: fit-content;
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #b8b9be;
`;
