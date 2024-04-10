export const makeFirstLetterUpperCase = string => {
  const letterArray = string.split('');
  return letterArray[0].toUpperCase() + letterArray.splice(1).join('');
};
