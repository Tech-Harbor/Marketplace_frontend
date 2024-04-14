import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  padding: 6px 16px 97px;
`;

export const DropDownMenuList = styled.ul`
  max-width: 695px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto 72px auto;

  @media (max-width: 490px) {
    margin: 6px auto 33px auto;
  }
`;

export const DropDownMenuItem = styled.li`
  width: 230px;
  margin-top: 16px;

  @media (max-width: 490px) {
    width: 360px;
    border-bottom: 1px solid #6c727533;
    margin: 0;
  }
`;

export const InformativeLink = styled.a`
  width: 100%;
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--color-btn-text);
  display: inline-block;

  @media (max-width: 490px) {
    font-family: 'Gilroy-Medium', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    padding: 20px 7px;
  }
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
