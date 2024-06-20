import { useForm } from 'react-hook-form';
import { checkPasswordOverPatterns } from '../../utils';

import { PageTitle } from '../common';
import { FormFieldPassword } from '../AuthForm/forms/fields';
import { StyledButton } from '../AuthForm/forms/forms.styled.js';
import { StyledForm } from './ProfileChangePassword.styled.js';

const ProfileChangePassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const currentPasswordValue = watch('current_password');
  const newPasswordValue = watch('new_password');
  const isFormValid =
    !checkPasswordOverPatterns(currentPasswordValue).length &&
    !checkPasswordOverPatterns(newPasswordValue).length;

  const handleSubmitForm = async data => {
    console.log('handleSubmitForm data: ', data);
    reset();
  };

  return (
    <>
      <PageTitle to={'/profile/settings'} title={'Змінити пароль'} />

      <StyledForm onSubmit={handleSubmit(handleSubmitForm)}>
        <FormFieldPassword
          name="current_password"
          text="Наявний пароль"
          validation={register('current_password', {
            required: 'Заповніть поле',
          })}
          fieldError={errors.current_password}
          passwordValue={currentPasswordValue}
          className={'profile-change-password'}
        />

        <FormFieldPassword
          name="new_password"
          text="Новий пароль"
          validation={register('new_password', {
            required: 'Заповніть поле',
          })}
          fieldError={errors.new_password}
          passwordValue={newPasswordValue}
          className={'profile-change-password'}
        />

        <StyledButton $isFormValid={isFormValid} className={'profile-change-password'}>
          Продовжити
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default ProfileChangePassword;
