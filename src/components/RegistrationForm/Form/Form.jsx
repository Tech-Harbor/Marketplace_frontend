// import { FormField, FormFieldPassword } from './fields/index.js';
import { StyledForm, StyledButton } from './Form.styled';
import RegisterTerms from './RegisterTerms/RegisterTerms.jsx';
import { useForm } from 'react-hook-form';
import { StyledInput, StyledLabel } from './fields/fields.styled.js';
import { StyledText } from './RegisterTerms/RegisterTerms.styled.js';

export const Form = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = () => {
    console.log('handleSubmit(onSubmit)');
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {/*<FormField name="name" id="name" text="Ім’я" />*/}
      {/*<FormField name="surname" id="surname" text="Прізвище" />*/}
      {/*<FormField name="phone" id="phone" text="Номер телефону" />*/}
      {/*<FormField name="email" id="email" text="Ел. пошта" />*/}
      {/*<FormFieldPassword name="password" id="password" text="Пароль" clsField="password" />*/}
      <StyledLabel label="name">Ім’я</StyledLabel>
      <StyledInput
        {...register('name', {
          // required: 'Заповніть поле',
          pattern: /^[A-ZА-ЩЬЮЯҐЄІЇ][a-zа-щьюяґєії]*$/i,
          minLength: {
            value: 2,
            message: 'Ім’я має починатися з великої літери та містити від 2 до 35 символів',
          },
          maxLength: { value: 35, message: 'Поле має містити від 2 до 35 символів' },
        })}
      />
      {errors.name && <StyledText role="alert">{errors.name.message}</StyledText>}
      <StyledLabel label="surname">Прізвище</StyledLabel>
      <StyledInput
        {...register('surname', {
          // required: 'Заповніть поле',
          pattern: /^[A-ZА-ЩЬЮЯҐЄІЇ][a-zа-щьюяґєії]*$/i,
          minLength: {
            value: 2,
            message: 'Поле має починатися з великої літери та містити від 2 до 35 символів',
          },
          maxLength: {
            value: 35,
            message: 'Поле має починатися з великої літери та містити від 2 до 35 символів',
          },
        })}
      />
      {errors.surname && <StyledText role="alert">{errors.surname.message}</StyledText>}

      <StyledLabel label="phone">Номер телефону</StyledLabel>
      <StyledInput
        {...register('phone', {
          // required: 'Заповніть поле',
          // pattern: {
          //   value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
          //   message: 'Невірний формат номеру телефона',
          // },
        })}
      />
      {errors.phone && <StyledText role="alert">{errors.phone.message}</StyledText>}

      <StyledLabel label="email">Ел. пошта</StyledLabel>
      <StyledInput
        {...register('email', {
          // required: 'Заповніть поле',
          // pattern: {
          //   value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
          //   message: 'Невірний формат ел. пошти',
          // },
        })}
      />
      {errors.email && <StyledText role="alert">{errors.email.message}</StyledText>}

      <RegisterTerms />
      <StyledButton>Зареєструватися</StyledButton>
    </StyledForm>
  );
};
