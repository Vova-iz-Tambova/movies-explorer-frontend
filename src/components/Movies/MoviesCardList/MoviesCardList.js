import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

  return (
    <ul className='list'>
      {props.movies.map((movie) => (
        <MoviesCard
          key={movie.id}
          nameRU={movie.nameRU}
          image={movie.image}
          duration={movie.duration}
          savedMovies={true}
        />
      ))}
    </ul>
  )
};

export default MoviesCardList;
