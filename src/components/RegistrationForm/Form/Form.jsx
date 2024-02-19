import { useForm } from 'react-hook-form';

import { useAxiosPost } from '../../../hooks/useAxiosPost.js';

import RegisterTerms from './RegisterTerms/RegisterTerms.jsx';
import { FormField, FormFieldPassword } from './fields/index.js';
import { StyledForm, StyledButton } from './Form.styled';

const BASE_API_URL = 'https://marketplace-p93k.onrender.com/api';
const signupPath = '/auth/signup';
const fieldsPattern = {
  firstname: '',
  lastname: '',
  phone: /^\d{9}$/i,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/i,
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const { sendData } = useAxiosPost(`${BASE_API_URL}${signupPath}`);

  const handleSubmitForm = async data => {
    await sendData(data);
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
            message: 'Має бути від 2 до 28 символів',
          },
          maxLength: {
            value: 28,
            message: 'Має бути від 2 до 28 символів',
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
            message: 'Має бути від 2 до 28 символів',
          },
          maxLength: {
            value: 28,
            message: 'Має бути від 2 до 28 символів',
          },
        })}
        fieldError={errors.lastname}
      />

      <FormField
        name="phone"
        text="Номер телефону"
        validation={register('phone', {
          required: 'Заповніть поле',
          pattern: {
            value: fieldsPattern.phone,
            message: 'Не відповідає формату 0501234567',
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
            value: fieldsPattern.email,
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
        isvalid={isValid}
        watch={watch}
      />

      <RegisterTerms />
      <StyledButton $isValid={isValid}>Зареєструватися</StyledButton>
    </StyledForm>
  );
};
