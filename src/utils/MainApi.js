class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  // Проверка ответа сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res}`);
    }
  }

  getFavoredMoves() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  removeFavoredMoves(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addFavoredMoves(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        movieId: data.id,
        country: data.country,
        description: data.description,
        director: data.director,
        duration: data.duration,
        image: `https://api.nomoreparties.co${data.image.url}`,
        nameEN: data.nameEN,
        nameRU: data.nameRU,
        trailerLink: data.trailerLink,
        year: data.year,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
      }),
    })
    .then(this._checkResponse);
  }

  login({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password })
    })
  }

  register({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    })
  }

  update({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email })
    })
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

}

const api = new Api({
  baseUrl: "https://api.diplom69.nomoredomainsrocks.ru",
  headers: {
    authorization: `Bearer ${localStorage.jwt}`,
    "Content-Type": 'application/json',
    "Accept": "application/json",
  },
});

export default api;
