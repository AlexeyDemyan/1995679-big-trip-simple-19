import { createElement } from '../render.js';

const createTripPointListTemplate = () => '<ul class="trip-events__list"></ul>';

export default class TripPointListView {
  #element = null;

  get template () {
    return createTripPointListTemplate();
  }

  get element () {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement () {
    this.#element = null;
  }
}
