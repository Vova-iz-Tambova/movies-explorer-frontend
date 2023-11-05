import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <input className='search__input' placeholder='Фильм'></input>
        <button className='search__button  animation'></button>
      </form>
      <button className='search__switcher  animation'>
        <div className='search__tumbler'></div>
        Короткометражки
      </button>
      <div className='search__line'></div>
    </section>
  )
};

export default SearchForm;