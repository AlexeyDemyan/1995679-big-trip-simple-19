import ListFilterView from './view/list-filter-view.js';
import ListSortView from './view/list-sort-view.js';
import { render } from './render.js';
import TripListPresenter from './presenter/trip-list-presenter.js';

const AMOUNT_OF_DESTINATIONS_TO_RENDER = 3;

const tripMainElement = document.querySelector('.trip-main');
const tripMainTripControlsElement = tripMainElement.querySelector('.trip-main__trip-controls');
const tripControlsFiltersElement = tripMainTripControlsElement.querySelector('.trip-controls__filters');

const pageBodyElement = document.querySelector('.page-body');
const pageBodyPageMainElement = pageBodyElement.querySelector('.page-body__page-main');
const tripEventsElement = pageBodyPageMainElement.querySelector('.trip-events');

const tripListPresenter = new TripListPresenter({tripListContainer:tripEventsElement});

render(new ListFilterView(), tripControlsFiltersElement);
render(new ListSortView(), tripEventsElement);
tripListPresenter.init(AMOUNT_OF_DESTINATIONS_TO_RENDER);

