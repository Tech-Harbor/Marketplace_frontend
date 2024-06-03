import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';

import { categories } from '../../../constants';
import IconSectionsDown from '../../../assets/svg/icon-sections-down.svg?react';

import Input from '../Input/Input.jsx';
import Textarea from '../Textarea/Textarea.jsx';
import NegotiablePriceSection from '../NegotiablePriceSection/NegotiablePriceSection.jsx';
import ImagesUploader from '../ImagesUploader/ImagesUploader.jsx';
import ButtonWithIcons from '../../Header/PostSearchForm/ButtonWithDropdownSection/ButtonWithIcons.jsx';
import CategoriesDropDown from '../../Header/PostSearchForm/CategoriesDropDown/CategoriesDropDown.jsx';

import { StyledButton, StyledForm, StyledLabel, Wrapper } from './PostForm.styled.js';

const PostForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const selectedCategory = watch('category');

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
        <StyledLabel>Розташування</StyledLabel>
        <ButtonWithIcons
          text={selectedCategory?.itemName || 'Оберіть розділ ...'}
          iconRightSide={IconSectionsDown}
          onClick={handleOpenDropDown}
          isOpenDropDown={isOpenDropDown}
          className={'post-form'}
        />
        <CategoriesDropDown
          items={categories}
          handleCategoryClick={handleCategoryClick}
          isOpenDropDown={isOpenDropDown}
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

export default PostForm;
