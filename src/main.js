import FilterView from './view/list-filter-view.js';
import ListSortView from './view/list-sort-view.js';
import { render } from './render.js';
import TripListPresenter from './presenter/trip-list-presenter.js';

const DESTINATIONS_COUNT = 3;

const tripMainElement = document.querySelector('.trip-main');
const tripMainTripControlsElement = tripMainElement.querySelector('.trip-main__trip-controls');
const tripControlsFiltersElement = tripMainTripControlsElement.querySelector('.trip-controls__filters');

const bodyElement = document.querySelector('.page-body');
const bodyPageMainElement = bodyElement.querySelector('.page-body__page-main');
const tripEventsElement = bodyPageMainElement.querySelector('.trip-events');

const tripListPresenter = new TripListPresenter(tripEventsElement);

render(new FilterView(), tripControlsFiltersElement);
render(new ListSortView(), tripEventsElement);
tripListPresenter.init(DESTINATIONS_COUNT);

