import './SavedMovies.css';
import React, { useEffect, useState } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import {DURATION_SHORTS} from '../../utils/constant'

function SavedMovies({ savedMovies, onDeleteMovie }) {
  const [shortFilms, setShortFilms] = useState(false);
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('savedMovies')));
  const [searchMessage, setSearchMessage] = useState('Список пуст');

  function filterSearchMovies(movies, movieName) {
    let filteredMovies = [...movies]
    filteredMovies = filteredMovies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()) ||
      item.nameEN.toLowerCase().includes(movieName.toLowerCase()));
    return (filteredMovies);
  }

  function filterMoviesDuration(movies) {
    return movies.filter((item) => {
      return item.duration <= DURATION_SHORTS
    })
  }

  function handleSearchMovies(movieName, shortFilms) {
    setSearchMessage('Ничего не найдено');
    const filteredMovies = filterSearchMovies(savedMovies, movieName);
    localStorage.setItem('filteredSavedMovies', JSON.stringify(filteredMovies));
    setMovies(filteredMovies);
    filter(shortFilms);
  }

  function filter(shortFilms) {
    const filteredMovies = JSON.parse(localStorage.getItem('filteredSavedMovies')) || [];
    const resultMovies = shortFilms
      ? filterMoviesDuration(movies)
      : filteredMovies;
    setMovies(resultMovies);
    localStorage.setItem('resultMovies', JSON.stringify(resultMovies));
  }

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    if (movieName) {
      const filteredSaveMovies = filterSearchMovies(savedMovies, movieName);
      setMovies(filteredSaveMovies);
      if (shortFilms) {
        const resultMovies = shortFilms
          ? filterMoviesDuration(filteredSaveMovies)
          : filteredSaveMovies;
        setMovies(resultMovies);
      };
    }
    else {
      setMovies(JSON.parse(localStorage.getItem('savedMovies')));
    }
  }, [savedMovies, onDeleteMovie, setShortFilms]);

  return (
    <main className="saved">
      <SearchForm
        onSearch={handleSearchMovies}
        filterCheckbox={filter}
        shortFilms={shortFilms}
        setShortFilms={setShortFilms}
        movieName={movieName}
        setMovieName={setMovieName}
      />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        onDeleteMovie={onDeleteMovie}
        searchMessage={searchMessage}
      />
    </main>
  );
}

export default SavedMovies;