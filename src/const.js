const POINT_TYPES = ['taxi', 'bus', 'flight'];
const DESTINATIONS = ['Paris', 'Chamonix'];

const DATE_FORMAT_DAY_AND_MONTH = 'D MMMM';
const DATE_FORMAT_TIME_ONLY = 'HH:mm';
const DATE_FORMAT_DATE_AND_TIME = 'DD/MM/YY HH:mm';

const DESTINATIONS_COUNT = 5;

const FilterType = {
  ALL: 'all',
  FUTURE: 'future',
};

const SortType = {
  DEFAULT: 'default',
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  INIT: 'INIT',
};

export {
  POINT_TYPES,
  DATE_FORMAT_DAY_AND_MONTH,
  DATE_FORMAT_TIME_ONLY,
  DESTINATIONS_COUNT,
  DATE_FORMAT_DATE_AND_TIME,
  FilterType,
  SortType,
  DESTINATIONS,
  UserAction,
  UpdateType,
};
