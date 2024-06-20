import { useForm } from 'react-hook-form';

import { FIELDS_PATTERN } from '../../constants';
import { PageTitle } from '../common';
import { FormField } from '../AuthForm/forms/fields';
import { StyledButton } from '../AuthForm/forms/forms.styled.js';
import { StyledForm } from './ProfileChangeEmail.styled.js';

const ProfileChangeEmail = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const handleSubmitForm = async data => {
    console.log('handleSubmitForm data: ', data);
    reset();
  };

  return (
    <>
      <PageTitle to={'/profile/settings'} title={'Змінити електронну пошту'} />

      <StyledForm onSubmit={handleSubmit(handleSubmitForm)}>
        <FormField
          name="current_email"
          text="Ваш e-mail"
          validation={register('current_email', {
            required: 'Заповніть поле',
            pattern: {
              value: FIELDS_PATTERN.EMAIL,
              message: 'Не відповідає формату *@*.*',
            },
          })}
          fieldError={errors.current_email}
        />

        <FormField
          name="new_email"
          text="Ваш новий e-mail"
          validation={register('new_email', {
            required: 'Заповніть поле',
            pattern: {
              value: FIELDS_PATTERN.EMAIL,
              message: 'Не відповідає формату *@*.*',
            },
          })}
          fieldError={errors.new_email}
        />

        <StyledButton $isFormValid={isValid} className={'profile-change-password'}>
          Зберігти зміни
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default ProfileChangeEmail;
