import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { checkPasswordOverPatterns } from '../../../utils';
import { loginUserThunk } from '../../../redux/auth';
import { FormField, FormFieldPassword } from './fields/index.js';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';
import { CheckBoxRememberMe } from './CheckBoxRememberMe/CheckBoxRememberMe.jsx';
import { FIELDS_PATTERN, INITIAL_STATES, TYPE_FORM } from '../../../constants/index.js';
import { StyledButton, StyledForm, StyledWrapperRememberMe } from './forms.styled.js';

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
  const isFormValid = !checkPasswordOverPatterns(passwordValue).length && isValid;

  const handleSubmitForm = async data => {
    console.log('LoginForm handleSubmitForm', data); // !!TODO console.log must be deleted later
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
          linkTo={TYPE_FORM.REQUEST_EMAIL}
          textAsLink={'Забули пароль?'}
          className={'textAsLink'}
        />
      </StyledWrapperRememberMe>
      <StyledButton $isFormValid={isFormValid} className={'submit-button'}>
        Увійти
      </StyledButton>
    </StyledForm>
  );
};