import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { checkPasswordOverPatterns } from '../../../utils';
import { resetPasswordThunk } from '../../../redux/auth';
import { FormFieldPassword } from './fields';
import { RegisterTerms } from './RegisterTerms/RegisterTerms.jsx';
import { resetPasswordTokenSelector } from '../../../redux/auth/selectors.js';
import { API_URL } from '../../../constants';
import { StyledButton, StyledForm } from './forms.styled.js';

export const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const resetPasswordToken = useSelector(resetPasswordTokenSelector);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const passwordValue = watch('password');
  const repeatPasswordValue = watch('repeat_password');
  const isFormValid = !checkPasswordOverPatterns(passwordValue, repeatPasswordValue) && isValid;

  const handleSubmitForm = async data => {
    await dispatch(
      resetPasswordThunk({
        url: `${API_URL.RESET_PASSWORD}?jwt=${resetPasswordToken}`,
        password: data.password,
      })
    );
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
