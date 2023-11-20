import './SearchForm.css';
import React from 'react'

function SearchForm({ input, search, setSearch, handleSearch, isShorts, handleChecked, handleSubmit }) {
  const [inputError, setInputError] = React.useState('');

  return (
    <form name='search' noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (!input) {
          setInputError('Нужно ввести ключевое слово')
        } else {
          setInputError('');
          handleSubmit(input);
        }
      }}
      className='search'>
      <div
        className='search__form'>
        <input required
          name='movie'
          type='text'
          minLength="1"
          value={input}
          onChange={handleSearch}
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
          // className={`search__tumbler  animation`}>
          className={`search__tumbler  animation  ${isShorts && 'search__tumbler_checked'}`}>
        </button>
        <label>Короткометражки</label>
      </div>
    </form >
  )
};

export default SearchForm;