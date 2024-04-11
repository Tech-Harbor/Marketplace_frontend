import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  padding: 6px 16px 97px;
`;

export const Img = styled.img``;

export const ContainerDropDownMenu = styled.div`
  margin-bottom: 33px;
`;

export const ContainerIconLink = styled.div`
  display: grid;
  grid-row-gap: 27px;

  & > * {
    margin: 0 auto;
  }
`;

export const ContainerSocialNetworks = styled.div`
  display: flex;
  grid-column-gap: 25px;
`;

export const TextRights = styled.span`
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #b8b9be;
`;
