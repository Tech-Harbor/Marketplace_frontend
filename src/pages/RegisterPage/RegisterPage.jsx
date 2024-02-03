import styled from 'styled-components';
import { RegistrationForm } from '../../components/RegistrationForm';

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const RegisterPage = () => {
  return (
    <PageContainer>
      <RegistrationForm />
    </PageContainer>
  );
};

export default RegisterPage;
