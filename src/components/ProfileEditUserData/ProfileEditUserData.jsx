import { PageTitle } from '../common/index.js';
import { Section } from './ProfileEditUserData.styled.js';
import { ChangeUserDataForm } from '../AuthForm/forms/ChangeUserDataForm.jsx';

export const ProfileEditUserData = () => {
  return (
    <>
      <PageTitle to={'/profile'} title={'Особисті дані'} />

      <Section>
        <ChangeUserDataForm />
      </Section>
    </>
  );
};
