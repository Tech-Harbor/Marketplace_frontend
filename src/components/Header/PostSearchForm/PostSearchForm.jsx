import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonWithIcons from './ButtonWithDropdownSection/ButtonWithIcons.jsx';

import CategoriesDropDown from './CategoriesDropDown/CategoriesDropDown.jsx';
import IconSectionsClose from '../../../assets/svg/icon-sections-close.svg?react';
import IconSectionsOpen from '../../../assets/svg/icon-sections-open.svg?react';
import IconSectionsDown from '../../../assets/svg/icon-sections-down.svg?react';

import {
  StyledButtonSearch,
  StyledIconSearch,
  StyledSearchForm,
  StyledSearchInput,
} from './PostSearchForm.styled.js';

const PostSearchForm = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const handleFromSubmit = data => {
    console.log('send data', data);
    reset();
  };

  const handleCategoryClick = value => {
    setValue('category', value);
    setIsOpenDropDown(false);
  };

  const handleOpenDropDown = e => {
    e.preventDefault();
    setIsOpenDropDown(!isOpenDropDown);
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(handleFromSubmit)}>
      <StyledIconSearch />
      <StyledSearchInput
        type={'text'}
        {...register('search')}
        placeholder="Наприклад, Apple"
        $isOpenDropDown={isOpenDropDown}
      />
      <ButtonWithIcons
        text={'Розділи'}
        iconLeftSide={isOpenDropDown ? IconSectionsOpen : IconSectionsClose}
        iconRightSide={IconSectionsDown}
        onClick={handleOpenDropDown}
        isOpenDropDown={isOpenDropDown}
      />
      <CategoriesDropDown
        handleCategoryClick={handleCategoryClick}
        isOpenDropDown={isOpenDropDown}
      />

      <StyledButtonSearch>Пошук</StyledButtonSearch>
    </StyledSearchForm>
  );
};

export default PostSearchForm;
