import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  font-family: Gilroy-Regular, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;

  .link {
    height: 24px;
  }

  &.link-all-posts {
    justify-content: flex-end;
    margin-bottom: 14px;
    padding: 0;
    font-size: 15px;
  }
  //
  //.all-post-text {
  //  font-family: Gilroy-Regular, sans-serif;
  //  font-size: 15px;
  //  font-weight: 400;
  //  line-height: 22px;
  //  text-align: right;
  //  color: var(--color-label);
  //}
`;
