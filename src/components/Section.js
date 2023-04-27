export default class Section {
  constructor(container) {
    this._container = container;
  }

  addItem(item) {
    this._container.append(item)
  }

  renderItems(itemsArray) {
    itemsArray.forEach(item => {
      this.addItem(item);
    })
  }
}