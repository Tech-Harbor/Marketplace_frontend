import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 40px;

  .posts-list {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 150px);
    gap: 18px;
  }
`;
