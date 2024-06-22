import styled from 'styled-components';

export const SectionAnchors = styled.section`
  padding: 25px 0;

  .anchor {
    display: block;
    margin-bottom: 15px;
    font-family: Gilroy-Regular, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -1px;
    text-decoration: underline;
    color: var(--color-primary-active);
  }

  .sub-anchor {
    margin-left: 20px;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: -1px;
  }
`;

export const TextList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;

  .title {
    margin-bottom: 10px;
    font-family: Gilroy-Medium, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
  }

  .text {
    //font-family: Gilroy-Regular, sans-serif;
    //font-size: 15px;
    //font-weight: 400;
    //line-height: 22px;

    //&--center {
    //  margin-bottom: 10px;
    //  text-align: center;
    //}

    //&--margin {
    //  margin-top: 20px;
    //}
    //
    //&__auth {
    //  margin-top: 10px;
    //  padding: 0 40px;
    //}
  }

  .text-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 10px 0 0 0;
    list-style-type: decimal;
  }
`;
