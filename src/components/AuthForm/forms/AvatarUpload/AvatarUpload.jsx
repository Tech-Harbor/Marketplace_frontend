import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { Container } from './AvatarUpload.styled.js';
import defaultAvatar from '../../../../assets/svg/defaultAvatar.svg';

export const AvatarUpload = ({ validation, setValue, ...rest }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },

    onDrop: acceptedFiles => {
      console.log('acceptedFiles', acceptedFiles);
      const mappedFiles = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setFiles(mappedFiles);
      setValue('avatar', mappedFiles);
    },
    multiple: false,
  });

  const avatar = files[0]?.preview || defaultAvatar;

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} {...validation} {...rest} />
      <img src={avatar} alt="alt" className={'img-avatar'} />
    </Container>
  );
};

AvatarUpload.propTypes = {
  setValue: PropTypes.func.isRequired,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
};
