import { useForm } from 'react-hook-form';

import { useApi } from '../../../hooks';
import { makeFirstLetterUpperCase, checkPasswordOverPatterns } from '../../../utils';
import { API_URL, FIELDS_PATTERN } from '../../../constants';
import { RegisterTerms } from './RegisterTerms/RegisterTerms.jsx';
import { FormField, FormFieldPassword, FormFieldPhone } from './fields';
import { StyledForm, StyledButton } from './forms.styled.js';

export const RegistrationForm = () => {
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
  const isFormValid = !checkPasswordOverPatterns(passwordValue).length && isValid;

  const handleSubmitForm = async data => {
    await sendData(API_URL.SIGNUP, {
      ...data,
      firstname: makeFirstLetterUpperCase(data.firstname),
      lastname: makeFirstLetterUpperCase(data.lastname),
    });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSubmitForm)}>
      <FormField
        name="firstname"
        text="Ім’я"
        validation={register('firstname', {
          required: 'Заповніть поле',
          minLength: {
            value: 2,
            message: 'Має бути від 2 до 35 символів',
          },
          maxLength: {
            value: 35,
            message: 'Має бути від 2 до 35 символів',
          },
        })}
        fieldError={errors.firstname}
      />

      <FormField
        name="lastname"
        text="Прізвище"
        validation={register('lastname', {
          required: 'Заповніть поле',
          minLength: {
            value: 2,
            message: 'Має бути від 2 до 35 символів',
          },
          maxLength: {
            value: 35,
            message: 'Має бути від 2 до 35 символів',
          },
        })}
        fieldError={errors.lastname}
      />

      <FormFieldPhone
        name="phone"
        text="Номер телефону"
        validation={register('phone', {
          required: 'Заповніть поле',
          pattern: {
            value: FIELDS_PATTERN.PHONE,
            message: 'Має відповідати формату +380501234567',
          },
        })}
        fieldError={errors.phone}
      />

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

      <RegisterTerms />
      <StyledButton $isFormValid={isFormValid}>Зареєструватися</StyledButton>
    </StyledForm>
  );
};
