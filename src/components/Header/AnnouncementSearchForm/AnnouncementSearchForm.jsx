import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonWithIcons from './ButtonWithDropdownSection/ButtonWithIcons.jsx';

import CategoriesDropDown from './CategoriesDropDown/CategoriesDropDown.jsx';
import iconSectionsClose from '../../../assets/svg/icon-sections-close.svg';
import iconSectionsOpen from '../../../assets/svg/icon-sections-open.svg';
import iconSectionsDown from '../../../assets/svg/icon-sections-down.svg';

import {
  StyledButtonSearch,
  StyledIconSearch,
  StyledSearchForm,
  StyledSearchInput,
} from './AnnouncementSearchForm.styled.js';

const AnnouncementSearchForm = () => {
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
        iconLeftSide={isOpenDropDown ? iconSectionsOpen : iconSectionsClose}
        iconRightSide={iconSectionsDown}
        onClick={handleOpenDropDown}
        isOpenDropDown={isOpenDropDown}
      />
      {/*{isOpenDropDown && <CategoriesDropDown handleCategoryClick={handleCategoryClick} />}*/}
      <CategoriesDropDown
        handleCategoryClick={handleCategoryClick}
        isOpenDropDown={isOpenDropDown}
      />
      <StyledButtonSearch>Пошук</StyledButtonSearch>
    </StyledSearchForm>
  );
};

export default AnnouncementSearchForm;
