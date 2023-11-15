import "./SavedMovies.css";
import React from "react";
import unloved from "../../images/unsave.svg";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import SearchForm from "../Movies/SearchForm/SearchForm";
import api from "../../utils/MainApi";

function SavedMovies() {
  const [favoredMoves, setFavoredMoves] = React.useState([]);

  api
    .getFavoredMoves()
    .then((res) => setFavoredMoves(res))
    .catch(console.error);

  function handleMovie(movie) {
    api.removeFavoredMoves(movie._id).catch(console.error);
  }

  return (
    <main className="saved">
      <SearchForm />
      <ul className="saved__list">
        {favoredMoves.map((movie) => (
          <MoviesCard
            key={movie._id}
            movie={movie}
            movieId={movie.movieId}
            nameRU={movie.nameRU}
            image={movie.image}
            duration={movie.duration}
            favored={unloved}
            handleMovie={handleMovie}
          />
        ))}
      </ul>
    </main>
  );
}
export default SavedMovies;
