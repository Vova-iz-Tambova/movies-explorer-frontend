import './SavedMovies.css';
import React, { useEffect, useState } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies, onDeleteMovie }) {
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('savedMovies')));

  function filterSearchMovies(movies, movieName) {
    let filteredMovies = [...movies]
    filteredMovies = filteredMovies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()) ||
      item.nameEN.toLowerCase().includes(movieName.toLowerCase()));
    return (filteredMovies);
  }

  function filterMoviesDuration(movies) {
    return movies.filter((item) => {
      return item.duration <= 40
    })
  }

  function handleSearchMovies(movieName, shortFilms) {
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
  }

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    setMovies(JSON.parse(localStorage.getItem('savedMovies')));
  }, [savedMovies]);

  return (
    <main className="saved">
      <SearchForm
        onSearch={handleSearchMovies}
        filterCheckbox={filter}
      />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
}

export default SavedMovies;