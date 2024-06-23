import { LinkWithNavigateNextIcon, PageTitle } from '../common';
import { Section } from './ProfileHelp.styled.js';

const ProfileHelp = () => {
  return (
    <>
      <PageTitle to={'/profile'} title="Допомога" />

      <Section>
        <p className={'text'}>
          Не можете знайти відповіді, які шукаєте? <br /> Ми тут, щоб допомогти!
        </p>
        <LinkWithNavigateNextIcon to={'/profile/help/account'} title={'Акаунт'} />
        <LinkWithNavigateNextIcon to={'/profile/help/search'} title={'Пошук'} />
        <LinkWithNavigateNextIcon to={'/profile/help/posts'} title={'Оголошення'} />
        <LinkWithNavigateNextIcon to={'/profile/help/services'} title={'Платні послуги'} />
        <LinkWithNavigateNextIcon
          to={'/profile/help/reviews-rating'}
          title={'Відгуки та рейтинг'}
        />
        <LinkWithNavigateNextIcon
          to={'/profile/help/technical-questions'}
          title={'Технічні питання'}
        />
        <LinkWithNavigateNextIcon to={'/profile/help/feedback'} title={'Зворотній зв’язок'} />
      </Section>
    </>
  );
};

export default ProfileHelp;
