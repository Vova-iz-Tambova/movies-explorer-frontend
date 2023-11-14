import './SearchForm.css';
import React from 'react'

function SearchForm(props) {
  const [film, setFilm] = React.useState('я');

  function handleMovie(e) { setFilm(e.target.value) }

  function handleSubmit(e) {
    e.preventDefault()
    props.setSearch(film);
    props.setQuantity(2);
  }

  function handleChecked() {
    props.setIsShorts(!props.isShorts);
  }

  return (
    <form name='search'
      onSubmit={handleSubmit}
      className='search'>
      <div
        className='search__form'>
        <input
          name='movie'
          type='text'
          value={film}
          onChange={handleMovie}
          placeholder='Фильм'
          className='search__input' />
        <button
          type='submit'
          className='search__button  animation'>
        </button>
      </div>
      <div className='search__switcher'>
        <button
          type='checkbox'
          onClick={handleChecked}
          className={`search__tumbler  animation  ${props.isShorts && 'search__tumbler_checked'}`}>
        </button>
        <label>Короткометражки</label>
      </div>
    </form >
  )
};

export default SearchForm;