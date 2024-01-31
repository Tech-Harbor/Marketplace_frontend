import styled from 'styled-components';
import { Title } from './Title';
import Flex from './Flex';
import Form from './Form';
import device from './MediaQueries';

const RegistrationForm = () => {
  return (
    <Wrapper>
      <Flex justify="center" direction="column" align="center">
        <Title>Реєстрація</Title>
        <Form />
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;

  width: 360px;
  height: 100%;

  background-color: #fff;

  @media ${device.laptopL} {
    margin-top: 27px;
    margin-bottom: 23px;
    padding: 0 25px;

    width: 708px;
    height: 936px;
  }
`;
export default RegistrationForm;
