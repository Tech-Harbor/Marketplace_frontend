import { useForm } from 'react-hook-form';

import { useApi } from '../../../hooks/apiRequests.js';
import { isPasswordValid } from '../../../utils/validatePasswordPatterns.js';
import { FormField, FormFieldPassword } from './fields/index.js';
import { StyledButton, StyledForm } from './forms.styled.js';
import { API_URL, FIELDS_PATTERN, INITIAL_STATES, PAGE } from '../../../constants/index.js';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';
import { CheckBoxRememberMe } from './CheckBoxRememberMe/CheckBoxRememberMe.jsx';

export const LoginForm = () => {
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
  const isFormValid = isPasswordValid(passwordValue) && isValid;

  const handleSubmitForm = async data => {
    await sendData(API_URL.LOGIN, data);
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}
      >
        {/*<div>Запамятати мене</div>*/}
        <CheckBoxRememberMe />
        <AuthTextLink
          linkTo={PAGE.RESET_PSW}
          linkText={'Забули пароль?'}
          text={''}
          className={'linkText'}
        />
      </div>
      <StyledButton $isFormValid={isFormValid} className={'submit-button'}>
        Зареєструватися
      </StyledButton>
    </StyledForm>
  );
};
