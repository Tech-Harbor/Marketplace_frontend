import styled from 'styled-components';

const text = `
  font-family: 'Inter', sans-serif;
  font-weight: 400;
`;

const black = `#000`;

export const BlockOfForm = styled.div`
  width: 360px;
  height: var(--height-full-scrin);
  background-color: #ffffff;
  margin: 0 auto;
  padding: 16px;
  @media (min-width: 1024px) {
    & {
      width: 658px;
    }
  }
  @media (min-width: 1440px) {
    & {
      width: 708px;
    }
  }
`;

export const ButtonOfLogIn = styled.button`
  width: 100%;
  height: var(--height-full-scrin);
  background: none;
  border: 2px solid ${black};
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-top: 36px;
  padding: 8px 13.5px;
  @media (min-width: 1024px) {
    & {
      margin-top: 26px;
      padding: 1px 5px;
    }
  }
`;

export const SecondButtonOfLogIn = styled(ButtonOfLogIn)`
  margin-top: 43px;
  @media (min-width: 1024px) {
    & {
      margin-top: 27px;
    }
  }
`;

export const Image = styled.img`
  width: 30px;
  aspect-ratio: 1;
  margin-right: 10px;
  @media (min-width: 1024px) {
    & {
      width: 50px;
      margin-right: 37px;
    }
  }
`;

export const Text = styled.span`
  font-size: 18px;
  ${text};
  line-height: 38px;
  color: ${black};
  @media (min-width: 1024px) {
    & {
      font-size: 32px;
      line-height: 38px;
    }
  }
`;

export const Change = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${black};
  margin-top: 56px;
  position: relative;
  display: flex;
  justify-content: center;
  &::after {
    content: 'чи';
    ${text};
    font-size: 16px;
    position: absolute;
    top: -10px;
    z-index: 1;
    background-color: #ffffff;
    padding-inline: 25px;
  }
  @media (min-width: 1024px) {
    &::after {
      font-size: 24px;
      padding-inline: 51px;
      margin-top: 38px;
      top: -50px;
    }
  }
  @media (min-width: 1440px) {
    &::after {
      padding-inline: 85px;
      margin-top: 79px;
      top: -90px;
    }
  }
`;

export const BlockOfButtons = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0 40px 0;
  @media (min-width: 1024px) {
    & {
      gap: 25px;
      margin: 18px 0 28px 0;
    }
  }
  @media (min-width: 1440px) {
    & {
      margin: 45px 0 45px 0;
    }
  }
`;

export const ButtonOfChoice = styled.button`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 2px solid ${black};
  color: ${black};
  ${text};
  font-size: 18px;
  line-height: 21px;
  @media (min-width: 1440px) {
    & {
      font-size: 24px;
      line-height: 29px;
    }
  }
`;

export const SecondButtonOfChoice = styled(ButtonOfChoice)`
  border-bottom: 2px solid #b7b7b9;
  color: #b7b7b9;
  &:hover {
    border-bottom: 2px solid ${black};
    color: ${black};
  }
`;

export const BlockOfInputs = styled.div`
  height: 166px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 1024px) {
    & {
      height: 178px;
    }
  }
  @media (min-width: 1440px) {
    & {
      height: 218px;
    }
  }
`;

export const Forgot = styled.a`
  ${text};
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  display: block;
  margin: 33px 0 40px 0;
  @media (min-width: 1024px) {
    & {
      margin: 18px 0 15px 0;
    }
  }
  @media (min-width: 1440px) {
    & {
      font-size: 20px;
      line-height: 24px;
      margin: 60px 0 61px 0;
    }
  }
`;
