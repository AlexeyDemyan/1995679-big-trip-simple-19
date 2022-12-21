import TripPointListView from '../view/trip-point-list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import DestinationView from '../view/destination-view.js';
import { render } from '../render.js';

export default class TripListPresenter {
  #tripListContainer = null;
  #pointsModel = null;

  #points = [];

  #tripListComponent = new TripPointListView();

  constructor(tripListContainer, pointsModel) {
    this.#tripListContainer = tripListContainer;
    this.#pointsModel = pointsModel;
  }

  #renderDestination (destination) {
    const destinationComponent = new DestinationView(destination);
    const editDestinationPointComponent = new EditPointView(destination);

    const replaceDestinationToEdit = () => {
      this.#tripListComponent.element.replaceChild(editDestinationPointComponent.element, destinationComponent.element);
    };

    const replaceEditToDestination = () => {
      this.#tripListComponent.element.replaceChild(destinationComponent.element, editDestinationPointComponent.element);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceEditToDestination();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    destinationComponent.editButton.addEventListener('click', () => {
      replaceDestinationToEdit();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    editDestinationPointComponent.editButton.addEventListener('click', () => {
      replaceEditToDestination();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    editDestinationPointComponent.submitButton.addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceEditToDestination();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    render(destinationComponent, this.#tripListComponent.element);
  }

  init () {
    this.#points = [...this.#pointsModel.points];

    render(this.#tripListComponent, this.#tripListContainer);

    for (const point of this.#points) {
      this.#renderDestination(point);
    }
  }

}

export { AddNewPointView };
