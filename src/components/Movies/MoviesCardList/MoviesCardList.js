import './MoviesCardList.css';
import React from 'react';
import unliked from '../../../images/save4d.svg';
import liked from '../../../images/save4.svg';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

  function handledCard(e) {
    e.target.favored = {liked};
  }

  return (
    <ul className='list'>
      {props.movies.map((movie) => (
        <MoviesCard
          key={movie.id}
          nameRU={movie.nameRU}
          image={movie.image}
          duration={movie.duration}
          favored={(Math.random() > 0.5 ? liked : unliked)}
          // favored={unliked}
          // handledCard={handledCard}
        />
      ))}
    </ul>
  )
};

export default MoviesCardList;
