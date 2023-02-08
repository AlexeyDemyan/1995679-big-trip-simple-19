import AbstractView from '../framework/view/abstract-view.js';
import capitalizeFirstLetter from '../utils.js';

const createEventTypeTemplate = (eventType) =>
  `<div class="event__type-item">
  <input id="event-type-${eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType}">
  <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-1">${capitalizeFirstLetter(eventType)}</label>
</div>`;

export default class EventType extends AbstractView {
  #eventType = null;

  constructor(eventType) {
    super();
    this.#eventType = eventType;
  }

  get template () {
    return createEventTypeTemplate(this.#eventType);
  }
}
