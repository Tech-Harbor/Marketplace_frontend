export const checkPasswordOverPatterns = (password = '', repeatPassword = '') => {
  if (repeatPassword) {
    return password === repeatPassword ? [] : ['Введені паролі не співпадатють'];
  }

  const patterns = {
    ['Тільки латинські літери']: /^[a-zA-Z0-9]+$/.test(password),
    ['Містить великі та малі літери']: /^(?=.*[a-z])(?=.*[A-Z])/.test(password),
    ['Містить цифри']: /\d/.test(password),
    ['Не менше 8 символів']: password.length >= 8,
  };

  return Object.keys(patterns).filter(key => !patterns[key]);
};
