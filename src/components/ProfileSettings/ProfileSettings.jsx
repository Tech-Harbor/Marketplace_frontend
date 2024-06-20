import { CustomCheckbox, LinkWithNavigateNextIcon, StyledButton } from '../common';
import { PageTitle } from '../common';
import { Section } from './ProfileSettings.styled.js';

const ProfileSettings = () => {
  return (
    <>
      <PageTitle to={'/profile'} title={'Налаштування'} />

      <Section className={'section'}>
        <h2 className={'option-title'}>{'Пароль'}</h2>
        <LinkWithNavigateNextIcon
          to={'/profile/settings/change-password'}
          title={'Змінити пароль'}
          className={'link-profile-settings'}
        />

        <h2 className={'option-title'}>{'E-mail'}</h2>
        <LinkWithNavigateNextIcon
          to={'/profile/settings/change-email'}
          title={'Змінити електронну пошту'}
          className={'link-profile-settings'}
        />

        <h2 className={'option-title option-notification'}>{'Сповіщення'}</h2>
        <p className={'notification-text'}>Отримувати нові сповіщення</p>
        <div className={'option-checkbox'}>
          <p>Пошта</p>
          <CustomCheckbox />
        </div>
        <div className={'option-checkbox'}>
          <p>Телефон</p>
          <CustomCheckbox />
        </div>

        <h2 className={'option-title'}>{'Профіль'}</h2>
        <LinkWithNavigateNextIcon
          to={'/profile/settings/delete-profile'}
          title={'Видалити профіль'}
          className={'link-profile-settings'}
        />

        <StyledButton type={'submit'}>Зберігти зміни</StyledButton>
      </Section>
    </>
  );
};

export default ProfileSettings;
