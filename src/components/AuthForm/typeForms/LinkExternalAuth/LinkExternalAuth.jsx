import PropTypes from 'prop-types';
import { StyledIcon, StyledLink } from './LinkExternalAuth.styled.js';

const LinkExternalAuth = ({ href, linkText, icon }) => {
  return (
    <>
      <StyledLink href={href}>
        <StyledIcon src={icon} alt={linkText} />
        {linkText}
      </StyledLink>
    </>
  );
};

LinkExternalAuth.propTypes = {
  href: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default LinkExternalAuth;
