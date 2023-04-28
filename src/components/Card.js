export default class Card {
  constructor(cardSelectors, data, handleCardClick) {
    this._card = this._getTemplate(cardSelectors.templateSelector, cardSelectors.cardSelector);
    this._cardImage = this._card.querySelector(cardSelectors.imageSelector);
    this._cardTitle = this._card.querySelector(cardSelectors.titleSelector);
    this._data = data;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate(templateSelector, cardSelector) {
    return document.querySelector(templateSelector).content.querySelector(cardSelector).cloneNode(true);
  }

  _setEventListeners() {
    this._card.addEventListener('click', this._handleCardClick);
  }

  getCard() {
    this._cardImage.src = data.images.jpg;
    this._cardImage.alt = data.title;
    this._cardTitle.textContent = data.title;
    this._setEventListeners();
    return this._card;
  }
}