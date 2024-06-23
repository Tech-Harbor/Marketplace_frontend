import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore.js';
import { Section } from './PageTitle.styled.js';

export const PageTitle = ({ to, title }) => {
  return (
    <Section>
      <Link to={to} className={'link'}>
        <NavigateBeforeIcon />
      </Link>
      <h1 className={'title'}>{title}</h1>
    </Section>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
