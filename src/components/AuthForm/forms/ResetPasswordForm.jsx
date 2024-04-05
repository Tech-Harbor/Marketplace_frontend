import { useForm } from 'react-hook-form';
import { useApi } from '../../../hooks/apiRequests.js';
import { isPasswordValid } from '../../../utils/validatePasswordPatterns.js';
import { RegisterTerms } from './RegisterTerms/RegisterTerms.jsx';
import { FormFieldPassword } from './fields/index.js';
import { StyledButton, StyledForm } from './forms.styled.js';
import { API_URL } from '../../../constants/index.js';

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const { sendData } = useApi();
  const passwordValue = watch('password');
  const repeatPasswordValue = watch('repeat_password');
  const isFormValid = isPasswordValid(passwordValue, repeatPasswordValue) && isValid;

  const handleSubmitForm = async data => {
    await sendData(API_URL.SIGNUP, { ...data });
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
        passwordValue={passwordValue}
        repeatPasswordValue={repeatPasswordValue}
      />

      <RegisterTerms />
      <StyledButton $isFormValid={isFormValid}>Продовжити</StyledButton>
    </StyledForm>
  );
};
