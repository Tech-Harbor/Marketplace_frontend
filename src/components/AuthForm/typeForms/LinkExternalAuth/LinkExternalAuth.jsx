import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useGoogleLogin } from '@react-oauth/google';

import { useApi } from '../../../../hooks';
import { StyledIcon, StyledLink } from './LinkExternalAuth.styled.js';

const LinkExternalAuth = ({ href, linkText, icon, className }) => {
  const { sendData } = useApi();
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: codeResponse => {
      sendData('https://api.oranger.store/oauth2/authorization/google', codeResponse);
      //   if register success what next??
      /* Success data should have an account data and token that will be used in our next requests */
    },
    onError: errorResponse => toast.error(errorResponse.error_description),
  });

  return (
    <>
      <StyledLink href={href} onClick={handleGoogleLogin} className={className}>
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
  className: PropTypes.string,
};

export default LinkExternalAuth;
