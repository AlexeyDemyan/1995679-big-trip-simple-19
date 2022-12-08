import TripPointListView from '../view/trip-point-list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import DestinationItemView from '../view/destination-item-view.js';
import { render } from '../render.js';

export default class TripListPresenter {
  tripListComponent = new TripPointListView();

  constructor({tripListContainer}) {
    this.tripListContainer = tripListContainer;
  }

  init (amountOfListItems) {
    render(this.tripListComponent, this.tripListContainer);
    render(new EditPointView(), this.tripListComponent.getElement());

    for (let i = 0; i < amountOfListItems; i++) {
      render(new DestinationItemView(), this.tripListComponent.getElement());
    }

  }

}

export { AddNewPointView };
