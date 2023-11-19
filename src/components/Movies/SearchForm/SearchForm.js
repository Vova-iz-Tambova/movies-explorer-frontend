import './SearchForm.css';
import React from 'react'

function SearchForm(props) {
  const [input, setInput] = React.useState('');
  const [inputError, setInputError] = React.useState('');

  function handleMovie(e) {
    props.setFilm(e.target.value);
    localStorage.setItem("film", JSON.stringify(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // props.newSearch();
    if ((JSON.parse(localStorage.getItem("input")) === "")
    || !JSON.parse(localStorage.getItem("input"))
  || (!input)) {
      setInputError('Нужно ввести ключевое слово')
    } else { setInputError('') }
}

function handleChecked() {
  // props.setIsShorts(!props.isShorts);
  // localStorage.setItem("isShort", JSON.stringify(!props.isShorts));
}

function handleInput(e) {
  setInput(e.target.value);
  localStorage.setItem("input", JSON.stringify(e.target.value));
}

return (
  <form name='search' noValidate
    onSubmit={handleSubmit}
    className='search'>
    <div
      className='search__form'>
      <input required
        name='movie'
        type='text'
        // minLength="1"
        value={input}
        onChange={handleInput}
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
        onClick={handleChecked}
        className={`search__tumbler  animation  ${props.isShorts && 'search__tumbler_checked'}`}>
      </button>
      <label>Короткометражки</label>
    </div>
  </form >
)
};

export default SearchForm;