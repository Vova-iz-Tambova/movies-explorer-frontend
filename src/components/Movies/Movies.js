import './Movies.css';
import React, { useState } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import getBeatFilmMovies from '../../utils/MoviesApi';
import Preloader from './Preloader/Preloader';
import { DURATION_SHORTS } from '../../utils/constant'

function Movies({ savedMovies, favoredMovie, onDeleteMovie }) {
  const [shortFilms, setShortFilms] = useState(false);
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [searchMessage, setSearchMessage] = useState('Воспользуйтесь новым поиском');

  function getAllMovies(movieName, shortFilms) {
    setSearchMessage('Ничего не найдено');
    setIsLoading(true);
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    if (!allMovies) {
      return getBeatFilmMovies()
        .then((movies) => {
          localStorage.setItem('allMovies', JSON.stringify(movies));
          filterMovies(movieName, shortFilms);
        }).catch(() => {
          setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        }).finally(() => {
          setMessage('');
        })
    }
    else {
      filterMovies(movieName, shortFilms);
    }
  };

  function filterSearchMovies(movies, movieName) {
    let filteredMovies = [...movies]
    filteredMovies = filteredMovies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()) ||
      item.nameEN.toLowerCase().includes(movieName.toLowerCase()));
    return (filteredMovies);
  };

  function filterMoviesDuration(movies) {
    return movies.filter((item) => {
      return item.duration <= DURATION_SHORTS;
    })
  };

  const filterMovies = (movieName, shortFilms) => {
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    let filteredMovies = filterSearchMovies(allMovies, movieName);
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    filterDuration(shortFilms);
  };

  function filterDuration(shortFilms) {
    const filteredMovies = JSON.parse(localStorage.getItem('filteredMovies')) || [];
    const resultMovies = shortFilms
      ? filterMoviesDuration(filteredMovies)
      : filteredMovies;
    setMovies(resultMovies)
    setIsLoading(false);
  };

  return (
    <main className="movies">
      <SearchForm
        onSearch={getAllMovies}
        filterCheckbox={filterDuration}
        onError={message}
        shortFilms={shortFilms}
        setShortFilms={setShortFilms}
        movieName={movieName}
        setMovieName={setMovieName}
      />
      {isLoading
        ? <Preloader />
        : <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          onLikeMovie={favoredMovie}
          onDeleteMovie={onDeleteMovie}
          searchMessage={searchMessage}
        />
      }
    </main>
  );
};

export default Movies;