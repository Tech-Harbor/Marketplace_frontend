import { StyledText, StyledTitle } from './Title_Text.styled';

export const Title = props => {
  return <StyledTitle {...props} />;
};

export const Text = props => {
  return <StyledText {...props}></StyledText>;
};
