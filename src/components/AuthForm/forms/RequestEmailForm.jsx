import { useForm } from 'react-hook-form';
import { FormField } from './fields';
import { StyledButton, StyledForm } from './forms.styled.js';
import { FIELDS_PATTERN, INITIAL_STATES } from '../../../constants';
import { requestEmailThunk } from '../../../redux/auth';
import { useDispatch } from 'react-redux';

export const RequestEmailForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const handleSubmitForm = async data => {
    await dispatch(requestEmailThunk(data));
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
