import styled from 'styled-components';

export const StyledItem = styled.li`
  width: 100%;
  //overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 5px 0 var(--color-shadow);

  .price {
    font-family: Gilroy-SemiBold, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    color: var(--color-text-price);
  }

  .post-description {
    padding: 4px 4px 12px 4px;
  }

  .post-title {
    overflow: hidden;
    margin-bottom: 5px;
    font-family: Gilroy-SemiBold, sans-serif;
    font-size: 10px;
    font-weight: 600;
    line-height: 1.2;

    /* v.2 - Kevin Powell */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .post-location {
    padding-bottom: 16px;
    font-family: Gilroy-Regular, sans-serif;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .profile-posts {
    width: 100%;
    height: 135px;
    object-fit: cover;
    object-position: right top;
  }
`;

export const StyledButton = styled.button`
  color: var(--color-primary-active);

  &.profile-posts {
    display: none;
  }
`;
