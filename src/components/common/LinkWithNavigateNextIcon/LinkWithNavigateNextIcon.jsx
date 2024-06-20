import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined.js';
import { Wrapper } from './LinkWithNavigateNextIcon.styled.js';

export const LinkWithNavigateNextIcon = ({ title, to, className }) => {
  return (
    <Wrapper className={className}>
      <p className={className}>{title}</p>
      <Link to={to} className={'link'}>
        <NavigateNextOutlinedIcon />
      </Link>
    </Wrapper>
  );
};

LinkWithNavigateNextIcon.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};
