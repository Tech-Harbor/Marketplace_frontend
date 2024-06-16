import styled from 'styled-components';

export const StyledItem = styled.li`
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 0px #0000001a;

  .price {
    font-family: Gilroy-SemiBold, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.41px;
    color: var(--color-text-price);
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 4px 4px 12px 4px;

  h3 {
    margin-bottom: 5px;
    font-family: Gilroy-SemiBold, sans-serif;
    font-size: 10px;
    font-weight: 600;
    line-height: 12.25px;
  }

  .location {
    padding-bottom: 16px;
    font-family: Gilroy-Regular, sans-serif;
    font-size: 10px;
    font-weight: 500;
    line-height: 12.13px;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: var(--color-primary-active);
  }
`;
