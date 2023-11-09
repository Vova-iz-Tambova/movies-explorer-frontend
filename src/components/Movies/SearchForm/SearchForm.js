import './SearchForm.css';
import React from 'react'

function SearchForm() {
  const [movie, setMovie] = React.useState('')

  function handleMovie(e) { setMovie(e.target.value) }

  function handleSubmit(e) { e.preventDefault() }

  return (
    <form name='search'
      onSubmit={handleSubmit}
      className='search'>
      <div
        className='search__form'>
        <input required
          name='movie'
          type='text'
          value={movie}
          onChange={handleMovie}
          placeholder='Фильм'
          className='search__input' />
        <button
          type='submit'
          className='search__button  animation'>
        </button>
      </div>
      <button type='button' className='search__switcher  animation'>
        <div className='search__tumbler'></div>
        Короткометражки
      </button>
    </form >
  )
};

export default SearchForm;