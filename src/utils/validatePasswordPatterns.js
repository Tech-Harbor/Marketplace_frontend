export const validatePasswordPatterns = (password = '', repeatPassword = '') => {
  const validationResult = {};
  if (repeatPassword) {
    validationResult['Введені паролі не співпадатють'] = password === repeatPassword;
    return validationResult;
  }

  validationResult['Тільки латинські літери'] = /^[a-zA-Z0-9]+$/.test(password);
  validationResult['Містити великі та малі літери'] = /^(?=.*[a-z])(?=.*[A-Z])/.test(password);
  validationResult['Містити цифри'] = /\d/.test(password);
  validationResult['Не менше 8 символів'] = password.length >= 8;
  validationResult['Не менше 8 символів'] = password.length >= 8;
  return validationResult;
};

export const isPasswordValid = (password, repeatPassword) => {
  const validationResult = validatePasswordPatterns(password, repeatPassword);
  return Object.values(validationResult).every(value => value === true);
};
