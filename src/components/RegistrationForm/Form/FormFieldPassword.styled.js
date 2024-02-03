import styled from 'styled-components';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

/**
 * Styles for wrapper button of icon
 */
export const StyledWrapperButton = styled.button({
  position: 'absolute',
  right: '24px',
  top: 'calc(50% - 7px)',

  // reset styles
  backgroundColor: 'transparent',
});

export const StyledIcon = styled(VisibilityOutlinedIcon)`
  color: var(--color-primary);
`;
