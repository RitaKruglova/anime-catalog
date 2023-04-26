export default class Validator {
  constructor(form, inputSelector, inputErrorClass) {
    this._form = form;
    this._input = this._form.querySelector(inputSelector);
    this._error = this._input.nextElementSibling;
    this._inputErrorClass = inputErrorClass;
  }

  enableValidation() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    })
    this._setEventListeners();
  }

  _checkValidity() {
    if (this._input.validity.valid) {
      this._hideError();
    } else {
      this._showError();
    }
  }

  _showError() {
    this._input.classList.add(this._inputErrorClass);
    this._error.textContent = this._input.validationMessage;
  }

  _hideError() {
    this._input.classList.remove(this._inputErrorClass);
    this._error.textContent = '';
  }

  _setEventListeners() {
    this._input.addEventListener('input', () => {
      this._checkValidity();
    })
  }
}