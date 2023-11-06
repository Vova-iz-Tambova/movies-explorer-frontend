import './SearchForm.css';
import React from 'react'

function SearchForm() {
  const [movie, setMovie] = React.useState('')

  function handleMovie(e) { setMovie(e.target.value) }

  function handleSubmit(e) { e.preventDefault() }

  return (
    <section className='search'>
      <form
        name='search'
        onSubmit={handleSubmit}
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
      </form>
      <button className='search__switcher  animation'>
        <div className='search__tumbler'></div>
        Короткометражки
      </button>
      <div className='search__line'></div>
    </section >
  )
};

export default SearchForm;