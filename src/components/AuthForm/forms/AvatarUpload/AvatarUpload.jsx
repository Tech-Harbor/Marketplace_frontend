// import { useRef, useState } from 'react';
// import { Container, StyledHiddenInput } from './AvatarUpload.styled.js';
//
// export const AvatarUpload = ({ register }) => {
//   const hiddenInputRef = useRef(null);
//
//   const { ref: registerRef, ...rest } = register('profilePicture');
//
//   const [preview, setPreview] = useState(null);
//
//   const handleUploadedFile = event => {
//     const file = event.target.files[0];
//     if (file) {
//       const urlImage = URL.createObjectURL(file);
//       setPreview(urlImage);
//     }
//   };
//
//   const onUpload = () => {
//     if (hiddenInputRef.current) {
//       hiddenInputRef.current.click();
//     }
//   };
//
//   const uploadButtonLabel = preview ? 'Change image' : 'Upload image';
//
//   return (
//     <Container>
//       <StyledHiddenInput
//         name={'profilePicture'}
//         type="file"
//         onChange={handleUploadedFile}
//         ref={e => {
//           registerRef(e);
//           hiddenInputRef.current = e;
//         }}
//       />
//       <img src={preview} alt="avatar" />
//       <button type={'button'} onClick={onUpload}>
//         {uploadButtonLabel}
//       </button>
//     </Container>
//   );
// };
