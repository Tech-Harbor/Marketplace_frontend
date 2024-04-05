import { useForm } from 'react-hook-form';

import { useApi } from '../../../hooks/apiRequests.js';
import { FormField } from './fields/index.js';
import { StyledButton, StyledForm } from './forms.styled.js';
import { API_URL, FIELDS_PATTERN, INITIAL_STATES } from '../../../constants/index.js';

export const RequestEmailForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const { sendData } = useApi();

  const handleSubmitForm = async data => {
    await sendData(API_URL.REQUEST_EMAIL, { ...data });

    reset(INITIAL_STATES.REQUEST_EMAIL);
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
