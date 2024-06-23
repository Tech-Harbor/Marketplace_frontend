import { PageTitle } from '../../common';
import {
  Section,
  StyledLink,
  StyledOrderedLists,
  StyledText,
  StyledTitle,
  TextList,
} from './commonStyle.styled.js';

export const Posts = () => {
  return (
    <>
      <PageTitle to={'/profile/help'} title={'Оголошення'} />
      <Section>
        <StyledLink href={'#add-post'}>Додати оголошення</StyledLink>
        <StyledLink href={'#active-post'}>Як довго активні оголошення</StyledLink>
        <StyledLink href={'#edit-post'}>Як відредагувати оголошення</StyledLink>
        <StyledLink href={'#delete-post'}>Як видалити оголошення</StyledLink>
        <TextList>
          <li>
            <StyledText className={'text--center'}>
              Створити список на Oranger швидко, легко, і це можна зробити будь-де. Оскільки ви
              дійшли так далеко, виконайте ці кроки, щоб опублікувати свій перший запис сьогодні!
            </StyledText>

            <StyledText className={'bottom-indent'}>
              Насамперед. Перш ніж створити запис про компанію, переконайтеся, що:
            </StyledText>

            <StyledOrderedLists className={'posts-list'}>
              <li>Ви ввійшли у свій обліковий запис Oranger</li>
              <li>Або, якщо у вас немає облікового запису, ви можете зареєструватися</li>
            </StyledOrderedLists>
          </li>
          <li>
            <StyledTitle id={'add-post'}>Додати оголошення</StyledTitle>

            <StyledOrderedLists>
              <li>Натисніть значок “Додати” внизу екрана.</li>
              <li>Виберіть категорію, у якій ви хочете опублікувати публікацію.</li>
              <li>
                Додайте фотографію, вибравши значок камери вгорі екрана. Ви можете вибрати до 10
                фотографій зі своєї фотогалереї або зробити нову.
              </li>
              <li>
                Заповніть такі обов’язкові поля, як назва оголошення, опис, тип оголошення, ціна.
                Введіть до 5 ключових слів, за якими покупці могли б знайти ваше оголошення.
              </li>
              <li>
                Введіть своє місцезнаходження та контактну інформацію, включаючи поштовий індекс та
                електронну адресу. Ви вирішуєте, чи хочете ви вказати свою адресу та номер телефону!
              </li>
              <li>Виберіть «Опублікувати» та стежте за відповідями на ваше оголошення.</li>
            </StyledOrderedLists>
          </li>
          <li>
            <StyledTitle id={'active-post'}>Як довго активні оголошення?</StyledTitle>
            <StyledText>
              Оголошення активні протягом 6 місяців. Після цього вони автоматично архівуються і
              будуть не доступні іншим користувачам, лише Вам.
              <br />
              <br />
              Щоб активувати архівоване оголошення - просто опублікуйте його повторно.
            </StyledText>
          </li>
          <li>
            <StyledTitle id={'edit-post'}>Як відредагувати оголошення</StyledTitle>
            <StyledOrderedLists>
              <li>Зайдіть до вашого профілю на вкладку «Оголошення».</li>
              <li>
                Біля кожного вашого оголошення буде кнопка «Редагувати» — тисніть та внесіть всі
                потрібні зміни!
              </li>
              <li>
                Виберіть внизу кнопку «Змінити оголошення», щоб зберегти нову версію оголошення
              </li>
            </StyledOrderedLists>
          </li>
          <li>
            <StyledTitle id={'delete-post'}>Як видалити оголошення?</StyledTitle>
            <StyledOrderedLists>
              <li>Зайдіть до вашого профілю на вкладку «Оголошення». </li>
              <li>Виберіть кнопку «Видалити» </li>
              <li>Підтвердіть, що Ви дійсно хочете видалити ваше оголошення.</li>
            </StyledOrderedLists>
          </li>
        </TextList>
      </Section>
    </>
  );
};
