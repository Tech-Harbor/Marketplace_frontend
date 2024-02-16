import { TextValidation } from './FieldValidation.styled.js';
import PropTypes from 'prop-types';

export const FieldValidation = ({ $fieldError, $fieldName }) => {
  return (
    <div style={{ height: '20px', display: 'flex', alignItems: 'center' }}>
      {$fieldError[$fieldName] && (
        <TextValidation role="alert">{$fieldError[$fieldName].message}</TextValidation>
      )}
    </div>
  );
};

FieldValidation.propTypes = {
  $fieldError: PropTypes.object.isRequired,
  $fieldName: PropTypes.string.isRequired,
};
