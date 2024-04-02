import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import usePutData from '../../hooks/usePutData.js';
import { isPasswordValid } from '../../utils/validatePasswordPatterns.js';
import { FormFieldPassword } from '../RegistrationForm/Form/fields/index.js';
import { changeShowMode } from '../../redux/auth/modalSlice.js';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Button } from '../FormButton/FormButton.styled.js';
import { FormBlock, TitleBlock, Title } from '../AuthForm/AuthForm.styled.js';
import { Container } from './ChangePassword.styled.js';

const styles = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

const ChangePassword = () => {
  const [response, putData] = usePutData();
  const [queryParameters] = useSearchParams();

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
  const dispatch = useDispatch();
  const isMountingRef = useRef(false);
  const jwt = queryParameters.get('jwt');

  const relocation = () => {
    if (response.errors?.message) {
      toast.error(response.errors?.message, styles);
      return;
    }
    dispatch(changeShowMode(true));
    navigate('/');
    toast.success('Ви успішно змінили пароль!', styles);
  };

  useEffect(() => {
    isMountingRef.current = true;
  }, []);

  useEffect(() => {
    if (!isMountingRef.current) {
      return relocation();
    } else {
      isMountingRef.current = false;
    }
  }, [response]);

  const submit = data => {
    putData('auth/change-password/' + jwt, {
      password: data.newPassword,
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

        <Button $isValid={isPswValid} disabled={!isPswValid} style={{ marginTop: '24px' }}>
          Продовжити
        </Button>
      </FormBlock>
    </Container>
  );
};

export default ChangePassword;
