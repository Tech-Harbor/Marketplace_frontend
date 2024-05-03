import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const StyledSearchForm = styled.form`
  width: 100%;
`;

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
`;
export const StyledSearchInput = styled.input.attrs({
  type: 'text',
  required: true,
  autoComplete: 'true',
})`
  padding-left: 17px;

  width: 100%;
  height: 36px;

  border-radius: 8px;

  font-family: Gilroy-Medium, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
`;

export const StyledIconSearch = styled(SearchOutlinedIcon)`
  position: absolute;
  right: 6px;
  top: calc(50% - 12px);
  color: var(--color-primary);
`;
