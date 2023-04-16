import PointsListView from "../view/point-list-view.js";
import AddNewPointView from "../view/add-new-point-view.js";
import NoPointsView from "../view/no-points-view.js";
import ListSortView from "../view/list-sort-view.js";
import { render, remove } from "../framework/render.js";
import PointPresenter from "./point-presenter.js";
import { SortType, UpdateType, UserAction } from "../const.js";
import { sortByPrice } from "../utils.js";

export default class PointsListPresenter {
  #pointListContainer = null;
  #pointsModel = null;

  #pointPresenters = new Map();

  #points = [];

  #pointsListComponent = new PointsListView();
  #noPointsMessageComponent = new NoPointsView();
  #listSortComponent = new ListSortView();

  #isLoading = true;

  constructor(pointListContainer, pointsModel) {
    this.#pointListContainer = pointListContainer;
    this.#pointsModel = pointsModel;
    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  #closeAllEdits = () => {
    this.#pointPresenters.forEach((presenter) => {
      presenter.resetView();
    });
  };

  #handleViewAction = (actionType, updateType, update) => {
    console.log(actionType, updateType, update);
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, update) => {
    switch (updateType) {
      case UpdateType.PATCH:
        console.log(updateType, update);
        this.#pointPresenters.get(update.id).init(update);
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#noPointsMessageComponent);
        this.#renderBoard();
        break;
    }
  };

  #renderPoint(point) {
    const pointPresenter = new PointPresenter(
      this.#pointsListComponent.element,
      this.#closeAllEdits,
      this.#handleViewAction
    );
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id ,pointPresenter);
  }

  #renderBoard() {
    console.log('board render happening')
    console.log(this.#points);
    this.#points = [...this.#pointsModel.points];
    if (this.#isLoading) {
      render(this.#noPointsMessageComponent, this.#pointListContainer);
    } else {
      render(this.#listSortComponent, this.#pointListContainer);
      render(this.#pointsListComponent, this.#pointListContainer);
      for (const point of this.#points) {
        this.#renderPoint(point);
      }
    }
  }

  get points() {
    // switch (this.#currentSortType) {
    //   case SortType.PRICE:
    //     console.log("sorting is being done...");
    //     return [...this.#pointsModel.points].sort(sortByPrice);
    // }

    return this.#pointsModel.points;
  }

  init() {
    this.#points = [...this.#pointsModel.points];

    this.#renderBoard();
  }
}

export { AddNewPointView };
