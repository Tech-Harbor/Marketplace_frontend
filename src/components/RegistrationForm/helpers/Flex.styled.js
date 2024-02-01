import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  position: ${props => props.position || 'static'};
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
`;
