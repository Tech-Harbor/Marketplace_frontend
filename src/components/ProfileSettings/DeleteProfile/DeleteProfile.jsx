import { Section } from './DeleteProfile.styled.js';

export const DeleteProfile = () => {
  return (
    <Section>
      <h1 className={'title'}>Ви дійсно хочете видалити профіль?</h1>
      <p className={'text'}>
        Видалення облікового запису призведе до видалення всіх ваших оголошень, повідомлень і данних
      </p>
      <button className={'btn btn--delete'}>Видалити</button>
      <button className={'btn btn--return'}>Відмінити</button>
    </Section>
  );
};
