import styled from 'styled-components';

export const Section = styled.section`
  padding: 25px 0;
`;

export const TextList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
`;

export const StyledLink = styled.a`
  display: block;
  margin-bottom: 15px;
  padding-left: 15px;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -1px;
  text-decoration: underline;
  color: var(--color-primary-active);

  &.sub-text {
    margin-left: 20px;
    font-size: 16px;
    line-height: 1.4;
  }

  &.bottom-indent {
    margin-bottom: 30px;
  }
`;

export const StyledTitle = styled.h2`
  margin-bottom: 10px;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
`;

export const StyledText = styled.p`
  font-family: Gilroy-Regular, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;

  &.text--center {
    margin-bottom: 10px;
    text-align: center;
  }

  &.text--auth {
    margin-top: 10px;
    padding: 0 40px;
  }

  &.bottom-indent {
    margin-bottom: 30px;
  }
`;

export const StyledOrderedLists = styled.ol`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 10px 0 0 0;
  list-style-type: decimal;

  font-family: Gilroy-Regular, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;

  &.bottom-indent {
    margin-bottom: 30px;
  }
`;
