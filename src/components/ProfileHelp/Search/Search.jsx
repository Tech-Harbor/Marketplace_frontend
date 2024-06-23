import { PageTitle } from '../../common/index.js';
import { Section, StyledLink, StyledText, StyledTitle, TextList } from '../commonStyle.styled.js';

export const Search = () => {
  return (
    <>
      <PageTitle to={'/profile/help'} title={'Пошук'} />
      <Section>
        <StyledLink href={'#sort'}>Сортування рейтингу оголошень</StyledLink>
        <StyledText className={'text--center bottom-indent'}>
          Коли ви шукаєте щось справді конкретне, ваш пошук може потребувати дещо додаткового, щоб
          звузити цей ідеальний предмет. На сторінці результатів пошуку є дві області, які
          дозволяють вивести ваш пошук на новий рівень: сортування та спеціальні фільтри.
        </StyledText>

        <TextList>
          <li>
            <StyledTitle>Сортування рейтингу оголошень</StyledTitle>
            <StyledText className={'text--center'}>
              Рейтинг оголошення – це те, де кожне оголошення відображається на сторінці
              результатів. Під час пошуку за замовчуванням оголошення сортуються за датою
              публікації, а останні оголошення відображаються у верхній частині сторінки, під
              розділом «Найпопулярніші оголошення». Винятком є категорії «Гаражні розпродажі» та
              «Події», які сортуються за датою розпродажу чи події.
            </StyledText>
            <StyledText>
              Спадне меню «Сортувати за» можна знайти в правій частині сторінки. Це меню має 4
              варіанти:
            </StyledText>
            <StyledText className={'text--center--margin'}>
              Опубліковано: спочатку найновіші (за умовчанням)
              <br /> Опубліковано: найстаріший Перший
              <br /> Ціна: спочатку найнижча
              <br /> Ціна: спочатку найвища
            </StyledText>{' '}
          </li>
        </TextList>
      </Section>
    </>
  );
};
