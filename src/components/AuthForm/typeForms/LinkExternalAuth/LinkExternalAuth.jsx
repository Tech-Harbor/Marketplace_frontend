import PropTypes from 'prop-types';
import { StyledIcon, StyledLink } from './LinkExternalAuth.styled.js';
import { useGoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';
import { useApi } from '../../../../hooks/apiRequests.js';

const LinkExternalAuth = ({ href, linkText, icon }) => {
  const { sendData } = useApi();
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: codeResponse => {
      sendData('https://orangergoogle.onrender.com/oauth/login', codeResponse);
      //   if register success what next??
    },
    onError: errorResponse => toast.error(errorResponse.error_description),
  });

  return (
    <>
      <StyledLink href={href} onClick={handleGoogleLogin}>
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
