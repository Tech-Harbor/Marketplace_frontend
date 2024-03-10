import styled from 'styled-components';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const StyledValidateErrors = styled.ul`
  margin-top: 6px;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const StyledIcon = styled(CloseOutlinedIcon)`
  color: var(--color-error-input);
  width: 20px;
  height: 20px;
`;
