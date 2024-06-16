import { Link } from 'react-router-dom';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { Section, Wrapper } from './OptionLinkWithIcon.styled.js';

const OptionsSection = () => {
  return (
    <Section>
      <Wrapper>
        <p>{'Налаштування'}</p>
        <Link to={'/profile/settings'}>
          <NavigateNextOutlinedIcon />
        </Link>
      </Wrapper>

      <Wrapper>
        <p>{'Допомога'}</p>
        <Link to={'/profile/help'}>
          <NavigateNextOutlinedIcon />
        </Link>
      </Wrapper>

      <Wrapper>
        <p>{'Умови використання'}</p>
        <Link to={'/profile/terms'}>
          <NavigateNextOutlinedIcon />
        </Link>
      </Wrapper>

      <Wrapper>
        <p>{'Політика конфіденційності'}</p>
        <Link to={'/profile/policy'}>
          <NavigateNextOutlinedIcon />
        </Link>
      </Wrapper>
    </Section>
  );
};

export default OptionsSection;
