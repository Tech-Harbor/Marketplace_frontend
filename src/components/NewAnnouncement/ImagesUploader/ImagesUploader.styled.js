import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  min-height: 130px;
`;

export const ThumbsContainer = styled.aside`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ImageCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100px;
  height: 100px;

  border-radius: 8px;
  box-sizing: border-box;

  cursor: pointer;
  overflow: hidden;

  box-shadow:
    rgba(50, 50, 93, 0.25) 0 0 10px inset,
    rgba(50, 50, 93, 0.25) 0 0 10px inset;
`;

export const Text = styled.span`
  margin-top: 10px;
  padding: 5px;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;

  font-family: Gilroy-Regular, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -1px;
`;
