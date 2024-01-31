import styled from 'styled-components';
import device from './MediaQueries';
// import PropTypes from 'prop-types';

const Title = props => {
  return <StyledTitle {...props} />;
};

const Text = props => {
  return <StyledText {...props}></StyledText>;
};

export { Title, Text };

const StyledTitle = styled.h1`
  margin-top: 7px;
  padding: 6.5px 34px;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  /* color: #000; */

  @media ${device.laptopL} {
    margin-top: 26px;
    margin-bottom: 36px;
    padding: 14px 92px;

    font-size: 24px;
    line-height: 29.05px;
  }
`;

const StyledText = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;

  color: #fff;
`;

// const Title = ({ children, color }) => {
//   return <StyledTitle color={color}>{children}</StyledTitle>;
// };

// Title.propTypes = {
//   children: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
// };
