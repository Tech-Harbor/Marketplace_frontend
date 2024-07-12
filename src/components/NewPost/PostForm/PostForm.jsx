import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { categories, cities } from '../../../constants';
import IconSectionsDown from '../../../assets/svg/icon-sections-down.svg?react';

import Input from '../Input/Input.jsx';
import Textarea from '../Textarea/Textarea.jsx';
import NegotiablePriceSection from '../NegotiablePriceSection/NegotiablePriceSection.jsx';
import ImagesUploader from '../ImagesUploader/ImagesUploader.jsx';
import ButtonWithIcons from '../../Header/PostSearchForm/ButtonWithDropdownSection/ButtonWithIcons.jsx';
import CategoriesDropDown from '../../Header/PostSearchForm/CategoriesDropDown/CategoriesDropDown.jsx';

import { StyledButton, StyledForm, StyledLabel, Wrapper } from './PostForm.styled.js';

const PostForm = ({ onSuccess }) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [isOpenCategoriesDropDown, setIsOpenCategoriesDropDown] = useState(false);
  const [isOpenLocationDropDown, setIsOpenLocationDropDown] = useState(false);
  const selectedCategory = watch('category');
  const selectedLocation = watch('location');

  const handleOnSubmitForm = data => {
    console.log('data', data);

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'images') {
        const newImages = value.map(file => ({
          name: file.name,
          imageId: nanoid(),
          imageUrl: URL.createObjectURL(file),
        }));

        formData.append('images', JSON.stringify(newImages));
      } else {
        formData.append(key, value);
      }
    });

    // TODO це тимчасовий код для перегляду formData
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    onSuccess();
  };

  const handleCategoryClick = value => {
    setValue('category', value);
    setIsOpenCategoriesDropDown(false);
  };

  const handleLocationClick = value => {
    setValue('location', value);
    setIsOpenLocationDropDown(false);
  };

  const handleOpenCategoriesDropDown = e => {
    e.preventDefault();
    setIsOpenLocationDropDown(false);
    setIsOpenCategoriesDropDown(!isOpenCategoriesDropDown);
  };

  const handleLocationDropDown = e => {
    e.preventDefault();
    setIsOpenCategoriesDropDown(false);
    setIsOpenLocationDropDown(!isOpenLocationDropDown);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleOnSubmitForm)}>
      <Input
        label={'Назва'}
        validation={register('name', { required: true })}
        placeholder={'Наприклад, iPhone 12 Pro Max 512GB'}
        className={'input-name'}
      />

      <Textarea label={'Опис:'} validation={register('description', { required: true })} />

      {/* TODO знайти як встановлювати required для ImagesUploader */}
      <ImagesUploader validation={register('images')} setValue={setValue} />

      <NegotiablePriceSection id="toggle" validation={register('negotiable')} />

      <Input
        label={'Ціна:'}
        type={'number'}
        validation={register('price', { required: true, valueAsNumber: true })}
        className={'input-price'}
      />

      <Wrapper>
        <StyledLabel>Розділи</StyledLabel>
        <ButtonWithIcons
          text={selectedCategory?.itemName || 'Оберіть розділ ...'}
          iconRightSide={IconSectionsDown}
          onClick={handleOpenCategoriesDropDown}
          isOpenDropDown={isOpenCategoriesDropDown}
          className={'post-form'}
        />
        <CategoriesDropDown
          items={categories}
          handleClick={handleCategoryClick}
          isOpenDropDown={isOpenCategoriesDropDown}
          className={'post-form'}
        />
      </Wrapper>

      <Wrapper>
        <StyledLabel>Розташування</StyledLabel>
        <ButtonWithIcons
          text={selectedLocation?.itemName || 'Оберіть локацію ...'}
          iconRightSide={IconSectionsDown}
          onClick={handleLocationDropDown}
          isOpenDropDown={isOpenLocationDropDown}
          className={'post-form'}
        />
        <CategoriesDropDown
          items={cities}
          handleClick={handleLocationClick}
          isOpenDropDown={isOpenLocationDropDown}
          className={'post-form'}
        />
      </Wrapper>

      <StyledButton type="submit">{'Опублікувати оголошення'}</StyledButton>

      {/* TODO запитати, як має працювати кнопка "Додати пізніше" */}
      <StyledButton type="button" className={'btn__add-later'}>
        {'Додати пізніше'}
      </StyledButton>
    </StyledForm>
  );
};

PostForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default PostForm;
