import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { loginUserThunk } from '../../../redux/auth';
import { checkPasswordOverPatterns } from '../../../utils';
import { FIELDS_PATTERN, TYPE_FORM } from '../../../constants';

import { FormField, FormFieldPassword } from './fields';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';
import { CheckBoxRememberMe } from './CheckBoxRememberMe/CheckBoxRememberMe.jsx';
import { StyledButton, StyledForm, StyledWrapperRememberMe } from './forms.styled.js';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    await dispatch(loginUserThunk(data));
    navigate('');
    reset();
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
        className={'margin-tablet'}
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
