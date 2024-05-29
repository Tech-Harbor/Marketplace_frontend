import { useForm } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';

import Input from '../Input/Input.jsx';
import Textarea from '../Textarea/Textarea.jsx';
import Select from '../Select/Select.jsx';
import NegotiablePriceSection from '../NegotiablePriceSection/NegotiablePriceSection.jsx';
import ImagesUploader from '../ImagesUploader/ImagesUploader.jsx';

import { StyledButton, StyledForm } from './AnnouncementForm.styled.js';

const AnnouncementForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  const handleOnSubmitForm = data => {
    const formData = new FormData();
    console.log('data', data);

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

  return (
    <StyledForm onSubmit={handleSubmit(handleOnSubmitForm)}>
      <Input
        label={'Назва'}
        validation={register('name', { required: true })}
        placeholder={'Наприклад, iPhone 12 Pro Max 512GB'}
        className={'announcement-name pl'}
      />
      <Textarea
        label={'Опис:'}
        validation={register('descriptionAdvertisement', { required: true })}
      />

      {/* TODO знайти як встановлювати required для ImagesUploader */}
      <ImagesUploader validation={register('images')} setValue={setValue} />

      <NegotiablePriceSection id="toggle" validation={register('negotiable')} />
      <Input
        label={'Ціна:'}
        type={'number'}
        validation={register('price', { required: true, valueAsNumber: true })}
        className={'announcement-price'}
      />
      <Select label={'Розташування'} validation={register('location', { required: true })} />
      {/*<Select label={'Розділи'} validation={register('categories', { required: true })} />*/}

      <StyledButton type="submit">{'Опублікувати оголошення'}</StyledButton>

      {/* TODO запитати, як має працювати кнопка "Додати пізніше" */}
      <StyledButton type="button" className={'btn__add-later'}>
        {'Додати пізніше'}
      </StyledButton>
    </StyledForm>
  );
};

export default AnnouncementForm;
