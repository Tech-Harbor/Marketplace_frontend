import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';

import {
  StyledLabel,
  StyledSection,
  Text,
  ImageCard,
  ThumbsContainer,
} from './ImagesUploader.styled.js';

const ImagesUploader = ({ setValue, validation, ...rest }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },

    onDrop: acceptedFiles => {
      const mappedFiles = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setFiles(mappedFiles);
      setValue('images', mappedFiles);
    },
  });
  console.log('files', files);
  const ImageList = files.map(file => (
    <ImageCard key={file.name}>
      <img
        src={file.preview}
        alt={file.name}
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
    </ImageCard>
  ));

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <StyledSection>
      <StyledLabel>{'Фото або відео:'}</StyledLabel>
      <ThumbsContainer>
        {ImageList}

        <ImageCard {...getRootProps()}>
          <input {...validation} {...getInputProps()} {...rest} />
          <UploadFileOutlinedIcon />
          <Text>Click to upload or drag and drop</Text>
        </ImageCard>
      </ThumbsContainer>
    </StyledSection>
  );
};

ImagesUploader.propTypes = {
  setValue: PropTypes.func.isRequired,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
};

export default ImagesUploader;
