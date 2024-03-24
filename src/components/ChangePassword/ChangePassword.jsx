import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import usePutData from '../../hooks/usePutData.js';
import { isPasswordValid } from '../../utils/validatePasswordPatterns.js';
import { FormFieldPassword } from '../RegistrationForm/Form/fields/index.js';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Button } from '../FormButton/FormButton.styled.js';
import { Errors } from '../AuthForm/AuthForm.styled.js';
import { FormBlock, TitleBlock, Title } from '../AuthForm/AuthForm.styled.js';
import { Container } from './ChangePassword.styled.js';

const ChangePassword = () => {
  const [response, updateData] = usePutData();

  const { code, jwt } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm();

  const newPasswordValue = watch('newPassword');
  const similarPasswordValue = watch('similarPassword');

  const isPswValid =
    isPasswordValid(newPasswordValue, isValid) &&
    isPasswordValid(similarPasswordValue, isValid) &&
    newPasswordValue === similarPasswordValue;

  const navigate = useNavigate();

  const submit = data => {
    updateData(`auth/change-password/${code}/${jwt}`, {
      password: data.password,
    });
  };

  return (
    <Container>
      <FormBlock onSubmit={handleSubmit(submit)}>
        <TitleBlock>
          <Title>Відновлення паролю</Title>
          <CloseRoundedIcon
            sx={{ fontSize: 24, color: '#33363F', cursor: 'pointer', marginRight: '8px' }}
            onClick={() => navigate('/')}
          />
        </TitleBlock>

        <FormFieldPassword
          name="newPassword"
          text="Пароль"
          validation={register('newPassword', {
            required: 'Заповніть поле',
          })}
          fieldError={errors.newPassword}
          passwordValue={newPasswordValue}
        />
        <FormFieldPassword
          name="similarPassword"
          text="Пароль"
          validation={register('similarPassword', {
            required: 'Заповніть поле',
          })}
          fieldError={errors.similarPassword}
          passwordValue={similarPasswordValue}
        />

        {response.errors?.message && <Errors>{response.errors?.message}</Errors>}

        <Button $isValid={isPswValid} disabled={!isPswValid} style={{ marginTop: '24px' }}>
          Продовжити
        </Button>
      </FormBlock>
    </Container>
  );
};

export default ChangePassword;
