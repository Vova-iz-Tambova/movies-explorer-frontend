import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import getAllMovies from '../../../utils/MoviesApi';

function MoviesCardList(props) {
  const [mainMovies, setMainMovies] = React.useState([]);


  getAllMovies().then((res) => { setMainMovies(res); }).catch(console.error);



  return (
    <ul className='list'>
      {mainMovies.slice(0, props.quantity).map((movie) => (
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