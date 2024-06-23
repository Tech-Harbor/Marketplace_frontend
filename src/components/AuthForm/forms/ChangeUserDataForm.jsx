import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { showTypeForm } from '../../../redux/auth';
import { useApi } from '../../../hooks';
import { makeFirstLetterUpperCase } from '../../../utils';
import { FIELDS_PATTERN } from '../../../constants';

import { FormField, FormFieldPhone } from './fields';
import { StyledForm, StyledButton } from './forms.styled.js';
// import { AvatarUpload } from './AvatarUpload/AvatarUpload.jsx';

export const ChangeUserDataForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { sendData } = useApi();

  const handleSubmitForm = async data => {
    console.log('ChangeUserDataForm data: ', data);
    await sendData(
      // API_URL.SIGNUP, // TODO swagger ??
      '',
      {
        ...data,
        firstname: makeFirstLetterUpperCase(data.firstname),
      }
    );
    navigate('');
    dispatch(showTypeForm(null));
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSubmitForm)}>
      {/*  сюди необхідно додати код завантаження аватара*/}
      {/*<AvatarUpload register={register} />*/}

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
