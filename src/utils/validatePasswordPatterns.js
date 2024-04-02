export const validatePasswordPatterns = (password = '') => {
  const validationResult = {};
  validationResult['Тільки латинські літери'] = /^[a-zA-Z0-9]+$/.test(password);
  validationResult['Містити великі та малі літери'] = /^(?=.*[a-z])(?=.*[A-Z])/.test(password);
  validationResult['Містити цифри'] = /\d/.test(password);
  validationResult['Не менше 8 символів'] = password.length >= 8;
  return validationResult;
};

export const isPasswordValid = password => {
  const validationResult = validatePasswordPatterns(password);
  return Object.values(validationResult).every(value => value === true);
};
