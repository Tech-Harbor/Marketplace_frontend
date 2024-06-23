import { useForm } from 'react-hook-form';
import { FIELDS_PATTERN } from '../../../constants';

import { FormField, FormFieldPhone } from './fields';
import { AvatarUpload } from './AvatarUpload/AvatarUpload.jsx';
import { StyledForm, StyledButton } from './forms.styled.js';

export const ChangeUserDataForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const handleSubmitForm = async data => {
    console.log('data: ', data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSubmitForm)}>
      <AvatarUpload validation={register('avatar')} setValue={setValue} />

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
        className={'margin-tablet'}
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

      <StyledButton $isFormValid={isValid} className={'submit-button'}>
        Зберігти зміни
      </StyledButton>
    </StyledForm>
  );
};
