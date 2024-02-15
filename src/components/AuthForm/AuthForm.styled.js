import styled from 'styled-components';
import { device } from '../../utils/index.js';

const fontStyles = `
  font-family: 'Inter', sans-serif;
  font-weight: 400;
`;

const black = `#000`;

export const FormBlock = styled.form`
  width: 360px;
  background-color: #ffffff;
  padding: 36px 16px 17px 16px;

  @media ${device.laptop} {
    width: 658px;
    padding: 26px 24px 26px 24px;
  }

  @media ${device.desktop} {
    width: 708px;
    padding: 69px 25px 20px 25px;
  }
`;

export const LogInButton = styled.button`
  width: 100%;
  height: 52px;
  background: none;
  border: 2px solid ${black};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 8px 13px;

  @media ${device.laptop} {
    padding: 1px 5px;
  }

  @media ${device.desktop} {
    padding: 8px 30px;
    height: 66px;
  }
`;

export const LogInSecondButton = styled(LogInButton)`
  margin-top: 42px;

  @media ${device.laptop} {
    margin-top: 27px;
  }

  @media ${device.desktop} {
    margin-top: 60px;
  }
`;

export const Image = styled.img`
  width: 30px;
  aspect-ratio: 1;
  margin-right: 10px;

  @media ${device.laptop} {
    width: 50px;
    margin-right: 37px;
  }
`;

export const Text = styled.span`
  font-size: 18px;
  ${fontStyles};
  line-height: 38px;
  color: ${black};

  @media ${device.laptop} {
    font-size: 32px;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${black};
  margin: 56px 0 10px 0;
  text-align: center;

  @media ${device.laptop} {
    margin: 38px 0 18px 0;
  }

  @media ${device.desktop} {
    margin: 79px 0 45px 0;
  }
`;

export const TextLine = styled.span`
  ${fontStyles};
  font-size: 16px;
  padding: 0 25px;
  background-color: #ffffff;
  position: relative;
  top: -7px;
  z-index: 1;

  @media ${device.laptop} {
    font-size: 24px;
    padding: 0 51px;
  }

  @media ${device.desktop} {
    padding: 0 85px;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0 40px 0;

  @media ${device.laptop} {
    gap: 25px;
    margin: 18px 0 28px 0;
  }

  @media ${device.desktop} {
    margin: 45px 0 45px 0;
  }
`;

export const ChoiceButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 2px solid ${black};
  color: ${black};
  ${fontStyles};
  font-size: 18px;
  line-height: 21px;
  padding: 11px 0;

  @media ${device.desktop} {
    font-size: 24px;
    padding: 14px 0;
  }
`;

export const ChoiceSecondButton = styled(ChoiceButton)`
  border-bottom: 2px solid #b7b7b9;
  color: #b7b7b9;

  &:hover {
    border-bottom: 2px solid ${black};
    color: ${black};
  }
`;

export const InputsBlock = styled.div`
  height: 166px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.laptop} {
    height: 178px;
  }

  @media ${device.desktop} {
    height: 218px;
  }
`;

export const Forgot = styled.a`
  ${fontStyles};
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  display: block;
  margin: 33px 0 40px 0;

  @media ${device.laptop} {
    margin: 18px 0 15px 0;
  }

  @media ${device.desktop} {
    font-size: 20px;
    margin: 60px 0 61px 0;
  }
`;
