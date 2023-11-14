import './SearchForm.css';
import React from 'react'

function SearchForm(props) {
  const [movie, setMovie] = React.useState('f');
  const [isChecked, setIsChecked] = React.useState(false);

  function handleMovie(e) { setMovie(e.target.value) }

  function handleSubmit(e) {
    e.preventDefault()
    // props.setMovies([]);
    props.setSearchMovies([]);
    props.setSearch(movie);
  }

  function handleChecked() {
    setIsChecked(!isChecked);
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
          value={movie}
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
          checked={isChecked}
          onClick={handleChecked}
          className={`search__tumbler  animation ${isChecked ? 'search__tumbler_checked' : ''}`}>
        </button>
        <label>Короткометражки</label>
      </div>
    </form >
  )
};

export default SearchForm;