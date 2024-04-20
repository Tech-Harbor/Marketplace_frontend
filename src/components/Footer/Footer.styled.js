import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 100%;
  background-color: var(--color-label);
  padding: 88px 16px 50px 16px;
`;

export const DropDownMenuList = styled.ul`
  max-width: 695px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 490px) {
    margin: 6px auto 33px auto;
  }
`;

export const DropDownMenuItem = styled.li`
  width: 230px;
  margin-bottom: 16px;

  @media (max-width: 490px) {
    width: 328px;
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
  text-align: center;
  margin-top: 72px;

  & > :not(:first-child) {
    margin-top: 27px;
  }
`;

export const ContainerSocialNetworks = styled.div`
  column-gap: 25px;

  :not(:first-child) {
    margin-left: 25px;
  }
`;

export const TextRights = styled.span`
  display: block;
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #b8b9be;
`;
