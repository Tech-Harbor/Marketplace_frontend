import { PageTitle } from '../../common';
import {
  Section,
  StyledLink,
  StyledOrderedLists,
  StyledText,
  StyledTitle,
  TextList,
} from './commonStyle.styled.js';

export const Account = () => {
  return (
    <>
      <PageTitle to={'/profile/help'} title="Акаунт" />

      <Section>
        <StyledLink href="#reg">Реєстрація</StyledLink>
        <StyledLink href="#auth">Авторизація</StyledLink>
        <StyledLink href="#delete">Видалення</StyledLink>
        <StyledLink href="#profile">Зміни профілю</StyledLink>
        <StyledLink href="#email" className={'sub-text'}>
          Змінити електронну пошту
        </StyledLink>
        <StyledLink href="#password" className={'sub-text bottom-indent'}>
          Змінити пароль
        </StyledLink>

        <TextList>
          <li>
            <StyledTitle id={'reg'}>Реєстрація</StyledTitle>
            <StyledText className={'text--center'}>
              Щоб опублікувати оголошення, потрібна реєстрація, яка надає великі переваги та
              функції.
            </StyledText>
            <StyledText className={'text'}>Щоб зареєструватися на нашому сайті:</StyledText>

            <StyledOrderedLists className={'text'}>
              <li>Виберіть посилання «Зареєструватись» у верхній частині екрана.</li>
              <li>Заповніть необхідну інформацію та натисніть кнопку «Зареєструватись».</li>
              <li>
                На вказану адресу буде надіслано електронний лист. Щоб завершити реєстрацію,
                дотримуйтесь інструкцій в електронному листі.
              </li>
            </StyledOrderedLists>
          </li>

          <li>
            <StyledTitle id={'auth'}>Авторизація</StyledTitle>
            <StyledText className={'text'}>Щоб авторизуватися на нашому сайті:</StyledText>

            <StyledOrderedLists className={'text-list text'}>
              <li>Виберіть посилання «Авторизуватись» у верхній частині екрана.</li>
              <li>Заповніть необхідну інформацію та натисніть кнопку «Авторизуватись».</li>
              <li>
                Якщо все вірно, Ви автоматично перейдете на головну сторінку. Якщо данні були
                введені хибто, перевірте Ваші данні.
              </li>
            </StyledOrderedLists>
            <StyledText className={'text--auth'}>
              Якщо Ви забули пароль, перейдіть за посиланням для відновлення паролю
            </StyledText>
          </li>

          <li>
            <StyledTitle id={'delete'}>Видалення</StyledTitle>
            <StyledText className={'text'} style={{ color: 'red' }}>
              ТЕКСТ НА МАКЕТІ ПОТРЕБУЄ КОРЕГУВАННЯ
            </StyledText>
          </li>

          <li>
            <StyledTitle id={'profile'}>Зміни профілю</StyledTitle>
            <StyledText id={'email'} className={'text--center'}>
              Змінити електронну пошту.
            </StyledText>
            <StyledText>
              Щоб змінити електронну адресу, пов’язану з вашим обліковим записом:
            </StyledText>

            <StyledOrderedLists className={'text-list text bottom-indent'}>
              <li>Увійдіть в обліковий запис Oranger, який потрібно редагувати.</li>
              <li>Натисніть кнопку «Налаштування», що висвічується у вашому профілю.</li>
              <li>Введіть свою стару та нову адреси електронної пошти у відповідне поле.</li>
              <li>
                Збережіть зміни внизу сторінки, ввівши свій пароль і натиснувши «Зберегти зміни».
              </li>
              <li>
                На вашу нову електронну адресу буде надіслано електронний лист. Якщо ви не бачите
                електронного листа протягом 10 хвилин, перевірте папки спаму/сміття. Отримавши його,
                натисніть посилання в електронному листі, щоб підтвердити зміну.
              </li>
            </StyledOrderedLists>

            <StyledText id={'password'} className={'text--center '}>
              Змінити пароль.
            </StyledText>
            <StyledText className={'text'}>
              Щоб змінити пароль, пов’язаний з вашим обліковим записом:
            </StyledText>

            <StyledOrderedLists className={'text-list text'}>
              <li>Увійдіть в обліковий запис Oranger, який потрібно редагувати.</li>
              <li>Натисніть кнопку «Налаштування», що висвічується у вашому профілю.</li>
              <li>Введіть свої старий та новий пароль у відповідне поле.</li>
              <li>
                Збережіть зміни внизу сторінки, ввівши свій пароль і натиснувши «Зберегти зміни».
              </li>
            </StyledOrderedLists>
          </li>
        </TextList>
      </Section>
    </>
  );
};
