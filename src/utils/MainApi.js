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
      return Promise.reject(`Ошибка: ${res.status}`);
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
        // updated_at
        year: data.year,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
      }),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://api.diplom69.nomoredomainsrocks.ru",
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU0OTgwMTEwODkzNmFkYzQ1Y2YyYzUiLCJpYXQiOjE3MDAxMjczNTEsImV4cCI6MTcwMDczMjE1MX0.7X6y2y_MMk6FeIwLzMY-8Uo43BMdcA7VBynJ_hp_QBU",
    // 'Authorization': `Bearer ${localStorage.jwt}`,
  },
});

export default api;
