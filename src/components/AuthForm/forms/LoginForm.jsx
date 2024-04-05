import { useForm } from 'react-hook-form';

// import { useApi } from '../../../hooks/apiRequests.js';
import { isPasswordValid } from '../../../utils/validatePasswordPatterns.js';
import { FormField, FormFieldPassword } from './fields/index.js';
import { StyledButton, StyledForm, StyledWrapperRememberMe } from './forms.styled.js';
import { FIELDS_PATTERN, INITIAL_STATES, PAGE } from '../../../constants/index.js';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';
import { CheckBoxRememberMe } from './CheckBoxRememberMe/CheckBoxRememberMe.jsx';
import { loginUserThunk } from '../../../redux/auth/operations.js';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();
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
  const isFormValid = isPasswordValid(passwordValue) && isValid;

  const handleSubmitForm = async data => {
    await dispatch(loginUserThunk(data));
    reset(INITIAL_STATES.LOGIN);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSubmitForm)}>
      <FormField
        name="email"
        text="Ел. пошта"
        validation={register('email', {
          required: 'Заповніть поле',
          pattern: {
            value: FIELDS_PATTERN.EMAIL,
            message: 'Не відповідає формату *@*.*',
          },
        })}
        fieldError={errors.email}
      />

      <FormFieldPassword
        name="password"
        text="Пароль"
        validation={register('password', {
          required: 'Заповніть поле',
        })}
        fieldError={errors.password}
        passwordValue={passwordValue}
      />
      <StyledWrapperRememberMe>
        <CheckBoxRememberMe />
        <AuthTextLink
          linkTo={PAGE.REQUEST_EMAIL}
          linkText={'Забули пароль?'}
          text={''}
          className={'linkText'}
        />
      </StyledWrapperRememberMe>
      <StyledButton $isFormValid={isFormValid} className={'submit-button'}>
        Увійти
      </StyledButton>
    </StyledForm>
  );
};
