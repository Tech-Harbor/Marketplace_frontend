import { LinkWithNavigateNextIcon } from '../../common';
import { Section } from './OptionsSection.styled.js';

const OptionsSection = () => {
  return (
    <Section>
      <LinkWithNavigateNextIcon to={'/profile/settings'} title={'Налаштування'} />
      <LinkWithNavigateNextIcon to={'/profile/help'} title={'Допомога'} />
      <LinkWithNavigateNextIcon to={'/profile/terms'} title={'Умови використання'} />
      <LinkWithNavigateNextIcon to={'/profile/policy'} title={'Політика конфіденційності'} />
    </Section>
  );
};

export default OptionsSection;
