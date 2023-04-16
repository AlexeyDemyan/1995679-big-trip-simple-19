import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';
import { render, replace } from '../framework/render.js';
import { UserAction, UpdateType } from '../const.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #pointListContainer = null;
  #onCloseAllEdits = null;
  #onDataChange = null;

  #pointComponent = null;
  #pointEditComponent = null;

  #point = null;

  #mode = Mode.DEFAULT;

  constructor(pointListContainer, onCloseAllEdits, onDataChange) {
    this.#pointListContainer = pointListContainer;
    this.#onCloseAllEdits = onCloseAllEdits;
    this.#onDataChange = onDataChange;
  }

  init(point) {
    this.#point = point;

    this.#pointComponent = new PointView(
      this.#point,
      this.#handleEditClick
    );

    this.#pointEditComponent = new EditPointView(
      this.#point,
      this.#handleClose,
      this.#handleDelete,
    );

    render(this.#pointComponent, this.#pointListContainer);
  }

  #replacePointToEdit() {
    this.#onCloseAllEdits();
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.EDITING;
  }

  #replaceEditToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceEditToPoint();
    }
  };


  #handleEditClick = () => {
    this.#replacePointToEdit();
  };

  #handleClose = () => {
    this.#replaceEditToPoint();
    this.#onDataChange(UserAction.UPDATE_POINT, UpdateType.PATCH, {...this.#point});
  };

  #handleDelete = () => {
    this.#onDataChange(UserAction.DELETE_POINT, UpdateType.PATCH, {...this.#point});
  }

  resetView() {
    if (this.#mode === Mode.EDITING) {
      this.#replaceEditToPoint();
    }
  }

}
