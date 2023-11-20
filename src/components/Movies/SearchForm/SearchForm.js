import './SearchForm.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSearch, filterCheckbox}) {
  const [inputError, setInputError] = React.useState('');
  const [shortFilms, setShortFilms] = useState(false);
  const [movieName, setMovieName] = useState('');

  const { pathname } = useLocation();

  const handleMovieChange = (e) => {
    setMovieName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movieName) {
      setInputError('Нужно ввести ключевое слово');
      return;
    }
    setInputError('');
    if (pathname === '/movies') {
      localStorage.setItem('movieName', movieName);
    }
    onSearch(movieName, shortFilms)
  };

  const handleShortFilmsChange = () => {
    setShortFilms(!shortFilms);
    if (!movieName) {
      return;
    }
    filterCheckbox(!shortFilms);
    if (pathname === '/movies') {
      localStorage.setItem('shortFilms', !shortFilms);
    }
  };

  useEffect(() => {
    if (pathname === '/movies') {
      const filterMovieName = localStorage.getItem('movieName');
      const filterShortFilms = JSON.parse(localStorage.getItem('shortFilms'));
      setMovieName(filterMovieName);
      setShortFilms(filterShortFilms);
      if (filterMovieName || filterShortFilms === true) {
        onSearch(filterMovieName, filterShortFilms);
      }
    }
  }, []);

  return (
    <form name='search' noValidate
      onSubmit={handleSubmit}
      className='search'>
      <div
        className='search__form'>
        <input required
          name='movie'
          type='text'
          minLength="1"
          value={movieName || ''}
          onChange={handleMovieChange}
          autoComplete='off'
          placeholder='Фильм'
          className='search__input' />
        <button
          type='submit'
          className='search__button  animation'>
        </button>
      </div>
      <label className='search__error'>{inputError}</label>
      <div className='search__switcher'>
        <button
          type='checkbox'
          onClick={handleShortFilmsChange}
          // className={`search__tumbler  animation`}>
          className={`search__tumbler  animation  ${shortFilms && 'search__tumbler_checked'}`}>
        </button>
        <label>Короткометражки</label>
      </div>
    </form >
  )
};


export default SearchForm;