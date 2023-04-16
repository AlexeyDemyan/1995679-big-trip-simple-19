import FilterView from './view/list-filter-view.js';
import { render } from './framework/render.js';
import TripListPresenter from './presenter/trip-list-presenter.js';
import PointsModel from './model/points-model.js';
import PointsApiService from './points-api-services.js';

const AUTHORIZATION = 'Basic OB1Z231AS22331Z';
const END_POINT = 'https://19.ecmascript.pages.academy/big-trip-simple';

const tripMainElement = document.querySelector('.trip-main');
const tripMainTripControlsElement = tripMainElement.querySelector('.trip-main__trip-controls');
const tripControlsFiltersElement = tripMainTripControlsElement.querySelector('.trip-controls__filters');

const bodyElement = document.querySelector('.page-body');
const bodyPageMainElement = bodyElement.querySelector('.page-body__page-main');
const tripEventsElement = bodyPageMainElement.querySelector('.trip-events');

const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const tripListPresenter = new TripListPresenter(tripEventsElement, pointsModel);

render(new FilterView(), tripControlsFiltersElement);
tripListPresenter.init();
pointsModel.init();

