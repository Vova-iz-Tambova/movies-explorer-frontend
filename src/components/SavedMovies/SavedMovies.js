import './SavedMovies.css';
import React from 'react';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import SearchForm from '../Movies/SearchForm/SearchForm';
import getAllMovies from '../../utils/MoviesApi';

function SavedMovies() {
  const [mainMovies, setMainMovies] = React.useState([]);

  getAllMovies()
    .then((res) => {
      setMainMovies(res);
    })
    .catch(console.error);

  return (
    <main className='saved'>
      <SearchForm />
      <ul className='saved__list'>
        {mainMovies.map((movie) => (
          <MoviesCard
            key={movie.id}
            nameRU={movie.nameRU}
            image={movie.image}
            duration={movie.duration}
            savedMovies={true}
          />
        ))}
      </ul>
    </main>
  )
}
export default SavedMovies;