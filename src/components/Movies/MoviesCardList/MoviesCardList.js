import './MoviesCardList.css';
import React from 'react';
import unliked from '../../../images/save4d.svg';
import liked from '../../../images/save4.svg';
import MoviesCard from '../MoviesCard/MoviesCard';
import api from "../../../utils/MainApi";

function MoviesCardList(props) {

  function handleMovie(movie) {
    api.addFavoredMoves(movie).catch(console.error);
  }

  return (
    <ul className='list'>
      {props.movies.map((movie) => (
        <MoviesCard
          key={movie.id}
          movie={movie}
          movieId={movie.movieId}
          nameRU={movie.nameRU}
          image={`https://api.nomoreparties.co${movie.image.url}`}
          trailerLink={movie.trailerLink}
          duration={movie.duration}
          favored={unliked}
          handleMovie={handleMovie}
        />
      ))}
    </ul>
  )
};

export default MoviesCardList;
