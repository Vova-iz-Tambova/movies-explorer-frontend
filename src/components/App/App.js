import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute';
import SavedMovies from '../SavedMovies/SavedMovies';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedIn")) || false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      api.getUserInfo().then((res) => {
        setCurrentUser(res);
      }).catch(console.error);
      api.getFavoredMoves().then((savedMovies) => {
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        setSavedMovies(savedMovies);
      }).catch(console.error)
    }
  }, [loggedIn, navigate])

  useEffect(() => {
    loggedIn &&
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies, loggedIn]);

  function handleMovieLike(movie) {
    api.addFavoredMoves(movie).then((newMovie) => {
      setSavedMovies([newMovie, ...savedMovies]);
    }).catch(console.error);
  };

  function handleMovieDelete(movie) {
    api.removeFavoredMoves(movie._id).then(() => {
      setSavedMovies((savedMovies) => savedMovies.filter((item) => item.movieId !== movie.movieId));
    }).catch(console.error);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route path='/' element={
            <>
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          } />
          <Route path='/movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <Movies
                savedMovies={savedMovies}
                favoredMovie={handleMovieLike}
                onDeleteMovie={handleMovieDelete}
              />
              <Footer />
            </ProtectedRoute>
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <SavedMovies
                savedMovies={savedMovies}
                onDeleteMovie={handleMovieDelete}
              />
              <Footer />
            </ProtectedRoute>
          } />
          <Route path='/profile' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <Profile
                setLoggedIn={setLoggedIn}
                setCurrentUser={setCurrentUser}
              />
            </ProtectedRoute>
          } />
          <Route path='/signin' element={
            <Login
              setLoggedIn={setLoggedIn}
              setCurrentUser={setCurrentUser}
            />
          } />
          <Route path='/signup' element={

            <Register
              setLoggedIn={setLoggedIn}
              setCurrentUser={setCurrentUser}
            />
          } />
          <Route path='*' element={<main><PageNotFound /></main>} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
