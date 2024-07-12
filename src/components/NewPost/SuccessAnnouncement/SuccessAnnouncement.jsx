import PropTypes from 'prop-types';

import {
  Wrapper,
  Title,
  SuccessMessage,
  Image,
  AddAnnouncement,
  LinkOnMyAnnouncement,
  Container,
  Text,
  PlacementLink,
} from './SuccessAnnouncement.styled.js';

const SuccessAnnouncement = ({ onSuccess }) => {
  return (
    <Wrapper>
      <Title>Успіх</Title>
      <SuccessMessage>Вітаємо! Ваше оголошення активовано.</SuccessMessage>
      <Image />
      <AddAnnouncement to={'/new-post'} onClick={() => onSuccess()}>
        Додати ще одне оголошення
      </AddAnnouncement>

      {/*TODO: Додати посилання на сторінку 'Мої оголошення'*/}
      <LinkOnMyAnnouncement to={'/'}>Мої оголошення</LinkOnMyAnnouncement>
      <Container>
        <Text>
          Збільште ефективність свого оголошення! Розмістіть його в рекламних блоках на нашому
          маркетплейсі. Ваше оголошення отримає більше уваги та обсяг аудиторії.
        </Text>

        {/*TODO: Додати посилання на сторінку 'Розмістити'*/}
        <PlacementLink to={'/'}>Розмістити</PlacementLink>
      </Container>
    </Wrapper>
  );
};

SuccessAnnouncement.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default SuccessAnnouncement;
