import TripPointListView from '../view/trip-point-list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import DestinationItemView from '../view/destination-item-view.js';
import { render } from '../render.js';

export default class TripListPresenter {
  tripListComponent = new TripPointListView();

  constructor(tripListContainer, pointsModel) {
    this.tripListContainer = tripListContainer;
    this.pointsModel = pointsModel;
  }

  init () {
    this.points = [...this.pointsModel.getPoints()];

    render(this.tripListComponent, this.tripListContainer);
    render(new EditPointView(this.points[0]), this.tripListComponent.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new DestinationItemView(this.points[i]), this.tripListComponent.getElement());
    }

  }

}

export { AddNewPointView };
