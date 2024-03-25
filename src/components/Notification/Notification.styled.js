import styled from 'styled-components';
import { FormBlock } from '../AuthForm/AuthForm.styled.js';

const fontStyles = `
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 500;
`;

export const Container = styled(FormBlock)`
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const Title = styled.p`
  ${fontStyles};
  font-weight: 600;
  font-size: 36px;
  line-height: 24px;
`;

export const Text = styled.p`
  ${fontStyles};
  font-size: 16px;
  line-height: 24px;
  margin: 45px 0 26px 0;
`;

export const Icon = styled.img`
  display: inline;
  width: 200px;
`;
