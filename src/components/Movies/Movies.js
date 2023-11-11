import './Movies.css';
import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';


function Movies() {
  const [quantity, setQuantity] = React.useState(12);

  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList quantity={quantity} />
      <div className='movies__pagination'>
        <button type='button' onClick={() => setQuantity(quantity + 3)}
          className='movies__more  animation'>Ещё</button>
      </div>
      {/* <Preloader /> */}
    </main>
  )
}
export default Movies;