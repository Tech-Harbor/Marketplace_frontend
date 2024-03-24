import PropTypes from 'prop-types';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import {
  Container,
  InputBlock,
  Input,
  Label,
  IconBlock,
  IconUse,
  ErrorText,
} from './FormInput.styled.js';

const FormInput = ({
  title,
  name,
  type = 'text',
  icon,
  clickIcon,
  changeInput,
  min = 0,
  max = 1000,
  register,
  errors = false,
  showItem = true,
}) => {
  return (
    <Container $show={showItem}>
      <Label>{title}</Label>
      <InputBlock>
        <Input
          type={type}
          maxLength={max}
          {...register(name, {
            onChange: changeInput,
            required: showItem ? { value: true, message: 'Це поле мусить бути заповнене' } : false,
            minLength: {
              value: min,
              message: `Це поле має обмеження по мінімальній довжені в ${min}`,
            },
          })}
          $error={errors}
        />
        <IconBlock>
          {errors && (
            <ErrorOutlineRoundedIcon sx={{ fontSize: 24, color: '#F74A4F', rotate: '180deg' }} />
          )}
          <IconUse onClick={clickIcon}>{icon}</IconUse>
        </IconBlock>
      </InputBlock>
      <ErrorText>{errors && errors.message}</ErrorText>
    </Container>
  );
};

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.element,
  clickIcon: PropTypes.func,
  changeInput: PropTypes.func,
  min: PropTypes.number.isRequired,
  max: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.exact({
    type: PropTypes.string,
    message: PropTypes.string,
    ref: PropTypes.object,
  }),
  showItem: PropTypes.bool,
};
export default FormInput;
