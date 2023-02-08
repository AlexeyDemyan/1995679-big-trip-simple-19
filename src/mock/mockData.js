import { getRandomArrayElement } from '../utils.js';
import { POINT_TYPES, DESTINATIONS } from '../const.js';

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 1,
        title: 'Upgrade to a business class',
        price: 100,
      },
      {
        id: 2,
        title: 'Upgrade to a business class',
        price: 200,
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: 1,
        title: 'Upgrade to a business flight',
        price: 101,
      },
      {
        id: 2,
        title: 'Upgrade to a business flight',
        price: 201,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        id: 1,
        title: 'Upgrade to a business bus',
        price: 300,
      },
      {
        id: 2,
        title: 'Upgrade to a business bus',
        price: 400,
      },
    ],
  },
];

const destinationMock1 = {
  id: 1,
  description: 'Lorem lorem shuem',
  name: DESTINATIONS[0],
  pictures: [
    {
      src: '../img/photos/1.jpg',
      description: 'Paris picture placeholder',
    },
    {
      src: '../img/photos/2.jpg',
      description: 'Another picture placeholder',
    },
  ],
};

const destinationMock2 = {
  id: 2,
  description: 'I am too lazy to write lorem text',
  name: DESTINATIONS[1],
  pictures: [
    {
      src: '../img/photos/3.jpg',
      description: 'Chamonix picture placeholder',
    },
    {
      src: '../img/photos/4.jpg',
      description: 'Some other picture placeholder',
    },
  ],
};

const mockDestinations = [destinationMock1, destinationMock2];

const pointMock1 = {
  id: 0,
  type: getRandomArrayElement(POINT_TYPES),
  destination: 1,
  dateFrom: '2019-03-17T12:25',
  dateTo: '2019-03-17T13:35',
  basePrice: 160,
  offers: [1, 2],
};

const pointMock2 = {
  id: 1,
  type: getRandomArrayElement(POINT_TYPES),
  destination: 2,
  dateFrom: '2019-03-16T14:25',
  dateTo: '2019-03-16T15:35',
  basePrice: 260,
  offers: [1],
};

const mockPoints = [pointMock1, pointMock2];

const getOffersForPointType = (point) => mockOffers.find((offer) => offer.type === point.type);

const getDestinationForPointId = (point) => mockDestinations.find((destination) => destination.id === point.destination);

const getDestinationForName = (name) => mockDestinations.find((destination) => destination.name === name);

const getRandomPoint = () => getRandomArrayElement(mockPoints);

export { getRandomPoint, getOffersForPointType, getDestinationForPointId, getDestinationForName};
