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
    // .then(this._checkResponse);
  }

  register({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    })
    // .then(this._checkResponse);
  }

  update({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email })
    })
    .then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

  chekToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    // .then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://api.diplom69.nomoredomainsrocks.ru",
  headers: {
    Authorization: `Bearer ${localStorage.jwt}`,
    "Content-Type": 'application/json',
    "Accept": "application/json",
  },
});

export default api;

// const apiOptions = {
// 	url: 'https://api.diplom69.nomoredomainsrocks.ru',
// }

// class Api {
// 	constructor(config) {
// 		this._url = config.url;
// 		this._headers = config.headers;
// 	}

// 	_handleResponse(res) {
// 		if (res.ok) {
// 			return res.json();
// 		} else {
// 			return (res.json())
// 				.then((err) => {
// 					const error = new Error(err.message);
// 					error.status = res.status;
// 					throw error;
// 				})
// 		}
// 	}

// 	_request(url, options) {
// 		return fetch(url, options).then(this._handleResponse)
// 	}

// 	// Получение данных о пользователе с сервера
// 	getUserData() {
// 		return this._request(`${this._url}/users/me`, {
// 			method: 'GET',
// 			headers: {
// 				'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
// 				'Content-Type': 'application/json'
// 			}
// 		})
// 	}

// 	// Отправка полученных данных о пользователе на сервер
// 	sendUserData({ name, email }) {
// 		return this._request(`${this._url}/users/me`, {
// 			method: 'PATCH',
// 			headers: {
// 				'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({
// 				name: name,
// 				email: email
// 			})
// 		})
// 	}

// 	// Получить сохраненные пользователем фильмы
// 	getSavedMovies() {
// 		return this._request(`${this._url}/movies`, {
// 			method: 'GET',
// 			headers: {
// 				'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
// 				'Content-Type': 'application/json'
// 			}
// 		})
// 	}

// 	// Добавить фильм в сохраненные
// 	addMovie(movie) {
// 		return this._request(`${this._url}/movies`, {
// 			method: 'POST',
// 			headers: {
// 				'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify(movie)
// 		})
// 	}

// 	// Удалить фильм из сохраненных
// 	deleteMovie(movieId) {
// 		return this._request(`${this._url}/movies/${movieId}`, {
// 			method: 'DELETE',
// 			headers: {
// 				'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
// 				'Content-Type': 'application/json'
// 			},
// 		})
// 	}
// }

// export const api = new Api(apiOptions);