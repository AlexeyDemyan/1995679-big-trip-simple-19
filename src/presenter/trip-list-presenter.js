import TripPointListView from '../view/trip-point-list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import DestinationItemView from '../view/destination-item-view.js';
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
    const destinationItemComponent = new DestinationItemView(destination);
    const editDestinationPointComponent = new EditPointView(destination);

    const replaceDestinationToEdit = () => {
      this.#tripListComponent.element.replaceChild(editDestinationPointComponent.element, destinationItemComponent.element);
    };

    const replaceEditToDestination = () => {
      this.#tripListComponent.element.replaceChild(destinationItemComponent.element, editDestinationPointComponent.element);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceEditToDestination();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    destinationItemComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceDestinationToEdit();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    editDestinationPointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEditToDestination();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    editDestinationPointComponent.element.querySelector('.event--edit').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceEditToDestination();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    render(destinationItemComponent, this.#tripListComponent.element);
  }

  init () {
    this.#points = [...this.#pointsModel.points];

    render(this.#tripListComponent, this.#tripListContainer);

    for (let i = 0; i < this.#points.length; i++) {
      // render(new DestinationItemView(this.#points[i]), this.#tripListComponent.element);
      // render(new EditPointView(this.#points[i]), this.#tripListComponent.element);

      this.#renderDestination(this.#points[i]);
    }

  }

}

export { AddNewPointView };
