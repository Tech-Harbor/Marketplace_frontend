import styled from 'styled-components';
// import PropTypes from 'prop-types';

const StyledTitle = styled.h1`
  margin: ${({ margin }) => margin || 0}; // general styles=> margin = 0
  /* color: #000; */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  color: ${props => props.color};
`;

// const Title = ({ children, color }) => {
//   return <StyledTitle color={color}>{children}</StyledTitle>;
// };

const Title = props => {
  return <StyledTitle {...props} />;
};

export default Title;

// Title.propTypes = {
//   children: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
// };
