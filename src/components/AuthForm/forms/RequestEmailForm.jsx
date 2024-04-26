import { useForm } from 'react-hook-form';

import { useApi } from '../../../hooks';
import { FIELDS_PATTERN } from '../../../constants';

import { FormField } from './fields';
import { StyledButton, StyledForm } from './forms.styled.js';
import { showTypeForm } from '../../../redux/auth/index.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const RequestEmailForm = () => {
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
    await sendData('/request/email', data);
    navigate('');
    dispatch(showTypeForm(null));
    reset();
    // TODO => Вивести повідомлення перевірити пошту та перейти за посиланням
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

      <StyledButton $isFormValid={isValid} className={'submit-button'}>
        Відправити лист
      </StyledButton>
    </StyledForm>
  );
};
