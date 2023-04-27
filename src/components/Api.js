export default class Api {
  constructor(baseUrl, moreInfoUrl) {
    this._baseUrl = baseUrl;
    this._moreInfoUrl = moreInfoUrl;
  }

  _fetch(url) {
    return fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  getAnime({ search, genre, year, type }) {
    if (search) {
      this._baseUrl += `&letter=${search}`;
    }

    if (genre) {
      this._baseUrl += `&genres=${genre}`;
    }

    if (year) {
      this._baseUrl += `&start_date=${year}-01-01&end_date${year}-12-31`;
    }

    if (type) {
      this._baseUrl += `&type=${type}`
    }

    return this._fetch(this._baseUrl);
  }

  getMoreInfo() {
    return this._fetch(this._moreInfoUrl);
  }
}