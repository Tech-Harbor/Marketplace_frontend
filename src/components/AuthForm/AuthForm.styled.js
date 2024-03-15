import styled from 'styled-components';
import { device } from '../../utils/index.js';

const fontStyles = `
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 500;
`;

export const FormBlock = styled.form`
  width: 360px;
  background-color: #ffffff;
  padding: 25px 16px;

  @media ${device.laptop} {
    width: 658px;
    padding: 26px 24px 26px 24px;
  }

  @media ${device.desktop} {
    width: 708px;
    padding: 69px 25px 20px 25px;
  }
`;

export const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.span`
  display: block;
  ${fontStyles};
  font-size: 24px;
  line-height: 24px;
`;

export const InputsBlock = styled.div`
  display: grid;
  gap: 16px;
`;

export const ChoiceBlock = styled.div`
  width: 100%;
  display: ${props => (props.$show ? 'flex' : 'none')};
  justify-content: space-between;
  margin: 37px 0 24px 0;
`;

export const RememberBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Check = styled.input`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  position: relative;
  z-index: 5;
`;

export const SwitchOff = styled.div`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  position: absolute;
`;

export const SwitchOn = styled.div`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  background-color: #189633;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const RememberText = styled.label`
  ${fontStyles};
  font-size: 12px;
  line-height: 24px;
  margin-left: 5px;
`;

export const Forgot = styled.a`
  ${fontStyles};
  font-size: 12px;
  line-height: 24px;
  cursor: pointer;
  display: block;
  color: #ff8a00;
`;

export const Account = styled.div`
  ${fontStyles};
  font-size: ${props => (props.$size ? '16px' : '13px')};
  line-height: 24px;
  text-align: center;
  margin: 20px 0 15px 0;
`;

export const CreateAccount = styled.span`
  color: #ff8a00;
`;

export const LogInButton = styled.button`
  width: 100%;
  height: 36px;
  background: none;
  border: 1px solid #515567;
  border-radius: 10px;
  display: ${props => (props.$show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  padding: 8px 13px;
`;

export const Image = styled.img`
  width: 24px;
  aspect-ratio: 1;
  margin-right: 30px;
`;

export const Text = styled.span`
  ${fontStyles};
  font-size: 15px;
  line-height: 24px;
  color: #000;
`;
