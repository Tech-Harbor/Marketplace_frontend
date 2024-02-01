import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import { ButtonWrapper } from './PasswordIcon.styled';

export const PasswordVisibilityIcon = () => {
  return (
    <ButtonWrapper style={{ position: 'absolute', right: '24px', top: 'calc(50% - 7px)' }}>
      <VisibilityOutlinedIcon />
    </ButtonWrapper>
  );
};
