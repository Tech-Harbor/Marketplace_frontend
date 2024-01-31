import styled from 'styled-components';
import Title from './Title';
import Flex from './Flex';
import Form from './Form';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 360px;
  min-height: 100vh;
  /* height: 328px; */
  padding: 0 16px;

  background-color: #fff;
`;

const RegistrationForm = () => {
  return (
    <Wrapper>
      <Flex justify="center" direction="column" align="center">
        <Title color="red" margin="13.5px">
          Реєстрація
        </Title>

        <Form />
      </Flex>
    </Wrapper>
  );
};

export default RegistrationForm;
