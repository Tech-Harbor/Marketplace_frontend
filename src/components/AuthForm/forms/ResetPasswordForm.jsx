import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { resetPasswordTokenSelector } from '../../../redux/auth';
import { useResetPassword } from '../../../hooks';
import { checkPasswordOverPatterns } from '../../../utils';

import { FormFieldPassword } from './fields';
import { RegisterTerms } from './RegisterTerms/RegisterTerms.jsx';
import { StyledButton, StyledForm } from './forms.styled.js';

export const ResetPasswordForm = () => {
  const resetPasswordToken = useSelector(resetPasswordTokenSelector);
  const { sendNewPassword } = useResetPassword();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const passwordValue = watch('password');
  const repeatPasswordValue = watch('repeat_password');
  const isFormValid = !checkPasswordOverPatterns(passwordValue, repeatPasswordValue).length;

  const handleSubmitForm = async data => {
    await sendNewPassword(resetPasswordToken, data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSubmitForm)}>
      <FormFieldPassword
        name="password"
        text="Новий пароль"
        validation={register('password', {
          required: 'Заповніть поле',
        })}
        fieldError={errors.password}
        passwordValue={passwordValue}
      />

      <FormFieldPassword
        name="repeat_password"
        text="Повторити пароль"
        validation={register('repeat_password', {
          required: 'Заповніть поле',
        })}
        fieldError={errors.repeat_password}
        passwordValue={passwordValue && repeatPasswordValue ? passwordValue : repeatPasswordValue}
        repeatPasswordValue={repeatPasswordValue}
      />

      <RegisterTerms />
      <StyledButton $isFormValid={isFormValid}>Продовжити</StyledButton>
    </StyledForm>
  );
};
