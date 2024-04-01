import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { useGoogleLogin } from '@react-oauth/google';
// import { showAuthModal, takeToken } from '../../redux/auth/slices.js';
import { Registration } from '../AuthUser/index.js';
import { Login } from '../AuthUser/Login.jsx';
import { ResetPassword } from '../AuthUser/ResetPassword.jsx';

const AuthForm = () => {
  const [modeModal, setModeModal] = useState('register');
  // const [response, postData] = usePostData();
  //
  // const [toggle, setToggle] = useState({
  //   toggleType: true,
  //   toggleRecovery: true,
  //   toggleCheckbox: false,
  //   toggleRegistration: false,
  // });

  // const [message, setMessage] = useState(false);
  // const [accessErrors, setAccessErrors] = useState('');
  //
  // const isMountingRef = useRef(false);
  //
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { isValid, errors },
  // } = useForm({ mode: 'onChange' });
  //
  // const Email = watch('email');
  //
  // const dispatch = useDispatch();
  //
  // const saveToken = () => {
  //   if (response.errors?.message) {
  //     setAccessErrors(response.errors?.message);
  //     return;
  //   }
  //   if (toggle.toggleRecovery) {
  //     dispatch(takeToken(response.answer.data?.accessToken));
  //     if (toggle.toggleCheckbox) {
  //       localStorage.setItem('tokens', JSON.stringify(response.answer.data));
  //     } else {
  //       localStorage.setItem('refreshToken', response.answer.data?.refreshToken);
  //     }
  //   }
  //   setMessage(true);
  //   setTimeout(() => {
  //     setMessage(false);
  //     dispatch(showAuthModal(true));
  //   }, 8000);
  // };
  //
  // useEffect(() => {
  //   setAccessErrors('');
  // }, [toggle.toggleRecovery]);
  //
  // useEffect(() => {
  //   isMountingRef.current = true;
  // }, []);
  //
  // useEffect(() => {
  //   if (!isMountingRef.current) {
  //     return saveToken();
  //   } else {
  //     isMountingRef.current = false;
  //   }
  // }, [response]);
  //
  // const login = useGoogleLogin({
  //   onSuccess: codeResponse => {
  //     console.log(codeResponse);
  //     postData('https://orangergoogle.onrender.com/oauth/login', codeResponse);
  //   },
  //   onError: errorResponse => setAccessErrors(errorResponse.error_description),
  // });
  //
  // const submit = data => {
  //   if (toggle.toggleRecovery) {
  //     postData('auth/login', {
  //       email: data.email,
  //       password: data.password,
  //     });
  //   } else {
  //     postData('auth/request/email', {
  //       email: data.email,
  //     });
  //   }
  // };

  return (
    <>
      {modeModal === 'register' && <Registration setModeModal={setModeModal} />}
      {modeModal === 'login' && <Login />}
      {modeModal === 'reset' && <ResetPassword />}

      {/*{message ? (*/}
      {/*  <Notification*/}
      {/*    title="Вітаємо!"*/}
      {/*    text={`Для підтвердження реєстрації, ми надіслали Вам листа на ${Email}`}*/}
      {/*    icon={Greetings}*/}
      {/*  />*/}
      {/*) : (*/}
      {/*  <>*/}
      {/*    /!* It will be shows instead Login form when "modeModal" is true *!/*/}
      {/*    {modeModal && <Registration setRegisterMode={setRegisterMode} />}*/}

      {/*    {!modeModal && (*/}
      {/*      <FormBlock onSubmit={handleSubmit(submit)}>*/}
      {/*        <TitleBlock>*/}
      {/*          <Title>{toggle.toggleRecovery ? 'Вхід' : 'Відновлення паролю'}</Title>*/}
      {/*        </TitleBlock>*/}

      {/*        <InputsBlock>*/}
      {/*          <FormInput*/}
      {/*            title="Електронна пошта"*/}
      {/*            name="email"*/}
      {/*            type="email"*/}
      {/*            min={7}*/}
      {/*            register={register}*/}
      {/*            errors={errors?.email}*/}
      {/*            changeInput={() =>*/}
      {/*              setToggle(prevState => ({ ...prevState, toggleRegistration: false }))*/}
      {/*            }*/}
      {/*          />*/}
      {/*          <FormInput*/}
      {/*            title="Пароль"*/}
      {/*            name="password"*/}
      {/*            type={toggle.toggleType ? 'password' : 'text'}*/}
      {/*            icon={*/}
      {/*              toggle.toggleType ? (*/}
      {/*                <VisibilityOffIcon sx={{ fontSize: 24, color: '#4A5568' }} />*/}
      {/*              ) : (*/}
      {/*                <VisibilityIcon sx={{ fontSize: 24, color: '#4A5568' }} />*/}
      {/*              )*/}
      {/*            }*/}
      {/*            min={7}*/}
      {/*            clickIcon={() =>*/}
      {/*              setToggle(prevState => ({ ...prevState, toggleType: !toggle.toggleType }))*/}
      {/*            }*/}
      {/*            register={register}*/}
      {/*            errors={errors?.password}*/}
      {/*            showItem={toggle.toggleRecovery}*/}
      {/*            changeInput={() =>*/}
      {/*              setToggle(prevState => ({ ...prevState, toggleRegistration: false }))*/}
      {/*            }*/}
      {/*          />*/}
      {/*        </InputsBlock>*/}

      {/*        {accessErrors && <Errors>{accessErrors}</Errors>}*/}

      {/*        <ChoiceBlock $show={toggle.toggleRecovery}>*/}
      {/*          <RememberBlock>*/}
      {/*            <Check*/}
      {/*              type="checkbox"*/}
      {/*              onChange={() =>*/}
      {/*                setToggle(prevState => ({*/}
      {/*                  ...prevState,*/}
      {/*                  toggleCheckbox: !toggle.toggleCheckbox,*/}
      {/*                }))*/}
      {/*              }*/}
      {/*            />*/}
      {/*            {toggle.toggleCheckbox ? (*/}
      {/*              <SwitchOn>*/}
      {/*                <DoneRoundedIcon sx={{ fontSize: 16, color: '#fff' }} />*/}
      {/*              </SwitchOn>*/}
      {/*            ) : (*/}
      {/*              <SwitchOff />*/}
      {/*            )}*/}
      {/*            <RememberText>Запам’ятати мене</RememberText>*/}
      {/*          </RememberBlock>*/}
      {/*          <Forgot*/}
      {/*            onClick={() => setToggle(prevState => ({ ...prevState, toggleRecovery: false }))}*/}
      {/*          >*/}
      {/*            Забули пароль?*/}
      {/*          </Forgot>*/}
      {/*        </ChoiceBlock>*/}

      {/*        <Button*/}
      {/*          $isValid={isValid}*/}
      {/*          disabled={!isValid}*/}
      {/*          type="submit"*/}
      {/*          style={{ marginTop: `${toggle.toggleRecovery ? '' : '24px'}` }}*/}
      {/*        >*/}
      {/*          {toggle.toggleRecovery ? 'Увійти' : 'Відправити лист'}*/}
      {/*        </Button>*/}

      {/*        <Account $size={toggle.toggleRecovery}>*/}
      {/*          {toggle.toggleRecovery ? 'Немає акаунту? ' : 'Згадали пароль? '}*/}
      {/*          <CreateAccount>*/}
      {/*            /!*<Link to="register">Створити акаунт</Link>*!/*/}
      {/*            /!* It is a button which changes from a login mode to a register mode instead the link *!/*/}
      {/*            {toggle.toggleRecovery ? (*/}
      {/*              <SwitchButton onClick={() => setRegisterMode(true)}>*/}
      {/*                Створити акаунт*/}
      {/*              </SwitchButton>*/}
      {/*            ) : (*/}
      {/*              <SwitchButton*/}
      {/*                onClick={() =>*/}
      {/*                  setToggle(prevState => ({ ...prevState, toggleRecovery: true }))*/}
      {/*                }*/}
      {/*                style={{ cursor: 'pointer' }}*/}
      {/*              >*/}
      {/*                Увійти*/}
      {/*              </SwitchButton>*/}
      {/*            )}*/}
      {/*          </CreateAccount>*/}
      {/*        </Account>*/}

      {/*        <DividingLine $show={toggle.toggleRecovery}>*/}
      {/*          <LineText>або</LineText>*/}
      {/*        </DividingLine>*/}

      {/*        <LogInButton $show={toggle.toggleRecovery} onClick={login}>*/}
      {/*          <Image src={Google} alt="Google" />*/}
      {/*          <Text>Продовжити через Google</Text>*/}
      {/*        </LogInButton>*/}
      {/*      </FormBlock>*/}
      {/*    )}*/}
      {/*  </>*/}
      {/*)}*/}
    </>
  );
};

export default AuthForm;
