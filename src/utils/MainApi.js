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

  removeFavoredMoves(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addFavoredMoves(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image:
          "https://ic.pics.livejournal.com/kenichi_kitsune/11017263/438956/438956_original.jpg",
        trailerLink: "https://youtu.be/ALw51WQoI6s",
        thumbnail:
          "https://www.aroged.com/wp-content/uploads/2023/05/The-sequel-to-this-cult-film-in-computer-generated-images-120x86.jpg",
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://api.diplom69.nomoredomainsrocks.ru",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU0MDFjMzUyYzE3YjI3NDU5MjA2OGEiLCJpYXQiOjE3MDAwMDcyNTgsImV4cCI6MTcwMDYxMjA1OH0.z4H_6-K-PzbMylQooQOexDeD-XoV_Xp5glQczMnfeQw",
    "Content-Type": "application/json",
    // 'Authorization': `Bearer ${localStorage.jwt}`,
  },
});

export default api;
