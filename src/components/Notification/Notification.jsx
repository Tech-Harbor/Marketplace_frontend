import { Container, Title, Text, Icon } from './Notification.styled.js';
import PropTypes from 'prop-types';

const Notification = ({ title, text, icon }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Icon src={icon} alt="Icon" />
    </Container>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Notification;
