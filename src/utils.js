import dayjs from 'dayjs';

const humanizeDate = (rawDate, format) =>
  rawDate ? dayjs(rawDate).format(format) : '';

const getRandomArrayElement = (items) =>
  items[Math.floor(Math.random() * items.length)];

const capitalizeFirstLetter = (string) => {
  const stringToArray = Array.from(string);
  stringToArray[0] = stringToArray[0].toUpperCase();
  const result = stringToArray.join('');
  return result;
};

export {
  getRandomArrayElement,
  humanizeDate,
  capitalizeFirstLetter,
};
