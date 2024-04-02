import { useForm } from 'react-hook-form';

import { useApi } from '../../../hooks/apiRequests.js';
import { FormField } from './fields/index.js';
import { FIELDS_PATTERN } from '../../../constants/patterns.js';
import { StyledButton, StyledForm } from './forms.styled.js';
import { INITIAL_STATES } from '../../../constants/initialStates.js';

export const ResetPasswordForm = () => {
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
    await sendData('/auth/request/email', { ...data });
    reset(INITIAL_STATES.RESET_PSW);
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

      <StyledButton $isFormValid={isValid} className={'reset-psw'}>
        Відправити лист
      </StyledButton>
    </StyledForm>
  );
};
