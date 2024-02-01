import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import styled from 'styled-components';

const PasswordIcon = () => {
  return (
    <ResetButton style={{ position: 'absolute', right: '24px', top: 'calc(50% - 7px)' }}>
      <VisibilityOutlinedIcon />
    </ResetButton>
  );
};

export default PasswordIcon;

export const ResetButton = styled.button({
  position: 'absolute',
  right: '24px',
  top: 'calc(50% - 7px)',

  backgroundColor: 'transparent',
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopWidth: 0,
  // fontFamily: 'inherit'
  // fontSize: 'inherit',
  // fontStyle: 'inherit',
  // fontWeight: 'inherit',
  // lineHeight: 'inherit',
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
});
